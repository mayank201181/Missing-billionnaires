"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat, fmtMoney } from "./ui";

/**
 * The Dynasty Simulator — compound a 1900 fortune to today under a real
 * return, a proportional spending rate, and periodic estate splitting.
 */
export function WealthCompounding() {
  const [realReturn, setRealReturn] = useState(6.5);
  const [spendRate, setSpendRate] = useState(2);
  const [heirs, setHeirs] = useState(2);

  const years = 120; // 1900 -> 2020
  const start = 5e6;

  const { path, perHeir, familyTotal } = useMemo(() => {
    const g = (realReturn - spendRate) / 100;
    const pts: { x: number; y: number }[] = [];
    let w = start;
    for (let t = 0; t <= years; t++) {
      pts.push({ x: 1900 + t, y: w });
      w *= 1 + g;
    }
    const familyTotal = pts[years].y;
    // a generation every 30 years -> 4 splits among `heirs` children each
    const branches = Math.pow(heirs, 4);
    return { path: pts, perHeir: familyTotal / branches, familyTotal };
  }, [realReturn, spendRate, heirs]);

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-3 gap-4">
        <Slider
          label="Real investment return / yr"
          value={realReturn}
          onChange={setRealReturn}
          min={0}
          max={8}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="Spending (% of wealth / yr)"
          value={spendRate}
          onChange={setSpendRate}
          min={0}
          max={8}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="Children per generation"
          value={heirs}
          onChange={setHeirs}
          min={1}
          max={4}
          step={1}
          format={(v) => `${v}`}
        />
      </div>

      <LineChart
        series={[{ points: path, color: "var(--accent)", label: "Family wealth (real $)" }]}
        logY
        yFormat={fmtMoney}
        xFormat={(v) => String(Math.round(v))}
        xLabel="Year"
      />

      <div className="grid sm:grid-cols-3 gap-3">
        <Stat label="Family wealth in 2020" value={fmtMoney(familyTotal)} big tone="gold" />
        <Stat
          label={`Per heir (${heirs} kids × 4 generations)`}
          value={fmtMoney(perHeir)}
          big
          tone={perHeir >= 1e9 ? "good" : perHeir >= 1e6 ? "default" : "bad"}
        />
        <Stat
          label="Net compounding rate"
          value={`${(realReturn - spendRate).toFixed(1)}% / yr`}
          big
        />
      </div>

      <Caption>
        A $5M fortune in 1900 compounds at the real return minus the spending rate. At
        6.5% real with 2% spending, the family holds tens of billions by 2020 — even split
        across {Math.pow(heirs, 4)} heirs, everyone is extraordinarily rich. Notice the
        log scale: modest changes in the <em>net</em> rate move the endpoint by orders of
        magnitude, which is why sizing and spending errors — not stock picking — explain
        the missing billionaires.
      </Caption>
    </div>
  );
}
