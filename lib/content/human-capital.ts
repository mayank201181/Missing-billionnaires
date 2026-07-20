import type { Topic } from "../types";

export const humanCapital: Topic = {
  id: "human-capital",
  title: "Human Capital, Houses & Big Life Decisions",
  icon: "🧑‍💼",
  part: "Part IV — Spending & Real Life",
  order: 11,
  tagline:
    "Your biggest asset isn't in your brokerage account — size everything on total wealth",
  intro:
    "Open any brokerage statement and you'll see a number that, for most people under 45, is the *smallest* part of their wealth. The largest part is invisible: the present value of all the savings your future self will generate. The book calls this **human capital**, and once you put it on your balance sheet, familiar puzzles snap into focus. Why should the young hold mostly stocks? Why do target-date funds glide from equities into bonds? Why is concentrating your savings in your employer's stock so dangerous? Why is a house both a shelter and a leveraged bet? This chapter extends the expected-utility framework to the decisions that don't feel like investing at all — careers, houses, education, starting a business — and shows they are all portfolio choices on one total-wealth balance sheet.",
  guide: [
    {
      heading: "The invisible asset on your balance sheet",
      discovery: {
        problem:
          "A 30-year-old doctor has $200,000 in investments and expects to save $50,000 a year (in today's dollars) for the next 35 years. Before reading on: roughly how big is the asset represented by those future savings, and how does it compare to her portfolio?",
        idea:
          "At a modest real discount rate, 35 years of $50,000 annual savings is worth on the order of $1.5-2 million today — perhaps ten times her financial portfolio. That stream of future savings is an asset she already owns. The book calls it **human capital**: the present value of future earnings, or more precisely of future *savings*, since money you will earn and immediately spend never reaches the balance sheet.",
      },
      body:
        "Human capital is the present value of the savings your future working self will deliver to your portfolio. For most people through their 30s and well into their 40s, it **dwarfs their financial wealth** — often by a factor of five or ten.\n\nWhy define it as future *savings* rather than future *earnings*? Because earnings that are pre-committed to consumption — rent, food, tuition — never become investable wealth. The asset that matters for portfolio decisions is the stream of contributions your future self will actually make.\n\nThe consequence is immediate: every sizing rule in this book — the Merton share above all — should be applied to **total wealth**, defined as:\n\n- Total wealth = financial wealth + human capital\n\nA 30-year-old looking only at her $200,000 brokerage account is making decisions about a tenth of her balance sheet while ignoring the rest. That is not conservatism; it is simply mis-measurement, and it leads to systematically wrong answers about how much risk to take.",
      strategies: ["Draw the full balance sheet", "Value streams as assets"],
      keyPoints: [
        "Human capital = present value of future savings (not gross earnings)",
        "For most people under 45 it is far larger than their financial portfolio",
        "Risk sizing (the Merton share) should be computed on total wealth = financial wealth + human capital",
      ],
    },
    {
      heading: "When your paycheck is a bond: size on total wealth",
      body:
        "What *kind* of asset is human capital? It depends on your job. A teacher, doctor, or civil servant has earnings that are steady, predictable, and only weakly linked to the stock market. Their human capital behaves like a **bond**: a long stream of fairly reliable coupons.\n\nNow run the worked example. A young professional has **$200,000** of financial wealth and **$1.8 million** of bond-like human capital — total wealth of **$2 million**. Suppose her Merton share on total wealth is 60% equities. The target equity holding is 60% of $2 million = **$1.2 million**.\n\nBut her entire financial portfolio is only $200,000. Even if she puts **100% of it in equities**, she holds $200,000 of stock against a $1.2 million target — she is still dramatically *under*-exposed to equities. Her human capital has already filled the entire bond allocation (and then some); the only lever she has is the financial portfolio, and it should be pushed fully toward stocks.\n\nThis is why the standard advice that the young should hold aggressive, equity-heavy portfolios is not bravado about 'time to recover from crashes'. It falls straight out of the same Merton arithmetic used everywhere else in the book — once the balance sheet is drawn correctly.",
      whyItWorks:
        "The Merton share k* answers 'what fraction of my wealth should be in risky assets?' — and 'my wealth' means all of it. If total wealth W = F (financial) + H (bond-like human capital), the equity target is k* × (F + H). When H is large and bond-like, k* × (F + H) usually exceeds F entirely, so the constrained optimum is 100% equities in the financial account. The young investor isn't taking extra risk; she is partially offsetting a huge implicit bond position she cannot sell.",
      strategies: ["Classify the asset, then size it", "Work a concrete example"],
      keyPoints: [
        "Steady, market-insensitive earnings make human capital bond-like",
        "Worked example: $2M total wealth, 60% target ⇒ $1.2M in equities — more than the whole $200k financial portfolio",
        "A young saver at 100% equities can still be under-exposed relative to total wealth",
      ],
    },
    {
      heading: "The honest case for glide paths",
      discovery: {
        problem:
          "Target-date funds move investors from about 90% equities at age 25 to about 40% at retirement. The usual justification — 'young people have time to recover from crashes' — is dubious: a bad return hurts a dollar the same at any age. Can you construct a rigorous reason why the equity share of the *financial* portfolio should fall with age?",
        idea:
          "Keep the risk share of **total** wealth constant, and the glide path emerges by itself. At 25, human capital is a huge bond-like asset, so the financial portfolio must be nearly all equities to hit the target on total wealth. By 60, human capital has mostly been converted into financial wealth, so the financial portfolio must carry its own bonds. The *financial* equity share falls precisely so that the *total* equity share stays put.",
      },
      body:
        "As you age, two things happen in lockstep: your human capital shrinks (fewer earning years remain) and your financial wealth grows (those savings arrive and compound). Your total wealth migrates from the invisible column to the visible one.\n\nIf your risk aversion and market views are stable, the Merton share on total wealth is roughly constant — say 60%. The right response is to hold the equity share of *total* wealth steady while the composition shifts underneath:\n\n- Age 30: human capital dominates, so the financial portfolio is ~100% equities\n- Age 45: human capital and financial wealth are comparable, so perhaps 70-80% equities\n- Age 65: human capital is nearly zero, so the financial portfolio itself holds ~60% equities — now the whole balance sheet is visible\n\nThis is the intellectually honest rationale for glide paths and target-date funds. They are not about 'time in the market' folklore; they are the mechanical consequence of a constant risk target applied to a balance sheet in which a large bond-like asset is quietly depleting. The book's contribution is to show the familiar product falls out of first principles — and to let you customize the path to *your* human capital rather than an average investor's.",
      whyItWorks:
        "Hold k* constant on total wealth W = F + H. The equity target is k*(F + H), all of it held in the financial account, so the financial equity share is k*(F + H)/F = k* × (1 + H/F). Early in life H/F is large, pushing the share to (or past) 100%; as H falls to zero, the share declines smoothly toward k*. A declining financial equity share is exactly what a *constant* total-wealth allocation looks like from the outside.",
      keyPoints: [
        "Human capital depletes with age while financial wealth grows — total wealth changes form, not (necessarily) size",
        "Keeping the equity share of total wealth constant forces the financial equity share to fall with age",
        "Glide paths are the mechanical consequence, not a folk remedy about 'time to recover'",
      ],
    },
    {
      heading: "When your paycheck is a stock — and the Enron trap",
      discovery: {
        problem:
          "Two 35-year-olds have identical financial wealth and identical risk aversion. One is a tenured professor; the other is a sales executive at a volatile tech startup whose income swings with the market. Should they hold the same financial portfolio?",
        idea:
          "No — and the difference can be enormous. The professor's human capital is a bond, so her financial portfolio should lean hard into equities. The startup executive's human capital *is already equity*: his earnings rise and crash with markets. His total wealth is already loaded with stock-like risk, so his financial portfolio should be the safe part of the balance sheet — heavier in bonds, lighter in stocks.",
      },
      body:
        "The same logic that pushes bond-like earners toward equities pushes equity-like earners away from them. Founders, startup employees, commissioned finance professionals: their income is high-beta, and their human capital already occupies much of the risky-asset budget on the total-wealth balance sheet. The financial portfolio should compensate by being *safer* than the standard advice suggests.\n\nThe extreme failure mode is concentrating your savings in **your own employer's stock**. Your job and your portfolio are then the same bet: the event that vaporizes your shares is the same event that eliminates your paycheck. When **Enron** collapsed, employees held roughly **60% of their 401(k) assets in Enron stock** — and lost their jobs and their retirement savings *simultaneously*. Both columns of their balance sheet were short the same company.\n\nThe general rule: your financial portfolio should **diversify** your human capital, never amplify it. Ask what your earnings are correlated with, and tilt the portfolio the other way. Discounted employee stock plans can be worth participating in — but sell as soon as the rules allow, and recycle into assets that don't share your employer's fate.",
      strategies: ["Ask what it's correlated with", "Consider extremes"],
      keyPoints: [
        "Equity-like earnings mean your human capital is already stock — hold a safer financial portfolio",
        "Never concentrate in employer stock: job and savings then crash together",
        "Enron employees held ~60% of 401(k) assets in Enron stock and lost both income and savings at once",
      ],
    },
    {
      heading: "Houses, mortgages, and other lumpy decisions",
      body:
        "A house is two things at once. It is **consumption you have pre-purchased**: you must live somewhere, and owning your home hedges your future housing costs — rent can no longer be raised on you. It is also an **investment**: a leveraged, concentrated, illiquid bet on a single property in a single neighbourhood. The expected-utility framework says to evaluate both faces, not just the one the estate agent mentions.\n\nThe mortgage deserves its own line on the balance sheet: it is a **short bond position** — you have borrowed a long stream of fixed payments. So a mortgaged homeowner who also holds bonds in her portfolio is *borrowing at a high rate to lend at a low one*, typically paying her bank a couple of percent more than her bond fund pays her. Absent tax quirks or liquidity needs, paying down the mortgage is often the better 'bond'.\n\nThe same total-wealth lens handles life's other lumpy choices:\n\n- **Education** is buying human capital — pay tuition and forgone earnings now for a larger, possibly riskier, future stream\n- **Starting a business** concentrates human *and* financial capital in one bet — justifiable only with genuinely high expected returns or large non-monetary utility, and it argues for keeping extra-safe, liquid savings on the side\n- **Career changes** restructure the largest asset you own\n\nNone of these are exempt from the framework. They *are* the framework, applied to its biggest inputs.",
      whyItWorks:
        "Owning a home converts an uncertain liability (a lifetime of future rents) into a fixed asset that moves with it — that's the hedge. But the funding side is a short bond: a mortgage at, say, 6% held alongside bonds yielding 4% is a guaranteed negative-spread trade of about 2% a year on the overlapping balance. Netting the two positions — fewer bonds, smaller mortgage — keeps the hedge and deletes the negative carry.",
      strategies: ["Separate consumption from investment", "Net out offsetting positions"],
      keyPoints: [
        "A home is simultaneously pre-paid consumption (a hedge of future housing costs) and a leveraged, concentrated, illiquid asset",
        "A mortgage is a short bond: holding bonds alongside one means borrowing high to lend low",
        "Education, entrepreneurship, and career moves are portfolio choices on the total-wealth balance sheet, run through the same expected-utility lens",
      ],
    },
  ],
  quiz: [
    {
      id: "hcap-q1",
      question: "In the book's framework, what is 'human capital'?",
      options: [
        "The market value of your education credentials",
        "The present value of your future earnings — more precisely, your future savings",
        "Your annual salary multiplied by the years until retirement, uninflated and undiscounted",
        "The amount your employer has invested in training you",
      ],
      answerIndex: 1,
      explanation:
        "Human capital is the present value of the future savings your working self will contribute to your wealth. Future earnings that are pre-committed to consumption never become investable, which is why savings — not gross pay — is the right stream to value. For most people under 45 this asset dwarfs their financial portfolio.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "hcap-q2",
      question:
        "Whose human capital behaves most like a bond?",
      options: [
        "A commissioned trader at an investment bank",
        "A startup employee paid largely in stock options",
        "A tenured teacher with a steady salary weakly linked to markets",
        "A founder whose wealth is concentrated in her own company",
      ],
      answerIndex: 2,
      explanation:
        "Bond-like human capital means steady, predictable earnings with little sensitivity to the stock market — the teacher, doctor, or civil servant. The other three all have equity-like earnings that rise and crash with markets, which calls for a *safer* financial portfolio, not a riskier one.",
      difficulty: "warmup",
      guideRef: 1,
    },
    {
      id: "hcap-q3",
      question:
        "A young saver has $200k of financial wealth and $1.8M of bond-like human capital. Her Merton share on total wealth is 60% equities. What does the framework say about her financial portfolio?",
      options: [
        "Hold 60% equities ($120k) to match the Merton share",
        "Hold 100% equities — and note she is still under-exposed, since the target is $1.2M of stock",
        "Hold mostly bonds, since her total wealth is dominated by a bond-like asset",
        "Hold 10% equities, since financial wealth is 10% of total wealth",
      ],
      answerIndex: 1,
      explanation:
        "Total wealth is $200k + $1.8M = $2M, so the equity target is 60% × $2M = $1.2M. Her entire financial portfolio is only $200k, so even at 100% equities she holds a sixth of the target. Her human capital has already over-filled the bond allocation; the financial portfolio is the only lever, and it should be all stocks.",
      difficulty: "core",
      hints: [
        "First compute total wealth, then apply the 60% share to that — not to the $200k.",
        "60% of $2M is the dollar equity target. Compare it to the size of her entire financial portfolio.",
        "The target is $1.2M of equities but she only has $200k to invest. What's the closest she can get?",
      ],
      strategy: "Work a concrete example",
      guideRef: 1,
    },
    {
      id: "hcap-q4",
      question:
        "What is the book's rigorous justification for glide paths (target-date funds reducing equity exposure with age)?",
      options: [
        "Young investors have more time to recover from market crashes",
        "Older investors become more risk-averse, so their Merton share falls",
        "Keeping the equity share of total wealth constant while bond-like human capital depletes forces the financial equity share to fall",
        "Equities reliably return less over short horizons than long ones",
      ],
      answerIndex: 2,
      explanation:
        "The 'time to recover' story is folklore — a loss hurts a dollar equally at any age. The real mechanism: with a constant Merton share on total wealth, the financial equity share is k* × (1 + H/F). As human capital H shrinks and financial wealth F grows, that ratio falls smoothly from ~100% toward k*. The glide path is the outward appearance of a *constant* total-wealth allocation.",
      difficulty: "core",
      hints: [
        "The book rejects the 'time to recover' explanation. Look for a balance-sheet mechanism instead.",
        "What happens to the size of your bond-like human capital between age 25 and age 65?",
        "If the equity fraction of total wealth must stay fixed while a big implicit bond shrinks, what must the financial portfolio do?",
      ],
      strategy: "Draw the full balance sheet",
      guideRef: 2,
    },
    {
      id: "hcap-q5",
      question:
        "Why was the Enron employees' situation — roughly 60% of 401(k) assets in Enron stock — so catastrophic in the total-wealth framework?",
      options: [
        "Individual stocks are always riskier than index funds",
        "Their human capital and financial capital were bets on the same company, so one event destroyed jobs and savings simultaneously",
        "401(k) accounts are tax-disadvantaged for holding single stocks",
        "They should have diversified across several energy companies instead",
      ],
      answerIndex: 1,
      explanation:
        "Their paychecks (human capital) and their retirement savings (financial capital) were both long Enron, so the collapse wiped out both columns of the balance sheet at once. The framework's rule is that your financial portfolio should *diversify* your human capital, never amplify it. Diversifying across similar energy firms would still leave heavy correlation with their industry-specific human capital.",
      difficulty: "core",
      hints: [
        "Think about what else, besides their 401(k), depended on Enron's survival.",
        "Ask what their earnings were correlated with — then ask what their savings were correlated with.",
        "When both your income stream and your portfolio are short the same event, what happens when that event hits?",
      ],
      strategy: "Ask what it's correlated with",
      guideRef: 3,
    },
    {
      id: "hcap-q6",
      question:
        "In the total-wealth framework, what is a fixed-rate mortgage?",
      options: [
        "A leveraged long position in bonds",
        "Pre-paid consumption, like the house itself",
        "A short bond position — you've borrowed a stream of fixed payments",
        "A hedge against rising interest rates, so it offsets equity risk",
      ],
      answerIndex: 2,
      explanation:
        "Owing a long stream of fixed payments is the mirror image of owning a bond — a short bond position. That is why a mortgaged homeowner who also holds bonds is borrowing at a high rate to lend at a low one, typically losing a couple of percent a year on the overlapping balance. The house is the asset; the mortgage is pure financing, and it belongs on its own line of the balance sheet.",
      difficulty: "core",
      hints: [
        "A bond holder *receives* a stream of fixed payments. What does a mortgage borrower do?",
        "If receiving fixed payments is being long a bond, what is being obligated to pay them?",
      ],
      strategy: "Net out offsetting positions",
      guideRef: 4,
    },
    {
      id: "hcap-q7",
      question:
        "A 55-year-old has $1.5M of financial wealth and $500k of remaining bond-like human capital. Her Merton share on total wealth is 50%. What equity percentage should her *financial* portfolio hold?",
      options: [
        "50% — the Merton share applies directly to the financial portfolio",
        "About 67% — the $1M equity target is held entirely within the $1.5M financial portfolio",
        "100% — human capital always justifies maximum equities",
        "About 33% — human capital must be subtracted from the equity target",
      ],
      answerIndex: 1,
      explanation:
        "Total wealth is $1.5M + $0.5M = $2M; the equity target is 50% × $2M = $1M. All equities live in the financial account, so the financial equity share is $1M / $1.5M ≈ 67%. Equivalently, k* × (1 + H/F) = 50% × (1 + 1/3) ≈ 67% — above the 50% total-wealth share, but well below the 100% her younger self would have held, because her human capital 'bond' has mostly depleted.",
      difficulty: "challenge",
      hints: [
        "Compute total wealth first, then the dollar equity target from the 50% share.",
        "The equity target is $1M. Where must all of those equities be held, and out of how much?",
        "Financial equity share = equity target ÷ financial wealth = $1M ÷ $1.5M.",
      ],
      strategy: "Draw the full balance sheet",
      guideRef: 2,
    },
    {
      id: "hcap-q8",
      question:
        "A homeowner has a $200k mortgage at 6% and, separately, $200k of bonds yielding 4% in a taxable account. Ignoring taxes and liquidity needs, what does the framework say about this position?",
      options: [
        "It's fine: the bonds are an emergency reserve and the mortgage builds home equity",
        "The netted position pays about $4,000 a year for nothing — she is borrowing at 6% to lend at 4%, so paying down the mortgage is the better 'bond'",
        "She should sell the bonds and buy equities, since bonds and mortgages cancel out of the Merton calculation",
        "She should refinance into a larger mortgage to buy more bonds, capturing the duration exposure",
      ],
      answerIndex: 1,
      explanation:
        "The mortgage is a $200k short bond at 6%; the bond fund is a $200k long bond at 4%. Netted, the bond exposure is roughly zero but the carry is not: she pays (6% − 4%) × $200k = $4,000 a year for the privilege. Using the bonds to pay down the mortgage keeps her overall balance sheet risk essentially unchanged while deleting the negative spread — the classic case for treating mortgage paydown as a high-yield 'bond purchase'. (Real-world taxes, prepayment options, and liquidity can modify, but rarely reverse, the conclusion.)",
      difficulty: "challenge",
      hints: [
        "Write both positions as bonds: one long, one short. What is the net exposure, and what is the net cash flow?",
        "She pays 6% on $200k and receives 4% on $200k. Compute the annual difference.",
        "(6% − 4%) × $200k = $4,000 per year of negative carry on a position with almost no net risk. What single move eliminates it?",
      ],
      strategy: "Net out offsetting positions",
      guideRef: 4,
    },
  ],
  interactive: "human-capital",
  interactiveTitle: "The Total Wealth Balance Sheet",
  interactiveBlurb:
    "Add the present value of your future savings to your balance sheet and watch your true equity allocation change with age.",
};
