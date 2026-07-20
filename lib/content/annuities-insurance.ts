import type { Topic } from "../types";

export const annuitiesInsurance: Topic = {
  id: "annuities-insurance",
  title: "Annuities, Insurance & Longevity Risk",
  icon: "🛡️",
  part: "Part IV — Spending & Real Life",
  order: 10,
  tagline: "Why pooling the risk of a long life pays you more than going it alone",
  intro:
    "The previous topic derived how much you can safely spend from a pot of wealth. But it dodged an awkward question: spend it over *how many years*? You don't know when you'll die, so a self-funder must budget for a very long life — and accept a painfully low spending rate as the price of that caution. This topic introduces the one financial product built precisely for this problem: the annuity, powered by an engine called mortality credits. Along the way it generalizes to insurance of every kind, asking when a contract with a *negative* expected value can still be a clear expected-utility win — and when it's just a markup you should refuse to pay. The answers overturn how most people instinctively feel about annuities, warranties, and life insurance.",
  guide: [
    {
      heading: "Longevity risk: the retirement problem nobody prices",
      discovery: {
        problem:
          "You retire at 65 with $1 million and want a steady income you cannot outlive. Average life expectancy at 65 is about 20 more years, but you might live 35. Before reading on: to be safe, over how many years must you spread the money — and what does that choice cost you if you die at 78?",
        idea:
          "A self-funder can't plan for the *average* lifespan; the average is precisely what half of retirees outlive. Prudence forces you to budget to something like age 100 — spreading the money over 35 years instead of 20, which drags your annual income down by roughly a third. And if you then die at 78, you leave a huge unspent surplus. That surplus wasn't a windfall for your heirs so much as an insurance premium you paid to yourself, in the currency of forgone consumption.",
      },
      body:
        "**Longevity risk** is the risk of outliving your money — and it exists only because your lifespan is uncertain. If you knew you'd die at exactly 85, retirement finance would be a trivial amortization problem.\n\nSelf-funding handles the uncertainty with brute conservatism: assume a long life, perhaps to 100, and spend accordingly. That works, but the cost is severe and largely invisible:\n\n- Your spending rate is set by the *worst case* (a very long life), not the expected case\n- If you die early, decades of consumption you could have enjoyed are simply left on the table\n- The 'safe' rates from the spending topic — roughly 4-5% of wealth per year — are low *because* they must survive the long-life scenario\n\nSeen this way, every self-funding retiree is already buying longevity insurance. They are just buying it from the most expensive provider available: themselves, with no risk pooling, paying the full premium in reduced lifestyle. The question the rest of this topic answers is whether someone can sell the same protection cheaper. The answer is yes — dramatically so.",
      strategies: ["Consider extremes", "Reframe the problem"],
      keyPoints: [
        "Longevity risk exists because lifespan is uncertain — the average retiree cannot plan for the average lifespan",
        "Self-funding means budgeting to a conservative age like 100, which forces a low spending rate",
        "Dying early leaves a large unspent surplus: the hidden premium of self-insuring your own longevity",
      ],
    },
    {
      heading: "Mortality credits: the engine inside every annuity",
      discovery: {
        problem:
          "Ten 65-year-olds each have $100,000. Each one, alone, must budget for 35 more years — about $2,857 per year, ignoring interest. But actuarially the *group* will average only 20 more years of life. Suppose they pool their money and agree: the pool pays each survivor an equal income for life, and nobody's stake passes to heirs. Roughly what income can the pool safely promise each member?",
        idea:
          "The pool's total obligation is governed by the group's *average* lifespan, not anyone's maximum. It can amortize $1,000,000 over roughly 20 expected years of payouts per member — about $5,000 per member per year, versus $2,857 going it alone. That is a 75% raise, before any investment return, created from nothing but pooling. The capital of members who die early stays in the pool and funds those who live long. These transfers are called **mortality credits** — and they are the entire engine of the annuity.",
      },
      body:
        "An **annuity** industrializes this pool: you hand an insurer a lump sum (a *single-premium immediate annuity*), and the insurer pays you an income for as long as you live. The insurer runs the pool across millions of customers, so the averaging is extremely reliable.\n\nThe crucial insight is where the extra income comes from. It is *not* investment skill — the insurer holds ordinary bonds. The uplift comes from mortality credits: members who die at 70 stop collecting, and the capital backing their payments is redirected to members still alive at 95.\n\n- Alone, you must plan for a **long** life\n- Pooled, everyone can be paid as if they'll live an **average** life\n- The gap between those two budgets is pure, harvestable value — available *only* to those who pool\n\nNo other financial asset offers this. Stocks, bonds, and property pay the same whether you hold them alone or in a crowd. Longevity pooling is the rare case where joining a group genuinely creates income rather than merely redistributing risk.",
      whyItWorks:
        "Run the mini-pool numbers. Ten people × $100,000 = $1,000,000. Each individual alone divides $100,000 by 35 fear-years: $2,857 per year. The pool divides its capital by the expected 20 years each member will actually collect on average: $100,000 / 20 = $5,000 per member per year. Some members collect for 8 years, some for 35, but the *pool's* total payout obligation tracks the average with high reliability once the group is large. The 75% income uplift is funded entirely by the unspent capital of early decedents — mortality credits — not by anyone taking more investment risk.",
      strategies: ["Try small cases", "Think in populations, not anecdotes"],
      keyPoints: [
        "An annuity swaps a lump sum for income that lasts exactly as long as you do",
        "Mortality credits — early decedents' capital funding long-livers — are the source of the extra income",
        "A pool pays everyone on the average lifespan; an individual must budget for a long one — the gap is the value of pooling",
      ],
    },
    {
      heading: "What the numbers look like — and why 'real' beats 'nominal'",
      body:
        "Ballpark figures make the case concrete. A 65-year-old buying a single-premium immediate annuity today receives roughly **6-7% of the premium per year, for life**, in nominal terms. Compare that with the roughly **4-5%** self-funded spending rates from the previous topic. On $1 million, that is the difference between about $65,000 and about $40,000 a year — and the annuity's figure is *guaranteed to last as long as you do*. The uplift is not magic and not extra risk; it is the mortality credit, paid to you for surrendering your capital to the pool.\n\nOne large caveat: most quoted annuities are **nominal** — the dollar payment never grows. At 3% inflation, a fixed payment loses roughly half its purchasing power over 25 years, which is exactly the horizon a healthy 65-year-old should worry about. The product insures your lifespan but leaves you naked to inflation.\n\nThe book's preference is therefore clear: where available, buy **inflation-linked (real) annuities**, whose payments rise with the price level. The starting payout is lower — you are buying more protection, so you get less headline income — but it is the honest number, comparable to the *real* spending rates the framework produces. A nominal 6.5% and a real 4.5% may be the same product economically; only one of them tells you the truth up front.",
      whyItWorks:
        "Purchasing-power erosion compounds just like interest. A payment fixed in dollars is worth 1 / (1.03^n) in real terms after n years of 3% inflation. At n = 25, 1.03^25 ≈ 2.09, so the real value is about 48 cents on the dollar. A retiree comparing a 6.5% nominal annuity to a 4.5% real spending rate is comparing two different units — like comparing a salary in pesos to one in pounds. Convert everything to real terms first; the framework's spending rules are all stated in real dollars for exactly this reason.",
      strategies: ["Convert to common units"],
      keyPoints: [
        "A 65-year-old's immediate annuity pays roughly 6-7% of the premium per year nominal, versus ~4-5% self-funded",
        "The uplift over self-funding is the mortality credit, not investment risk",
        "Nominal payouts erode badly over decades — prefer inflation-linked annuities where available, and compare everything in real terms",
      ],
    },
    {
      heading: "The annuity puzzle: why almost nobody buys them",
      body:
        "Here is a genuine puzzle. Standard economic models say that most retirees without strong bequest motives should annuitize a **substantial fraction** of their wealth — the mortality credit is close to free money for anyone worried about outliving their savings. Yet in practice, voluntary annuity purchases are rare. Economists call this the **annuity puzzle**.\n\nThe explanations are mostly behavioural:\n\n- **Framing.** People frame the annuity as a *gamble on dying early* — 'if I die at 70, the insurer wins' — rather than as *insurance against living long*. Nobody frames house insurance as 'if my house doesn't burn down, the insurer wins,' yet it is the same structure.\n- **Loss of flexibility and control.** The lump sum is irrevocably gone; that feels like a loss of optionality even when the income is worth more.\n- **Counterparty worry.** Will the insurer still be solvent in 30 years? (A real but manageable concern — state guaranty funds and diversifying across insurers help.)\n- **Bequest motives.** Wanting to leave money to heirs is legitimate — but it argues for annuitizing *less*, not *nothing*. The book's resolution: **annuitize the floor** — cover essential spending with pooled lifetime income — and leave the rest invested for flexibility and bequest.\n\nThe puzzle largely dissolves once the product is framed as what it is: insurance you hope not to 'win' on, exactly like every other policy you happily hold.",
      strategies: ["Reframe the problem", "Separate process from outcome"],
      keyPoints: [
        "Models say most retirees without strong bequest motives should annuitize substantially; few do — the annuity puzzle",
        "The main culprit is framing: an annuity is insurance against living long, not a bet on dying early",
        "Bequest motives are legitimate — the answer is to annuitize the essential-spending floor, not everything",
      ],
    },
    {
      heading: "Insurance in general: pay for utility, not expected value",
      discovery: {
        problem:
          "Every insurance policy has a premium that exceeds the expected payout — the insurer's margin guarantees it. So buying any insurance is a negative-expected-value trade. Before reading on: how can it ever be rational for an expected-utility maximizer to buy one? And does your answer apply equally to house insurance and to a $30 warranty on a $200 gadget?",
        idea:
          "Expected *value* is measured in dollars; expected *utility* is measured in how much those dollars matter. Insurance pays out precisely in the states of the world where your wealth is devastated and each dollar carries enormous marginal utility. Trading cheap dollars (premiums paid when you're fine) for precious dollars (payouts when you're ruined) can raise expected utility even at a negative dollar EV. But the argument cuts both ways: a $200 gadget loss barely moves your utility at all, so the warranty's markup buys you nothing — it's the same negative EV with none of the utility gain.",
      },
      body:
        "The rule that falls out of the utility framework is simple and sharp: **insure the catastrophic, never the trivial.**\n\nInsure the losses your wealth cannot absorb — the ones that would land you on the steep part of your utility curve:\n\n- Your house burning down; personal liability claims\n- Disability destroying your ability to earn\n- **Early death while others depend on your earnings** — life insurance is a hedge on your *human capital*, and the right amount is roughly the present value of the earnings your dependants would lose\n\nSelf-insure everything else: gadget warranties, low deductibles, small predictable losses. Buying insurance on small losses is paying an insurer's markup to remove volatility that barely dents your utility — a pure transfer from you to them. Raise every deductible your wealth can comfortably absorb.\n\nNotice how this unifies the whole topic. An annuity is just insurance with the sign flipped — it protects against living *too long*, while life insurance protects against dying *too soon*. Both are negative-EV contracts that a rational person gladly buys, because both deliver dollars into exactly the states where dollars matter most.",
      whyItWorks:
        "Marginal utility of wealth falls as wealth rises. A payout that arrives when you are ruined is worth far more *utils* per dollar than the premium dollars cost you in normal times, so a modestly negative-EV trade can still be strongly positive in expected utility. For small losses the utility curve is locally almost flat — a $200 hit costs you almost exactly $200 of utility — so there is no utility gain to offset the markup, and the same arithmetic says: refuse the trade.",
      strategies: ["Consider extremes", "Convert to common units"],
      keyPoints: [
        "All insurance is negative expected value in dollars, but can be strongly positive in expected utility",
        "Insure catastrophes (house, liability, disability, early death with dependants); self-insure anything your wealth can absorb",
        "Size life insurance to replace the present value of earnings your dependants would lose",
      ],
    },
  ],
  quiz: [
    {
      id: "annuity-q1",
      question:
        "What does a single-premium immediate annuity provide in exchange for a lump sum?",
      options: [
        "A guaranteed income for as long as you live",
        "A share of the insurer's investment profits",
        "A fixed number of payments, after which the balance goes to your heirs",
        "A loan against your future estate",
      ],
      answerIndex: 0,
      explanation:
        "The defining feature of an annuity is lifetime income: payments continue exactly as long as you do, however long that turns out to be. That is what makes it insurance against longevity, rather than an investment product with a fixed term.",
      difficulty: "warmup",
      guideRef: 1,
    },
    {
      id: "annuity-q2",
      question: "What is 'longevity risk'?",
      options: [
        "The risk that medical costs rise faster than inflation in old age",
        "The risk of outliving your money because you don't know how long you'll live",
        "The risk that long-term bonds lose value when interest rates rise",
        "The risk that your heirs mismanage the wealth you leave them",
      ],
      answerIndex: 1,
      explanation:
        "Longevity risk is the uncertainty of your own lifespan applied to your finances: live longer than you budgeted for and the money runs out. It exists only because the date of death is unknown — with a known lifespan, retirement spending would be simple amortization.",
      difficulty: "warmup",
      guideRef: 0,
    },
    {
      id: "annuity-q3",
      question:
        "Ten 65-year-olds each have $100,000. Alone, each must budget for 35 more years; as a group they average 20 more years. Ignoring interest, roughly what annual income does pooling allow, versus going it alone?",
      options: [
        "About $2,857 pooled vs $5,000 alone — pooling lowers income",
        "About $5,000 pooled vs $2,857 alone — roughly a 75% raise",
        "About $10,000 pooled vs $2,857 alone — pooling triples income",
        "The same income either way — pooling only reduces variance, not the average",
      ],
      answerIndex: 1,
      explanation:
        "Alone: $100,000 / 35 years ≈ $2,857 per year, because each person must budget for a long life. Pooled: the group can amortize over the average lifespan, $100,000 / 20 = $5,000 per member per year — about 75% more. The raise is funded by mortality credits: capital left by members who die early keeps paying those who live long.",
      difficulty: "core",
      hints: [
        "Work out the lone individual's income first: what horizon must one cautious person budget for?",
        "$100,000 spread over 35 years is about $2,857 a year. Now ask what horizon governs the pool's budget.",
        "The pool amortizes over the average 20 years: $100,000 / 20 = $5,000. Compare the two numbers.",
      ],
      strategy: "Try small cases",
      guideRef: 1,
    },
    {
      id: "annuity-q4",
      question:
        "Every insurance premium exceeds the expected payout, so buying insurance is a negative-expected-value trade. Under the book's framework, when is buying it rational anyway?",
      options: [
        "Never — a rational person refuses all negative-EV trades",
        "When the payout arrives in states where wealth is devastated and marginal utility is very high",
        "Whenever the premium is less than 1% of your annual income",
        "Only when the insurer is government-backed, which removes the negative EV",
      ],
      answerIndex: 1,
      explanation:
        "Expected utility, not expected dollar value, is the decision criterion. Insurance moves dollars from normal times, when marginal utility is low, into catastrophes, when each dollar matters enormously — and that trade can raise expected utility despite the premium markup. The same logic says not to insure trivial losses, where the utility curve is flat and the markup buys nothing.",
      difficulty: "core",
      hints: [
        "The trade is negative in dollars. What other quantity might it be positive in?",
        "Ask when a payout dollar is worth more to you than a premium dollar. What does that depend on?",
        "Marginal utility is highest exactly when you're ruined — insurance delivers dollars into those states.",
      ],
      strategy: "Convert to common units",
      guideRef: 4,
    },
    {
      id: "annuity-q5",
      question:
        "A 65-year-old buys a nominal annuity with a fixed dollar payment. With 3% annual inflation, roughly what happens to the payment's purchasing power by age 90?",
      options: [
        "It falls about 10% — barely noticeable",
        "It falls about 25%",
        "It falls to roughly half its starting value",
        "It falls to roughly a tenth of its starting value",
      ],
      answerIndex: 2,
      explanation:
        "Purchasing power after 25 years of 3% inflation is 1 / 1.03^25, and 1.03^25 ≈ 2.09, so the payment buys about 48% of what it did at 65 — roughly half. This is why the book prefers inflation-linked annuities where available: a nominal product insures your lifespan while leaving you exposed to decades of erosion.",
      difficulty: "core",
      hints: [
        "Inflation compounds just like interest, but against you. You need 1.03 raised to the 25th power.",
        "Rule of 72: at 3%, prices double in about 24 years. Age 65 to 90 is 25 years.",
        "One doubling of prices means the fixed payment buys about half as much.",
      ],
      strategy: "Rule of 72 / doubling times",
      guideRef: 2,
    },
    {
      id: "annuity-q6",
      question:
        "Economic models say most retirees without strong bequest motives should annuitize substantially, yet few do. Which behavioural explanation does the book emphasize most?",
      options: [
        "Retirees correctly judge that annuities are overpriced relative to the mortality credit",
        "People frame the annuity as a gamble on dying early rather than as insurance against living long",
        "Annuities are illegal to market directly to retail investors in most countries",
        "Most retirees have no essential expenses left to cover by retirement",
      ],
      answerIndex: 1,
      explanation:
        "The central culprit is framing: 'if I die at 70, the insurer wins' treats the annuity as a bet, though nobody applies that logic to house insurance ('if my house doesn't burn down, the insurer wins'). Loss of flexibility, counterparty worry, and bequest motives contribute too — but bequests argue for annuitizing the essential-spending floor rather than annuitizing nothing.",
      difficulty: "core",
      hints: [
        "The puzzle is that the product is genuinely valuable, yet feels bad. What makes a good deal feel bad?",
        "Compare how people talk about annuities ('the insurer wins if I die early') with how they talk about house insurance.",
        "Both are insurance you hope not to collect much on — but only one gets framed as a losing gamble.",
      ],
      strategy: "Reframe the problem",
      guideRef: 3,
    },
    {
      id: "annuity-q7",
      question:
        "A sole earner's dependants would lose $80,000 per year of real earnings for the next 20 years if the earner died today. Using a 3% real discount rate, roughly how much life insurance does the book's sizing rule suggest? (20-year annuity factor at 3% ≈ 14.9)",
      options: [
        "About $800,000",
        "About $1.2 million",
        "About $1.6 million — simply $80,000 × 20",
        "About $2.7 million",
      ],
      answerIndex: 1,
      explanation:
        "Life insurance hedges human capital, so size it to the *present value* of the earnings the dependants would lose: $80,000 × 14.9 ≈ $1.19 million, roughly $1.2 million. The undiscounted total, $80,000 × 20 = $1.6 million, overstates the need because future dollars are worth less than present dollars; the annuity factor (1 − 1.03^−20) / 0.03 ≈ 14.9 does the discounting for you.",
      difficulty: "challenge",
      hints: [
        "The rule: replace the present value of lost earnings, not the raw sum of them.",
        "$80,000 × 20 = $1.6M ignores discounting. The question hands you the 20-year annuity factor at 3%.",
        "Multiply the annual loss by the factor: $80,000 × 14.9. What does that give?",
      ],
      strategy: "Convert to common units",
      guideRef: 4,
    },
    {
      id: "annuity-q8",
      question:
        "A 65-year-old with $1 million can either self-fund at a safe 4% ($40,000/year) or buy an immediate annuity paying 6.5% ($65,000/year for life). How much capital would a self-funder need to match the annuity's income at the same safe 4% rate — and what does the gap represent?",
      options: [
        "$1.3 million; the extra $300,000 is the insurer's profit margin",
        "$1.625 million; the extra $625,000 is the capitalized value of mortality credits",
        "$2.6 million; the extra $1.6 million reflects the annuity's extra investment risk",
        "$1.625 million; the extra $625,000 is compensation for expected inflation",
      ],
      answerIndex: 1,
      explanation:
        "To draw $65,000 safely at 4%, a self-funder needs $65,000 / 0.04 = $1,625,000 — $625,000 more than the annuity buyer paid. That gap is the capitalized value of mortality credits: the pool pays on average lifespans while the self-funder must budget for a long one. It is not investment risk (the insurer holds ordinary bonds) and not simply margin — the insurer's cut is real but far smaller than the pooling gain.",
      difficulty: "challenge",
      hints: [
        "Invert the spending rule: income = capital × rate, so capital = income / rate.",
        "$65,000 / 0.04 = ? Compare that with the $1 million the annuity actually cost.",
        "The self-funder needs $1.625M for the same income. Where in the guide does the $625,000 advantage come from — investment skill, or pooling?",
      ],
      strategy: "Reframe the problem",
      guideRef: 2,
    },
  ],
  interactive: "annuity",
  interactiveTitle: "The Longevity Insurance Desk",
  interactiveBlurb:
    "Compare self-funding a long life against pooling it: mortality credits, income floors, and what a fair annuity is worth to you.",
};
