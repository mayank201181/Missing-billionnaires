"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat, fmtPct } from "./ui";
import { gaussian, mulberry32 } from "./rng";

const YEARS = 90;
const PATHS = 300;

export function EndowmentSpend() {
  const [spendPct, setSpendPct] = useState(3);
  const [muPct, setMuPct] = useState(4.5);
  const [volPct, setVolPct] = useState(11);
  const [heirs, setHeirs] = useState(2);
  const [seed, setSeed] = useState(1);

  const mu = muPct / 100;
  const sigma = volPct / 100;
  const geo = mu - (sigma * sigma) / 2;

  const sim = useMemo(() => {
    const rand = mulberry32(seed * 31013 + Math.round(spendPct * 100));
    const wealthAt: number[][] = Array.from({ length: YEARS + 1 }, () => []);
    let preserved = 0;
    for (let p = 0; p < PATHS; p++) {
      let w = 1;
      const history: number[] = [1, 1, 1]; // for 3-year-average smoothing
      wealthAt[0].push(1);
      for (let t = 1; t <= YEARS; t++) {
        const avg = (history[history.length - 1] + history[history.length - 2] + history[history.length - 3]) / 3;
        const spend = Math.min(w, avg * (spendPct / 100));
        w -= spend;
        const r = mu + sigma * gaussian(rand);
        w *= Math.max(0.1, 1 + r);
        history.push(w);
        wealthAt[t].push(w);
      }
      if (w >= 1) preserved++;
    }
    const pct = (arr: number[], q: number) => {
      const s = [...arr].sort((a, b) => a - b);
      return s[Math.min(s.length - 1, Math.floor(q * s.length))];
    };
    const p10: { x: number; y: number }[] = [];
    const p50: { x: number; y: number }[] = [];
    const p90: { x: number; y: number }[] = [];
    for (let t = 0; t <= YEARS; t++) {
      p10.push({ x: t, y: Math.max(0.001, pct(wealthAt[t], 0.1)) });
      p50.push({ x: t, y: Math.max(0.001, pct(wealthAt[t], 0.5)) });
      p90.push({ x: t, y: Math.max(0.001, pct(wealthAt[t], 0.9)) });
    }
    return { p10, p50, p90, preservedPct: preserved / PATHS, medianFinal: pct(wealthAt[YEARS], 0.5) };
  }, [spendPct, mu, sigma, seed]);

  const branches = Math.pow(heirs, 3);
  const perHeir = sim.medianFinal / branches;

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        <Slider
          label="Spending rate (% of 3-yr avg wealth)"
          value={spendPct}
          onChange={setSpendPct}
          min={1}
          max={6}
          step={0.25}
          format={(v) => `${v.toFixed(2)}%`}
        />
        <Slider
          label="Portfolio expected real return (arith.)"
          value={muPct}
          onChange={setMuPct}
          min={2}
          max={7}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="Portfolio volatility"
          value={volPct}
          onChange={setVolPct}
          min={5}
          max={20}
          step={1}
          format={(v) => `${v}%`}
        />
        <Slider
          label="Children per generation"
          value={heirs}
          onChange={setHeirs}
          min={1}
          max={4}
          step={1}
        />
      </div>

      <button
        onClick={() => setSeed((s) => s + 1)}
        className="px-4 py-2 rounded-lg border border-line hover:border-accent text-sm font-medium"
      >
        🎲 Re-run {PATHS} centuries
      </button>

      <LineChart
        series={[
          { points: sim.p90, color: "var(--gold)", label: "Lucky century (90th pct)", dashed: true },
          { points: sim.p50, color: "var(--accent)", label: "Median" },
          { points: sim.p10, color: "var(--danger)", label: "Unlucky century (10th pct)", dashed: true },
        ]}
        logY
        yFormat={(v) => `${v.toFixed(1)}x`}
        xFormat={(v) => `${v.toFixed(0)}y`}
        xLabel="Real family wealth over 90 years (3 generations), 1 = today"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat
          label="Real geometric return"
          value={fmtPct(geo)}
          tone={geo > spendPct / 100 ? "good" : "bad"}
        />
        <Stat
          label="Sustainable = geo − buffer"
          value={`spend ≤ ~${Math.max(0, geo * 100 - 0.5).toFixed(1)}%`}
          tone="gold"
        />
        <Stat
          label="Real wealth preserved after 90y"
          value={`${(sim.preservedPct * 100).toFixed(0)}% of runs`}
          tone={sim.preservedPct > 0.5 ? "good" : "bad"}
          big
        />
        <Stat
          label={`Median per heir (${heirs}/gen × 3 gens)`}
          value={`${perHeir >= 0.01 ? perHeir.toFixed(2) : perHeir.toFixed(3)}x`}
          tone={perHeir >= 1 ? "good" : perHeir >= 0.2 ? "gold" : "bad"}
        />
      </div>

      <Caption>
        The endowment rule in one picture: spend less than the portfolio’s real{" "}
        <em>geometric</em> return (note it’s the arithmetic return minus the σ²/2 drag)
        and the family compounds forever; spend more and the median path bends down —
        slowly, invisibly, then irreversibly. Now add the quietest headwind of all:
        estate division. Two children per generation divides the pot 8× over a century —
        which is why the 1900 millionaires needed to <em>grow</em> wealth, not just
        preserve it, and why fees and taxes measured against your <em>spending</em>{" "}
        (not your assets) are the family’s biggest controllable number.
      </Caption>
    </div>
  );
}
