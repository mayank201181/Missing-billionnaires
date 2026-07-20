"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat, fmtPct } from "./ui";

export function ConcentrationCalc() {
  const [weightPct, setWeightPct] = useState(60);
  const [volPct, setVolPct] = useState(45);
  const [erpPct, setErpPct] = useState(4);
  const [gamma, setGamma] = useState(3);

  const w = weightPct / 100;
  const sigma = volPct / 100;
  const erp = erpPct / 100;

  const riskCost = (x: number) => 0.5 * gamma * x * x * sigma * sigma;
  const netCe = (x: number) => x * erp - riskCost(x);
  const wStar = sigma > 0 ? erp / (gamma * sigma * sigma) : 0;

  const curve = useMemo(() => {
    const pts: { x: number; y: number }[] = [];
    for (let x = 0; x <= 100; x += 1) {
      pts.push({ x, y: netCe(x / 100) * 100 });
    }
    return pts;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [erp, sigma, gamma]);

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Slider
          label="Share of wealth in the one asset"
          value={weightPct}
          onChange={setWeightPct}
          min={0}
          max={100}
          step={1}
          format={(v) => `${v}%`}
        />
        <Slider
          label="Its volatility"
          value={volPct}
          onChange={setVolPct}
          min={20}
          max={70}
          step={1}
          format={(v) => `${v}%`}
        />
        <Slider
          label="Its expected excess return"
          value={erpPct}
          onChange={setErpPct}
          min={2}
          max={10}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="Risk aversion (gamma)"
          value={gamma}
          onChange={setGamma}
          min={1.5}
          max={5}
          step={0.5}
          format={(v) => v.toFixed(1)}
        />
      </div>

      <LineChart
        series={[
          {
            points: curve,
            color: "var(--accent)",
            label: "What the position adds per year, risk-adjusted (CE)",
          },
        ]}
        yFormat={(v) => `${v.toFixed(1)}%`}
        xFormat={(v) => `${v.toFixed(0)}%`}
        xLabel="Share of wealth in the concentrated asset (%)"
        markerX={weightPct}
        markerLabel={`you: ${weightPct}%`}
        yMin={Math.min(-2, netCe(1) * 100)}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat label="Expected return added" value={`+${fmtPct(w * erp)}`} tone="gold" />
        <Stat label="Risk cost charged" value={`−${fmtPct(riskCost(w))}`} tone="bad" />
        <Stat
          label="Net risk-adjusted value / yr"
          value={fmtPct(netCe(w))}
          tone={netCe(w) >= 0 ? "good" : "bad"}
          big
        />
        <Stat label="Size the formula would bless" value={fmtPct(wStar, 0)} tone="good" />
      </div>

      <Caption>
        The return you expect grows in a straight line with the position; the utility cost
        of its risk grows with the <em>square</em>. For a typical founder holding — say
        60% of wealth in a 45%-volatility company — the annual risk cost dwarfs the
        expected return: the position is deeply negative in risk-adjusted terms every
        year it’s kept. The tax bill on selling is real, but it’s a one-time 20-30%
        against a double-digit <em>annual</em> drag — bad arithmetic within a few years.
        The asset that made you rich was one great hand; you don’t have to keep betting
        the whole bankroll on it.
      </Caption>
    </div>
  );
}
