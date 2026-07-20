"use client";

import { useState } from "react";
import { Caption, Slider, Stat, fmtPct } from "./ui";

export function PolicyPortfolio() {
  const [gamma, setGamma] = useState(3);
  const [erpPct, setErpPct] = useState(4);
  const [volPct, setVolPct] = useState(15);
  const [bandPct, setBandPct] = useState(5);

  const erp = erpPct / 100;
  const sigma = volPct / 100;
  const kRaw = sigma > 0 ? erp / (gamma * sigma * sigma) : 0;
  const k = Math.max(0, Math.min(1, kRaw));
  const lower = Math.max(0, k * 100 - bandPct);
  const upper = Math.min(100, k * 100 + bandPct);
  const ce = k * erp - 0.5 * gamma * k * k * sigma * sigma;

  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Slider
          label="Family risk aversion (gamma)"
          value={gamma}
          onChange={setGamma}
          min={1.5}
          max={5}
          step={0.5}
          format={(v) => v.toFixed(1)}
        />
        <Slider
          label="Risky bucket: expected excess return"
          value={erpPct}
          onChange={setErpPct}
          min={2}
          max={6}
          step={0.5}
          format={(v) => `${v.toFixed(1)}%`}
        />
        <Slider
          label="Risky bucket: volatility (diversified)"
          value={volPct}
          onChange={setVolPct}
          min={10}
          max={22}
          step={1}
          format={(v) => `${v}%`}
        />
        <Slider
          label="Rebalancing band"
          value={bandPct}
          onChange={setBandPct}
          min={2}
          max={10}
          step={1}
          format={(v) => `±${v}pp`}
        />
      </div>

      <div>
        <div className="flex justify-between text-sm mb-1">
          <span className="text-muted">Your policy portfolio</span>
          <span className="font-mono text-sm">
            act only outside {lower.toFixed(0)}%–{upper.toFixed(0)}%
          </span>
        </div>
        <div className="relative">
          <div className="flex h-10 rounded-xl overflow-hidden border border-line">
            <div
              className="bg-accent flex items-center justify-center text-xs font-semibold text-white"
              style={{ width: `${k * 100}%` }}
            >
              {k > 0.15 ? `Risky ${fmtPct(k, 0)}` : ""}
            </div>
            <div
              className="bg-gold/60 flex items-center justify-center text-xs font-semibold text-white"
              style={{ width: `${(1 - k) * 100}%` }}
            >
              {1 - k > 0.15 ? `Safe (TIPS ladder) ${fmtPct(1 - k, 0)}` : ""}
            </div>
          </div>
          <div
            className="absolute top-0 bottom-0 border-x-2 border-dashed border-foreground/40 pointer-events-none"
            style={{ left: `${lower}%`, width: `${upper - lower}%` }}
            title="Rebalancing band"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat label="Merton share" value={fmtPct(kRaw, 0)} tone="good" big />
        <Stat
          label={kRaw > 1 ? "Capped at 100% (no leverage)" : "Policy risky weight"}
          value={fmtPct(k, 0)}
        />
        <Stat label="Risk-adjusted excess return" value={fmtPct(ce, 2)} />
        <Stat
          label="Portfolio volatility"
          value={fmtPct(k * sigma, 1)}
          tone={k * sigma > 0.14 ? "gold" : "default"}
        />
      </div>

      <Caption>
        Two decisions, cleanly separated: the risky bucket is a <em>design</em> problem
        (the most diversified, highest-Sharpe mix you can own — the same for everyone);
        how much of it to hold is a <em>you</em> problem, answered by the Merton share.
        The dashed band is your pre-commitment device: inside it, do nothing; outside it,
        rebalance back — mechanically, without consulting your feelings or the news. The
        policy changes when the <em>inputs</em> change (valuations, family circumstances),
        never because of headlines.
      </Caption>
    </div>
  );
}
