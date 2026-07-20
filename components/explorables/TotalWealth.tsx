"use client";

import { useState } from "react";
import { Caption, Slider, Stat, fmtMoney, fmtPct } from "./ui";

const RETIRE = 65;
const DISCOUNT = 0.02;

export function TotalWealth() {
  const [age, setAge] = useState(35);
  const [savings, setSavings] = useState(30);
  const [financial, setFinancial] = useState(200);
  const [jobEquityPct, setJobEquityPct] = useState(0);
  const [targetPct, setTargetPct] = useState(60);

  const yearsLeft = Math.max(0, RETIRE - age);
  // PV of future annual savings, discounted at the safe rate
  let hc = 0;
  for (let t = 1; t <= yearsLeft; t++) {
    hc += (savings * 1000) / Math.pow(1 + DISCOUNT, t);
  }
  const fw = financial * 1000;
  const total = hc + fw;
  const target = targetPct / 100;

  // equity-like share of human capital already counts toward the target
  const hcEquity = hc * (jobEquityPct / 100);
  const desiredEquityDollars = target * total;
  const fromFinancial = desiredEquityDollars - hcEquity;
  const financialShare = fw > 0 ? Math.max(0, Math.min(1, fromFinancial / fw)) : 0;
  const shortfall = fromFinancial > fw ? fromFinancial - fw : 0;

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Slider label="Your age" value={age} onChange={setAge} min={25} max={65} step={1} />
        <Slider
          label="Annual savings"
          value={savings}
          onChange={setSavings}
          min={5}
          max={150}
          step={5}
          format={(v) => `$${v}k`}
        />
        <Slider
          label="Financial wealth"
          value={financial}
          onChange={setFinancial}
          min={10}
          max={3000}
          step={10}
          format={(v) => (v >= 1000 ? `$${(v / 1000).toFixed(1)}M` : `$${v}k`)}
        />
        <Slider
          label="How stock-like is your career?"
          value={jobEquityPct}
          onChange={setJobEquityPct}
          min={0}
          max={100}
          step={10}
          format={(v) => (v === 0 ? "bond-like" : v === 100 ? "pure equity" : `${v}% equity-like`)}
        />
        <Slider
          label="Target equity share of TOTAL wealth"
          value={targetPct}
          onChange={setTargetPct}
          min={30}
          max={80}
          step={5}
          format={(v) => `${v}%`}
        />
      </div>

      <div>
        <div className="flex justify-between text-sm mb-1">
          <span className="text-muted">Your total-wealth balance sheet</span>
          <span className="font-mono font-medium">{fmtMoney(total)}</span>
        </div>
        <div className="flex h-8 rounded-xl overflow-hidden border border-line">
          <div
            className="bg-gold/70 flex items-center justify-center text-xs font-medium text-white whitespace-nowrap overflow-hidden"
            style={{ width: `${(hc / (total || 1)) * 100}%` }}
          >
            {hc / total > 0.15 ? `Human capital ${fmtMoney(hc)}` : ""}
          </div>
          <div
            className="bg-accent flex items-center justify-center text-xs font-medium text-white whitespace-nowrap overflow-hidden"
            style={{ width: `${(fw / (total || 1)) * 100}%` }}
          >
            {fw / total > 0.15 ? `Financial ${fmtMoney(fw)}` : ""}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Stat label="Human capital (PV of future savings)" value={fmtMoney(hc)} tone="gold" />
        <Stat
          label="Equities as % of your FINANCIAL portfolio"
          value={fmtPct(financialShare, 0)}
          tone={financialShare > 0.9 ? "gold" : "good"}
          big
        />
        <Stat
          label="Unreachable target (needs leverage)"
          value={shortfall > 0 ? fmtMoney(shortfall) : "—"}
          tone={shortfall > 0 ? "bad" : "default"}
        />
      </div>

      <Caption>
        Slide your age forward and watch the recommendation glide from aggressive to
        conservative all by itself: a steady salary is a bond you can’t sell, so the young
        investor’s <em>financial</em> portfolio should carry the equity risk for the whole
        balance sheet. Make your career stock-like and the advice reverses — your human
        capital already holds equity, so your savings should hold less (and employer stock
        least of all: one bad year could hit your job and your portfolio together).
      </Caption>
    </div>
  );
}
