"use client";

import React from "react";

/** Shared building blocks for the interactive explorables. */

export function Slider({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  format,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  format?: (v: number) => string;
}) {
  return (
    <label className="block">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-muted">{label}</span>
        <span className="font-medium font-mono text-[0.85rem]">
          {format ? format(value) : value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full"
      />
    </label>
  );
}

export function Stat({
  label,
  value,
  tone = "default",
  big = false,
}: {
  label: string;
  value: string;
  tone?: "default" | "good" | "bad" | "gold";
  big?: boolean;
}) {
  const toneCls =
    tone === "good"
      ? "text-accent"
      : tone === "bad"
      ? "text-danger"
      : tone === "gold"
      ? "text-gold"
      : "";
  return (
    <div className="rounded-xl bg-surface-2 px-4 py-3">
      <div className="text-xs text-muted mb-0.5">{label}</div>
      <div className={`font-semibold font-mono ${big ? "text-2xl" : "text-lg"} ${toneCls}`}>
        {value}
      </div>
    </div>
  );
}

export function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm text-muted leading-relaxed border-l-2 border-accent pl-3">
      {children}
    </p>
  );
}

export function fmtMoney(v: number): string {
  const abs = Math.abs(v);
  if (abs >= 1e12) return `$${(v / 1e12).toFixed(2)}T`;
  if (abs >= 1e9) return `$${(v / 1e9).toFixed(2)}B`;
  if (abs >= 1e6) return `$${(v / 1e6).toFixed(1)}M`;
  if (abs >= 1e3) return `$${(v / 1e3).toFixed(0)}k`;
  return `$${v.toFixed(0)}`;
}

export function fmtPct(v: number, dp = 1): string {
  return `${(v * 100).toFixed(dp)}%`;
}

export interface Series {
  points: { x: number; y: number }[];
  color: string;
  label?: string;
  dashed?: boolean;
}

/**
 * Minimal, clean SVG line chart. Supports linear or log y-scale, optional
 * vertical marker line, and a small legend. No external deps.
 */
export function LineChart({
  series,
  height = 220,
  logY = false,
  yFormat = (v: number) => v.toFixed(0),
  xFormat = (v: number) => v.toFixed(0),
  xLabel,
  yLabel,
  markerX,
  markerLabel,
  yMin: yMinProp,
}: {
  series: Series[];
  height?: number;
  logY?: boolean;
  yFormat?: (v: number) => string;
  xFormat?: (v: number) => string;
  xLabel?: string;
  yLabel?: string;
  markerX?: number;
  markerLabel?: string;
  yMin?: number;
}) {
  const width = 640;
  const pad = { l: 56, r: 14, t: 14, b: 34 };
  const all = series.flatMap((s) => s.points).filter((p) => Number.isFinite(p.y));
  if (all.length === 0) return null;

  const tx = (v: number) => v;
  const ty = (v: number) => (logY ? Math.log(Math.max(v, 1e-12)) : v);

  const xMin = Math.min(...all.map((p) => tx(p.x)));
  const xMax = Math.max(...all.map((p) => tx(p.x)));
  let yMin = Math.min(...all.map((p) => ty(p.y)));
  let yMax = Math.max(...all.map((p) => ty(p.y)));
  if (yMinProp !== undefined) yMin = Math.min(yMin, ty(yMinProp));
  if (yMax === yMin) yMax = yMin + 1;

  const sx = (v: number) =>
    pad.l + ((tx(v) - xMin) / (xMax - xMin || 1)) * (width - pad.l - pad.r);
  const sy = (v: number) =>
    height - pad.b - ((ty(v) - yMin) / (yMax - yMin)) * (height - pad.t - pad.b);

  const yTicks = 4;
  const ticks = Array.from({ length: yTicks + 1 }, (_, i) => {
    const t = yMin + ((yMax - yMin) * i) / yTicks;
    return logY ? Math.exp(t) : t;
  });
  const xTickVals = Array.from({ length: 5 }, (_, i) => xMin + ((xMax - xMin) * i) / 4);

  return (
    <div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        role="img"
        aria-label={yLabel ? `Chart of ${yLabel}` : "Line chart"}
      >
        {ticks.map((t, i) => (
          <g key={i}>
            <line
              x1={pad.l}
              x2={width - pad.r}
              y1={sy(t)}
              y2={sy(t)}
              stroke="var(--line)"
              strokeWidth="1"
            />
            <text
              x={pad.l - 6}
              y={sy(t) + 3.5}
              textAnchor="end"
              fontSize="11"
              fill="var(--muted)"
            >
              {yFormat(t)}
            </text>
          </g>
        ))}
        {xTickVals.map((t, i) => (
          <text
            key={i}
            x={sx(t)}
            y={height - pad.b + 16}
            textAnchor="middle"
            fontSize="11"
            fill="var(--muted)"
          >
            {xFormat(t)}
          </text>
        ))}
        {xLabel && (
          <text
            x={(pad.l + width - pad.r) / 2}
            y={height - 4}
            textAnchor="middle"
            fontSize="11"
            fill="var(--muted)"
          >
            {xLabel}
          </text>
        )}
        {markerX !== undefined && (
          <g>
            <line
              x1={sx(markerX)}
              x2={sx(markerX)}
              y1={pad.t}
              y2={height - pad.b}
              stroke="var(--gold)"
              strokeWidth="1.5"
              strokeDasharray="4 3"
            />
            {markerLabel && (
              <text
                x={sx(markerX) + 5}
                y={pad.t + 12}
                fontSize="11"
                fill="var(--gold)"
              >
                {markerLabel}
              </text>
            )}
          </g>
        )}
        {series.map((s, i) => {
          const pts = s.points.filter((p) => Number.isFinite(ty(p.y)));
          if (pts.length === 0) return null;
          const d = pts
            .map((p, j) => `${j === 0 ? "M" : "L"}${sx(p.x).toFixed(1)},${sy(p.y).toFixed(1)}`)
            .join(" ");
          return (
            <path
              key={i}
              d={d}
              fill="none"
              stroke={s.color}
              strokeWidth="2.25"
              strokeDasharray={s.dashed ? "5 4" : undefined}
              strokeLinejoin="round"
            />
          );
        })}
      </svg>
      {series.some((s) => s.label) && (
        <div className="flex flex-wrap gap-4 mt-1 text-xs text-muted">
          {series
            .filter((s) => s.label)
            .map((s, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <span
                  className="inline-block w-4 h-0.5 rounded"
                  style={{
                    background: s.dashed
                      ? `repeating-linear-gradient(90deg, ${s.color} 0 4px, transparent 4px 7px)`
                      : s.color,
                  }}
                />
                {s.label}
              </span>
            ))}
        </div>
      )}
    </div>
  );
}
