import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Check, 
  ArrowRight, 
  Flame, 
  ChevronRight, 
  ThumbsUp, 
  RotateCcw,
  Zap
} from 'lucide-react';
import { BetSlipItem } from '../types';

interface SwipeAndBetModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBet: (item: BetSlipItem) => void;
}

interface SwipeCard {
  id: string;
  sport: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  time: string;
  marketName: string;
  selection: string;
  odds: number;
  aiReasoning: string;
  confidenceGrade: 'A' | 'B+' | 'Balanced';
  conversionHook: string;
}

const SWIPE_CARDS: SwipeCard[] = [
  {
    id: 'sw1',
    sport: 'Football',
    league: 'UEFA Champions League',
    homeTeam: 'Real Madrid',
    awayTeam: 'Inter Milan',
    time: 'Tomorrow 00:30',
    marketName: 'Basic offer 1X2',
    selection: 'Real Madrid (Home Win)',
    odds: 1.65,
    aiReasoning: 'Bernabéu factor: 84% home win rate in continental group/knockout matches.',
    confidenceGrade: 'A',
    conversionHook: 'Highest backing volume across FEG Central Europe (74% stake share)'
  },
  {
    id: 'sw2',
    sport: 'Football',
    league: 'Champions League',
    homeTeam: 'FC Porto',
    awayTeam: 'Man.City',
    time: 'Tomorrow 00:30',
    marketName: 'Player Prop Booster',
    selection: 'Erling Haaland to score anytime',
    odds: 1.90,
    aiReasoning: 'Haaland registers 1.25 expected goals (xG) per 90 in Champions League away legs.',
    confidenceGrade: 'A',
    conversionHook: 'Boosted from 1.80 -> 1.90 exclusively on PSK Golden Markets'
  },
  {
    id: 'sw3',
    sport: 'Football',
    league: 'SuperSport HNL',
    homeTeam: 'GNK Dinamo Zagreb',
    awayTeam: 'HNK Hajduk Split',
    time: 'Tonight 20:00 CEST',
    marketName: 'SuperSport HNL 1X2',
    selection: 'Dinamo Zagreb (Home Win)',
    odds: 1.85,
    aiReasoning: 'Dinamo conceded only 0.7 goals per home match this season at Maksimir.',
    confidenceGrade: 'A',
    conversionHook: 'Eternal Derby favorite with 4 wins in last 5 home derbies'
  },
  {
    id: 'sw4',
    sport: 'Football',
    league: 'England EFL Cup',
    homeTeam: 'Bournemouth',
    awayTeam: 'Lincoln',
    time: 'Tomorrow 00:15',
    marketName: 'EFL Cup 1X2',
    selection: 'Bournemouth (Home Win)',
    odds: 1.30,
    aiReasoning: 'Premier League depth dominance against League One opposition.',
    confidenceGrade: 'A',
    conversionHook: 'Accumulator foundation builder; hits in 91% of simulations'
  },
  {
    id: 'sw5',
    sport: 'Special Bets',
    league: 'Pop Culture & Gaming',
    homeTeam: 'Rockstar Games',
    awayTeam: 'GTA VI Launch',
    time: 'Nov 2026',
    marketName: 'Release Delay Special',
    selection: 'Yes (Delayed past Nov 19, 2026)',
    odds: 5.20,
    aiReasoning: 'Historical AAA development cycles frequently encounter final polishing buffers.',
    confidenceGrade: 'Balanced',
    conversionHook: 'Community favorite: 68.9% of PSK Arena players backed this outcome'
  }
];

export const SwipeAndBetModal: React.FC<SwipeAndBetModalProps> = ({
  isOpen,
  onClose,
  onAddBet,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [acceptedCount, setAcceptedCount] = useState(0);

  if (!isOpen) return null;

  const currentCard = SWIPE_CARDS[currentIndex];
  const isFinished = currentIndex >= SWIPE_CARDS.length;

  const handleSwipeRight = () => {
    if (!currentCard) return;
    onAddBet({
      id: `swipe-${currentCard.id}-${Date.now()}`,
      matchId: currentCard.id,
      matchTitle: `${currentCard.homeTeam} vs ${currentCard.awayTeam}`,
      selection: currentCard.selection,
      odds: currentCard.odds,
      marketName: currentCard.marketName,
      clarityNote: currentCard.aiReasoning,
      confidenceGrade: currentCard.confidenceGrade,
      stakeSharePct: 70,
    });
    setAcceptedCount((prev) => prev + 1);
    setCurrentIndex((prev) => prev + 1);
  };

  const handleSwipeLeft = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setAcceptedCount(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#001A2C] border border-[#003B64] rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="p-4 bg-[#00223B] border-b border-[#003B64] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-[#FFB800] text-black font-black flex items-center justify-center text-sm shadow">
              ⚡
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-white font-bold text-base tracking-wide">
                  Swipe & Bet™
                </h3>
                <span className="bg-red-500 text-white text-[10px] font-black uppercase px-1.5 py-0.5 rounded">
                  NEW
                </span>
              </div>
              <p className="text-[11px] text-slate-400">
                2-Tap Fast Bet Conversion • Pick or Pass
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-[#003355] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 flex-1 flex flex-col items-center justify-center min-h-[380px]">
          {!isFinished ? (
            <div className="w-full flex flex-col h-full justify-between">
              {/* Card Indicator */}
              <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                <span>Prijedlog {currentIndex + 1} od {SWIPE_CARDS.length}</span>
                <span className="text-emerald-400 font-medium">
                  {acceptedCount} dodano na listić
                </span>
              </div>

              {/* Active Betting Card */}
              <div className="bg-[#002845] border-2 border-[#004A7F] rounded-2xl p-5 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#FFB800] text-black text-[10px] font-black uppercase px-3 py-1 rounded-bl-xl shadow-sm">
                  {currentCard.league}
                </div>

                <div className="text-xs text-sky-300 font-semibold mb-1">
                  {currentCard.time}
                </div>

                <h4 className="text-lg font-black text-white leading-tight mb-2">
                  {currentCard.homeTeam} vs {currentCard.awayTeam}
                </h4>

                <div className="bg-[#001726] border border-[#003355] rounded-xl p-3.5 my-3 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      {currentCard.marketName}
                    </div>
                    <div className="text-base font-bold text-white mt-0.5">
                      {currentCard.selection}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-medium">Tečaj</span>
                    <span className="text-xl font-black text-[#FFB800]">
                      {currentCard.odds.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* ClarityCore Conversion Assist info */}
                <div className="bg-[#001E33] border border-sky-600/30 rounded-lg p-3 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 text-sky-400 font-bold mb-1 text-[11px]">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>ClarityCore™ Decision Intelligence</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-300">
                    {currentCard.aiReasoning}
                  </p>
                  <div className="mt-2 text-[10px] font-semibold text-emerald-400 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-emerald-400" />
                    <span>{currentCard.conversionHook}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Pass vs Add */}
              <div className="grid grid-cols-2 gap-3 mt-5">
                <button
                  type="button"
                  onClick={handleSwipeLeft}
                  className="py-3 px-4 rounded-xl border border-slate-600 bg-[#001F33] hover:bg-slate-700/60 text-slate-300 font-bold text-sm transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4 text-red-400" />
                  <span>Preskoči (Pass)</span>
                </button>

                <button
                  type="button"
                  onClick={handleSwipeRight}
                  className="py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-black text-sm transition-all active:scale-95 shadow-lg shadow-emerald-900/40 flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Dodaj na Listić</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-500/20 border border-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-400">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-bold text-white mb-1">
                Sve ponude pregledane!
              </h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto mb-6">
                Dodao/la si <strong className="text-emerald-400">{acceptedCount}</strong> odabira na svoj listić. Provjeri svoj listić desno i unesi željeni ulog.
              </p>

              <div className="flex gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 bg-[#00223B] border border-[#003B64] hover:bg-[#003355] text-slate-300 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Pregledaj ponovno</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-2 bg-[#1472e6] hover:bg-[#1982ff] text-white rounded-lg text-xs font-bold transition-colors shadow-md"
                >
                  Idi na Listić
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
