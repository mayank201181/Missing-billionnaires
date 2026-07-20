"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat, fmtPct } from "./ui";

const MU = 0.06;

function u(w: number, gamma: number): number {
  const safe = Math.max(w, 0.01);
  if (gamma === 1) return Math.log(safe);
  return (Math.pow(safe, 1 - gamma) - 1) / (1 - gamma);
}

function uInv(v: number, gamma: number): number {
  if (gamma === 1) return Math.exp(v);
  return Math.pow(v * (1 - gamma) + 1, 1 / (1 - gamma));
}

export function PayoffSculptor() {
  const [strikePct, setStrikePct] = useState(85);
  const [premPct, setPremPct] = useState(2);
  const [volPct, setVolPct] = useState(25);
  const [gamma, setGamma] = useState(3);

  const K = strikePct / 100;
  const prem = premPct / 100;
  const sigma = volPct / 100;

  const { ceBare, cePut, evBare, evPut, payoffBare, payoffPut } = useMemo(() => {
    // discrete scenario grid over market returns, normal weights
    let wSum = 0;
    let euBare = 0;
    let euPut = 0;
    let evBare = 0;
    let evPut = 0;
    for (let i = -40; i <= 40; i++) {
      const r = MU + (sigma * i) / 10; // +-4 sigma
      const weight = Math.exp(-0.5 * (i / 10) * (i / 10));
      const bare = 1 + r;
      const withPut = Math.max(1 + r, K) - prem;
      wSum += weight;
      euBare += weight * u(bare, gamma);
      euPut += weight * u(withPut, gamma);
      evBare += weight * bare;
      evPut += weight * withPut;
    }
    const payoffBare: { x: number; y: number }[] = [];
    const payoffPut: { x: number; y: number }[] = [];
    for (let r = -60; r <= 60; r += 2) {
      payoffBare.push({ x: r, y: (1 + r / 100 - 1) * 100 });
      payoffPut.push({ x: r, y: (Math.max(1 + r / 100, K) - prem - 1) * 100 });
    }
    return {
      ceBare: uInv(euBare / wSum, gamma) - 1,
      cePut: uInv(euPut / wSum, gamma) - 1,
      evBare: evBare / wSum - 1,
      evPut: evPut / wSum - 1,
      payoffBare,
      payoffPut,
    };
  }, [K, prem, sigma, gamma]);

  const putBetter = cePut > ceBare;

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Slider
          label="Put protection floor (strike)"
          value={strikePct}
          onChange={setStrikePct}
          min={60}
          max={100}
          step={1}
          format={(v) => `${v}% of today`}
        />
        <Slider
          label="Cost of the put"
          value={premPct}
          onChange={setPremPct}
          min={0.5}
          max={8}
          step={0.5}
          format={(v) => `${v.toFixed(1)}% of wealth`}
        />
        <Slider
          label="Market volatility"
          value={volPct}
          onChange={setVolPct}
          min={15}
          max={40}
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
          format={(v) => v.toFixed(1)}
        />
      </div>

      <LineChart
        series={[
          { points: payoffBare, color: "var(--gold)", label: "Stock alone", dashed: true },
          { points: payoffPut, color: "var(--accent)", label: "Stock + protective put" },
        ]}
        yFormat={(v) => `${v.toFixed(0)}%`}
        xFormat={(v) => `${v.toFixed(0)}%`}
        xLabel="Market return over the year (%)"
        yLabel="portfolio outcome"
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat label="Expected return, stock alone" value={fmtPct(evBare)} />
        <Stat label="Expected return, with put" value={fmtPct(evPut)} tone="bad" />
        <Stat label="Risk-adjusted (CE), stock alone" value={fmtPct(ceBare)} />
        <Stat
          label="Risk-adjusted (CE), with put"
          value={fmtPct(cePut)}
          tone={putBetter ? "good" : "bad"}
          big
        />
      </div>

      <div
        className={`rounded-xl border px-4 py-3 text-sm font-medium ${
          putBetter
            ? "border-accent bg-accent-soft/60"
            : "border-gold bg-gold-soft/60"
        }`}
      >
        {putBetter
          ? "For this investor the insurance is worth it: the put lowers the average return but raises the risk-adjusted value — it pays off exactly in the states where money matters most."
          : "For this investor the put costs more than the protection is worth: expected value AND risk-adjusted value both fall. Try more risk aversion, higher volatility, or a cheaper premium."}
      </div>

      <Caption>
        Options reshape the outcome distribution, so mean-and-variance thinking breaks
        down — you have to weigh every scenario by its utility. A put is negative expected
        value (like all insurance) yet can still raise expected <em>utility</em>, because a
        dollar in a crash is worth more to you than a dollar in a boom. The same logic in
        reverse warns you about <em>selling</em> options: steady premium, rare huge losses
        — fine tiny, fatal oversized.
      </Caption>
    </div>
  );
}
