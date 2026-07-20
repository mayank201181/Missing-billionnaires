"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat } from "./ui";

function growth(f: number, p: number): number {
  if (f >= 1 || f <= -1) return NaN;
  return p * Math.log(1 + f) + (1 - p) * Math.log(1 - f);
}

export function KellyCurve() {
  const [pPct, setPPct] = useState(60);
  const [betPct, setBetPct] = useState(20);

  const p = pPct / 100;
  const f = betPct / 100;
  const fStar = Math.max(0, 2 * p - 1);
  const gStar = growth(fStar, p);
  const gHalf = growth(fStar / 2, p);
  const gYou = growth(f, p);

  const curve = useMemo(() => {
    const pts: { x: number; y: number }[] = [];
    for (let x = 0; x <= 92; x += 1) {
      const g = growth(x / 100, p);
      if (Number.isFinite(g)) pts.push({ x, y: g * 100 });
    }
    return pts;
  }, [p]);

  const pctOfMax = gStar > 0 ? Math.max(0, (gYou / gStar) * 100) : 0;

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <Slider
          label="Win probability (even-money bet)"
          value={pPct}
          onChange={setPPct}
          min={50}
          max={70}
          step={1}
          format={(v) => `${v}%`}
        />
        <Slider
          label="Your bet (% of bankroll)"
          value={betPct}
          onChange={setBetPct}
          min={0}
          max={90}
          step={1}
          format={(v) => `${v}%`}
        />
      </div>

      <LineChart
        series={[{ points: curve, color: "var(--accent)", label: "Long-run growth rate per bet (%)" }]}
        yFormat={(v) => `${v.toFixed(1)}%`}
        xFormat={(v) => `${v.toFixed(0)}%`}
        xLabel="Bet size (% of bankroll)"
        markerX={betPct}
        markerLabel={`you: ${betPct}%`}
        yMin={Math.min(-1, gStar * 100 * -1)}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat label="Full Kelly (2p − 1)" value={`${(fStar * 100).toFixed(0)}%`} tone="gold" />
        <Stat
          label="Growth at full Kelly"
          value={`${(gStar * 100).toFixed(2)}%/bet`}
        />
        <Stat
          label="Growth at half Kelly"
          value={`${(gHalf * 100).toFixed(2)}%/bet (${gStar > 0 ? ((gHalf / gStar) * 100).toFixed(0) : 0}% of max)`}
        />
        <Stat
          label="Your growth"
          value={`${(gYou * 100).toFixed(2)}%/bet`}
          tone={gYou > 0 ? (pctOfMax > 90 ? "good" : "default") : "bad"}
          big
        />
      </div>

      <Caption>
        The Kelly peak is the summit of the growth mountain — and the terrain is not
        symmetric in consequence: half-Kelly still collects ~75% of the maximum growth
        with half the swings, while <em>double</em>-Kelly falls all the way back to zero
        and anything beyond it compounds downhill. That’s why the book treats full Kelly
        as a speed limit, not a target: professionals cruise at a half or a third, which
        is exactly the Merton share of an investor with gamma of 2 or 3.
      </Caption>
    </div>
  );
}
