import type { Topic } from "../types";

export const preservationMandate: Topic = {
  id: "preservation-mandate",
  title: "The Preservation Mandate",
  icon: "🏛️",
  part: "The Allocator's Track — Foundations",
  order: 101,
  track: "wealth",
  tagline:
    "Getting rich and staying rich are different games — this is the rulebook for the second one",
  intro:
    "Every substantial fortune was built by breaking the rules that now apply to it. Concentration, leverage, and a favourable draw from luck's urn got the money made; none of those will keep it. Once wealth is large relative to any conceivable need, the objective quietly inverts: the upside of doubling is modest, the downside of halving is severe, and the silent drag of inflation never sleeps. This module defines the mandate that follows from that inversion — preserve *real* purchasing power, net of spending, across generations — and shows why fulfilling it demands taking some market risk, sizing every exposure so no outcome can break the family, and letting unglamorous compounding do the heavy lifting. It is the charter for everything else in the Allocator's Track.",
  guide: [
    {
      heading: "The game inverts at the top",
      discovery: {
        problem:
          "Write down the traits that actually create nine-figure fortunes: a concentrated position in one business, heavy use of leverage or sweat equity, a large helping of luck, and the nerve to ignore diversification. Now ask honestly: if a family already *has* the fortune, would continuing to behave that way tend to preserve it?",
        idea:
          "Almost never. Concentration plus time is a lottery: a few tickets pay off spectacularly, and we only hear from the winners. The behaviour that builds wealth is close to the behaviour that destroys it — the difference is which side of the draw you were on. Getting rich and staying rich are **different games with opposite rulebooks**: the first rewards concentration and boldness, the second rewards diversification, deliberate sizing, and humility about what you don't know.",
      },
      body:
        "The inversion is uncomfortable because it asks a successful person to stop doing what worked. The founder's instinct says: back yourself, concentrate, press the edge. But the founder's success is one realized path out of many that mostly ended badly — survivorship bias hands the winners a distorted lesson.\n\nOnce wealth is made, the relevant question changes from *how do I multiply this?* to *what could take this away?* The answer list is short and well documented: concentrated positions that fail, leverage at the wrong moment, spending that outruns returns, and the slow leak of inflation on 'safe' assets. Every item on that list is a **sizing decision**, not a stock-picking decision.\n\nNothing here says the wealthy should stop taking risk — the opposite, as we'll see. It says risk must now be taken the way an institution takes it: diversified, deliberately sized, and survivable in every state of the world. The skills that made the money and the skills that keep it are different skills, and the handover between them is where most dynasties die.",
      strategies: ["Invert the problem"],
      keyPoints: [
        "Wealth creation rewards concentration and luck; wealth preservation rewards diversification, sizing, and humility",
        "Survivorship bias makes the founder's playbook look safer than it is — most who ran it lost",
        "The threats to an existing fortune are sizing errors (concentration, leverage, spending, inflation), not selection errors",
      ],
    },
    {
      heading: "Rational cowardice: the asymmetry of a fortune",
      body:
        "Suppose a family has $100 million. Doubling to $200 million changes remarkably little: the same homes, the same security, the same freedoms, perhaps a larger philanthropic footprint. Halving to $50 million still leaves a fortune — but losing half *again* starts to bite into lifestyle, commitments, staff, standing, and the family's sense of safety. The pain of large losses vastly exceeds the pleasure of equivalent gains.\n\nThat asymmetry is not a character flaw; it *is* risk aversion, stated precisely. In the book's framework it corresponds to a coefficient of relative risk aversion (gamma) of roughly **3 or higher** for most wealthy families. People sometimes hear 'high risk aversion' as timidity. It isn't. It is the mathematically correct response to a situation where the marginal utility of more wealth is small and the disutility of losing what funds your life is enormous.\n\nThe practical consequence: offers that look attractive on expected *dollars* — a coin flip between tripling and losing 80%, a concentrated bet with a big average payoff — can be decisively bad on expected *utility* for a wealthy family. Turning them down is not leaving money on the table; it is correctly pricing what the downside would actually cost. Rational cowardice is a competitive advantage, because it is rare.",
      whyItWorks:
        "With gamma = 3, utility behaves like -1/(2w^2). Set current wealth to 1: utility is -0.5. Doubling moves utility to -0.125, a gain of 0.375. Halving moves it to -2.0, a loss of 1.5 — four times larger than the gain from doubling. A 50/50 double-or-halve gamble is therefore strongly utility-negative even though its expected dollar value is +25%. The asymmetry isn't a feeling; it falls straight out of the curvature.",
      keyPoints: [
        "For the wealthy, doubling adds little life value while halving destroys a lot — that asymmetry is high effective risk aversion",
        "Gamma of 3+ is a rational description of a wealthy family's preferences, not timidity",
        "Bets that are attractive in expected dollars can be decisively bad in expected utility",
      ],
    },
    {
      heading: "The silent confiscator",
      discovery: {
        problem:
          "A matriarch leaves $20 million 'safely' in Treasury bills that exactly keep pace with inflation (a 0% real return). The family spends a modest-sounding 3% of the portfolio each year. No crashes, no fraud, no bad investments ever occur. What is the fortune's real purchasing power 48 years later, when the grandchildren inherit?",
        idea:
          "About $4.6 million — a quarter of what she left. With a 0% real return, every year of 3% spending shrinks real wealth by 3%: it compounds at 0.97 per year, and 0.97^48 ≈ 0.23. Nothing dramatic ever happened, yet three-quarters of the fortune is gone. The 'safest' portfolio put the family on a glide path to extinction within two generations.",
      },
      body:
        "Inflation is confiscation without a confiscator. At 3% inflation, the **rule of 72** says purchasing power halves in about 72 / 3 = 24 years — and the rule works just as well for decay as for growth. Cash that merely matches inflation earns nothing real; add spending, and the real wealth line points steadily down.\n\nThis forces a correct definition of the mandate. 'Capital preservation' cannot mean *never losing nominal dollars* — nominal dollars are a melting measuring stick. It must mean **preserving real purchasing power, net of spending**. A statement that never shows a down year can hide a fortune in terminal decline; a portfolio that swings 15% in a bad year can be entirely on track.\n\nHere is the paradox at the heart of the mandate: properly defined preservation *requires* taking market risk. A spending family needs a real return at least equal to its spending rate just to stand still, and no riskless asset reliably supplies one. For a family that intends to spend and endure, **100% cash is one of the riskiest long-horizon portfolios available** — it converts a small, certain annual loss into near-certain generational failure.",
      whyItWorks:
        "Real wealth evolves as (1 + real return − spending rate) per year, approximately. Cash: (1 + 0 − 0.03) = 0.97, which halves every ~24 years — certainty of decline. A diversified portfolio earning ~3.5% real with the same spending grows ~0.5% per year with volatility around the trend. The 'risky' portfolio has an uncertain but upward path; the 'safe' one has a certain, downward path. Over generations, certainty of decline is the greater risk.",
      strategies: ["Rule of 72 / doubling times", "Define the objective precisely"],
      keyPoints: [
        "At 3% inflation, purchasing power halves in about 24 years (rule of 72)",
        "Preservation properly means real purchasing power net of spending — not avoiding nominal down years",
        "A spending family holding 100% cash faces near-certain generational decline; some market risk is mandatory, not optional",
      ],
    },
    {
      heading: "You only live one path",
      discovery: {
        problem:
          "An advisor pitches an aggressive strategy and shows you 1,000 Monte Carlo simulations: the *average* ending wealth after 30 years is four times your starting fortune. Buried in the tail, 25% of the simulated paths hit ruin along the way. The average looks great. Should the family take it?",
        idea:
          "No — because the family does not get to live 1,000 paths and pocket the average. It lives **one path through history**, exactly once. The ensemble average is propped up by a minority of spectacular paths the family may never see, while ruin, once hit, is absorbing: no later luck repairs it. What a family actually eats is the **time-average** growth of its single path, and a one-in-four chance of ending the story is a one-in-four chance of ending *the* story.",
      },
      body:
        "This is the deepest reason the preservation mandate is absolute about ruin. Strategies are usually graded on expected outcomes across many hypothetical worlds. A family is not a diversified portfolio of families. It cannot rerun the century, cannot offset a ruined branch against a lucky one, and cannot compound its way back from zero — or from a loss deep enough to force selling assets, gutting spending, and breaking the compounding engine at the worst moment.\n\nEd Thorp learned this at the blackjack tables before he ever managed money, and stated it as his first rule: **never bet an amount that can take you out of the game, no matter how good the odds.** The odds are irrelevant to the constraint. A 90% chance of tripling with a 10% chance of losing everything is a wonderful bet for someone playing it a thousand times at small size, and an unacceptable one for a family playing it once at full size.\n\nThe operational translation: cap every exposure — position, leverage, illiquidity, spending commitment — at a level where the worst plausible run of outcomes leaves the family bruised but fully in the game. Survival is not one consideration among many; it is the constraint inside which all other optimization happens.",
      whyItWorks:
        "Ensemble averages and time averages diverge whenever outcomes compound and ruin is absorbing. The arithmetic mean across simulations weights the few explosive paths heavily; the single lived path grows at the geometric rate, which every deep loss drags down disproportionately — and a 100% loss drags to zero forever, since anything times zero is zero. Avoiding the absorbing state therefore dominates any finite improvement in average outcomes.",
      strategies: ["Consider extremes"],
      keyPoints: [
        "A family lives one path, once — the time-average of that path, not the ensemble average of simulations, is what it eats",
        "Ruin is absorbing: no subsequent good luck can repair it, so no expected return justifies risking it",
        "Thorp's first rule: never bet an amount that can take you out of the game, regardless of the odds",
      ],
    },
    {
      heading: "The mandate: steady compounding, stated in one line",
      body:
        "What does staying in the game and taking sensible risk actually buy? More than intuition suggests. A steady 5% real return compounds to about **4.3x in 30 years** (1.05^30 ≈ 4.3) — a fortune quadrupled in real terms within one generation, with no heroics.\n\nNow the seduction to resist. A strategy alternating +40% and −20% years advertises a 10% *average* return — double the steady portfolio. But wealth doesn't experience averages; it experiences products. Two years turn 1.00 into 1.40 × 0.80 = 1.12, so the compound rate is sqrt(1.12) ≈ 1.058 — about **5.8% per year**. Nearly half the advertised return is fictional, consumed by volatility drag. Erratic brilliance barely beats boring consistency, while carrying vastly more risk of the deep loss that ends the story.\n\nThe missing billionaires of 1900 are the empirical verdict: markets delivered everything needed, and essentially every family failed anyway — through oversized risks, panicked retreats to cash, and unsustainable spending. The failure mode is systematic misbehaviour, not bad markets.\n\nSo the mandate, in one line: **earn enough real return to fund spending and modest growth, take no risk that could break the family, and let time do the heavy lifting.** Every later module — sizing, spending policy, diversification, taxes — is an application of this line.",
      whyItWorks:
        "Compound growth ≈ arithmetic average return − half the variance of returns. The +40%/−20% strategy has a 10% average but ±30% swings: variance 0.09, drag ≈ 4.5%, leaving ~5.5% — close to the exact answer, sqrt(1.4 × 0.8) ≈ 1.058, or ~5.8%. Cutting volatility raises the growth rate you actually experience even at the same average return, which is why consistency is not a style preference but arithmetic.",
      strategies: ["Try small cases"],
      keyPoints: [
        "5% real, uninterrupted, quadruples real wealth in about 30 years — steadiness is powerful",
        "Alternating +40%/−20% averages 10% but compounds at only ~5.8%: volatility drag consumes nearly half the advertised return",
        "The mandate: fund spending and growth from real returns, never risk breaking the family, let time compound",
      ],
    },
  ],
  quiz: [
    {
      id: "preserve-q1",
      question:
        "At 3% annual inflation, roughly how long does it take for the purchasing power of idle cash to fall by half?",
      options: ["About 12 years", "About 24 years", "About 36 years", "About 72 years"],
      answerIndex: 1,
      explanation:
        "The rule of 72 works for decay as well as growth: 72 / 3 = 24 years per halving. That is well within a single generation's stewardship — a fortune 'safely' in cash loses half its real value while nothing visibly goes wrong.",
      difficulty: "warmup",
      strategy: "Rule of 72 / doubling times",
      guideRef: 2,
    },
    {
      id: "preserve-q2",
      question:
        "Under the preservation mandate, what does 'capital preservation' properly mean for a wealthy family?",
      options: [
        "Never showing a nominal loss in any calendar year",
        "Preserving real purchasing power, net of the family's spending",
        "Keeping the principal in government-guaranteed deposits",
        "Growing wealth faster than the stock market in every decade",
      ],
      answerIndex: 1,
      explanation:
        "Nominal dollars are a melting measuring stick, so avoiding nominal down years can hide a fortune in terminal real decline. The mandate is defined in the units that matter — real purchasing power after spending — which is why a volatile portfolio can be on track while a 'stable' one quietly fails.",
      difficulty: "warmup",
      guideRef: 2,
    },
    {
      id: "preserve-q3",
      question:
        "A family holds $50M entirely in cash that exactly keeps pace with inflation (0% real return) and spends 3% of current wealth each year. Roughly what is the portfolio's real purchasing power after 24 years?",
      options: [
        "About $50M — cash preserved the capital",
        "About $36M",
        "About $24M",
        "About $6M",
      ],
      answerIndex: 2,
      explanation:
        "With a 0% real return, each year's 3% spending shrinks real wealth by 3%, so wealth compounds at 0.97 per year: 0.97^24 ≈ 0.48, about $24M. The rule of 72 gives the same answer instantly — a 3% annual drag halves wealth in about 24 years. Nothing 'went wrong,' yet half the fortune is gone.",
      difficulty: "core",
      hints: [
        "At a 0% real return, spending is the only thing moving real wealth. What multiple does the portfolio experience each year?",
        "You need 0.97 raised to the 24th power. Don't grind it out — the rule of 72 also describes decay: at a 3% annual drag, how many years does one halving take?",
      ],
      strategy: "Rule of 72 / doubling times",
      guideRef: 2,
    },
    {
      id: "preserve-q4",
      question:
        "A simulated strategy shows average ending wealth of 4x across 1,000 Monte Carlo paths, but 25% of paths hit ruin along the way. Why does the framework say a family should refuse it despite the attractive average?",
      options: [
        "Monte Carlo simulations systematically overstate average returns",
        "The family lives one path, and ruin is absorbing — the ensemble average is propped up by lucky paths the family may never experience",
        "A 75% chance of success means the strategy is acceptable, so refusing it is simply excess caution",
        "Averages are only meaningful for institutions, not for individuals",
      ],
      answerIndex: 1,
      explanation:
        "The ensemble average pools outcomes across 1,000 hypothetical worlds, but a family reruns nothing: it experiences the time-average growth of a single path, exactly once. Ruin is an absorbing state — anything times zero stays zero — so no later luck repairs it, and a one-in-four chance of ending the story permanently cannot be traded against a higher average.",
      difficulty: "core",
      hints: [
        "Ask who, exactly, gets to experience the average of 1,000 simulated lifetimes.",
        "Consider a path that hits zero in year 10. What do the remaining 20 years of simulated returns do for that family?",
      ],
      strategy: "Consider extremes",
      guideRef: 3,
    },
    {
      id: "preserve-q5",
      question:
        "Why does the framework treat high effective risk aversion (gamma of 3 or more) in wealthy families as rational rather than timid?",
      options: [
        "Wealthy families lack the time to analyze risky investments properly",
        "The marginal utility of doubling an ample fortune is small, while the disutility of halving it — lifestyle, security, standing — is enormous",
        "Large portfolios face structurally worse market prices than small ones",
        "Regulators effectively require conservative allocations above a wealth threshold",
      ],
      answerIndex: 1,
      explanation:
        "Risk aversion is just the curvature of utility, and for a family whose needs are fully funded that curvature is steep on the downside: doubling changes little about life, halving threatens much of what the wealth exists to secure. Pricing that asymmetry correctly — and declining bets that are attractive in dollars but poor in utility — is optimization, not fear.",
      difficulty: "core",
      hints: [
        "Compare concretely: what would doubling actually change about this family's life, and what would halving change?",
        "Translate those asymmetric life-consequences into a statement about the utility of wealth — are equal dollar moves up and down equal in value?",
      ],
      guideRef: 1,
    },
    {
      id: "preserve-q6",
      question:
        "A manager offers a genuinely favourable strategy: each year, a 60% chance of +50% and a 40% chance of -60% on capital committed. Under Thorp's first rule, what should govern how much the family allocates?",
      options: [
        "Allocate heavily — the edge is positive, so more exposure means more expected profit",
        "Cap the allocation at a size where even a long worst-case run leaves the family fully in the game",
        "Allocate nothing — no strategy with a possible 60% loss is ever acceptable",
        "Allocate the full Kelly fraction, which maximizes expected compound growth",
      ],
      answerIndex: 1,
      explanation:
        "Thorp's rule — never bet an amount that can take you out of the game, no matter how good the odds — is a constraint on size, not a verdict on the strategy. A positive edge justifies participation at a survivable size, and refusing all such risk fails the mandate from the other direction. Full Kelly maximizes growth but tolerates drawdowns far beyond what a gamma-3+ family can rationally accept.",
      difficulty: "core",
      hints: [
        "Notice the rule says nothing about the odds — it binds regardless of how good they are. What is it actually constraining?",
        "For each candidate allocation, ask what three or four consecutive -60% outcomes on the committed capital would do to the family as a whole.",
      ],
      strategy: "Consider extremes",
      guideRef: 3,
    },
    {
      id: "preserve-q7",
      question:
        "A strategy alternates exactly +40% and -20% years, and its marketing truthfully states a 10% average annual return. What compound growth rate does an invested family actually experience?",
      options: [
        "10% — over time, the average is what compounds",
        "About 8%",
        "About 5.8%",
        "About 2%",
      ],
      answerIndex: 2,
      explanation:
        "Wealth experiences products, not averages: each two-year cycle multiplies capital by 1.40 × 0.80 = 1.12, so the annual rate is sqrt(1.12) ≈ 1.058, about 5.8%. Volatility drag (roughly half the variance: 0.30^2 / 2 = 4.5%) consumes nearly half the advertised 10%. This is why a steady 5-6% real portfolio is not the timid cousin of an 'average 10%' strategy — it is its equal, with far less risk of the loss that ends the story.",
      difficulty: "challenge",
      hints: [
        "Don't average the two percentages. Follow one dollar through a full +40% then -20% cycle.",
        "The two-year multiple is 1.40 × 0.80 = 1.12. What annual growth factor, applied twice, produces 1.12?",
      ],
      strategy: "Try small cases",
      guideRef: 4,
    },
    {
      id: "preserve-q8",
      question:
        "A family spends 2.5% of wealth per year and wants real wealth to grow 1% per year so the fortune keeps pace with a growing family. Long-run inflation runs at 3%. Roughly what nominal portfolio return does the mandate require?",
      options: ["About 3.5%", "About 5.5%", "About 6.5%", "About 9.5%"],
      answerIndex: 2,
      explanation:
        "Work in real terms first: the portfolio must cover 2.5% spending plus 1% real growth, so it needs about 3.5% real. Adding 3% inflation gives roughly 6.5% nominal. No riskless asset reliably delivers 3.5% real — which is the mandate's central paradox made concrete: a spending, growing family must hold meaningful market risk merely to stand still on its own terms.",
      difficulty: "challenge",
      hints: [
        "List the three separate claims on the portfolio's return before adding anything: spending, desired real growth, and inflation.",
        "Solve the real requirement first: what real return funds 2.5% spending while still growing wealth 1% a year?",
        "One final adjustment converts that real requirement into a nominal return — what do you add?",
      ],
      strategy: "Work backwards from the goal",
      guideRef: 4,
    },
  ],
  interactive: "purchasing-power",
  interactiveTitle: "The Purchasing Power Eroder",
  interactiveBlurb:
    "Watch inflation quietly confiscate a 'safe' fortune — and see how much risk it actually takes to stand still in real terms.",
};
