import type { Metadata } from "next";
import { WealthHome } from "@/components/WealthHome";

export const metadata: Metadata = {
  title: "The Allocator's Study — Capital Preservation with Consistent Growth",
  description:
    "An interactive course on asset allocation, position sizing, diversification, and drawdown control for high-net-worth investors — built on Kelly, Merton, Ed Thorp, and The Missing Billionaires.",
};

export default function WealthPage() {
  return <WealthHome />;
}
