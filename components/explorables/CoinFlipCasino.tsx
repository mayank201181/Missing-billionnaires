"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat, fmtMoney } from "./ui";
import { mulberry32 } from "./rng";

const P = 0.6;
const START = 25;
const CAP = 250;
const FLIPS = 120;
const PATHS = 400;

/** Expected log growth per flip when betting fraction f of bankroll. */
function growth(f: number): number {
  if (f >= 1) return -Infinity;
  return P * Math.log(1 + f) + (1 - P) * Math.log(1 - f);
}

export function CoinFlipCasino() {
  const [betPct, setBetPct] = useState(20);
  const [seed, setSeed] = useState(1);

  const f = betPct / 100;

  const curve = useMemo(() => {
    const pts: { x: number; y: number }[] = [];
    for (let x = 0; x <= 95; x += 1) {
      pts.push({ x, y: growth(x / 100) * 100 });
    }
    return pts;
  }, []);

  const sim = useMemo(() => {
    const rand = mulberry32(seed * 7919 + Math.round(f * 1000));
    const finals: number[] = [];
    let busted = 0;
    let capped = 0;
    for (let p = 0; p < PATHS; p++) {
      let w = START;
      for (let i = 0; i < FLIPS; i++) {
        const bet = w * f;
        w += rand() < P ? bet : -bet;
        if (w >= CAP) {
          w = CAP;
          break;
        }
        if (w < 0.01) {
          w = 0;
          break;
        }
      }
      if (w >= CAP) capped++;
      if (w < START * 0.04) busted++;
      finals.push(w);
    }
    finals.sort((a, b) => a - b);
    return {
      median: finals[Math.floor(PATHS / 2)],
      capped: capped / PATHS,
      busted: busted / PATHS,
      lost: finals.filter((v) => v < START).length / PATHS,
    };
  }, [f, seed]);

  const g = growth(f);

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4 items-end">
        <Slider
          label="Bet size (% of current bankroll, every flip)"
          value={betPct}
          onChange={setBetPct}
          min={0}
          max={90}
          step={1}
          format={(v) => `${v}%`}
        />
        <button
          onClick={() => setSeed((s) => s + 1)}
          className="justify-self-start sm:justify-self-end px-4 py-2 rounded-lg border border-line hover:border-accent text-sm font-medium"
        >
          🎲 Re-run {PATHS} sessions
        </button>
      </div>

      <LineChart
        series={[{ points: curve, color: "var(--accent)", label: "Expected growth per flip (%)" }]}
        yFormat={(v) => `${v.toFixed(1)}%`}
        xFormat={(v) => `${v.toFixed(0)}%`}
        xLabel="Bet size (% of bankroll)"
        markerX={betPct}
        markerLabel={`you: ${betPct}%`}
        yMin={-5}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat
          label="Expected growth / flip"
          value={`${(g * 100).toFixed(2)}%`}
          tone={g > 0 ? "good" : "bad"}
        />
        <Stat label={`Median result (${FLIPS} flips)`} value={fmtMoney(sim.median)} tone={sim.median >= CAP ? "gold" : sim.median >= START ? "good" : "bad"} />
        <Stat label="Hit the $250 cap" value={`${(sim.capped * 100).toFixed(0)}%`} tone="gold" />
        <Stat label="Went (nearly) bust" value={`${(sim.busted * 100).toFixed(0)}%`} tone={sim.busted > 0.05 ? "bad" : "default"} />
      </div>

      <Caption>
        The coin pays heads 60% of the time — a huge edge — yet the growth curve says
        sizing is everything: the peak is at 20% (the Kelly bet, 2p − 1), growth hits zero
        near 40%, and beyond that a <em>favourable</em> coin becomes a losing game. In the
        real 2016 experiment, a third of finance-trained players lost money on this coin
        and 28% went bust. Try 5%, 20%, 50%, and 80% and watch the four regimes: slow
        grind, optimal compounding, treadmill, ruin.
      </Caption>
    </div>
  );
}
