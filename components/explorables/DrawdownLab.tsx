"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat, fmtPct } from "./ui";
import { gaussian, mulberry32 } from "./rng";

const YEARS = 15;
const STEPS_PER_YEAR = 12;
const PATHS = 300;
const SHOW = 5;

export function DrawdownLab() {
  const [leverage, setLeverage] = useState(1);
  const [muPct, setMuPct] = useState(6);
  const [volPct, setVolPct] = useState(15);
  const [seed, setSeed] = useState(1);

  const mu = muPct / 100;
  const sigma = volPct / 100;

  const sim = useMemo(() => {
    const rand = mulberry32(seed * 15013 + Math.round(leverage * 100));
    const dt = 1 / STEPS_PER_YEAR;
    const shown: { x: number; y: number }[][] = [];
    let ruined = 0;
    const finals: number[] = [];
    const maxDDs: number[] = [];
    for (let p = 0; p < PATHS; p++) {
      let equity = 1;
      let peak = 1;
      let maxDD = 0;
      let dead = false;
      const pts: { x: number; y: number }[] = [{ x: 0, y: 1 }];
      for (let s = 1; s <= YEARS * STEPS_PER_YEAR; s++) {
        if (!dead) {
          const marketR = mu * dt + sigma * Math.sqrt(dt) * gaussian(rand);
          // levered equity return; borrowing at ~2%
          equity *= 1 + leverage * marketR - (leverage - 1) * 0.02 * dt;
          if (equity <= 0.05) {
            // margin call / wipeout: forced out, losses locked in
            equity = 0.05;
            dead = true;
          }
          peak = Math.max(peak, equity);
          maxDD = Math.max(maxDD, 1 - equity / peak);
        }
        if (p < SHOW && s % 3 === 0) pts.push({ x: s * dt, y: equity });
      }
      if (dead) ruined++;
      finals.push(equity);
      maxDDs.push(maxDD);
      if (p < SHOW) shown.push(pts);
    }
    finals.sort((a, b) => a - b);
    maxDDs.sort((a, b) => a - b);
    return {
      shown,
      ruinPct: ruined / PATHS,
      medianFinal: finals[Math.floor(PATHS / 2)],
      medianDD: maxDDs[Math.floor(PATHS / 2)],
    };
  }, [leverage, mu, sigma, seed]);

  const g = leverage * mu - 0.5 * leverage * leverage * sigma * sigma;
  const lStar = sigma > 0 ? mu / (sigma * sigma) : 0;

  const colors = ["var(--accent)", "var(--gold)", "#7c8db0", "#b07c9c", "#7cb08d"];

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        <Slider
          label="Leverage"
          value={leverage}
          onChange={setLeverage}
          min={0.5}
          max={4}
          step={0.25}
          format={(v) => `${v.toFixed(2)}x`}
        />
        <Slider
          label="Portfolio expected return"
          value={muPct}
          onChange={setMuPct}
          min={3}
          max={10}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="Portfolio volatility"
          value={volPct}
          onChange={setVolPct}
          min={8}
          max={30}
          step={1}
          format={(v) => `${v}%`}
        />
        <button
          onClick={() => setSeed((s) => s + 1)}
          className="justify-self-start px-4 py-2 rounded-lg border border-line hover:border-accent text-sm font-medium"
        >
          🎲 Re-run {PATHS} histories
        </button>
      </div>

      <LineChart
        series={sim.shown.map((pts, i) => ({
          points: pts,
          color: colors[i % colors.length],
          label: i === 0 ? `${SHOW} sample 15-year paths` : undefined,
        }))}
        logY
        yFormat={(v) => `${v.toFixed(1)}x`}
        xFormat={(v) => `${v.toFixed(0)}y`}
        xLabel="Years (levered equity value, 1 = starting wealth)"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat
          label="Theoretical growth g(L)"
          value={fmtPct(g)}
          tone={g > 0 ? "good" : "bad"}
        />
        <Stat label="Median outcome (15y)" value={`${sim.medianFinal.toFixed(1)}x`} big />
        <Stat
          label="Median worst drawdown"
          value={`−${(sim.medianDD * 100).toFixed(0)}%`}
          tone={sim.medianDD > 0.35 ? "bad" : "default"}
        />
        <Stat
          label="Wiped out / margin-called"
          value={`${(sim.ruinPct * 100).toFixed(0)}%`}
          tone={sim.ruinPct > 0.02 ? "bad" : "good"}
          big
        />
      </div>

      <div className="grid grid-cols-1 gap-3">
        <Stat
          label="Growth-optimal leverage for these inputs (Kelly) — growth returns to zero at twice this"
          value={`${lStar.toFixed(1)}x`}
          tone="gold"
        />
      </div>

      <Caption>
        Recovery arithmetic is merciless: −25% needs +33% back, −50% needs +100%, −90%
        needs +900%. Leverage multiplies the expected return in a straight line but the
        drag with the square — and adds something the formula doesn’t show: paths that
        hit the wipeout line never come back, however right the strategy proved
        afterwards. That’s LTCM in one chart: right on selection, dead on sizing. Ed
        Thorp ran leveraged strategies for twenty years without a losing year because
        the sizing came first.
      </Caption>
    </div>
  );
}
