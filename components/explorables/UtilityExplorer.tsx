"use client";

import { useMemo, useState } from "react";
import { Caption, LineChart, Slider, Stat, fmtMoney } from "./ui";

const W0 = 100_000;

function u(w: number, gamma: number): number {
  if (gamma === 1) return Math.log(w);
  return (Math.pow(w, 1 - gamma) - 1) / (1 - gamma);
}

function uInv(value: number, gamma: number): number {
  if (gamma === 1) return Math.exp(value);
  return Math.pow(value * (1 - gamma) + 1, 1 / (1 - gamma));
}

export function UtilityExplorer() {
  const [gamma, setGamma] = useState(2);
  const [gainPct, setGainPct] = useState(100);
  const [lossPct, setLossPct] = useState(50);

  const wUp = W0 * (1 + gainPct / 100);
  const wDown = W0 * (1 - lossPct / 100);
  const ev = 0.5 * wUp + 0.5 * wDown;
  const eu = 0.5 * u(wUp, gamma) + 0.5 * u(wDown, gamma);
  const ce = uInv(eu, gamma);
  const premium = ev - ce;

  const curve = useMemo(() => {
    const pts: { x: number; y: number }[] = [];
    const lo = Math.max(W0 * 0.1, wDown * 0.8);
    const hi = wUp * 1.15;
    for (let i = 0; i <= 80; i++) {
      const w = lo + ((hi - lo) * i) / 80;
      pts.push({ x: w / 1000, y: u(w, gamma) });
    }
    return pts;
  }, [gamma, wUp, wDown]);

  const chord = useMemo(
    () => [
      { x: wDown / 1000, y: u(wDown, gamma) },
      { x: wUp / 1000, y: u(wUp, gamma) },
    ],
    [gamma, wUp, wDown]
  );

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-3 gap-4">
        <Slider
          label="Risk aversion (gamma)"
          value={gamma}
          onChange={setGamma}
          min={0.5}
          max={5}
          step={0.5}
          format={(v) => (v === 1 ? "1 (log utility)" : v.toFixed(1))}
        />
        <Slider
          label="Gamble: upside"
          value={gainPct}
          onChange={setGainPct}
          min={10}
          max={150}
          step={5}
          format={(v) => `+${v}%`}
        />
        <Slider
          label="Gamble: downside"
          value={lossPct}
          onChange={setLossPct}
          min={5}
          max={80}
          step={5}
          format={(v) => `−${v}%`}
        />
      </div>

      <div className="text-sm text-muted">
        A 50/50 gamble on your {fmtMoney(W0)} wealth: end with {fmtMoney(wUp)} or{" "}
        {fmtMoney(wDown)}.
      </div>

      <LineChart
        series={[
          { points: curve, color: "var(--accent)", label: `u(w), gamma = ${gamma}` },
          { points: chord, color: "var(--gold)", label: "the gamble (chord)", dashed: true },
        ]}
        yFormat={() => ""}
        xFormat={(v) => `$${v.toFixed(0)}k`}
        xLabel="Wealth"
        markerX={ce / 1000}
        markerLabel={`CE ${fmtMoney(ce)}`}
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Stat label="Expected value of gamble" value={fmtMoney(ev)} />
        <Stat label="Certainty equivalent (to you)" value={fmtMoney(ce)} tone={ce >= W0 ? "good" : "bad"} big />
        <Stat label="Risk premium you'd pay" value={fmtMoney(premium)} tone="gold" />
      </div>

      <Caption>
        The curve bends because each extra dollar buys less happiness — and that bend is
        risk aversion. The dashed chord averages the two outcomes in <em>utility</em>{" "}
        terms; where it lands maps back to your certainty equivalent: the sure amount
        worth the same to you as the gamble. Raise gamma and watch the CE slide left —
        the same gamble is worth less to a more risk-averse investor. At the classic
        double-or-half gamble with gamma = 1 the CE equals your current wealth exactly;
        at gamma = 2 you would give up a full 20% of your wealth to escape it.
      </Caption>
    </div>
  );
}
