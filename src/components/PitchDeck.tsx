import React, { useState } from 'react';
import { 
  Presentation, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Target, 
  Layers, 
  ShieldAlert, 
  TrendingUp, 
  Cpu, 
  HelpCircle, 
  CheckCircle2, 
  Key,
  ExternalLink,
  MessageSquareQuote,
  Lightbulb
} from 'lucide-react';
import { STAGE_CREDENTIALS_INFO } from '../data/mockData';

interface Slide {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  bulletPoints: string[];
  visualMetric?: {
    value: string;
    label: string;
    color: string;
  };
  speakerScript: string;
}

export const PitchDeck: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState<boolean>(true);

  const slides: Slide[] = [
    {
      id: 1,
      badge: 'The FEG Holding Challenge',
      title: 'Turning Passive Sessions into Confident, Informed Actions',
      subtitle: 'Across FEG’s 5 European markets (Czechia, Slovakia, Poland, Romania & Croatia), traffic is high — but sessions leak before action.',
      bulletPoints: [
        'FEG is the largest Central European betting operator: 6,000+ employees across 5 markets (Czechia, Slovakia, Poland, Romania, Croatia).',
        'Healthy Traffic Baseline: Millions of passionate fans visit PSK.hr and Fortuna platforms daily, but ~65% leave without completing an action.',
        'Discovery Friction: Generic menus overwhelm recreational fans while burying specialized analytical tools for seasoned punters.',
        'Drop-Off at the Final Step: The betslip is FEG’s strongest intent signal, yet 38% abandon right at confirmation due to payout and tax ambiguity.',
        'The Guardrail: Win through relevance and transparency — zero pressure, zero dark patterns, EGBA compliant.',
      ],
      visualMetric: {
        value: '5 Markets',
        label: '6,000+ Employees Across CEE & FEG India GCC',
        color: 'text-amber-400',
      },
      speakerScript: 'Good morning, esteemed jury from FEG and T-Hub. FEG is Central Europe’s largest betting operator, entertaining millions of sports fans across 5 European markets — Czech Republic, Slovakia, Poland, Romania, and Croatia. But across our digital properties like PSK.hr, we face a common challenge: fans arrive with genuine intent, but over 65% of sessions end without an action, and 38% of built betslips are abandoned at the final confirmation. ClarityCore bridges this gap by replacing hesitation with radical transparency and contextual relevance.',
    },
    {
      id: 2,
      badge: 'Core Philosophy & Guardrail',
      title: 'Pressure Destroys Retention; Clarity Creates Value',
      subtitle: 'Why traditional bookmaker "hurry-up" tactics fail and cause churn.',
      bulletPoints: [
        'Dark patterns (countdown clocks, fake scarcity) trigger buyer remorse and elevate harmful-play indicators.',
        'Hesitation is not a lack of interest — it is an unanswered question ("What is the net payout? Is this within my safe limit?").',
        'FEG ClarityCore™ replaces anxiety with radical transparency: plain-English stats, transparent tax math, and zero-pressure exit paths.',
      ],
      visualMetric: {
        value: '0%',
        label: 'Harmful Play Increase (Strict EU Guardrail)',
        color: 'text-emerald-400',
      },
      speakerScript: 'When users hesitate, bad platforms push them with countdown timers. That causes buyer remorse and violates EU regulations. We asked a better question: Why are they hesitating? They hesitate because they do not understand the payout or feel unsure. When you provide honest clarity, users act because they want to, not because they are trapped.',
    },
    {
      id: 3,
      badge: 'Core Differentiators (Why We Win)',
      title: 'The 4 Winning Differentiators: Us vs. Everyone Else',
      subtitle: 'How ClarityCore fundamentally breaks away from generic hackathon pitches and industry clichés.',
      bulletPoints: [
        'Differentiator 1: Reassurance Over Urgency — While others pitch timers & push notifications, we eliminate unanswered doubts with in-situ clarity snippets.',
        'Differentiator 2: Adaptive Intent Lens Over 400-Market Dump — 3 intent modes (Express, Tactical, In-Play) serve casuals and experts without invasive tracking cookies.',
        'Differentiator 3: Upfront Tax Transparency Over Ambiguity — Full Croatian 10% statutory tax deduction shown at confirmation, erasing the #1 reason for 38% betslip drop-off.',
        'Differentiator 4: Zero-Pressure Soft Exits Over Binary Drop-Off — Hesitating users get "Save to Watchlist" or "Track Odds", capturing high-intent session value with zero remorse.',
      ],
      visualMetric: {
        value: '4 Pillars',
        label: '100% Guardrail Compliant (Zero Pressure)',
        color: 'text-amber-400',
      },
      speakerScript: 'Judges, this is our most crucial slide. 90% of conversion pitches rely on artificial urgency: countdown clocks, flashing banners, and aggressive popups. The FEG brief explicitly bans this. We asked the contrarian question: why push a user when you can reassure them? We give casual fans instant clarity, analysts deep xG, complete tax transparency at checkout, and safe soft-exits when they hesitate. That is how you turn passive sessions into confident actions that survive into Day-90 retention.',
    },
    {
      id: 4,
      badge: 'The Innovation: Pillar 1',
      title: 'Intent-Anchored Discovery (Eliminating Friction)',
      subtitle: 'Dynamic UX lenses that cater to first-time fans and 10-year specialists alike.',
      bulletPoints: [
        'Adaptive Intent Lens: Express Matchday (curated derbies like Dinamo vs Hajduk), Tactical Analytics (deep xG & H2H), or In-Play Momentum.',
        'In-situ "Clarity Snippets": Plain-language statistical facts (e.g. "Maksimir fortress: Dinamo conceded only 0.7 goals/match").',
        'Users find relevant entertainment in seconds without leaving the app for third-party stats sites.',
      ],
      visualMetric: {
        value: '1m 45s',
        label: 'Time to First Action (-58% faster)',
        color: 'text-sky-400',
      },
      speakerScript: 'Look at how this solves Discovery Friction. Instead of dumping 400 markets on a casual fan, our Intent Lens serves what they care about in one tap. Marco in Zagreb gets the Eternal Derby narrative in 10 seconds. Luka the analyst gets deep xG data. Time to first action drops from over 4 minutes to under 2 minutes.',
    },
    {
      id: 5,
      badge: 'The Innovation: Pillar 2',
      title: 'Zero-Pressure Final-Step Reassurance Flow',
      subtitle: 'Transforming betslip abandonment into confident actions and long-term trust.',
      bulletPoints: [
        'Transparent Fee & Tax Line-Item: In Croatia, winnings have a 10% statutory tax. Displaying net payout builds instant trust.',
        'Responsible Budget Check: Shows real-time percentage of self-set daily limit (e.g. "Uses 20% of your €25 limit").',
        'Zero-Pressure Alternatives: If the user hesitates, they can "Save to Watchlist" or "Track Odds Shifts" instead of leaving empty-handed.',
      ],
      visualMetric: {
        value: '+22%',
        label: 'Abandoned Betslips Recovered',
        color: 'text-emerald-400',
      },
      speakerScript: 'This is where most platforms lose the sale: the betslip. Users hesitate because they are afraid of hidden terms. We introduce the Zero-Pressure Reassurance Flow. We show the exact 10% Croatian tax deduction upfront so there are no surprises. And if they still want to think about it, they can save to their watchlist with one tap. That keeps the session valuable.',
    },
    {
      id: 6,
      badge: 'Deliverable D3',
      title: 'Quantified Business Outcome & ROI Analysis',
      subtitle: 'Rigorous financial model across FEG’s 5 CEE markets (Croatia, Czechia, Slovakia, Poland, Romania).',
      bulletPoints: [
        '5-Market Group Footprint: 10,000,000 monthly sessions across PSK.hr, Fortuna CZ, Fortuna SK, Fortuna PL, and Casa Pariurilor RO.',
        'Session Conversion Uplift: +3.6% uplift (14.2% -> 17.8%) via Adaptive Intent Lens.',
        'Final-Step Recovery: Recovers 22% of abandoned betslips, totaling +4.32 Million incremental completed actions annually.',
        'Net Financial Impact: +€3.52 Million annual net GGR uplift for FEG at an 8.5% bookmaker gross margin.',
        'Knowledge City GCC Cost-Value: €225k first-year CapEx/OpEx yields 1,464% ROI with full payback in 24 days.',
      ],
      visualMetric: {
        value: '+€3.52M',
        label: 'Annual Net GGR Uplift (5 FEG Markets)',
        color: 'text-emerald-400',
      },
      speakerScript: 'Judges, our economic model maps directly to FEG’s holding footprint across Croatia, Czech Republic, Slovakia, Poland, and Romania. Across 10 million monthly sessions, lifting conversion by 3.6% and recovering 22% of abandoned slips produces 4.3 million incremental actions. That delivers €3.52 million in annual net GGR. Against a €225k engineering cost for the FEG India GCC squad here in Hyderabad, this pays for itself in just 24 days.',
    },
    {
      id: 7,
      badge: 'Deliverable D4 & Guardrails',
      title: 'EU Compliance & Responsible Gaming by Design',
      subtitle: 'Embedded regulatory safeguards that protect players and FEG licenses.',
      bulletPoints: [
        'Full compliance with Croatian Zakon o igrama na sreću, Czech Act 186/2016, and EGBA European standards.',
        'Zero Dark Patterns: No countdown timers, no loss-chasing nudges, no pre-ticked checkboxes.',
        'Harmful-Play Sentinel: Erratic session velocity or chasing behavior triggers cool-down breathing cards rather than high-stakes parlays.',
        'GDPR Privacy First: Contextual scoring is ephemeral and in-session; no invasive surveillance.',
      ],
      visualMetric: {
        value: '100%',
        label: 'EGBA & EU Compliance Score',
        color: 'text-teal-400',
      },
      speakerScript: 'The hackathon brief gave us a strict guardrail: harmful-play indicators must not rise. We embedded compliance directly into the architecture. We explicitly banned fake urgency timers and loss-chasing nudges. If a player shows erratic session hopping, ClarityCore offers an empathetic cool-down. We protect FEG’s licenses across all EU jurisdictions.',
    },
    {
      id: 8,
      badge: 'Technical Feasibility',
      title: 'Seamless Integration on FEG Platforms',
      subtitle: 'A micro-frontend and API overlay built for FEG India GCC engineers.',
      bulletPoints: [
        'Drop-in SDK Architecture: Plugs directly on top of PSK.hr and Fortuna web/mobile apps without touching legacy trading backends.',
        'Session-only state: Operates client-side and via FEG data infrastructure in Hyderabad.',
        'Fastest time-to-market: 3 sprints of 4 engineers to rollout across PSK.hr staging and production.',
        'Tested directly against Stage environment: www-dc1.stage.psk.hr with credentials HackathonSTG01.',
      ],
      visualMetric: {
        value: '3 Sprints',
        label: 'Time to Full Production Rollout',
        color: 'text-amber-400',
      },
      speakerScript: 'How do we build this? Built as a product FEG can easily integrate. It is a lightweight micro-frontend overlay that wraps the existing betslip and match feeds without refactoring core trading engines. FEG India’s GCC squad in Knowledge City can ship this in 3 agile sprints.',
    },
    {
      id: 9,
      badge: 'The Winning Verdict',
      title: 'Why FEG ClarityCore™ Wins Challenge 01',
      subtitle: 'Complete alignment with FEG’s vision, metrics, and player safety.',
      bulletPoints: [
        'Complete Deliverables: D1 Working Prototype, D2 15-Min Scenarios, D3 Quantified Impact Case, D4 EU Compliance Note.',
        'High Score Coverage: 30% Business Impact + 20% Customer Experience + 15% Originality + 15% Feasibility + 10% Product + 10% Compliance.',
        'Ready for pilot testing tomorrow on stage environment.',
      ],
      visualMetric: {
        value: '₹1 Lakh',
        label: 'Ready for Winner Presentation',
        color: 'text-[#FFB800]',
      },
      speakerScript: 'To conclude: FEG ClarityCore turns passive browsing into confident, informed action through relevance and reassurance. We have a working prototype, tested scenarios, a €3.5M business case, and 100% EU compliance. Thank you, and we welcome your questions!',
    },
  ];

  const currentSlide = slides[currentSlideIndex];

  return (
    <div className="min-h-screen bg-[#001726] text-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Pitch Deck Top Bar */}
        <div className="bg-[#00223B] border border-[#003B64] rounded-2xl p-4 sm:p-5 shadow-xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 text-slate-950 p-2 rounded-xl">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  FEG Innovation Hackathon 2026
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs text-slate-300">T-Hub, Hyderabad</span>
              </div>
              <h1 className="text-base sm:text-lg font-black text-white">
                Challenge 01: Final Presentation Deck
              </h1>
            </div>
          </div>

          {/* Slide Navigator */}
          <div className="flex items-center gap-2 bg-[#001726] p-1.5 rounded-xl border border-[#003B64]">
            <button
              onClick={() => setCurrentSlideIndex(Math.max(0, currentSlideIndex - 1))}
              disabled={currentSlideIndex === 0}
              className="p-1.5 rounded-lg text-slate-300 hover:bg-[#002D4E] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono font-bold px-2 text-sky-400">
              Slide {currentSlideIndex + 1} of {slides.length}
            </span>
            <button
              onClick={() => setCurrentSlideIndex(Math.min(slides.length - 1, currentSlideIndex + 1))}
              disabled={currentSlideIndex === slides.length - 1}
              className="p-1.5 rounded-lg text-slate-300 hover:bg-[#002D4E] disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stage Credentials Quick Bar */}
        <div className="bg-[#002D4E] border border-amber-500/40 rounded-xl p-3 flex flex-wrap items-center justify-between text-xs text-slate-300 gap-3">
          <div className="flex items-center gap-2">
            <Key className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Stage Environment for Live Jury Testing:</strong> User: <code className="bg-slate-900 px-2 py-0.5 rounded text-amber-300 font-mono">{STAGE_CREDENTIALS_INFO.exampleUser}</code> • Password: <code className="bg-slate-900 px-2 py-0.5 rounded text-amber-300 font-mono">{STAGE_CREDENTIALS_INFO.examplePassword}</code>
            </span>
          </div>
          <a
            href={STAGE_CREDENTIALS_INFO.stageUrl}
            target="_blank"
            rel="noreferrer"
            className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
          >
            <span>Open Stage (www-dc1.stage.psk.hr)</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* The Slide Canvas */}
        <div className="bg-gradient-to-br from-[#00223B] to-[#001726] border-2 border-[#005088] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
          {/* Subtle Background Glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {/* Slide Header */}
          <div>
            <span className="bg-[#005088] text-sky-200 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-sky-400/30">
              {currentSlide.badge}
            </span>
            <h2 className="text-xl sm:text-3xl font-black text-white mt-3 tracking-tight">
              {currentSlide.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-1">
              {currentSlide.subtitle}
            </p>
          </div>

          {/* Slide Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
            {/* Bullet Points */}
            <div className="lg:col-span-8 space-y-4">
              {currentSlide.bulletPoints.map((bp, i) => (
                <div key={i} className="flex items-start gap-3 bg-[#001D33]/80 p-3.5 rounded-xl border border-[#003B64]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {bp}
                  </p>
                </div>
              ))}
            </div>

            {/* Visual Metric Callout */}
            {currentSlide.visualMetric && (
              <div className="lg:col-span-4 bg-[#002D4E] border border-[#005088] rounded-2xl p-6 text-center shadow-lg">
                <div className={`text-4xl sm:text-5xl font-black font-mono ${currentSlide.visualMetric.color}`}>
                  {currentSlide.visualMetric.value}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-semibold mt-2">
                  {currentSlide.visualMetric.label}
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700 text-[11px] text-slate-400">
                  Data-backed for FEG GCC & T-Hub evaluation
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Speaker Notes / Word-for-Word Script for the Non-Technical Presenter */}
        <div className="bg-[#00223B] border border-amber-500/40 rounded-2xl p-5 shadow-xl space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <MessageSquareQuote className="w-4 h-4" />
              <span>What You Say on Stage (Speaker Notes for Non-Technical Presenter)</span>
            </div>
            <button
              onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
              className="text-xs text-slate-400 hover:text-white"
            >
              {showSpeakerNotes ? 'Hide Notes' : 'Show Notes'}
            </button>
          </div>

          {showSpeakerNotes && (
            <div className="bg-[#001726] p-4 rounded-xl border border-[#003B64] text-xs sm:text-sm text-slate-200 leading-relaxed italic">
              "{currentSlide.speakerScript}"
            </div>
          )}
        </div>

        {/* Jury Q&A Cheatsheet Section */}
        <div className="bg-[#001F36] border border-[#004A7F] rounded-2xl p-5 shadow-xl space-y-3">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Anticipated Jury Questions & Winning Rebuttals</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="bg-[#001726] p-3 rounded-lg border border-slate-800 space-y-1">
              <strong className="text-white block">Q: "How is this not pressure?"</strong>
              <p className="text-slate-400 text-[11px]">
                "We never use countdowns or urgent prompts. We only provide price transparency and safe alternatives like watchlists, respecting user autonomy."
              </p>
            </div>
            <div className="bg-[#001726] p-3 rounded-lg border border-slate-800 space-y-1">
              <strong className="text-white block">Q: "How hard is integration?"</strong>
              <p className="text-slate-400 text-[11px]">
                "Built as a modular micro-frontend overlay that connects to existing betslip state. No core sportsbook engine modifications needed."
              </p>
            </div>
            <div className="bg-[#001726] p-3 rounded-lg border border-slate-800 space-y-1">
              <strong className="text-white block">Q: "Why will this lift D90 retention?"</strong>
              <p className="text-slate-400 text-[11px]">
                "Users who act with full clarity have zero buyer remorse. Trust leads to repeat sessions instead of churn."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
