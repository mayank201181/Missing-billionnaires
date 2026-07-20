import type { Topic } from "../types";

export const assetMenu: Topic = {
  id: "asset-menu",
  title: "The Asset-Class Menu & Honest Expected Returns",
  icon: "🗂️",
  part: "The Allocator's Track — Portfolio Construction",
  order: 104,
  track: "wealth",
  tagline: "Every asset you own deserves one honest line: expected real return, risk, correlation, fee, tax",
  intro:
    "Before any sizing formula can help you, it needs inputs — and the inputs most investors feed it are last decade's performance numbers, which are closer to marketing copy than to forecasts. This module builds the menu the rest of the Allocator's Track eats from: an honest, current-conditions expected *real* return for each major asset class, anchored in yields and valuations you can observe today. The recurring theme is humility. Expected returns come from what you are paid now — earnings yields, real yields, spreads net of defaults, rents net of costs — not from extrapolated glory. And because Sharpe ratios cluster tightly across every major class, there is no magic asset to find; there is only a menu to combine sensibly, at low cost, in sizes you can defend with one written line per holding.",
  guide: [
    {
      heading: "Equities: the earnings-yield anchor",
      discovery: {
        problem:
          "US equities just delivered 10% real per year for a decade, and the market now trades at a cyclically-adjusted P/E (CAPE) of 25. You are writing down an expected real return for the next 20 years. Do you extrapolate the 10%, average it with history, or do something else entirely?",
        idea:
          "Something else: invert the price. A CAPE of 25 means you pay $25 for $1 of cyclically-adjusted earnings, so your earnings yield is 1/25 = **4% real**. The glorious past decade is not evidence of a high future return — it is the *reason* the price is high and the future return is low. The honest forecast is the yield you buy at today, and you add nothing for hope.",
      },
      body:
        "The workhorse anchor for equities is the **cyclically-adjusted earnings yield**: expected long-run real return ≈ 1/CAPE. At a CAPE of 25 that is about 4% real; at a CAPE of 33 it is about 3%; at the CAPE of 15 on offer in some non-US markets it is closer to 6.5%.\n\nNotice what the anchor deliberately excludes:\n\n- **No extrapolation of past returns.** Realized returns over any decade are dominated by valuation *change*, which is exactly the component you should not project forward.\n- **No growth story premium.** Real earnings growth and its risks are, to first order, already embedded in the earnings stream you are buying.\n- **No adjustment for how you feel.** The same number holds whether the last decade was euphoric or miserable.\n\nThis single habit — pricing equities off the yield you can compute today rather than the performance you remember — would have flagged 1929, 1999, and every other high-CAPE moment as a *low* expected-return environment, precisely when extrapolation screamed the opposite. It is the difference between an input fit for the Merton share and a number that flatters your recent statements.",
      whyItWorks:
        "When you buy the market at price P with cyclically-adjusted earnings E, those earnings accrue to you as an owner — paid out, reinvested, or used for buybacks. If the valuation multiple is roughly unchanged over a long horizon, your real return converges to the real earnings yield E/P = 1/CAPE. Valuation changes add noise around that anchor, but over decades they wash out or, from a high starting CAPE, more often subtract.",
      strategies: ["Anchor on current yields, not past returns", "Invert the price"],
      keyPoints: [
        "Expected long-run real equity return ≈ 1/CAPE; CAPE 25 implies roughly 4% real",
        "A great past decade usually means a high CAPE — and therefore a *lower* forward return",
        "Add nothing for hope: growth is already in the earnings you are buying",
      ],
    },
    {
      heading: "Government bonds and cash: the returns you can read",
      body:
        "One corner of the menu requires no estimation at all. An inflation-protected government bond (**TIPS**) held to maturity delivers its quoted real yield — contractually. If 10-year TIPS yield 2%, your expected real return over ten years *is* 2%, with essentially no forecasting involved. That makes the TIPS curve the risk-free ruler against which every other expected return on the menu should be measured.\n\n**Nominal government bonds** need one estimate: expected real return ≈ nominal yield − expected inflation. A 4.5% nominal yield with 2.5% expected inflation is about 2% real — the same as TIPS, as arbitrage suggests it should be. The difference is *risk*: the nominal bond's real outcome depends on inflation actually behaving, and at long horizons inflation risk is the dominant danger to a nominal bondholder. The 1970s turned 'safe' long Treasuries into a roughly 40% real-loss experience.\n\n**Cash and Treasury bills** sit at the short end: your expected real return is the current real bill rate, historically around 0-1% and at times negative. Cash is unambiguously the right asset for near-term spending — its real value over months is nearly certain. But as a permanent store of multigenerational wealth it is quietly ruinous: at 0% real, wealth never compounds, and every year of spending is a permanent subtraction. Several of the missing billionaires died of exactly this 'safety'.",
      whyItWorks:
        "The TIPS expected return needs no model because it is written into the security: principal and coupons are indexed to realized CPI, so the real yield you buy is the real yield you get if held to maturity, regardless of what inflation does. It is the only line on the menu where E[real return] is a contract term rather than an estimate — which is why it anchors the whole menu.",
      keyPoints: [
        "TIPS yield IS the expected real return to maturity — contractual, not estimated",
        "Nominal bonds: nominal yield minus expected inflation, with real inflation risk at long horizons",
        "Bills earn roughly 0-1% real historically: safe for spending, ruinous as a permanent store",
      ],
    },
    {
      heading: "Credit and real estate: subtract before you add",
      discovery: {
        problem:
          "Investment-grade corporate bonds yield 7% while comparable Treasuries yield 4%. Your banker calls the 3-point spread 'free extra yield for a bit of paperwork risk.' Is your expected return really 3 points above Treasuries?",
        idea:
          "No — the spread is *gross* compensation, not expected return. Expected return = government yield + spread − **expected default and downgrade losses**. Across full cycles, half or more of a credit spread can vanish to defaults, downgrades, and the forced selling that follows them, and the losses arrive concentrated in exactly the recessions when the rest of your portfolio is also bleeding. The honest excess return is what survives the subtraction.",
      },
      body:
        "Two menu lines share one discipline: start from the observable gross yield, then subtract the costs that will actually be paid before writing down an expected return.\n\n**Credit.** Expected return ≈ government yield + credit spread − expected default losses. For investment grade the subtraction is modest in normal times; for high yield it is brutal — spreads of 4-5 points have historically delivered nearer 1-2 points of realized excess return after defaults and downgrade losses. And credit's losses cluster in bad states of the world, so its correlation line reads more like equity than like the bond it resembles on a statement.\n\n**Real estate.** The anchor is the **net rental yield**: gross rent minus operating costs, maintenance, insurance, taxes, and vacancies — typically **2-4 percentage points below the gross figure** the listing quotes. To that net yield add roughly inflation for the building itself, since structures and land tend to track the price level over long periods rather than beat it. A property grossing 6% with 3 points of all-in costs is a roughly 3% real expected return with concentrated, illiquid, leverage-tempting risk attached — a perfectly respectable line on the menu, but only once written honestly.",
      strategies: ["Subtract before you add", "Anchor on current yields, not past returns"],
      keyPoints: [
        "Credit: expected return = government yield + spread − expected default losses; half or more of the spread can vanish in bad cycles",
        "Credit losses arrive in the same states as equity losses — check the correlation line, not just the yield",
        "Real estate: net rental yield (typically 2-4 points below gross) plus roughly inflation for the building",
      ],
    },
    {
      heading: "Gold and private markets: what the printout hides",
      discovery: {
        problem:
          "A private equity fund reports 11% annualized returns with 9% volatility. The S&P 500 shows similar returns with 17% volatility. On these numbers, PE has roughly double the Sharpe ratio — so should PE dominate your risky allocation?",
        idea:
          "The 9% is an artifact, not a property of the asset. PE marks come from quarterly appraisals that anchor on prior marks and smooth through market moves — **appraisal smoothing**. The underlying businesses are leveraged equity; their true economic volatility is at least public-equity-like. The risk is still there, it just is not printed. Feed the fake sigma into the Merton share and the formula will confidently tell you to massively over-allocate.",
      },
      body:
        "**Gold** earns nothing — no coupon, no rent, no earnings — and over centuries its expected real return is approximately **0%**. Yet it can still deserve a line: gold has tended to hold value through inflations, confiscations, and crises that damage everything else on the menu, giving it a rare correlation profile. The honest way to hold it is as a *small structural diversifier, sized as insurance rather than investment* — a few percent whose job is protection, not compounding.\n\n**Private equity and venture capital** are, economically, leveraged equity in smaller companies. The honest expected-return line is: public-equity-like return + a *possible* illiquidity premium − very large fees. Whether the illiquidity premium survives the fee subtraction is, for the median fund, genuinely doubtful — top-quartile access is the real product, and access is not something a spreadsheet can assume.\n\nThe risk line needs the most correction. Reported PE volatility is understated because appraisal-based marks are smoothed and autocorrelated; de-smoothed estimates put true volatility at or above public-equity levels. When you write PE's menu line, write the *economic* sigma, not the reported one — otherwise your sizing framework is optimizing against fiction.",
      whyItWorks:
        "Measured volatility is computed from period-to-period changes in marks. Appraisals average recent transactions and anchor on last quarter's value, so each mark is a weighted blend of current and past truth. Averaging adjacent observations mechanically shrinks measured period-to-period variance and induces positive autocorrelation — the same total risk arrives, spread across smoother numbers. Smoothing changes the statistics, not the economics.",
      strategies: ["Distrust the printed sigma", "Consider extremes"],
      keyPoints: [
        "Gold: ~0% real expected return over centuries — hold small, sized as insurance, for its crisis and inflation behaviour",
        "PE/VC: public-equity-like returns + possible illiquidity premium − very large fees",
        "Appraisal smoothing makes PE volatility look low; the risk is still there, just not printed — never feed smoothed sigma to the Merton formula",
      ],
    },
    {
      heading: "Fees, Sharpe humility, and the one-line test",
      body:
        "Run the fee arithmetic once and it stays with you. A **2-and-20** structure on a 10% gross return costs 2 points of management fee plus 20% of the remaining 8 points — another 1.6 — for a total of roughly **3.6 points**, over a third of the gross return, consumed before you see a dollar. At HNW scale even a modest 1% advisory fee is enormous relative to what matters: if sustainable real spending is around 3% of wealth, a 1% fee equals a **third of everything you can ever spend**.\n\nThis is why Ed Thorp — a man who actually possessed persistent edge — counselled that for most investors, most of the portfolio belongs in **low-cost index funds**. The only edge that is reliably persistent, verifiable in advance, and captured with certainty is *cost*.\n\nThe deeper humility: measured over long histories, **Sharpe ratios across major asset classes cluster around 0.2-0.35**. Equities, bonds, credit, real estate — nobody's line is dramatically better per unit of risk. There is no magic asset, which is exactly why *combining* imperfectly correlated classes beats hunting for the best one: diversification raises the portfolio Sharpe above any single line on the menu.\n\nThe discipline that ties this module together: for every asset you own, be able to write **one line** — expected real return, volatility, correlation to your portfolio, fee, tax treatment. If you cannot fill in the line, you cannot size the position. And if you cannot size it, you should not own it.",
      strategies: ["Write it in one line", "Only pay for edge you can verify"],
      keyPoints: [
        "2-and-20 on a 10% gross return consumes about 3.6 points: 2 + 20% of 8",
        "A 1% advisory fee ≈ one third of a sustainable ~3% real spending rate",
        "Sharpe ratios cluster around 0.2-0.35 across major classes — diversify across the menu instead of hunting the best line",
        "The one-line test: E[real return], volatility, correlation, fee, tax — can't fill it, can't size it, shouldn't own it",
      ],
    },
  ],
  quiz: [
    {
      id: "menu-q1",
      question:
        "The equity market trades at a cyclically-adjusted P/E (CAPE) of 25. Under the earnings-yield anchor, what is the honest expected long-run real return?",
      options: ["About 2.5% real", "About 4% real", "About 8% real", "About 10% real"],
      answerIndex: 1,
      explanation:
        "The anchor is the cyclically-adjusted earnings yield: 1/CAPE = 1/25 = 4% real. You add nothing for hope — real earnings growth and its risks are already embedded in the earnings stream you are buying, and past performance is precisely what you must not extrapolate.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "menu-q2",
      question:
        "Which asset class's expected real return can be read directly off a market quote, with essentially no estimation required?",
      options: [
        "Equities — the dividend yield is contractual",
        "Nominal government bonds — the coupon is fixed",
        "TIPS held to maturity — the real yield is contractual",
        "Investment-grade credit — the spread is observable",
      ],
      answerIndex: 2,
      explanation:
        "TIPS principal and coupons are indexed to realized inflation, so the quoted real yield is the real return you receive if held to maturity — a contract term, not an estimate. Nominal bonds still require an inflation forecast, and equity and credit yields are gross starting points that need further estimation.",
      difficulty: "warmup",
      guideRef: 1,
    },
    {
      id: "menu-q3",
      question:
        "A fund charges 2-and-20 (2% of assets, plus 20% of returns after the management fee) and earns 10% gross. Roughly how many percentage points of return do fees consume?",
      options: ["2.0 points", "2.4 points", "3.6 points", "4.0 points"],
      answerIndex: 2,
      explanation:
        "The management fee takes 2 points, leaving 8. The performance fee takes 20% of those 8 points, another 1.6. Total: 2 + 1.6 = 3.6 points — over a third of the gross return gone before the investor sees anything, which is why fee arithmetic belongs on every menu line.",
      difficulty: "core",
      hints: [
        "The fee has two parts: a flat charge on assets, and a share of profits. Handle them one at a time.",
        "The 2% management fee comes off first. How much of the 10% gross return is left for the performance fee to apply to?",
        "The performance fee is 20% of the remaining 8 points. Add that to the flat 2 points.",
      ],
      strategy: "Subtract before you add",
      guideRef: 4,
    },
    {
      id: "menu-q4",
      question:
        "Treasuries yield 4%. Investment-grade corporates yield 7%, and expected default and downgrade losses over the cycle run about 1.6% per year. What is the honest expected excess return of the corporates over Treasuries?",
      options: [
        "3.0 points — the full spread is expected return",
        "1.4 points — the spread minus expected default losses",
        "1.6 points — the default losses themselves",
        "0 points — spreads always vanish to defaults",
      ],
      answerIndex: 1,
      explanation:
        "The spread is gross compensation, not expected return: expected return = government yield + spread − expected default losses, so the honest excess is 3.0 − 1.6 = 1.4 points. Note that more than half the spread vanished — typical over full cycles — and the losses cluster in exactly the bad states when equities are also falling.",
      difficulty: "core",
      hints: [
        "The 3-point spread is what you are quoted, not what you keep. What gets subtracted from it over a full cycle?",
        "Defaults and downgrades cost an expected 1.6 points per year. The honest excess return is what survives that subtraction from the spread.",
      ],
      strategy: "Subtract before you add",
      guideRef: 2,
    },
    {
      id: "menu-q5",
      question:
        "A rental property has a 6% gross rental yield. Operating costs, maintenance, taxes, and vacancies total about 3 percentage points, and the building's value roughly tracks inflation. What is the honest expected real return?",
      options: [
        "About 6% real — the gross yield",
        "About 3% real — the net rental yield, plus a building that keeps pace with inflation",
        "About 9% real — net yield plus historical price appreciation",
        "About 0% real — costs consume everything",
      ],
      answerIndex: 1,
      explanation:
        "The anchor is the net rental yield: 6% gross − 3 points of costs and vacancies = 3%. The building itself contributes roughly inflation — that is, roughly 0% real — so it protects purchasing power without adding real return. Extrapolating past price appreciation on top would double-count the same hope the equity section warns against.",
      difficulty: "core",
      hints: [
        "The listing quotes the gross yield. What does the owner actually keep after running the property for a year?",
        "Costs and vacancies take 3 of the 6 points. Then ask: in real terms, what does a building that merely tracks inflation add?",
      ],
      strategy: "Subtract before you add",
      guideRef: 2,
    },
    {
      id: "menu-q6",
      question:
        "Private equity funds report much lower volatility than public equities. According to this module, why — and why is that dangerous for position sizing?",
      options: [
        "PE firms genuinely hedge market risk, so lower reported volatility is real and PE deserves a larger allocation",
        "Appraisal-based marks smooth through market moves, understating true volatility — so sizing formulas fed the reported sigma will over-allocate",
        "PE volatility is overstated by illiquidity, so allocations should be smaller than formulas suggest",
        "Reported volatility is irrelevant because PE returns are contractual, like TIPS",
      ],
      answerIndex: 1,
      explanation:
        "PE marks come from quarterly appraisals that anchor on prior marks, blending current and past values — appraisal smoothing. Averaging adjacent observations mechanically shrinks measured variance while the underlying economic risk (leveraged equity in smaller companies) remains at or above public-equity levels. Since the Merton share divides by sigma squared, feeding it a smoothed sigma produces a confidently oversized allocation against fictional risk numbers.",
      difficulty: "core",
      hints: [
        "Public equities are marked by the market every day; PE is marked by appraisal every quarter. What does an appraisal anchor on?",
        "If each mark is a blend of today's truth and last quarter's mark, what happens to the measured size of quarter-to-quarter swings?",
        "Now recall what the Merton share divides by — and what an artificially small value of that input does to the recommended position.",
      ],
      strategy: "Distrust the printed sigma",
      guideRef: 3,
    },
    {
      id: "menu-q7",
      question:
        "A PE fund's smoothed marks show volatility of 10%, but its de-smoothed economic volatility is 20%. If you feed the smoothed sigma into the Merton share (excess return divided by risk aversion times sigma squared), by what factor do you over-allocate relative to the honest input?",
      options: ["1.4x", "2x", "4x", "8x"],
      answerIndex: 2,
      explanation:
        "Sigma enters the Merton share squared. Halving sigma from 20% to 10% cuts sigma squared to a quarter (0.04 to 0.01), so the recommended allocation quadruples: you hold 4x the position the true risk justifies. This is why the smoothing problem is not cosmetic — a factor-of-2 error in the risk input becomes a factor-of-4 error in size.",
      difficulty: "challenge",
      hints: [
        "Write the Merton share: excess return / (risk aversion × sigma²). Which input differs between the two calculations?",
        "Sigma appears squared. Compare (0.10)² with (0.20)².",
        "The allocation is inversely proportional to sigma squared — so take the ratio of the two squared values.",
      ],
      strategy: "Distrust the printed sigma",
      guideRef: 3,
    },
    {
      id: "menu-q8",
      question:
        "A family office with $30M can sustainably spend about 3% of wealth per year in real terms. They hire an advisor charging 1% of assets annually. What fraction of the family's sustainable real spending does the fee consume, and what is left to actually spend?",
      options: [
        "About 1% of spending; roughly $890k remains to spend",
        "About 10% of spending; roughly $810k remains to spend",
        "About one quarter of spending; roughly $700k remains to spend",
        "About one third of spending; roughly $600k remains to spend",
      ],
      answerIndex: 3,
      explanation:
        "Sustainable spending is 3% of $30M = $900k per year; the fee is 1% of $30M = $300k, which comes straight out of the return that funds spending. The fee therefore consumes 300/900 = one third of everything the family can sustainably spend, leaving about 2% of wealth, or $600k. A fee that sounds like 'one percent' is properly measured against the 3% spending stream, not the $30M principal.",
      difficulty: "challenge",
      hints: [
        "The trap is comparing the fee to total wealth. Compare it instead to the stream it actually reduces.",
        "Compute both flows in dollars on $30M: the sustainable 3% spend, and the 1% fee.",
        "The fee comes out of the same return that funds spending — so express the fee dollars as a fraction of the spending dollars.",
      ],
      strategy: "Write it in one line",
      guideRef: 4,
    },
  ],
  interactive: "asset-menu",
  interactiveTitle: "The Expected-Return Menu",
  interactiveBlurb:
    "Set today's yields and valuations and read off humble, current-conditions expected returns for every major asset class.",
};
