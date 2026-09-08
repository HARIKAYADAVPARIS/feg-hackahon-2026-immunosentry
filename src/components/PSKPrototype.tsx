import React, { useState } from 'react';
import { 
  SAMPLE_MATCHES, 
  PSK_GOLDEN_MARKETS, 
  PSK_PLAYER_SPECIALS, 
  PSK_SPECIAL_BETS, 
  PSK_ARENA_TICKETS 
} from '../data/mockData';
import { 
  SportsMatch, 
  BetSlipItem, 
  SessionMetrics, 
  ArenaTicket, 
  GoldenMarketOffer,
  ActiveTicket
} from '../types';
import { 
  Sparkles, 
  Info, 
  CheckCircle2, 
  TrendingUp, 
  Shield, 
  ChevronRight, 
  Clock, 
  Bookmark, 
  Bell, 
  AlertCircle,
  HelpCircle,
  X,
  ArrowRight,
  Flame,
  Filter,
  Check,
  Star,
  Copy,
  Zap,
  Eye,
  Search,
  Smartphone,
  Trophy,
  Users,
  Layers,
  ChevronDown,
  Ticket
} from 'lucide-react';
import { PSKFooter } from './PSKFooter';
import { SwipeAndBetModal } from './SwipeAndBetModal';
import { MyTicketsModal } from './MyTicketsModal';

interface PSKPrototypeProps {
  metrics: SessionMetrics;
  setMetrics: React.Dispatch<React.SetStateAction<SessionMetrics>>;
}

export const PSKPrototype: React.FC<PSKPrototypeProps> = ({ metrics, setMetrics }) => {
  // Navigation & Sub-views
  const [pskActiveTab, setPskActiveTab] = useState<'sport' | 'live' | 'arena' | 'specials'>('sport');
  const [timeFilter, setTimeFilter] = useState<'LIVE' | 'TODAY' | '1H' | '3H' | 'TOMORROW' | 'ALL'>('ALL');
  const [selectedSport, setSelectedSport] = useState<string>('all');
  const [selectedLeagueChip, setSelectedLeagueChip] = useState<string>('all');
  
  // ClarityCore Innovation Toggle (Judges can toggle ON/OFF to see standard vs ClarityCore-enhanced UX)
  const [clarityCoreEnabled, setClarityCoreEnabled] = useState<boolean>(true);
  const [activeIntent, setActiveIntent] = useState<'express' | 'analytical' | 'inplay'>('express');
  const [expandedClarityMatchId, setExpandedClarityMatchId] = useState<string | null>('rm-int');

  // Swipe & Bet Modal
  const [isSwipeModalOpen, setIsSwipeModalOpen] = useState<boolean>(false);

  // Community Arena detail modal
  const [viewingArenaTicket, setViewingArenaTicket] = useState<ArenaTicket | null>(null);

  // Language Switcher (Croatian PSK authentic vs English for international judges)
  const [language, setLanguage] = useState<'HR' | 'EN'>('HR');
  const [userBalance, setUserBalance] = useState<number>(148.50);
  const [isMyTicketsOpen, setIsMyTicketsOpen] = useState<boolean>(false);

  // Active placed & in-play tickets for Post-Bet retention
  const [activeTickets, setActiveTickets] = useState<ActiveTicket[]>([
    {
      id: 'ticket-live-1',
      ticketNumber: 'PSK-HR-789421',
      placedAt: 'Danas 20:15',
      stakeEUR: 15.00,
      totalOdds: 3.85,
      potentialPayoutEUR: 57.75,
      status: 'in_play',
      cashOutValueEUR: 38.20,
      cashOutRationale: 'Real Madrid vodi 1:0 (64\') protiv Intera, no Inter povećava napadački pritisak (+1.4 xG). Prihvati 254% povrat uloga prije završnih 25 minuta.',
      selections: [
        {
          matchTitle: 'Real Madrid vs Inter Milan',
          selection: 'Real Madrid (Pobjeda 1)',
          odds: 1.65,
          score: '1 - 0',
          minute: "64'",
          status: 'live',
          isWinning: true
        },
        {
          matchTitle: 'Porto vs Manchester City',
          selection: 'Oba tima daju gol (GG / BTTS)',
          odds: 1.80,
          score: '1 - 1',
          minute: "72'",
          status: 'live',
          isWinning: true
        }
      ]
    },
    {
      id: 'ticket-live-2',
      ticketNumber: 'PSK-HR-452109',
      placedAt: 'Danas 18:30',
      stakeEUR: 10.00,
      totalOdds: 2.40,
      potentialPayoutEUR: 24.00,
      status: 'cashed_out',
      cashOutValueEUR: 19.50,
      cashOutRationale: 'Prihvaćen siguran dobitak u 75. minuti.',
      selections: [
        {
          matchTitle: 'Dinamo Zagreb vs Hajduk Split',
          selection: 'Dinamo Zagreb (Pobjeda 1)',
          odds: 2.40,
          score: '2 - 0',
          minute: 'FT',
          status: 'finished',
          isWinning: true
        }
      ]
    }
  ]);

  // Betslip state (Croatian PSK style)
  const [betslipTab, setBetslipTab] = useState<number>(1);
  const [ticketType, setTicketType] = useState<'plain' | 'system'>('plain');
  const [betslip, setBetslip] = useState<BetSlipItem[]>([
    {
      id: 'init-1',
      matchId: 'rm-int',
      matchTitle: 'Real Madrid vs Inter Milan',
      selection: 'Real Madrid (Home Win)',
      odds: 1.65,
      marketName: 'Basic offer 1X2',
      clarityNote: 'Bernabéu factor: 84% home win rate in continental knockout/group fixtures',
      confidenceGrade: 'A',
      stakeSharePct: 74
    }
  ]);
  const [stake, setStake] = useState<number>(10);
  const [showConfirmationSuccess, setShowConfirmationSuccess] = useState<boolean>(false);
  const [savedToWatchlist, setSavedToWatchlist] = useState<boolean>(false);
  const [alertSet, setAlertSet] = useState<boolean>(false);
  const [copyFeedback, setCopyFeedback] = useState<string | null>(null);

  // Filter matches based on timeFilter, selectedSport, and selectedLeagueChip
  const filteredMatches = SAMPLE_MATCHES.filter((m) => {
    if (pskActiveTab === 'live' && !m.isLive) return false;
    if (timeFilter === 'LIVE' && !m.isLive) return false;
    if (timeFilter === 'TODAY' && m.timeCategory !== 'TODAY' && !m.isLive) return false;
    if (timeFilter === 'TOMORROW' && m.timeCategory !== 'TOMORROW') return false;
    if (selectedSport !== 'all' && m.sport !== selectedSport) return false;
    if (selectedLeagueChip !== 'all' && !m.league.toLowerCase().includes(selectedLeagueChip.toLowerCase())) return false;
    return true;
  });

  // Calculate Betslip odds and net potential payout with transparent Croatian tax calculation
  const totalOdds = betslip.reduce((acc, item) => acc * item.odds, 1);
  const grossReturn = (stake * totalOdds);
  const grossProfit = Math.max(0, grossReturn - stake);
  // Croatian Tax Law (Zakon o igrama na sreću): 10% on profit up to €1,327
  const estimatedTax = grossProfit * 0.10;
  const netReturn = grossReturn - estimatedTax;

  const handleAddSelection = (
    matchId: string, 
    matchTitle: string, 
    selectionName: string, 
    odds: number, 
    marketName: string,
    clarityNote?: string,
    confidenceGrade?: 'A' | 'B+' | 'Balanced'
  ) => {
    const existingIndex = betslip.findIndex((item) => item.matchId === matchId && item.selection === selectionName);
    
    if (existingIndex > -1) {
      // Toggle off if already selected
      setBetslip(betslip.filter((_, idx) => idx !== existingIndex));
      return;
    }

    const newItem: BetSlipItem = {
      id: `slip-${Date.now()}-${Math.random()}`,
      matchId,
      matchTitle,
      selection: selectionName,
      odds,
      marketName,
      clarityNote: clarityNote || 'Statistically backed selection with high backing volume',
      confidenceGrade: confidenceGrade || 'A',
    };

    setBetslip([...betslip, newItem]);

    // Update SQI telemetry
    setMetrics((prev) => ({
      ...prev,
      actionsCompleted: prev.actionsCompleted + 1,
      sqiScore: Math.min(98, prev.sqiScore + 4),
      confidenceIndicator: Math.min(96, prev.confidenceIndicator + 5),
    }));
  };

  const handleRemoveSelection = (itemId: string) => {
    setBetslip(betslip.filter((item) => item.id !== itemId));
  };

  const handleClearSlip = () => {
    setBetslip([]);
  };

  const handleCopyArenaTicket = (ticket: ArenaTicket) => {
    const newItems: BetSlipItem[] = ticket.selections.map((sel, idx) => ({
      id: `arena-${ticket.id}-${idx}-${Date.now()}`,
      matchId: sel.matchId,
      matchTitle: sel.matchTitle,
      selection: sel.selection,
      odds: sel.odds,
      marketName: sel.marketName,
      clarityNote: sel.clarityNote,
      confidenceGrade: 'A'
    }));

    setBetslip(newItems);
    setStake(ticket.stakeEUR);
    setCopyFeedback(`Listić od @${ticket.username} uspješno kopiran! (${ticket.selections.length} događaja)`);
    setTimeout(() => setCopyFeedback(null), 4000);

    setMetrics((prev) => ({
      ...prev,
      actionsCompleted: prev.actionsCompleted + 1,
      sqiScore: Math.min(100, prev.sqiScore + 8),
      frictionPointsAvoided: prev.frictionPointsAvoided + 2,
    }));
  };

  const handleCashOut = (ticketId: string, amount: number) => {
    setUserBalance((prev) => prev + amount);
    setActiveTickets((prev) =>
      prev.map((t) =>
        t.id === ticketId
          ? {
              ...t,
              status: 'cashed_out' as const,
              cashOutValueEUR: amount
            }
          : t
      )
    );
    setMetrics((prev) => ({
      ...prev,
      actionsCompleted: prev.actionsCompleted + 1,
      sqiScore: Math.min(100, prev.sqiScore + 4),
      frictionPointsAvoided: prev.frictionPointsAvoided + 2
    }));
  };

  const handleConfirmAction = () => {
    if (betslip.length === 0) return;

    // Deduct stake from balance
    setUserBalance((prev) => Math.max(0, prev - stake));

    // Save as active ticket for tracking
    const newActiveTicket: ActiveTicket = {
      id: `ticket-${Date.now()}`,
      ticketNumber: `PSK-HR-${Math.floor(100000 + Math.random() * 900000)}`,
      placedAt: language === 'HR' ? 'Upravo uplaćeno' : 'Just placed',
      stakeEUR: stake,
      totalOdds: Number(totalOdds.toFixed(2)),
      potentialPayoutEUR: Number(netReturn.toFixed(2)),
      status: 'in_play',
      cashOutValueEUR: Number((stake * 0.94).toFixed(2)),
      cashOutRationale: language === 'HR'
        ? 'Listić je aktivan u realnom vremenu. Dinamički ClarityCore Cash-Out automatski prati promjene rezultata.'
        : 'Ticket is active in real-time. Dynamic ClarityCore Cash-Out tracks live match momentum.',
      selections: betslip.map((b) => ({
        matchTitle: b.matchTitle,
        selection: b.selection,
        odds: b.odds,
        status: 'upcoming' as const,
        isWinning: true
      }))
    };

    setActiveTickets((prev) => [newActiveTicket, ...prev]);
    setShowConfirmationSuccess(true);

    setMetrics((prev) => ({
      ...prev,
      actionsCompleted: prev.actionsCompleted + 1,
      sqiScore: 100,
      frictionPointsAvoided: prev.frictionPointsAvoided + 3,
    }));
  };

  const handleSaveWatchlist = () => {
    setSavedToWatchlist(true);
    setMetrics((prev) => ({
      ...prev,
      sqiScore: Math.min(96, prev.sqiScore + 4),
      frictionPointsAvoided: prev.frictionPointsAvoided + 1,
    }));
    setTimeout(() => setSavedToWatchlist(false), 3000);
  };

  const handleSetAlert = () => {
    setAlertSet(true);
    setTimeout(() => setAlertSet(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#001726] text-slate-100 flex flex-col font-sans">
      {/* 1. TOP MINI UTILITY BAR (Matches Official PSK.hr Screenshot 1) */}
      <div className="bg-[#00121F] border-b border-[#002845] text-slate-400 text-xs px-4 py-1.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left utility links */}
          <div className="flex items-center space-x-3 sm:space-x-4 text-[11px]">
            <span className="flex items-center gap-1 hover:text-white cursor-pointer transition-colors">
              <Smartphone className="w-3 h-3 text-[#FFB800]" />
              <span className="hidden sm:inline">
                {language === 'HR' ? 'Mobilna aplikacija' : 'Mobile App'}
              </span>
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              {language === 'HR' ? 'Rezultati' : 'Results'}
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              {language === 'HR' ? 'Statistika' : 'Stats'}
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              {language === 'HR' ? 'Vijesti' : 'News'}
            </span>
            <span className="hover:text-white cursor-pointer transition-colors hidden md:inline text-rose-400 font-medium">
              Pokaži srce.
            </span>
            <span className="hover:text-white cursor-pointer transition-colors hidden md:inline">Klub prvaka</span>
            <span className="hover:text-white cursor-pointer transition-colors hidden lg:inline">Pomoć</span>
            <span className="hover:text-white cursor-pointer transition-colors hidden lg:inline">Poslovnice</span>
          </div>

          {/* Right account & action items */}
          <div className="flex items-center space-x-2 sm:space-x-3 text-xs">
            {/* Language Switcher */}
            <div className="flex items-center bg-[#001D33] rounded-md border border-[#003B64] p-0.5 text-[11px] font-bold">
              <button
                type="button"
                onClick={() => setLanguage('HR')}
                className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                  language === 'HR'
                    ? 'bg-[#1472e6] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Hrvatski jezik (PSK.hr)"
              >
                🇭🇷 HR
              </button>
              <button
                type="button"
                onClick={() => setLanguage('EN')}
                className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                  language === 'EN'
                    ? 'bg-[#1472e6] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="English Language"
              >
                🇬🇧 EN
              </button>
            </div>

            {/* My Active Tickets Trigger Button */}
            <button
              type="button"
              onClick={() => setIsMyTicketsOpen(true)}
              className="flex items-center gap-1.5 bg-[#002845] hover:bg-[#003B64] px-2.5 py-1 rounded border border-[#004B80] text-xs font-bold text-sky-200 transition-colors cursor-pointer shadow-sm"
              title={language === 'HR' ? 'Pregledaj aktivne listiće i cash out' : 'View active tickets and cash out'}
            >
              <Ticket className="w-3.5 h-3.5 text-[#FFB800]" />
              <span className="hidden sm:inline">
                {language === 'HR' ? 'Moji Listići' : 'My Tickets'}
              </span>
              <span className="bg-[#FFB800] text-black text-[10px] font-black px-1.5 rounded-full">
                {activeTickets.filter((t) => t.status === 'in_play').length}
              </span>
            </button>

            <div className="flex items-center gap-1.5 bg-[#001D33] px-2.5 py-0.5 rounded border border-[#003B64]">
              <span className="text-slate-400 text-[11px] hidden sm:inline">
                {language === 'HR' ? 'Stanje:' : 'Balance:'}
              </span>
              <span className="font-mono text-emerald-400 font-bold">€{userBalance.toFixed(2)}</span>
            </div>

            <button 
              type="button"
              className="text-slate-300 hover:text-white text-xs font-semibold px-2 py-0.5 hidden sm:inline"
            >
              {language === 'HR' ? 'REGISTRACIJA' : 'REGISTER'}
            </button>

            <button
              type="button"
              className="bg-[#1472e6] hover:bg-[#1982ff] text-white text-xs font-bold px-3 py-1 rounded transition-colors shadow-sm"
            >
              {language === 'HR' ? 'PRIJAVA' : 'LOGIN'}
            </button>
          </div>
        </div>
      </div>

      {/* 2. PRIMARY PSK BRAND & NAVIGATION BAR (Matches Official PSK.hr Screenshot 1) */}
      <div className="bg-[#001E33] border-b border-[#003554] px-4 py-2 sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo & Main Tabs */}
          <div className="flex items-center space-x-4 lg:space-x-6 overflow-x-auto no-scrollbar">
            {/* PSK Brand Badge */}
            <div className="flex items-center gap-1.5 cursor-pointer shrink-0">
              <span className="bg-[#1472e6] text-white italic font-black text-xl px-2.5 py-0.5 rounded tracking-tighter shadow-sm border border-sky-400/40">
                PSK<span className="text-[#FFB800]">.hr</span>
              </span>
            </div>

            {/* Navigation Tabs */}
            <div className="flex items-center space-x-1 sm:space-x-2 text-xs font-bold uppercase tracking-wider shrink-0">
              <button
                type="button"
                onClick={() => setPskActiveTab('sport')}
                className={`px-3 py-1.5 rounded transition-all ${
                  pskActiveTab === 'sport'
                    ? 'bg-[#1472e6] text-white shadow'
                    : 'text-slate-300 hover:text-white hover:bg-[#002B49]'
                }`}
              >
                {language === 'HR' ? 'SPORT' : 'SPORTS'}
              </button>

              <button
                type="button"
                onClick={() => setPskActiveTab('live')}
                className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                  pskActiveTab === 'live'
                    ? 'bg-red-600 text-white shadow'
                    : 'text-slate-300 hover:text-white hover:bg-[#002B49]'
                }`}
              >
                <span>{language === 'HR' ? 'UŽIVO (LIVE)' : 'LIVE IN-PLAY'}</span>
                <span className="w-2 h-2 rounded-full bg-red-400 animate-ping"></span>
              </button>

              <button
                type="button"
                onClick={() => setPskActiveTab('arena')}
                className={`px-3 py-1.5 rounded transition-all flex items-center gap-1.5 ${
                  pskActiveTab === 'arena'
                    ? 'bg-[#005A9E] text-white shadow border border-sky-400'
                    : 'text-slate-300 hover:text-white hover:bg-[#002B49]'
                }`}
              >
                <Users className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>PSK ARENA</span>
                <span className="bg-[#FFB800] text-black text-[10px] font-black px-1.5 py-0.2 rounded-full">
                  8
                </span>
              </button>

              <button
                type="button"
                onClick={() => setPskActiveTab('specials')}
                className={`px-3 py-1.5 rounded transition-all flex items-center gap-1 ${
                  pskActiveTab === 'specials'
                    ? 'bg-[#005A9E] text-white shadow'
                    : 'text-slate-300 hover:text-white hover:bg-[#002B49]'
                }`}
              >
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'HR' ? 'SPECIJALI' : 'SPECIAL BETS'}</span>
              </button>

              {/* Swipe & Bet Feature Button */}
              <button
                type="button"
                onClick={() => setIsSwipeModalOpen(true)}
                className="px-3 py-1.5 rounded bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black flex items-center gap-1 hover:brightness-110 transition-all shadow-md ml-1"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>SWIPE & BET</span>
                <span className="bg-black text-amber-300 text-[9px] px-1 py-0.2 rounded font-mono">
                  NEW
                </span>
              </button>
            </div>
          </div>

          {/* ClarityCore™ Conversion Assist Toggle for Judges */}
          <div className="flex items-center gap-2 bg-[#001424] px-3 py-1.5 rounded-xl border border-[#003B64] shrink-0">
            <div className="flex items-center gap-1.5">
              <Sparkles className={`w-3.5 h-3.5 ${clarityCoreEnabled ? 'text-amber-400' : 'text-slate-500'}`} />
              <span className="text-[11px] font-bold text-slate-200 hidden sm:inline">
                ClarityCore™ Assist:
              </span>
            </div>
            <button
              type="button"
              onClick={() => setClarityCoreEnabled(!clarityCoreEnabled)}
              className={`px-2 py-0.5 rounded text-[11px] font-bold transition-all ${
                clarityCoreEnabled
                  ? 'bg-emerald-500 text-black font-black'
                  : 'bg-slate-700 text-slate-300'
              }`}
            >
              {clarityCoreEnabled ? 'AKTIVAN (ON)' : 'ISKLJUČEN (OFF)'}
            </button>
          </div>
        </div>
      </div>

      {/* Copy notification toast if Arena ticket was copied */}
      {copyFeedback && (
        <div className="bg-emerald-900 border-b border-emerald-600 px-4 py-2.5 text-center text-xs font-bold text-emerald-100 flex items-center justify-center gap-2 animate-in fade-in">
          <CheckCircle2 className="w-4 h-4 text-emerald-300" />
          <span>{copyFeedback}</span>
        </div>
      )}

      {/* 3. TIME FILTERS & SPORTS ICONS BAR (Matches Official PSK.hr Screenshot 1) */}
      <div className="bg-[#00243E] border-b border-[#003B64] px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          {/* Time Filter Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-0.5">
            {[
              { id: 'ALL', label: 'ALL' },
              { id: 'LIVE', label: '🔴 LIVE' },
              { id: 'TODAY', label: 'TODAY' },
              { id: '1H', label: '1H' },
              { id: '3H', label: '3H' },
              { id: 'TOMORROW', label: 'TOMORROW' },
            ].map((tf) => (
              <button
                key={tf.id}
                type="button"
                onClick={() => setTimeFilter(tf.id as any)}
                className={`px-3 py-1 rounded-md font-bold transition-all text-xs whitespace-nowrap ${
                  timeFilter === tf.id
                    ? 'bg-[#1472e6] text-white shadow-sm'
                    : 'bg-[#001A2C] text-slate-300 hover:text-white hover:bg-[#002F52] border border-[#003B64]'
                }`}
              >
                {tf.label}
              </button>
            ))}
          </div>

          {/* Sport Icons */}
          <div className="flex items-center space-x-1.5 overflow-x-auto no-scrollbar py-0.5">
            {[
              { id: 'all', label: 'All Sports', icon: '🏆' },
              { id: 'football', label: 'Football', icon: '⚽' },
              { id: 'tennis', label: 'Tennis', icon: '🎾' },
              { id: 'basketball', label: 'Basketball', icon: '🏀' },
              { id: 'handball', label: 'Handball', icon: '🤾' },
              { id: 'hockey', label: 'Ice Hockey', icon: '🏒' },
            ].map((sp) => (
              <button
                key={sp.id}
                type="button"
                onClick={() => setSelectedSport(sp.id)}
                className={`px-2.5 py-1 rounded-md font-medium text-xs flex items-center gap-1.5 transition-all whitespace-nowrap ${
                  selectedSport === sp.id
                    ? 'bg-[#004A7F] text-white font-bold border border-sky-400'
                    : 'text-slate-300 hover:text-white hover:bg-[#002F52]'
                }`}
              >
                <span>{sp.icon}</span>
                <span className="hidden sm:inline">{sp.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. PROMOTIONAL CAROUSEL BANNER CARDS (Matches Official PSK.hr Screenshot 1) */}
      <div className="bg-[#001726] border-b border-[#002B49] px-4 py-3">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
            {/* Promo 1: Golden Market */}
            <div className="bg-gradient-to-br from-[#0a3152] to-[#041a2e] border border-[#004A7F] rounded-xl p-3 shadow-md relative overflow-hidden group hover:border-sky-400 transition-all cursor-pointer">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#FFB800] bg-black/40 px-1.5 py-0.5 rounded">
                GOLDEN MARKET
              </span>
              <h4 className="text-xs font-black text-white mt-1.5 leading-tight">
                REAL MADRID - INTER M.
              </h4>
              <p className="text-[11px] text-sky-200 mt-0.5">€10 Free Bet Offer</p>
            </div>

            {/* Promo 2: Sniper */}
            <div className="bg-gradient-to-br from-[#241a3e] to-[#120a24] border border-[#48327a] rounded-xl p-3 shadow-md relative overflow-hidden group hover:border-purple-400 transition-all cursor-pointer">
              <span className="text-[9px] font-black uppercase tracking-wider text-purple-300 bg-black/40 px-1.5 py-0.5 rounded">
                SNIPER ON A MISSION
              </span>
              <h4 className="text-xs font-black text-white mt-1.5 leading-tight">
                PLAY BETBUILDER
              </h4>
              <p className="text-[11px] text-purple-200 mt-0.5">€25 Free Bet Target</p>
            </div>

            {/* Promo 3: 20% Booster */}
            <div className="bg-gradient-to-br from-[#1a382e] to-[#0d2119] border border-[#2b634e] rounded-xl p-3 shadow-md relative overflow-hidden group hover:border-emerald-400 transition-all cursor-pointer">
              <span className="text-[9px] font-black uppercase tracking-wider text-emerald-300 bg-black/40 px-1.5 py-0.5 rounded">
                ODDS BOOSTER
              </span>
              <h4 className="text-xs font-black text-white mt-1.5 leading-tight">
                20% ODDS BOOSTER
              </h4>
              <p className="text-[11px] text-emerald-200 mt-0.5">Multi-Leg Combos</p>
            </div>

            {/* Promo 4: Prize Game */}
            <div className="bg-gradient-to-br from-[#3e241a] to-[#21110a] border border-[#6b3c29] rounded-xl p-3 shadow-md relative overflow-hidden group hover:border-amber-400 transition-all cursor-pointer">
              <span className="text-[9px] font-black uppercase tracking-wider text-amber-300 bg-black/40 px-1.5 py-0.5 rounded">
                PRIZE GAME
              </span>
              <h4 className="text-xs font-black text-white mt-1.5 leading-tight">
                WIN NEW C4 PLUS
              </h4>
              <p className="text-[11px] text-amber-200 mt-0.5">Hybrid Car Giveaway</p>
            </div>

            {/* Promo 5: Top Offer */}
            <div className="bg-gradient-to-br from-[#162a45] to-[#0a1829] border border-[#004070] rounded-xl p-3 shadow-md relative overflow-hidden group hover:border-sky-400 transition-all cursor-pointer col-span-2 sm:col-span-1">
              <span className="text-[9px] font-black uppercase tracking-wider text-[#FFB800] bg-black/40 px-1.5 py-0.5 rounded">
                TOP OFFER
              </span>
              <h4 className="text-xs font-black text-white mt-1.5 leading-tight">
                ENHANCED COURSES
              </h4>
              <p className="text-[11px] text-sky-200 mt-0.5">Zero Margin Derbies</p>
            </div>
          </div>
        </div>
      </div>

      {/* 5. QUICK CATEGORY ICONS STRIP (Matches Official PSK.hr Screenshot 1) */}
      <div className="bg-[#001D33] border-b border-[#00314f] px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex items-center space-x-4 overflow-x-auto no-scrollbar text-slate-300">
          {[
            { label: 'Promo', icon: '🎁' },
            { label: 'Aviator', icon: '✈️' },
            { label: 'MM', icon: '💎' },
            { label: 'Missions', icon: '🎯' },
            { label: 'Casino', icon: '🎰' },
            { label: 'eFootball', icon: '🎮' },
            { label: 'eBasketball', icon: '🏀' },
            { label: 'Lotto', icon: '🎱' },
            { label: 'PSK Champions', icon: '👑' },
            { label: 'Live Casino', icon: '🃏' },
            { label: 'PSK Arena', icon: '🏟️' },
            { label: 'Forum', icon: '💬' },
          ].map((cat) => (
            <button
              key={cat.label}
              type="button"
              onClick={() => {
                if (cat.label === 'PSK Arena') setPskActiveTab('arena');
              }}
              className="flex items-center gap-1 px-2.5 py-1 rounded hover:bg-[#002D4E] hover:text-white transition-colors shrink-0 font-medium"
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 6. MAIN CONTENT AREA (3-Column Layout with Center Odds & Right Betslip) */}
      <div className="max-w-7xl mx-auto px-4 py-5 flex-1 w-full">
        {/* If PSK ARENA tab is selected, show social copy-betting hub (Matches Screenshot 4) */}
        {pskActiveTab === 'arena' ? (
          <div className="mb-6">
            <div className="bg-gradient-to-r from-[#002F52] via-[#00223B] to-[#001726] border border-[#005A9E] rounded-2xl p-5 mb-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#FFB800] text-black font-black text-xs px-2 py-0.5 rounded uppercase">
                      PSK ARENA
                    </span>
                    <span className="text-sky-300 text-xs font-semibold">
                      Social Betting & 1-Click Ticket Replication
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
                    Kopiraj Pobjedničke Listiće Najboljih Tipstera
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                    Eliminates choice paralysis and doubt. Browse trending verified tickets from the PSK community and add them to your betslip with a single click.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsSwipeModalOpen(true)}
                    className="px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-black text-xs rounded-xl shadow-md hover:brightness-110 flex items-center gap-1.5"
                  >
                    <Zap className="w-4 h-4" />
                    <span>Swipe & Bet Modus</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Arena Tickets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {PSK_ARENA_TICKETS.map((ticket) => (
                <div 
                  key={ticket.id}
                  className="bg-[#00223B] border border-[#003B64] hover:border-sky-500 rounded-2xl p-4 shadow-lg flex flex-col justify-between transition-all"
                >
                  {/* Top user header */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-xs shadow-sm"
                          style={{ backgroundColor: ticket.avatarColor }}
                        >
                          {ticket.username.substring(0, 2).toUpperCase()}
                        </div>
                        <div>
                          <div className="text-sm font-bold text-white leading-tight">
                            @{ticket.username}
                          </div>
                          <div className="text-[10px] text-slate-400">
                            {ticket.inspirationsFormatted}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 bg-[#001726] px-2 py-0.5 rounded border border-[#003355] text-[11px] text-slate-300">
                        {ticket.hasBB && (
                          <span className="bg-[#1472e6] text-white text-[9px] font-black px-1 rounded mr-0.5">
                            BB
                          </span>
                        )}
                        <span>{ticket.eventsCount} događaja</span>
                      </div>
                    </div>

                    {/* Odds & Payout breakdown */}
                    <div className="bg-[#001726] border border-[#003355] rounded-xl p-3 my-2 space-y-1.5 text-xs">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Ulog (Stake):</span>
                        <span className="font-mono text-white font-bold">€{ticket.stakeEUR.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-400">Ukupni Tečaj (Odds):</span>
                        <span className="font-mono text-[#FFB800] font-black">{ticket.totalOdds.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between pt-1 border-t border-slate-800">
                        <span className="text-slate-300 font-semibold">Eventualna isplata:</span>
                        <span className="font-mono text-emerald-400 font-black text-sm">€{ticket.payoutEUR.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Selections preview snippet */}
                    <div className="space-y-1.5 mt-2">
                      {ticket.selections.slice(0, 3).map((sel, idx) => (
                        <div key={idx} className="text-[11px] bg-[#001A2C] p-2 rounded border border-[#002F52] flex justify-between items-center">
                          <span className="text-slate-300 truncate max-w-[180px]">{sel.matchTitle}</span>
                          <span className="font-mono text-sky-400 font-bold ml-2 shrink-0">{sel.odds.toFixed(2)}</span>
                        </div>
                      ))}
                      {ticket.selections.length > 3 && (
                        <div className="text-[10px] text-slate-400 text-center py-0.5">
                          + još {ticket.selections.length - 3} događaja
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Copy Button */}
                  <div className="mt-4 pt-3 border-t border-[#003B64]">
                    <button
                      type="button"
                      onClick={() => handleCopyArenaTicket(ticket)}
                      className="w-full bg-[#1472e6] hover:bg-[#1982ff] active:scale-[0.98] text-white font-black py-2.5 px-3 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      <span>Kopiraj listić (Copy to Slip)</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {/* Highlight Boosters Strip (Matches Screenshot 1) */}
        {pskActiveTab === 'sport' && (
          <div className="mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {PSK_GOLDEN_MARKETS.map((gm) => (
                <div
                  key={gm.id}
                  className="bg-gradient-to-b from-[#002845] to-[#001c30] border border-[#004A7F] rounded-2xl p-4 shadow-lg flex flex-col justify-between relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-300 mb-2">
                      <span className="bg-[#FFB800] text-black font-black uppercase px-2 py-0.5 rounded">
                        {gm.tag}
                      </span>
                      <div className="flex items-center gap-2 text-slate-400">
                        <span>{gm.startsIn}</span>
                        <span className="text-amber-400 font-semibold">{gm.betCount}</span>
                      </div>
                    </div>

                    <h4 className="text-sm font-black text-white leading-tight mb-2">
                      {gm.title}
                    </h4>

                    <div className="space-y-1 mb-3 text-[11px] text-slate-300">
                      {gm.legs.map((leg, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0"></span>
                          <span>{leg}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#003B64] flex items-center justify-between gap-3">
                    <div className="text-xs text-slate-400">
                      {gm.wasOdds && (
                        <span className="line-through mr-1.5 text-slate-500">
                          {gm.wasOdds.toFixed(2)}
                        </span>
                      )}
                      <span className="text-xs font-bold text-sky-200">Kombinirani tečaj</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddSelection(
                        gm.id, 
                        gm.title, 
                        `${gm.tag}: Combo Legs`, 
                        gm.odds, 
                        'Golden Market Special',
                        gm.legs.join(' • '),
                        'A'
                      )}
                      className="bg-[#FFB800] hover:bg-[#ffc526] active:scale-95 text-black font-black px-4 py-1.5 rounded-xl text-sm transition-all shadow font-mono flex items-center gap-1"
                    >
                      <span>{gm.odds.toFixed(2)}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick League Filter Chips (Matches Screenshot 1) */}
        {pskActiveTab === 'sport' && (
          <div className="mb-5 flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
            {[
              { id: 'all', label: 'All Leagues' },
              { id: 'Champions League', label: 'Champions League' },
              { id: 'Croatia-Cup', label: 'HNK Croatia-Cup' },
              { id: 'England EFL Cup', label: 'England-EFL Cup' },
              { id: 'Netherlands', label: '1. Netherlands' },
              { id: 'England', label: '2. England' },
              { id: 'South Korea', label: '1. South Korea (Live)' },
            ].map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={() => setSelectedLeagueChip(chip.id)}
                className={`px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedLeagueChip === chip.id
                    ? 'bg-[#1472e6] text-white shadow-sm'
                    : 'bg-[#00223B] border border-[#003B64] text-slate-300 hover:text-white hover:bg-[#002D4E]'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        )}

        {/* Player Specials & Boosters Section (Matches Screenshot 1) */}
        {pskActiveTab === 'sport' && (
          <div className="mb-6 bg-[#001D33] border border-[#003B64] rounded-2xl p-4 shadow-md">
            <div className="flex items-center justify-between mb-3 border-b border-[#003355] pb-2">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400" />
                <h3 className="text-xs font-black text-white uppercase tracking-wider">
                  Player Specials & Odds Boosters
                </h3>
              </div>
              <span className="text-[10px] text-sky-300 font-semibold">
                High Liquidity Markets
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {PSK_PLAYER_SPECIALS.map((ps) => (
                <div key={ps.id} className="bg-[#001524] border border-[#002E4C] rounded-xl p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h5 className="text-xs font-black text-white uppercase tracking-wide">
                        {ps.playerName}
                      </h5>
                      <span className="text-[10px] text-slate-400 block mt-0.5">
                        {ps.matchTitle} • {ps.matchTime}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 mt-2">
                    {ps.props.map((prop) => (
                      <div
                        key={prop.id}
                        className="flex items-center justify-between p-2 rounded-lg bg-[#001D33] hover:bg-[#002845] border border-[#003355] text-xs transition-colors"
                      >
                        <div className="flex items-center gap-1.5">
                          {prop.isHot && <span className="text-amber-400 text-xs">🔥</span>}
                          <span className="text-slate-200">{prop.label}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          {prop.wasOdds && (
                            <span className="line-through text-[10px] text-slate-500 font-mono">
                              {prop.wasOdds.toFixed(2)}
                            </span>
                          )}
                          <button
                            type="button"
                            onClick={() => handleAddSelection(
                              `${ps.id}-${prop.id}`,
                              `${ps.playerName} (${ps.matchTitle})`,
                              prop.label,
                              prop.odds,
                              'Player Special Booster',
                              'Player props booster with verified starting XI probability',
                              'A'
                            )}
                            className="px-2.5 py-1 rounded bg-[#FFB800] hover:bg-[#ffc526] text-black font-mono font-black text-xs transition-transform active:scale-95 shadow-sm"
                          >
                            {prop.odds.toFixed(2)}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Special Novelty Bets (Matches Screenshot 3) */}
        {(pskActiveTab === 'specials' || pskActiveTab === 'sport') && (
          <div className="mb-6 bg-gradient-to-r from-[#00243E] to-[#001726] border border-[#004A7F] rounded-2xl p-4 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-red-500 text-white text-[9px] font-black uppercase px-2 py-0.5 rounded">
                    {PSK_SPECIAL_BETS[0].badge}
                  </span>
                  <span className="text-xs text-sky-300 font-medium">
                    {PSK_SPECIAL_BETS[0].endsIn} • {PSK_SPECIAL_BETS[0].category}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-black text-white">
                  {PSK_SPECIAL_BETS[0].question}
                </h3>
                <div className="flex items-center gap-4 text-xs text-slate-300 mt-2">
                  <span>
                    Share of Stakes: <strong className="text-emerald-400">Yes {PSK_SPECIAL_BETS[0].stakeSharePctYes}%</strong> vs <strong className="text-amber-400">No {PSK_SPECIAL_BETS[0].stakeSharePctNo}%</strong>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => handleAddSelection(
                    PSK_SPECIAL_BETS[0].id,
                    'Special Bet: GTA VI Release Date',
                    'Yes (Delayed past Nov 19, 2026)',
                    PSK_SPECIAL_BETS[0].oddsYes,
                    'Special Entertainment Markets',
                    'Public consensus: 68.9% backing delay due to AAA development polish cycles',
                    'Balanced'
                  )}
                  className="px-4 py-2 bg-[#00192B] border border-[#003B64] hover:border-amber-400 rounded-xl text-center transition-all"
                >
                  <div className="text-[10px] text-slate-400 font-semibold">Yes (Da)</div>
                  <div className="text-base font-black font-mono text-[#FFB800]">{PSK_SPECIAL_BETS[0].oddsYes.toFixed(2)}</div>
                </button>

                <button
                  type="button"
                  onClick={() => handleAddSelection(
                    PSK_SPECIAL_BETS[0].id,
                    'Special Bet: GTA VI Release Date',
                    'No (Not delayed)',
                    PSK_SPECIAL_BETS[0].oddsNo,
                    'Special Entertainment Markets',
                    'Maintains current scheduled release milestone',
                    'A'
                  )}
                  className="px-4 py-2 bg-[#00192B] border border-[#003B64] hover:border-amber-400 rounded-xl text-center transition-all"
                >
                  <div className="text-[10px] text-slate-400 font-semibold">No (Ne)</div>
                  <div className="text-base font-black font-mono text-slate-200">{PSK_SPECIAL_BETS[0].oddsNo.toFixed(2)}</div>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* 7. MAIN 2-COLUMN SECTION: Odds Board Table (Left 8 cols) + Bet Slip (Right 4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT: Odds Board Table (Matches Screenshots 2 & 3) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-300 border-b border-[#003355] pb-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-sm">Basic offer (Osnovna ponuda)</span>
                <span className="text-[11px] text-slate-400">
                  Showing {filteredMatches.length} matches
                </span>
              </div>

              {clarityCoreEnabled && (
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-sky-300 bg-[#002D4E] px-2 py-0.5 rounded border border-sky-800">
                    Adaptive Lens: {activeIntent.toUpperCase()}
                  </span>
                </div>
              )}
            </div>

            {/* Matches Grouped Table */}
            <div className="space-y-3">
              {filteredMatches.map((match) => {
                const isExpanded = expandedClarityMatchId === match.id;
                const isHomeSelected = betslip.some((b) => b.matchId === match.id && b.selection.includes('Home'));
                const isDrawSelected = betslip.some((b) => b.matchId === match.id && b.selection.includes('Draw'));
                const isAwaySelected = betslip.some((b) => b.matchId === match.id && b.selection.includes('Away'));

                return (
                  <div
                    key={match.id}
                    className="bg-[#00223B] border border-[#003B64] hover:border-[#005088] rounded-xl p-3.5 transition-all shadow-sm"
                  >
                    {/* Header line: League, Time, Badges */}
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <div className="flex items-center gap-2">
                        <Star className="w-3.5 h-3.5 text-slate-500 hover:text-amber-400 cursor-pointer" />
                        <span className="font-semibold text-slate-300">{match.league}</span>
                        {match.isTopOffer && (
                          <span className="bg-emerald-600 text-white text-[9px] font-black px-1.5 py-0.2 rounded">
                            TOP
                          </span>
                        )}
                        {match.hasBB && (
                          <span className="bg-[#1472e6] text-white text-[9px] font-black px-1.5 py-0.2 rounded">
                            BB
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        {match.isLive ? (
                          <span className="bg-red-950 text-red-300 border border-red-800 px-2 py-0.5 rounded text-[10px] font-bold flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                            {match.liveMinute} • {match.score}
                          </span>
                        ) : (
                          <span className="flex items-center gap-1 text-[11px] text-slate-300">
                            <Clock className="w-3 h-3 text-slate-400" />
                            {match.time}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Match Body: Teams & Odds */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 my-2">
                      <div className="flex-1">
                        <div className="flex justify-between items-center text-sm font-bold text-white">
                          <span>{match.homeTeam}</span>
                          {match.isLive && (
                            <span className="text-amber-400 font-mono text-sm ml-2">
                              {match.score?.split('-')[0]}
                            </span>
                          )}
                        </div>
                        <div className="flex justify-between items-center text-sm font-bold text-white mt-1">
                          <span>{match.awayTeam}</span>
                          {match.isLive && (
                            <span className="text-amber-400 font-mono text-sm ml-2">
                              {match.score?.split('-')[1]}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* 1 X 2 Odds Buttons */}
                      <div className="grid grid-cols-3 gap-2 sm:w-64 shrink-0">
                        {/* 1 (Home) */}
                        <button
                          type="button"
                          onClick={() => handleAddSelection(
                            match.id,
                            `${match.homeTeam} vs ${match.awayTeam}`,
                            `${match.homeTeam} (Home Win)`,
                            match.odds.home,
                            '1X2 Match Winner',
                            match.clarityInsights.summary,
                            match.clarityInsights.confidenceGrade
                          )}
                          className={`p-2 rounded-lg border text-center transition-all ${
                            isHomeSelected
                              ? 'bg-[#FFB800] text-black font-black border-[#FFB800] shadow'
                              : 'bg-[#001726] border-[#003B64] hover:border-sky-500 text-slate-200'
                          }`}
                        >
                          <div className="text-[10px] text-slate-400">1</div>
                          <div className="text-xs font-bold font-mono">{match.odds.home.toFixed(2)}</div>
                        </button>

                        {/* X (Draw) */}
                        {match.odds.draw ? (
                          <button
                            type="button"
                            onClick={() => handleAddSelection(
                              match.id,
                              `${match.homeTeam} vs ${match.awayTeam}`,
                              'Draw (X)',
                              match.odds.draw!,
                              '1X2 Match Winner',
                              'Statistical parity model expectation',
                              'Balanced'
                            )}
                            className={`p-2 rounded-lg border text-center transition-all ${
                              isDrawSelected
                                ? 'bg-[#FFB800] text-black font-black border-[#FFB800] shadow'
                                : 'bg-[#001726] border-[#003B64] hover:border-sky-500 text-slate-200'
                            }`}
                          >
                            <div className="text-[10px] text-slate-400">X</div>
                            <div className="text-xs font-bold font-mono">{match.odds.draw.toFixed(2)}</div>
                          </button>
                        ) : (
                          <div className="p-2 rounded-lg bg-[#001726]/40 border border-slate-800 text-center text-slate-600 text-xs flex items-center justify-center">
                            -
                          </div>
                        )}

                        {/* 2 (Away) */}
                        <button
                          type="button"
                          onClick={() => handleAddSelection(
                            match.id,
                            `${match.homeTeam} vs ${match.awayTeam}`,
                            `${match.awayTeam} (Away Win)`,
                            match.odds.away,
                            '1X2 Match Winner',
                            match.clarityInsights.fairValueAssessment,
                            match.clarityInsights.confidenceGrade
                          )}
                          className={`p-2 rounded-lg border text-center transition-all ${
                            isAwaySelected
                              ? 'bg-[#FFB800] text-black font-black border-[#FFB800] shadow'
                              : 'bg-[#001726] border-[#003B64] hover:border-sky-500 text-slate-200'
                          }`}
                        >
                          <div className="text-[10px] text-slate-400">2</div>
                          <div className="text-xs font-bold font-mono">{match.odds.away.toFixed(2)}</div>
                        </button>
                      </div>
                    </div>

                    {/* ClarityCore AI Reasoning Drawer (Judges' conversion booster) */}
                    {clarityCoreEnabled && (
                      <div className="bg-[#001829] rounded-lg p-2.5 border border-[#003B64] mt-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                            <span className="text-xs font-bold text-sky-300">
                              {match.clarityInsights.tag}:
                            </span>
                            <span className="text-xs text-slate-300 truncate max-w-[220px] sm:max-w-md">
                              {match.clarityInsights.statFact}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => setExpandedClarityMatchId(isExpanded ? null : match.id)}
                            className="text-[11px] text-sky-400 hover:text-sky-300 font-semibold flex items-center gap-0.5 ml-2 shrink-0"
                          >
                            {isExpanded ? 'Manje' : 'Zašto ovaj odabir?'}
                            <ChevronRight className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                          </button>
                        </div>

                        {/* Expanded Drawer */}
                        {isExpanded && (
                          <div className="mt-2.5 pt-2.5 border-t border-[#003355] text-xs space-y-2">
                            <p className="text-slate-300 leading-relaxed text-[11px]">
                              {match.clarityInsights.summary}
                            </p>
                            <div className="bg-[#00223B] p-2 rounded border border-[#003B64] flex items-center justify-between text-[11px]">
                              <div className="flex items-center gap-1.5">
                                <span className="text-slate-400">Fair Value Ocjena:</span>
                                <span className="font-bold text-emerald-400">
                                  Razred {match.clarityInsights.confidenceGrade}
                                </span>
                              </div>
                              <span className="text-[10px] text-sky-300 font-medium">
                                Transparentna Analiza
                              </span>
                            </div>
                            <div className="flex items-center gap-3 text-[10px] text-slate-400">
                              <span>Forma:</span>
                              <span className="font-mono text-emerald-400 font-bold">
                                {match.h2hStats.homeRecent.join('-')}
                              </span>
                              <span>vs</span>
                              <span className="font-mono text-sky-400 font-bold">
                                {match.h2hStats.awayRecent.join('-')}
                              </span>
                              <span className="ml-auto text-slate-500">
                                {match.h2hStats.lastMeeting}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: THE BETSLIP (Matches Official PSK.hr Screenshot 1) */}
          <div className="lg:col-span-4">
            <div className="bg-[#00223B] border-2 border-[#005088] rounded-2xl overflow-hidden shadow-2xl sticky top-24">
              {/* Slip Top Tabs: 1, 2, 3, 4 (From Screenshot 1) */}
              <div className="bg-[#001D33] border-b border-[#003B64] p-2 flex items-center justify-between">
                <div className="flex items-center space-x-1">
                  {[1, 2, 3, 4].map((tabNum) => (
                    <button
                      key={tabNum}
                      type="button"
                      onClick={() => setBetslipTab(tabNum)}
                      className={`w-7 h-7 rounded text-xs font-bold transition-all ${
                        betslipTab === tabNum
                          ? 'bg-[#1472e6] text-white shadow'
                          : 'bg-[#001524] text-slate-400 hover:text-white'
                      }`}
                    >
                      {tabNum}
                    </button>
                  ))}
                </div>

                {/* Plain vs System switch */}
                <div className="flex items-center bg-[#001524] p-0.5 rounded border border-[#003B64] text-[11px] font-bold">
                  <button
                    type="button"
                    onClick={() => setTicketType('plain')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      ticketType === 'plain'
                        ? 'bg-[#004A7F] text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Običan (Plain)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTicketType('system')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      ticketType === 'system'
                        ? 'bg-[#004A7F] text-white'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Sistemski
                  </button>
                </div>

                {/* Clear all trash button */}
                {betslip.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearSlip}
                    className="p-1 text-slate-400 hover:text-red-400 transition-colors"
                    title="Isprazni listić"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Betslip Items List */}
              <div className="p-3.5 space-y-2.5 max-h-[340px] overflow-y-auto">
                {betslip.length === 0 ? (
                  /* Empty state matching Official PSK screenshot 1 */
                  <div className="text-center py-10 px-4 text-slate-400">
                    <div className="w-10 h-10 rounded-full bg-[#001A2C] border border-[#003B64] flex items-center justify-center mx-auto mb-3 text-slate-400">
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wide">
                      The ticket is empty
                    </h4>
                    <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                      If you want to add a bet to your bet slip, review our odds offer and select the bet of your choice.
                    </p>

                    <button
                      type="button"
                      onClick={() => setIsSwipeModalOpen(true)}
                      className="mt-4 px-3 py-1.5 bg-[#1472e6] hover:bg-[#1982ff] text-white font-bold text-xs rounded-lg shadow transition-colors inline-flex items-center gap-1"
                    >
                      <Zap className="w-3.5 h-3.5" />
                      <span>Probaj Swipe & Bet</span>
                    </button>
                  </div>
                ) : (
                  betslip.map((item) => (
                    <div
                      key={item.id}
                      className="bg-[#001726] border border-[#003B64] rounded-xl p-3 relative group text-xs shadow-sm"
                    >
                      <button
                        type="button"
                        onClick={() => handleRemoveSelection(item.id)}
                        className="absolute top-2.5 right-2.5 text-slate-400 hover:text-red-400 transition-colors"
                        title="Ukloni odabir"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>

                      <div className="text-slate-400 text-[11px] pr-5 truncate font-medium">
                        {item.matchTitle}
                      </div>
                      <div className="font-bold text-white mt-1 flex justify-between items-center pr-1">
                        <span>{item.selection}</span>
                        <span className="font-mono text-[#FFB800] font-black text-sm">
                          {item.odds.toFixed(2)}
                        </span>
                      </div>
                      <div className="text-[10px] text-slate-400 mt-0.5">
                        {item.marketName}
                      </div>

                      {/* Clarity Note */}
                      {clarityCoreEnabled && (
                        <div className="mt-2 text-[10px] text-emerald-300 bg-emerald-950/40 p-1.5 rounded-lg border border-emerald-800/40 leading-relaxed">
                          {item.clarityNote}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>

              {/* Betslip Calculations & Actions (Matches Screenshot 1) */}
              {betslip.length > 0 && (
                <div className="bg-[#001829] p-4 border-t border-[#003B64] space-y-3">
                  {/* Stake Selector */}
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                      <span className="font-semibold">Ulog (Stake):</span>
                      <span className="text-[11px] text-emerald-400 font-mono">
                        Dnevni limit: €25.00
                      </span>
                    </div>

                    {/* Quick Stake Chips */}
                    <div className="grid grid-cols-5 gap-1.5 mb-2">
                      {[2, 5, 10, 25, 50].map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setStake(amt)}
                          className={`py-1 rounded-lg text-xs font-mono font-bold border transition-colors ${
                            stake === amt
                              ? 'bg-[#FFB800] text-black border-[#FFB800]'
                              : 'bg-[#00223B] border-[#003B64] text-slate-300 hover:border-sky-500'
                          }`}
                        >
                          €{amt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Transparent Calculation Breakdown */}
                  <div className="bg-[#00223B] p-3 rounded-xl border border-[#003B64] text-xs space-y-1.5">
                    <div className="flex justify-between text-slate-400">
                      <span>Ukupni Tečaj (Total Odds):</span>
                      <span className="font-mono text-white font-bold">{totalOdds.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Bruto Dobitak (Gross Payout):</span>
                      <span className="font-mono text-slate-300">€{grossReturn.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-400 items-center">
                      <span className="flex items-center gap-1 text-[11px]">
                        Porez (Zakon o igrama na sreću 10%):
                        <Info className="w-3 h-3 text-slate-500" />
                      </span>
                      <span className="font-mono text-amber-400">-€{estimatedTax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-white font-bold pt-1.5 border-t border-slate-700 text-sm">
                      <span className="text-emerald-300 font-extrabold">Čisti Dobitak (Net):</span>
                      <span className="font-mono text-emerald-400 font-black text-base">
                        €{netReturn.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Primary Action Button */}
                  <button
                    type="button"
                    onClick={handleConfirmAction}
                    className="w-full bg-[#1472e6] hover:bg-[#1982ff] active:scale-[0.98] text-white font-black py-3 px-4 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span>Uplati Listić (Place Bet)</span>
                    <span className="font-mono text-xs bg-white/20 px-2 py-0.5 rounded font-bold">
                      €{stake.toFixed(2)}
                    </span>
                  </button>

                  {/* Zero-Pressure Reassurance Exit Options */}
                  <div className="pt-1.5 text-center">
                    <p className="text-[10px] text-slate-400 mb-1.5">
                      Nisi siguran? Spremi listić za kasnije bez rizika:
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={handleSaveWatchlist}
                        className="px-2.5 py-1.5 rounded-lg bg-[#00223B] border border-[#003B64] hover:border-slate-500 text-[11px] text-slate-300 flex items-center gap-1 transition-colors"
                      >
                        <Bookmark className="w-3 h-3 text-amber-400" />
                        <span>{savedToWatchlist ? 'Spremljeno!' : 'Spremi listić'}</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleSetAlert}
                        className="px-2.5 py-1.5 rounded-lg bg-[#00223B] border border-[#003B64] hover:border-slate-500 text-[11px] text-slate-300 flex items-center gap-1 transition-colors"
                      >
                        <Bell className="w-3 h-3 text-sky-400" />
                        <span>{alertSet ? 'Praćenje aktivno!' : 'Prati tečaj'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 8. PSK FOOTER WITH ACCORDIONS & DISCLOSURES (Matches Screenshots 5 & 6) */}
      <PSKFooter />

      {/* 9. SWIPE & BET MODAL */}
      <SwipeAndBetModal
        isOpen={isSwipeModalOpen}
        onClose={() => setIsSwipeModalOpen(false)}
        onAddBet={(item) => {
          setBetslip((prev) => [...prev, item]);
          setMetrics((m) => ({
            ...m,
            actionsCompleted: m.actionsCompleted + 1,
            sqiScore: Math.min(100, m.sqiScore + 5)
          }));
        }}
      />

      {/* 10. MY ACTIVE TICKETS & CASH-OUT DRAWER */}
      <MyTicketsModal
        isOpen={isMyTicketsOpen}
        onClose={() => setIsMyTicketsOpen(false)}
        tickets={activeTickets}
        onCashOut={handleCashOut}
        language={language}
      />

      {/* 11. CONFIRMATION SUCCESS MODAL */}
      {showConfirmationSuccess && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#00223B] border-2 border-emerald-500 rounded-2xl max-w-md w-full p-6 text-center shadow-2xl relative animate-in fade-in">
            <div className="w-14 h-14 bg-emerald-950 rounded-full flex items-center justify-center mx-auto mb-3 border border-emerald-500">
              <Check className="w-8 h-8 text-emerald-400" />
            </div>

            <span className="bg-emerald-900/60 text-emerald-300 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-700">
              {language === 'HR' ? 'Uspješna Uplata (Bet Placed)' : 'Bet Successfully Placed'}
            </span>

            <h3 className="text-xl font-black text-white mt-3 mb-1">
              {language === 'HR' ? 'Listić Uspješno Uplaćen!' : 'Ticket Confirmed!'}
            </h3>
            <p className="text-xs text-slate-300 mb-4 leading-relaxed">
              {language === 'HR'
                ? 'Tvoj listić je zaprimljen s transparentnim izračunom i bez skrivenih uvjeta.'
                : 'Your bet has been safely recorded with fully transparent odds and zero hidden margins.'}
            </p>

            <div className="bg-[#001726] p-3.5 rounded-xl border border-[#003B64] text-xs text-left space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-slate-400">{language === 'HR' ? 'Ukupni Ulog:' : 'Total Stake:'}</span>
                <span className="font-mono text-white font-bold">€{stake.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{language === 'HR' ? 'Ukupni Tečaj:' : 'Total Odds:'}</span>
                <span className="font-mono text-[#FFB800] font-black">{totalOdds.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{language === 'HR' ? 'Čisti Potencijalni Dobitak:' : 'Net Potential Return:'}</span>
                <span className="font-mono text-emerald-400 font-black">€{netReturn.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-1 border-t border-slate-800">
                <span className="text-slate-400">Session Quality Index (SQI):</span>
                <span className="font-mono text-sky-400 font-bold">100 / 100 (Optimal Intent)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowConfirmationSuccess(false);
                  setIsMyTicketsOpen(true);
                }}
                className="flex-1 bg-[#002B49] hover:bg-[#003B64] text-sky-200 border border-sky-400/50 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              >
                <Ticket className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>{language === 'HR' ? 'Prati u Moji Listići' : 'Track in My Tickets'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowConfirmationSuccess(false)}
                className="flex-1 bg-[#1472e6] hover:bg-[#1982ff] text-white py-2.5 rounded-xl text-xs font-black transition-colors cursor-pointer shadow-md"
              >
                {language === 'HR' ? 'Nastavi Igru na PSK.hr' : 'Continue on PSK.hr'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
