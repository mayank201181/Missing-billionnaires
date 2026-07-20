"use client";

import type { ComponentType } from "react";
import { WealthCompounding } from "./WealthCompounding";
import { CoinFlipCasino } from "./CoinFlipCasino";
import { UtilityExplorer } from "./UtilityExplorer";
import { PortfolioMixer } from "./PortfolioMixer";
import { VolDragMachine } from "./VolDragMachine";
import { MertonShareCalc } from "./MertonShareCalc";
import { KellyCurve } from "./KellyCurve";
import { PayoffSculptor } from "./PayoffSculptor";
import { SpendingLab } from "./SpendingLab";
import { AnnuityDesk } from "./AnnuityDesk";
import { TotalWealth } from "./TotalWealth";
import { TaxDrag } from "./TaxDrag";
import { PurchasingPower } from "./PurchasingPower";
import { GrowthVsRisk } from "./GrowthVsRisk";
import { DiversificationLab } from "./DiversificationLab";
import { AssetMenu } from "./AssetMenu";
import { PolicyPortfolio } from "./PolicyPortfolio";
import { ConcentrationCalc } from "./ConcentrationCalc";
import { DrawdownLab } from "./DrawdownLab";
import { EndowmentSpend } from "./EndowmentSpend";

/**
 * Registry of explorable widgets, keyed by `topic.interactive`.
 * Each topic's Interactive tab renders the matching component.
 */
export const EXPLORABLES: Record<string, ComponentType> = {
  "wealth-compounding": WealthCompounding,
  "coin-flip": CoinFlipCasino,
  "utility-explorer": UtilityExplorer,
  "risk-return-mixer": PortfolioMixer,
  "vol-drag": VolDragMachine,
  "merton-share": MertonShareCalc,
  "kelly": KellyCurve,
  "option-payoff": PayoffSculptor,
  "spending-rule": SpendingLab,
  "annuity": AnnuityDesk,
  "human-capital": TotalWealth,
  "tax-drag": TaxDrag,
  "purchasing-power": PurchasingPower,
  "growth-vs-risk": GrowthVsRisk,
  "diversification-lab": DiversificationLab,
  "asset-menu": AssetMenu,
  "policy-portfolio": PolicyPortfolio,
  "concentration-calc": ConcentrationCalc,
  "drawdown-lab": DrawdownLab,
  "endowment-spend": EndowmentSpend,
};
