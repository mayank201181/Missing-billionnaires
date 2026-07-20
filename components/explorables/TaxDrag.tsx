"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat, fmtMoney } from "./ui";

const START = 100_000;
const YEARS = 30;

export function TaxDrag() {
  const [retPct, setRetPct] = useState(7);
  const [taxPct, setTaxPct] = useState(25);
  const [feePct, setFeePct] = useState(0.5);

  const r = retPct / 100;
  const tax = taxPct / 100;
  const fee = feePct / 100;

  const { trader, holder, sheltered } = useMemo(() => {
    const trader: { x: number; y: number }[] = [];
    const holder: { x: number; y: number }[] = [];
    const sheltered: { x: number; y: number }[] = [];
    for (let t = 0; t <= YEARS; t++) {
      // taxed every year on realized gains, plus fee
      trader.push({ x: t, y: START * Math.pow(1 + (r - fee) * (1 - tax), t) });
      // defers all gains to a single sale at the end, pays fee annually
      const gross = START * Math.pow(1 + r - fee, t);
      holder.push({ x: t, y: START + (gross - START) * (1 - tax) });
      // tax-sheltered account, no tax at all (for scale)
      sheltered.push({ x: t, y: START * Math.pow(1 + r - fee, t) });
    }
    return { trader, holder, sheltered };
  }, [r, tax, fee]);

  const traderFinal = trader[YEARS].y;
  const holderFinal = holder[YEARS].y;
  const shelteredFinal = sheltered[YEARS].y;
  const dragPct =
    (Math.pow(traderFinal / START, 1 / YEARS) - Math.pow(holderFinal / START, 1 / YEARS)) * 100;

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-3 gap-4">
        <Slider
          label="Pre-tax return / yr"
          value={retPct}
          onChange={setRetPct}
          min={2}
          max={12}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="Tax rate on gains"
          value={taxPct}
          onChange={setTaxPct}
          min={0}
          max={50}
          step={1}
          format={(v) => `${v}%`}
        />
        <Slider
          label="Annual fees"
          value={feePct}
          onChange={setFeePct}
          min={0}
          max={2}
          step={0.1}
          format={(v) => `${v.toFixed(1)}%`}
        />
      </div>

      <LineChart
        series={[
          { points: sheltered, color: "var(--gold)", label: "Tax-sheltered account", dashed: true },
          { points: holder, color: "var(--accent)", label: "Buy & hold, taxed once at the end" },
          { points: trader, color: "var(--danger)", label: "Trades yearly, taxed every year" },
        ]}
        yFormat={fmtMoney}
        xFormat={(v) => `${v.toFixed(0)}y`}
        xLabel={`Years (starting from ${fmtMoney(START)})`}
      />

      <div className="grid grid-cols-3 gap-3">
        <Stat label="Yearly trader ends with" value={fmtMoney(traderFinal)} tone="bad" />
        <Stat label="Buy-and-holder ends with" value={fmtMoney(holderFinal)} tone="good" big />
        <Stat label="Tax-sheltered ends with" value={fmtMoney(shelteredFinal)} tone="gold" />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <Stat
          label="Cost of realizing gains every year instead of deferring"
          value={`${Math.abs(dragPct).toFixed(2)}% / yr of compounding`}
          tone="bad"
        />
      </div>

      <Caption>
        Both taxable investors pay the same tax <em>rate</em> — the only difference is{" "}
        <em>when</em>. The buy-and-holder lets the government’s share keep compounding
        until the very end, an interest-free loan worth a substantial slice of final
        wealth. Nudge the fee slider to see costs work exactly the same way. Deferral,
        low turnover, asset location, and low fees are the closest things to a free lunch
        in the whole book — improvements in return that require taking no extra risk at
        all.
      </Caption>
    </div>
  );
}
