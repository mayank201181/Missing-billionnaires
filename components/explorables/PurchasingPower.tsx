"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat, fmtMoney } from "./ui";

const START = 10_000_000;
const YEARS = 60;

export function PurchasingPower() {
  const [inflPct, setInflPct] = useState(3);
  const [spendPct, setSpendPct] = useState(2.5);
  const [tipsPct, setTipsPct] = useState(1.5);
  const [equityPct, setEquityPct] = useState(4.5);

  const paths = useMemo(() => {
    const mk = (realReturn: number) => {
      const pts: { x: number; y: number }[] = [];
      let w = START;
      for (let t = 0; t <= YEARS; t++) {
        pts.push({ x: t, y: Math.max(1, w) });
        w *= 1 + realReturn / 100 - spendPct / 100;
      }
      return pts;
    };
    return {
      cash: mk(-inflPct), // nominal yield ~0 real minus... cash at 0% nominal loses inflation
      tips: mk(tipsPct),
      equity: mk(equityPct),
    };
  }, [inflPct, spendPct, tipsPct, equityPct]);

  const finalOf = (pts: { x: number; y: number }[]) => pts[pts.length - 1].y;
  const halfLifeCash = inflPct + spendPct > 0 ? 72 / (inflPct + spendPct) : Infinity;

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Slider
          label="Inflation / yr"
          value={inflPct}
          onChange={setInflPct}
          min={0}
          max={8}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="Family spending (% of wealth / yr)"
          value={spendPct}
          onChange={setSpendPct}
          min={0}
          max={6}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="TIPS real yield"
          value={tipsPct}
          onChange={setTipsPct}
          min={0}
          max={3}
          step={0.25}
          format={(v) => `${v.toFixed(2)}%`}
        />
        <Slider
          label="Diversified portfolio real return"
          value={equityPct}
          onChange={setEquityPct}
          min={2}
          max={7}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
      </div>

      <LineChart
        series={[
          { points: paths.equity, color: "var(--accent)", label: "Diversified portfolio" },
          { points: paths.tips, color: "var(--gold)", label: "All TIPS", dashed: true },
          { points: paths.cash, color: "var(--danger)", label: "Cash under the mattress (0% nominal)", dashed: true },
        ]}
        logY
        yFormat={fmtMoney}
        xFormat={(v) => `${v.toFixed(0)}y`}
        xLabel={`Real (inflation-adjusted) wealth of a ${fmtMoney(START)} fortune, spending included`}
      />

      <div className="grid grid-cols-3 gap-3">
        <Stat
          label="Cash: real wealth halves every"
          value={Number.isFinite(halfLifeCash) ? `${halfLifeCash.toFixed(0)} yrs` : "never"}
          tone="bad"
        />
        <Stat label={`TIPS after ${YEARS} yrs`} value={fmtMoney(finalOf(paths.tips))} tone={finalOf(paths.tips) >= START ? "good" : "gold"} />
        <Stat
          label={`Portfolio after ${YEARS} yrs`}
          value={fmtMoney(finalOf(paths.equity))}
          tone={finalOf(paths.equity) >= START ? "good" : "bad"}
          big
        />
      </div>

      <Caption>
        “Safe” cash is on a glide path to extinction: at 3% inflation plus 2.5% spending,
        real wealth halves roughly every 13 years — two generations and the fortune is
        gone, no crash required. Capital preservation properly defined means preserving{" "}
        <em>purchasing power net of spending</em>, and that requires earning a real
        return — which is why a 100% “riskless” portfolio is one of the riskiest things a
        spending family can hold.
      </Caption>
    </div>
  );
}
