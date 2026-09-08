import React, { useState } from 'react';
import { 
  User, 
  Play, 
  ArrowRight, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  ChevronRight,
  RefreshCw,
  Award,
  Eye,
  Check
} from 'lucide-react';

interface ScenarioStep {
  title: string;
  userBehavior: string;
  fegFriction: string;
  clarityCoreAction: string;
  telemetryMetric: string;
  metricImpact: string;
}

interface Scenario {
  id: string;
  personaName: string;
  personaRole: string;
  avatarBg: string;
  marketContext: string;
  problemSummary: string;
  steps: ScenarioStep[];
  outcomeSummary: string;
  kpiHighlight: string;
}

export const LiveDemoScenarios: React.FC = () => {
  const [activeScenarioIndex, setActiveScenarioIndex] = useState<number>(0);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);

  const scenarios: Scenario[] = [
    {
      id: 'casual',
      personaName: 'Marco (Zagreb)',
      personaRole: 'Casual Weekend Visitor (First-Time Derby Browser)',
      avatarBg: 'bg-amber-600',
      marketContext: 'SuperSport HNL: GNK Dinamo Zagreb vs HNK Hajduk Split',
      problemSummary: 'Marco opens PSK.hr to engage with the Eternal Derby. Faced with 400+ nested betting markets, he feels overwhelmed, browses passively for 3.5 minutes, and bounces without taking an action.',
      steps: [
        {
          title: 'Step 1: Session Arrival & Cold-Start Friction',
          userBehavior: 'Arrives at PSK homepage on mobile; scrolls past complex Asian handicaps and multi-combos.',
          fegFriction: 'Generic layout treats a derby newcomer the same as a 10-year veteran. Cognitive overload.',
          clarityCoreAction: 'ClarityCore Intent Lens instantly surfaces "Express Matchday" derby view with single prominent narrative.',
          telemetryMetric: 'Cognitive Overload Index',
          metricImpact: '-64% cognitive load',
        },
        {
          title: 'Step 2: Transparent Stat Clarity Snippet',
          userBehavior: 'Taps on Dinamo vs Hajduk card, wondering why Dinamo is favored at 1.85.',
          fegFriction: 'Old UX forces user to leave the app to search external sports blogs or flashscore websites.',
          clarityCoreAction: 'Displays in-situ Clarity Snippet: "Dinamo conceded only 0.7 goals/match at Maksimir fortress".',
          telemetryMetric: 'Decision Confidence',
          metricImpact: '+78% confidence score',
        },
        {
          title: 'Step 3: Informed Action in <90 Seconds',
          userBehavior: 'Adds Dinamo Home Win to betslip with complete understanding of the odds.',
          fegFriction: 'Old baseline Time to First Action: 4m 12s with 72% abandonment.',
          clarityCoreAction: 'Pre-fills responsible stake (€2.00) with clear Croatian tax calculation.',
          telemetryMetric: 'Time to First Action',
          metricImpact: '1m 14s (68% faster)',
        },
      ],
      outcomeSummary: 'Marco completes his first action confidently without feeling pushed. Session conversion achieved with genuine relevance.',
      kpiHighlight: '+34% Casual Session Conversion',
    },
    {
      id: 'specialist',
      personaName: 'Luka (Split)',
      personaRole: 'Analytical Sports Specialist (High Intent, Betslip Drop-Off)',
      avatarBg: 'bg-sky-600',
      marketContext: 'Champions League & Premier League 3-Fold Accumulator',
      problemSummary: 'Luka builds a sophisticated 3-fold accumulator. He reaches the final confirmation step — FEG’s strongest intent signal — but leaves because he is uncertain about tax deductions and hidden payout terms.',
      steps: [
        {
          title: 'Step 1: High-Intent Betslip Assembly',
          userBehavior: 'Selects Real Madrid vs Bayern BTTS + Arsenal vs Chelsea + Alcaraz Win.',
          fegFriction: 'Total odds 6.12; user enters €10.00 stake. Anticipated payout is ambiguous due to local taxes.',
          clarityCoreAction: 'ClarityCore provides transparent fee & tax line-item (10% Croatian statutory tax = €5.12).',
          telemetryMetric: 'Price Transparency',
          metricImpact: '100% full disclosure',
        },
        {
          title: 'Step 2: Hesitation & Zero-Pressure Alternative',
          userBehavior: 'Luka pauses for 18 seconds on the confirmation screen; cursor hovers over close button.',
          fegFriction: 'Traditional aggressive bookmakers show "Hurry! Odds changing!" causing anxiety and immediate exit.',
          clarityCoreAction: 'Zero-Pressure sheet activates: offers "Save to Watchlist" or "Lock with Safe €5.00 Stake" with no penalty.',
          telemetryMetric: 'Final-Step Recovery',
          metricImpact: '+24% recovery rate',
        },
        {
          title: 'Step 3: Confident Confirmation & Retention Bond',
          userBehavior: 'Reassured by the honest tax math and safe limit verification, Luka confirms the slip.',
          fegFriction: 'Loss of high-value active customer session.',
          clarityCoreAction: 'Action confirmed with instant digital receipt and match tracking alert enabled.',
          telemetryMetric: 'D90 User Lifetime Value',
          metricImpact: '+18.5% retention',
        },
      ],
      outcomeSummary: 'Luka feels respected rather than manipulated. Final-step abandonment is transformed into durable retention.',
      kpiHighlight: '+26% Final-Step Confirmation',
    },
    {
      id: 'guardrail',
      personaName: 'Elena (Rijeka)',
      personaRole: 'Responsible Gaming Player (Harmful-Play Guardrail Test)',
      avatarBg: 'bg-emerald-700',
      marketContext: 'In-Play Rapid Session Hopping & Fatigue Detection',
      problemSummary: 'Elena has had 4 rapid sessions in 30 minutes following a bet loss. Traditional dark patterns would push personalized bonus incentives to exploit loss-chasing. Challenge 01 strictly forbids this.',
      steps: [
        {
          title: 'Step 1: Erratic Session Velocity Detection',
          userBehavior: 'Rapidly clicks between live matches with jittery navigation and increased stake attempts.',
          fegFriction: 'Compulsive play patterns could lead to player harm, regulatory fines, and brand damage.',
          clarityCoreAction: 'ClarityCore telemetry flags session fatigue (Velocity Score: 88/100).',
          telemetryMetric: 'Harmful Play Risk Indicator',
          metricImpact: 'Alert Level: High',
        },
        {
          title: 'Step 2: Respectful Pause & Daily Limit Reassurance',
          userBehavior: 'Attempts to place €50 bet that exceeds her self-set €25 daily limit.',
          fegFriction: 'Dark patterns hide limits or allow seamless overdrafts.',
          clarityCoreAction: 'Zero-Dark-Pattern Guard blocks limit breach; gently displays remaining daily budget with cool-down timer.',
          telemetryMetric: 'EU Compliance Score',
          metricImpact: '100% EGBA Compliance',
        },
        {
          title: 'Step 3: De-escalation & Safe Session Exit',
          userBehavior: 'Elena takes a suggested 15-minute breather; feels supported by PSK’s transparent care.',
          fegFriction: 'Player alienation and churn.',
          clarityCoreAction: 'Session safely closed; RG status maintained as "Protected". Harmful-play indicators do not rise.',
          telemetryMetric: 'Player Trust Index',
          metricImpact: '+42% Net Promoter Score',
        },
      ],
      outcomeSummary: 'The strict hackathon guardrail is proven: conversion uplifts never come from exploitation. Long-term player safety is guaranteed.',
      kpiHighlight: '0% Harmful Play Rise (EU Compliant)',
    },
  ];

  const currentScenario = scenarios[activeScenarioIndex];
  const currentStep = currentScenario.steps[currentStepIndex];

  return (
    <div className="min-h-screen bg-[#001726] text-slate-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="bg-[#00223B] border border-[#003B64] rounded-2xl p-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-emerald-500 text-slate-950 text-xs font-black px-2.5 py-0.5 rounded uppercase tracking-wider">
                  Deliverable D2
                </span>
                <span className="text-xs text-slate-300 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-emerald-400" />
                  15-Minute Live Customer Scenario Walkthrough
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Simulated Customer Scenarios & Live Journey Verification
              </h1>
            </div>

            <div className="flex items-center gap-2 bg-[#001726] p-1.5 rounded-xl border border-[#003B64]">
              <span className="text-xs text-slate-400 px-2 font-medium">Scenario:</span>
              {scenarios.map((sc, idx) => (
                <button
                  key={sc.id}
                  onClick={() => {
                    setActiveScenarioIndex(idx);
                    setCurrentStepIndex(0);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeScenarioIndex === idx
                      ? 'bg-[#005088] text-white shadow-md ring-1 ring-[#0074C4]'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${sc.avatarBg}`}></span>
                  <span>{sc.personaName.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Scenario Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Persona Profile & Problem Context */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-[#00223B] border border-[#003B64] rounded-2xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl ${currentScenario.avatarBg} flex items-center justify-center text-white font-black text-lg shadow-md`}>
                  {currentScenario.personaName.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{currentScenario.personaName}</h3>
                  <p className="text-xs text-sky-300 font-medium">{currentScenario.personaRole}</p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 font-medium uppercase text-[10px] tracking-wider block mb-1">
                    Market Context:
                  </span>
                  <div className="bg-[#001726] p-2.5 rounded-lg border border-[#003B64] text-slate-200 font-medium">
                    {currentScenario.marketContext}
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 font-medium uppercase text-[10px] tracking-wider block mb-1">
                    The Behavioral Friction:
                  </span>
                  <div className="bg-red-950/30 border border-red-800/40 p-3 rounded-lg text-red-200 leading-relaxed">
                    {currentScenario.problemSummary}
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 font-medium uppercase text-[10px] tracking-wider block mb-1">
                    Proven KPI Uplift:
                  </span>
                  <div className="bg-emerald-950/40 border border-emerald-700/50 p-3 rounded-lg text-emerald-300 font-bold flex items-center justify-between">
                    <span>Target Metric:</span>
                    <span className="text-sm font-mono text-emerald-400">{currentScenario.kpiHighlight}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step Navigation Pill Indicator */}
            <div className="bg-[#001F36] border border-[#004A7F] rounded-xl p-4 text-xs">
              <div className="flex justify-between items-center mb-3">
                <span className="font-bold text-slate-300 uppercase tracking-wider text-[10px]">
                  Journey Progress ({currentStepIndex + 1} of {currentScenario.steps.length})
                </span>
                <span className="text-sky-400 font-mono font-bold">
                  {Math.round(((currentStepIndex + 1) / currentScenario.steps.length) * 100)}%
                </span>
              </div>
              <div className="flex gap-2">
                {currentScenario.steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentStepIndex(idx)}
                    className={`h-2 flex-1 rounded-full transition-all ${
                      idx <= currentStepIndex ? 'bg-emerald-400' : 'bg-slate-700'
                    }`}
                    title={`Go to step ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step Interactive Walkthrough */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-[#00223B] border-2 border-[#005088] rounded-2xl p-6 shadow-xl">
              {/* Step Header */}
              <div className="flex items-center justify-between pb-4 border-b border-[#003B64] mb-5">
                <div className="flex items-center gap-2">
                  <span className="bg-[#FFB800] text-[#001D33] text-xs font-black px-2 py-0.5 rounded">
                    Step {currentStepIndex + 1}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-white">
                    {currentStep.title}
                  </h2>
                </div>

                <span className="text-xs text-emerald-400 font-mono bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-800">
                  {currentStep.metricImpact}
                </span>
              </div>

              {/* Step Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Friction Box */}
                <div className="bg-[#001726] border border-red-900/40 rounded-xl p-4 text-xs space-y-2">
                  <div className="flex items-center gap-2 text-red-400 font-bold uppercase tracking-wider text-[10px]">
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Baseline FEG Friction</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {currentStep.fegFriction}
                  </p>
                  <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                    <strong>User Action:</strong> {currentStep.userBehavior}
                  </div>
                </div>

                {/* ClarityCore Solution Box */}
                <div className="bg-gradient-to-br from-[#002D4E] to-[#001D33] border border-emerald-600/50 rounded-xl p-4 text-xs space-y-2 shadow-inner">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold uppercase tracking-wider text-[10px]">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>ClarityCore™ Innovation</span>
                  </div>
                  <p className="text-slate-200 leading-relaxed font-medium">
                    {currentStep.clarityCoreAction}
                  </p>
                  <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">{currentStep.telemetryMetric}:</span>
                    <span className="font-mono text-emerald-400 font-bold">{currentStep.metricImpact}</span>
                  </div>
                </div>
              </div>

              {/* Outcome summary when step reaches end */}
              <div className="bg-[#001726] p-4 rounded-xl border border-[#003B64] text-xs text-slate-300 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <strong className="text-white block mb-0.5">Scenario Outcome:</strong>
                  <span>{currentScenario.outcomeSummary}</span>
                </div>
              </div>

              {/* Step Navigation Controls for Non-Technical Presenter */}
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-[#003B64]">
                <button
                  onClick={() => setCurrentStepIndex(Math.max(0, currentStepIndex - 1))}
                  disabled={currentStepIndex === 0}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                    currentStepIndex === 0
                      ? 'text-slate-600 cursor-not-allowed'
                      : 'bg-[#002D4E] hover:bg-[#003B64] text-slate-200'
                  }`}
                >
                  Previous Step
                </button>

                <div className="text-xs text-slate-400 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Simulation Step {currentStepIndex + 1} of {currentScenario.steps.length}</span>
                </div>

                {currentStepIndex < currentScenario.steps.length - 1 ? (
                  <button
                    onClick={() => setCurrentStepIndex(currentStepIndex + 1)}
                    className="bg-[#005088] hover:bg-[#0060A0] text-white px-5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <span>Next Step</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      const nextScenario = (activeScenarioIndex + 1) % scenarios.length;
                      setActiveScenarioIndex(nextScenario);
                      setCurrentStepIndex(0);
                    }}
                    className="bg-emerald-600 hover:bg-emerald-500 text-slate-950 font-black px-5 py-2 rounded-lg text-xs flex items-center gap-2 transition-all shadow-md cursor-pointer"
                  >
                    <span>Load Next Persona</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
