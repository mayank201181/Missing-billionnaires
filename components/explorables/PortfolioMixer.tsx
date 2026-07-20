"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat, fmtPct } from "./ui";

/** CE growth for a CRRA-2 investor holding fraction k in the risky asset. */
function ceGrowth(k: number, erp: number, sigma: number, rf: number, gamma: number): number {
  return rf + k * erp - 0.5 * gamma * k * k * sigma * sigma;
}

export function PortfolioMixer() {
  const [sharePct, setSharePct] = useState(60);
  const [erpPct, setErpPct] = useState(5);
  const [volPct, setVolPct] = useState(20);
  const [rfPct, setRfPct] = useState(1);

  const k = sharePct / 100;
  const erp = erpPct / 100;
  const sigma = volPct / 100;
  const rf = rfPct / 100;
  const gamma = 2;

  const expReturn = rf + k * erp;
  const portVol = k * sigma;
  const sharpe = sigma > 0 ? erp / sigma : 0;
  const ce = ceGrowth(k, erp, sigma, rf, gamma);
  const kStar = sigma > 0 ? erp / (gamma * sigma * sigma) : 0;

  const curve = useMemo(() => {
    const pts: { x: number; y: number }[] = [];
    for (let x = 0; x <= 150; x += 2) {
      pts.push({ x, y: ceGrowth(x / 100, erp, sigma, rf, gamma) * 100 });
    }
    return pts;
  }, [erp, sigma, rf]);

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Slider
          label="Equity share"
          value={sharePct}
          onChange={setSharePct}
          min={0}
          max={150}
          step={5}
          format={(v) => `${v}%${v > 100 ? " (levered)" : ""}`}
        />
        <Slider
          label="Equity risk premium"
          value={erpPct}
          onChange={setErpPct}
          min={0}
          max={8}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="Equity volatility"
          value={volPct}
          onChange={setVolPct}
          min={5}
          max={40}
          step={1}
          format={(v) => `${v}%`}
        />
        <Slider
          label="Safe real return"
          value={rfPct}
          onChange={setRfPct}
          min={0}
          max={4}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
      </div>

      <LineChart
        series={[
          {
            points: curve,
            color: "var(--accent)",
            label: "Risk-adjusted (certainty-equivalent) return, gamma = 2",
          },
        ]}
        yFormat={(v) => `${v.toFixed(1)}%`}
        xFormat={(v) => `${v.toFixed(0)}%`}
        xLabel="Equity share (%)"
        markerX={sharePct}
        markerLabel={`you: ${sharePct}%`}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat label="Expected return" value={fmtPct(expReturn)} />
        <Stat label="Portfolio volatility" value={fmtPct(portVol)} />
        <Stat label="Sharpe ratio" value={sharpe.toFixed(2)} />
        <Stat
          label="Best share for gamma = 2"
          value={fmtPct(kStar, 0)}
          tone={Math.abs(k - kStar) < 0.1 ? "good" : "gold"}
          big
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <Stat
          label="Your risk-adjusted return (what the risk is worth to you after discomfort)"
          value={fmtPct(ce)}
          tone={ce >= ceGrowth(kStar, erp, sigma, rf, gamma) - 0.001 ? "good" : "default"}
        />
      </div>

      <Caption>
        Expected return rises in a straight line as you add equities — but the{" "}
        <em>risk-adjusted</em> value of the portfolio is a hill, because the utility cost
        of risk grows with the square of exposure. The hilltop sits exactly at the Merton
        share, (mu − r) / (gamma × sigma²). Move the premium and volatility sliders and
        watch the hilltop shift: the right allocation is not a fixed personality trait,
        it’s a function of market conditions.
      </Caption>
    </div>
  );
}
