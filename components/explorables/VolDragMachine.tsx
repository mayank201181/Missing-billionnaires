"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat } from "./ui";

const YEARS = 30;

export function VolDragMachine() {
  const [muPct, setMuPct] = useState(7);
  const [volPct, setVolPct] = useState(20);

  const mu = muPct / 100;
  const sigma = volPct / 100;
  const g = mu - (sigma * sigma) / 2;

  const { meanPath, medianPath } = useMemo(() => {
    const meanPath: { x: number; y: number }[] = [];
    const medianPath: { x: number; y: number }[] = [];
    for (let t = 0; t <= YEARS; t++) {
      meanPath.push({ x: t, y: Math.pow(1 + mu, t) });
      medianPath.push({ x: t, y: Math.exp(g * t) });
    }
    return { meanPath, medianPath };
  }, [mu, g]);

  const meanFinal = Math.pow(1 + mu, YEARS);
  const medianFinal = Math.exp(g * YEARS);

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <Slider
          label="Average (arithmetic) return / yr"
          value={muPct}
          onChange={setMuPct}
          min={0}
          max={15}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="Volatility"
          value={volPct}
          onChange={setVolPct}
          min={0}
          max={50}
          step={1}
          format={(v) => `${v}%`}
        />
      </div>

      <LineChart
        series={[
          {
            points: meanPath,
            color: "var(--gold)",
            label: `"Average" projection (${muPct}%/yr)`,
            dashed: true,
          },
          {
            points: medianPath,
            color: "var(--accent)",
            label: `Typical (median) outcome (${(g * 100).toFixed(1)}%/yr)`,
          },
        ]}
        logY
        yFormat={(v) => `${v.toFixed(1)}x`}
        xFormat={(v) => `${v.toFixed(0)}y`}
        xLabel="Years"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat label="Arithmetic mean" value={`${muPct.toFixed(1)}%`} />
        <Stat
          label="Volatility drag (σ²/2)"
          value={`−${((sigma * sigma) / 2 * 100).toFixed(1)}%`}
          tone="bad"
        />
        <Stat
          label="Compound growth"
          value={`${(g * 100).toFixed(1)}%`}
          tone={g > 0 ? "good" : "bad"}
          big
        />
        <Stat
          label={`Median vs mean, ${YEARS}y`}
          value={`${medianFinal.toFixed(1)}x vs ${meanFinal.toFixed(1)}x`}
          tone="gold"
        />
      </div>

      <Caption>
        The dashed line is the seductive brochure projection: compound the{" "}
        <em>average</em> return. The solid line is what the median investor actually
        experiences: the average minus half the variance. The gap is volatility drag —
        try 0% volatility (the lines merge), then 30% (the typical outcome falls far
        behind), then crank volatility until compound growth goes negative even though the
        average return is still positive. Same coin as the betting experiment: too much
        risk turns a good bet into a losing one.
      </Caption>
    </div>
  );
}
