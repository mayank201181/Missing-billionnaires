"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat, fmtPct } from "./ui";

function ce(k: number, erp: number, sigma: number, gamma: number): number {
  return k * erp - 0.5 * gamma * k * k * sigma * sigma;
}

export function MertonShareCalc() {
  const [erpPct, setErpPct] = useState(5);
  const [volPct, setVolPct] = useState(20);
  const [gamma, setGamma] = useState(2);

  const erp = erpPct / 100;
  const sigma = volPct / 100;
  const kStar = sigma > 0 ? erp / (gamma * sigma * sigma) : 0;
  const ceStar = ce(kStar, erp, sigma, gamma);

  const curve = useMemo(() => {
    const maxX = Math.max(150, Math.min(300, kStar * 220 * 100) / 100);
    const pts: { x: number; y: number }[] = [];
    for (let i = 0; i <= 90; i++) {
      const x = (maxX * i) / 90;
      pts.push({ x, y: ce(x / 100, erp, sigma, gamma) * 100 });
    }
    return pts;
  }, [erp, sigma, gamma, kStar]);

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-3 gap-4">
        <Slider
          label="Expected excess return (mu − r)"
          value={erpPct}
          onChange={setErpPct}
          min={0}
          max={10}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="Volatility (sigma)"
          value={volPct}
          onChange={setVolPct}
          min={5}
          max={40}
          step={1}
          format={(v) => `${v}%`}
        />
        <Slider
          label="Risk aversion (gamma)"
          value={gamma}
          onChange={setGamma}
          min={0.5}
          max={5}
          step={0.5}
          format={(v) => (v === 1 ? "1 (Kelly)" : v.toFixed(1))}
        />
      </div>

      <div className="rounded-xl bg-surface-2 p-5 text-center">
        <div className="text-sm text-muted mb-1">
          k* = (mu − r) / (gamma × sigma²) = {erpPct.toFixed(1)}% / ({gamma.toFixed(1)} ×{" "}
          {(sigma * sigma).toFixed(4).replace(/0+$/, "").replace(/\.$/, "")})
        </div>
        <div
          className={`display text-5xl font-semibold ${
            kStar > 1 ? "text-gold" : "text-accent"
          }`}
        >
          {fmtPct(kStar, 1)}
        </div>
        <div className="text-sm text-muted mt-1">
          of wealth in the risky asset
          {kStar > 1 && " — above 100% means the formula wants leverage; most should cap at 100%"}
        </div>
      </div>

      <LineChart
        series={[
          {
            points: curve,
            color: "var(--accent)",
            label: "Risk-adjusted benefit of holding k (certainty-equivalent, %/yr)",
          },
        ]}
        yFormat={(v) => `${v.toFixed(1)}%`}
        xFormat={(v) => `${v.toFixed(0)}%`}
        xLabel="Fraction of wealth in the risky asset (%)"
        markerX={kStar * 100}
        markerLabel={`k* = ${fmtPct(kStar, 0)}`}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Stat label="Sharpe ratio" value={(sigma > 0 ? erp / sigma : 0).toFixed(2)} />
        <Stat label="Value of investing well (CE, /yr)" value={fmtPct(ceStar)} tone="good" />
        <Stat
          label="CE at 2 × k* (oversized)"
          value={fmtPct(ce(2 * kStar, erp, sigma, gamma))}
          tone="bad"
        />
      </div>

      <Caption>
        Three numbers in, one number out. Notice the shape of the hill: it’s flat near the
        top — holding 80% of k* costs you almost nothing — but it falls all the way to{" "}
        <em>zero</em> at exactly twice the optimum. Sizing errors are asymmetric: a bit shy
        is cheap, double is catastrophic. Halve the volatility and watch the share{" "}
        <em>quadruple</em> (it divides by sigma squared); set gamma to 1 and you have the
        Kelly investor.
      </Caption>
    </div>
  );
}
