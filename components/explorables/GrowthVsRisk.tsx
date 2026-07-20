"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat, fmtPct } from "./ui";

export function GrowthVsRisk() {
  const [erpPct, setErpPct] = useState(4);
  const [volPct, setVolPct] = useState(18);
  const [gamma, setGamma] = useState(3);
  const [sharePct, setSharePct] = useState(40);

  const erp = erpPct / 100;
  const sigma = volPct / 100;
  const k = sharePct / 100;

  const kelly = sigma > 0 ? erp / (sigma * sigma) : 0;
  const merton = sigma > 0 ? erp / (gamma * sigma * sigma) : 0;

  const growth = (x: number) => x * erp - 0.5 * x * x * sigma * sigma;
  const ce = (x: number) => x * erp - 0.5 * gamma * x * x * sigma * sigma;

  const { growthCurve, ceCurve } = useMemo(() => {
    const maxX = Math.min(250, Math.max(120, kelly * 130));
    const growthCurve: { x: number; y: number }[] = [];
    const ceCurve: { x: number; y: number }[] = [];
    for (let i = 0; i <= 90; i++) {
      const x = (maxX * i) / 90;
      growthCurve.push({ x, y: growth(x / 100) * 100 });
      ceCurve.push({ x, y: ce(x / 100) * 100 });
    }
    return { growthCurve, ceCurve };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [erp, sigma, gamma, kelly]);

  // rough heuristic: typical worst peak-to-trough over long horizons ~ 2.5 annual sigmas
  const estDrawdown = Math.min(0.95, 2.5 * k * sigma);

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Slider
          label="Your risky share (the dial)"
          value={sharePct}
          onChange={setSharePct}
          min={0}
          max={150}
          step={5}
          format={(v) => `${v}%`}
        />
        <Slider
          label="Expected excess return"
          value={erpPct}
          onChange={setErpPct}
          min={1}
          max={8}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="Risky portfolio volatility"
          value={volPct}
          onChange={setVolPct}
          min={8}
          max={30}
          step={1}
          format={(v) => `${v}%`}
        />
        <Slider
          label="Risk aversion (gamma)"
          value={gamma}
          onChange={setGamma}
          min={1}
          max={5}
          step={0.5}
          format={(v) => (v === 1 ? "1 (Kelly)" : v.toFixed(1))}
        />
      </div>

      <LineChart
        series={[
          { points: growthCurve, color: "var(--gold)", label: "Compound growth rate (Kelly's view)", dashed: true },
          { points: ceCurve, color: "var(--accent)", label: `What it's worth to YOU (gamma = ${gamma})` },
        ]}
        yFormat={(v) => `${v.toFixed(1)}%`}
        xFormat={(v) => `${v.toFixed(0)}%`}
        xLabel="Risky share of the portfolio (%)"
        markerX={sharePct}
        markerLabel={`you: ${sharePct}%`}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat label="Kelly limit (never exceed)" value={fmtPct(kelly, 0)} tone="bad" />
        <Stat label={`Your Merton share (gamma ${gamma})`} value={fmtPct(merton, 0)} tone="good" big />
        <Stat label="Excess growth at your dial" value={fmtPct(growth(k))} />
        <Stat
          label="Ballpark worst drawdown"
          value={`−${(estDrawdown * 100).toFixed(0)}%`}
          tone={estDrawdown > 0.35 ? "bad" : "default"}
        />
      </div>

      <Caption>
        Two hills: the gold one is pure compound growth — it peaks at the Kelly point,
        Thorp’s speed limit. The green one is growth <em>as you experience it</em>, with
        the discomfort of risk charged at your gamma — it peaks earlier, at your Merton
        share. A wealthy family belongs on the green peak: to the left of Kelly, cruising
        at half speed, collecting most of the growth with a survivable worst-case. Notice
        the drawdown estimate as you push the dial right — that number is what breaks
        families, not the average return.
      </Caption>
    </div>
  );
}
