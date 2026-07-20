"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat, fmtPct } from "./ui";

export function DiversificationLab() {
  const [n, setN] = useState(10);
  const [rhoPct, setRhoPct] = useState(30);
  const [volPct, setVolPct] = useState(40);
  const [gamma] = useState(3);

  const sigma = volPct / 100;
  const rho = rhoPct / 100;

  const portVol = (count: number) =>
    sigma * Math.sqrt(rho + (1 - rho) / Math.max(1, count));

  const curve = useMemo(() => {
    const pts: { x: number; y: number }[] = [];
    for (let c = 1; c <= 100; c++) {
      pts.push({ x: c, y: portVol(c) * 100 });
    }
    return pts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sigma, rho]);

  const vNow = portVol(n);
  const floor = sigma * Math.sqrt(rho);
  const erp = 0.04;
  const mertonSingle = erp / (gamma * sigma * sigma);
  const mertonPort = erp / (gamma * vNow * vNow);

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-3 gap-4">
        <Slider label="Number of holdings" value={n} onChange={setN} min={1} max={100} step={1} />
        <Slider
          label="Average correlation between them"
          value={rhoPct}
          onChange={setRhoPct}
          min={0}
          max={100}
          step={5}
          format={(v) => (v / 100).toFixed(2)}
        />
        <Slider
          label="Volatility of each holding"
          value={volPct}
          onChange={setVolPct}
          min={15}
          max={60}
          step={1}
          format={(v) => `${v}%`}
        />
      </div>

      <LineChart
        series={[
          { points: curve, color: "var(--accent)", label: "Portfolio volatility" },
          {
            points: [
              { x: 1, y: floor * 100 },
              { x: 100, y: floor * 100 },
            ],
            color: "var(--danger)",
            label: `Correlation floor: ${(floor * 100).toFixed(1)}%`,
            dashed: true,
          },
        ]}
        yFormat={(v) => `${v.toFixed(0)}%`}
        xFormat={(v) => `${v.toFixed(0)}`}
        xLabel="Number of equally-weighted holdings"
        markerX={n}
        markerLabel={`you: ${n}`}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat label="Your portfolio volatility" value={fmtPct(vNow, 1)} big />
        <Stat label="Floor set by correlation" value={fmtPct(floor, 1)} tone="bad" />
        <Stat label="Merton share, single holding" value={fmtPct(Math.min(2, mertonSingle), 0)} />
        <Stat
          label="Merton share, your portfolio"
          value={fmtPct(Math.min(2.5, mertonPort), 0)}
          tone="good"
          big
        />
      </div>

      <Caption>
        Risk falls fast for the first ten holdings, then the curve goes flat: with
        correlation 0.3, the 21st stock buys almost nothing, because correlation — not
        the number of names — sets the floor (sigma × √rho). The escape hatch is adding
        things with genuinely <em>low correlation</em>: other asset classes, not more
        stocks. And watch the last stat: because the Merton share divides by variance,
        cutting volatility roughly in half lets you hold about four times as much —
        diversification isn’t just defence, it’s what buys you permission to be invested.
      </Caption>
    </div>
  );
}
