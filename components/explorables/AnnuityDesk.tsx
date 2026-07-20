"use client";

import { useState } from "react";
import { Caption, Slider, Stat, fmtMoney } from "./ui";

const PREMIUM = 1_000_000;

function annuityFactor(n: number, r: number): number {
  if (Math.abs(r) < 1e-9) return n;
  return (1 - Math.pow(1 + r, -n)) / r;
}

/** Rough life expectancy at a given age (unisex-ish, developed world). */
function lifeExpectancy(age: number): number {
  return Math.max(3, 86 + (age - 65) * 0.35 - age);
}

export function AnnuityDesk() {
  const [age, setAge] = useState(65);
  const [planTo, setPlanTo] = useState(100);
  const [ratePct, setRatePct] = useState(2);
  const [loadPct, setLoadPct] = useState(10);

  const r = ratePct / 100;
  const selfYears = Math.max(1, planTo - age);
  const poolYears = lifeExpectancy(age);

  const selfIncome = PREMIUM / annuityFactor(selfYears, r);
  const fairIncome = PREMIUM / annuityFactor(poolYears, r);
  const annuityIncome = fairIncome * (1 - loadPct / 100);
  const uplift = (annuityIncome / selfIncome - 1) * 100;

  const bars = [
    { label: `Self-funded to ${planTo}`, value: selfIncome, color: "var(--muted)" },
    { label: `Annuity (after ${loadPct}% insurer margin)`, value: annuityIncome, color: "var(--accent)" },
    { label: "Fair annuity (no margin)", value: fairIncome, color: "var(--gold)" },
  ];
  const maxBar = Math.max(...bars.map((b) => b.value));

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Slider label="Your age" value={age} onChange={setAge} min={55} max={80} step={1} />
        <Slider
          label="Self-funding: plan to age"
          value={planTo}
          onChange={setPlanTo}
          min={85}
          max={105}
          step={1}
        />
        <Slider
          label="Real interest rate"
          value={ratePct}
          onChange={setRatePct}
          min={0}
          max={4}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="Insurer margin (load)"
          value={loadPct}
          onChange={setLoadPct}
          min={0}
          max={20}
          step={1}
          format={(v) => `${v}%`}
        />
      </div>

      <div className="space-y-3">
        {bars.map((b) => (
          <div key={b.label}>
            <div className="flex justify-between text-sm mb-1">
              <span className="text-muted">{b.label}</span>
              <span className="font-mono font-medium">{fmtMoney(b.value)} / yr</span>
            </div>
            <div className="h-4 rounded-full bg-surface-2 overflow-hidden">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${(b.value / maxBar) * 100}%`, background: b.color }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <Stat
          label="Extra income from pooling"
          value={`+${uplift.toFixed(0)}%`}
          tone={uplift > 0 ? "good" : "bad"}
          big
        />
        <Stat
          label={`Mortality credit (pool spends over ~${poolYears.toFixed(0)}y, you'd budget ${selfYears}y)`}
          value={`${fmtMoney(annuityIncome - selfIncome)} / yr`}
          tone="gold"
        />
      </div>

      <Caption>
        Self-funding means budgeting your {fmtMoney(PREMIUM)} to last to {planTo}, just in
        case — so you live on the smallest income. An annuity pool only has to fund the{" "}
        <em>average</em> lifespan: those who die early leave their capital to those who
        live long (mortality credits), so everyone gets more per year, even after the
        insurer’s cut. That’s why the book treats lifetime annuities as the natural
        insurance against outliving your money — insure the catastrophic (a very long
        life!), and skip insurance on things you could comfortably absorb.
      </Caption>
    </div>
  );
}
