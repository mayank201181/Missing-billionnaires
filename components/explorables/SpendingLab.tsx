"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat, fmtMoney } from "./ui";
import { gaussian, mulberry32 } from "./rng";

const START = 1_000_000;
const YEARS = 30;
const PATHS = 300;

type Rule = "dollar" | "fraction" | "amortize";

function annuityFactor(n: number, r: number): number {
  if (Math.abs(r) < 1e-9) return n;
  return (1 - Math.pow(1 + r, -n)) / r;
}

export function SpendingLab() {
  const [rule, setRule] = useState<Rule>("amortize");
  const [ratePct, setRatePct] = useState(4);
  const [muPct, setMuPct] = useState(4);
  const [volPct, setVolPct] = useState(12);
  const [seed, setSeed] = useState(1);

  const mu = muPct / 100;
  const sigma = volPct / 100;

  const sim = useMemo(() => {
    const rand = mulberry32(seed * 104729 + Math.round(ratePct * 100) + (rule === "dollar" ? 1 : rule === "fraction" ? 2 : 3));
    const wealthAt: number[][] = Array.from({ length: YEARS + 1 }, () => []);
    let ruined = 0;
    let totalSpendSum = 0;
    const finalSum: number[] = [];
    for (let p = 0; p < PATHS; p++) {
      let w = START;
      let spendTotal = 0;
      let dead = false;
      wealthAt[0].push(w);
      for (let t = 1; t <= YEARS; t++) {
        let spend = 0;
        if (!dead) {
          if (rule === "dollar") spend = START * (ratePct / 100);
          else if (rule === "fraction") spend = w * (ratePct / 100);
          else spend = w / annuityFactor(YEARS - t + 1, mu);
          spend = Math.min(spend, w);
          w -= spend;
          spendTotal += spend;
          const r = mu + sigma * gaussian(rand);
          w *= Math.max(0.05, 1 + r);
          if (w <= 1000) {
            w = 0;
            dead = true;
          }
        }
        wealthAt[t].push(w);
      }
      if (dead) ruined++;
      totalSpendSum += spendTotal;
      finalSum.push(w);
    }
    const pct = (arr: number[], q: number) => {
      const s = [...arr].sort((a, b) => a - b);
      return s[Math.min(s.length - 1, Math.floor(q * s.length))];
    };
    const p10: { x: number; y: number }[] = [];
    const p50: { x: number; y: number }[] = [];
    const p90: { x: number; y: number }[] = [];
    for (let t = 0; t <= YEARS; t++) {
      p10.push({ x: t, y: Math.max(1, pct(wealthAt[t], 0.1)) });
      p50.push({ x: t, y: Math.max(1, pct(wealthAt[t], 0.5)) });
      p90.push({ x: t, y: Math.max(1, pct(wealthAt[t], 0.9)) });
    }
    return {
      p10,
      p50,
      p90,
      ruinPct: ruined / PATHS,
      medianFinal: pct(finalSum, 0.5),
      avgSpend: totalSpendSum / PATHS / YEARS,
    };
  }, [rule, ratePct, mu, sigma, seed]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap gap-2">
        {(
          [
            ["dollar", "Constant real dollars (4%-rule style)"],
            ["fraction", "Constant % of wealth"],
            ["amortize", "Amortize over remaining years (the book's rule)"],
          ] as [Rule, string][]
        ).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setRule(key)}
            className={`text-sm px-3.5 py-2 rounded-full border transition ${
              rule === key
                ? "border-accent bg-accent-soft text-accent font-medium"
                : "border-line text-muted hover:border-accent"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        {rule !== "amortize" ? (
          <Slider
            label={rule === "dollar" ? "Withdrawal (% of initial wealth)" : "Withdrawal (% of current wealth)"}
            value={ratePct}
            onChange={setRatePct}
            min={2}
            max={8}
            step={0.5}
            format={(v) => `${v.toFixed(1)}%`}
          />
        ) : (
          <div className="text-sm text-muted rounded-xl bg-surface-2 px-4 py-3">
            Spends wealth ÷ annuity factor for the years left at the expected return —
            recomputed every year.
          </div>
        )}
        <Slider
          label="Expected real return"
          value={muPct}
          onChange={setMuPct}
          min={0}
          max={7}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="Portfolio volatility"
          value={volPct}
          onChange={setVolPct}
          min={0}
          max={25}
          step={1}
          format={(v) => `${v}%`}
        />
        <button
          onClick={() => setSeed((s) => s + 1)}
          className="justify-self-start px-4 py-2 rounded-lg border border-line hover:border-accent text-sm font-medium"
        >
          🎲 Re-run {PATHS} retirements
        </button>
      </div>

      <LineChart
        series={[
          { points: sim.p90, color: "var(--gold)", label: "Lucky decade (90th pct)", dashed: true },
          { points: sim.p50, color: "var(--accent)", label: "Median" },
          { points: sim.p10, color: "var(--danger)", label: "Unlucky decade (10th pct)", dashed: true },
        ]}
        logY
        yFormat={fmtMoney}
        xFormat={(v) => `${v.toFixed(0)}y`}
        xLabel={`Years into a ${YEARS}-year retirement ($1M start)`}
      />

      <div className="grid grid-cols-3 gap-3">
        <Stat
          label="Ran out of money"
          value={`${(sim.ruinPct * 100).toFixed(0)}%`}
          tone={sim.ruinPct > 0.05 ? "bad" : "good"}
          big
        />
        <Stat label="Average spending / yr" value={fmtMoney(sim.avgSpend)} />
        <Stat label="Median wealth at the end" value={fmtMoney(sim.medianFinal)} tone="gold" />
      </div>

      <Caption>
        Constant-dollar spending is smooth until it isn’t — crank volatility and watch the
        ruin percentage climb as unlucky sequences exhaust the pot. Constant-fraction can
        never ruin you but rides every market swing. The amortization rule adapts each
        year and deliberately spends the money down — little ruin, little waste, at the
        price of some variability. There is no free lunch, only a chosen trade-off — and
        expected utility is how you choose it.
      </Caption>
    </div>
  );
}
