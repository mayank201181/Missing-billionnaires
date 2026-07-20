"use client";

import type { ComponentType } from "react";
import { WealthCompounding } from "./WealthCompounding";

/**
 * Registry of explorable widgets, keyed by `topic.interactive`.
 * Each topic's Interactive tab renders the matching component.
 */
export const EXPLORABLES: Record<string, ComponentType> = {
  "wealth-compounding": WealthCompounding,
};
