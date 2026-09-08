import React, { useState } from 'react';
import { ActiveTicket } from '../types';
import { 
  X, 
  Clock, 
  CheckCircle2, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  DollarSign, 
  AlertCircle,
  Trophy,
  ExternalLink
} from 'lucide-react';

interface MyTicketsModalProps {
  isOpen: boolean;
  onClose: () => void;
  tickets: ActiveTicket[];
  onCashOut: (ticketId: string, amount: number) => void;
  language: 'HR' | 'EN';
}

export const MyTicketsModal: React.FC<MyTicketsModalProps> = ({
  isOpen,
  onClose,
  tickets,
  onCashOut,
  language
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'in_play' | 'cashed_out'>('all');
  const [successToast, setSuccessToast] = useState<string | null>(null);

  if (!isOpen) return null;

  const filteredTickets = tickets.filter((t) => {
    if (activeFilter === 'in_play') return t.status === 'in_play';
    if (activeFilter === 'cashed_out') return t.status === 'cashed_out' || t.status === 'won';
    return true;
  });

  const handleExecuteCashOut = (ticketId: string, amount: number) => {
    onCashOut(ticketId, amount);
    const msg = language === 'HR'
      ? `Cash-Out od €${amount.toFixed(2)} uspješno isplaćen na tvoj račun!`
      : `Cash-Out of €${amount.toFixed(2)} successfully credited to your account!`;
    setSuccessToast(msg);
    setTimeout(() => setSuccessToast(null), 3500);
  };

  const t = {
    title: language === 'HR' ? 'Moji Listići & Cash-Out' : 'My Active Tickets & Cash-Out',
    subtitle: language === 'HR' 
      ? 'Prati događaje uživo i osiguraj dobitak uz ClarityCore™ savjetnik' 
      : 'Track live events & secure payout with ClarityCore™ transparent advisor',
    all: language === 'HR' ? 'Svi listići' : 'All Tickets',
    inPlay: language === 'HR' ? 'Uživo u igri' : 'In-Play Active',
    settled: language === 'HR' ? 'Isplaćeni' : 'Settled / Cashed Out',
    emptyTitle: language === 'HR' ? 'Nema aktivnih listića' : 'No Active Tickets Found',
    emptyDesc: language === 'HR' 
      ? 'Uplati novi listić ili kopiraj pobjednički listić iz PSK Arene!' 
      : 'Place a new bet or 1-click copy a ticket from PSK Arena!',
    stake: language === 'HR' ? 'Ulog' : 'Stake',
    odds: language === 'HR' ? 'Tečaj' : 'Total Odds',
    payout: language === 'HR' ? 'Potencijalni dobitak' : 'Potential Payout',
    cashOutAvailable: language === 'HR' ? 'Cash-Out Dostupan' : 'Cash-Out Available',
    acceptCashOut: language === 'HR' ? 'Prihvati Cash-Out' : 'Accept Cash-Out',
    cashedOutLabel: language === 'HR' ? 'ISPLAĆENO PRIJEVREMENO' : 'EARLY CASHED OUT',
    activeLabel: language === 'HR' ? 'UŽIVO U IGRI' : 'LIVE IN-PLAY',
    clarityAssessment: language === 'HR' ? 'ClarityCore™ Procjena Rizika' : 'ClarityCore™ Risk Assessment',
    close: language === 'HR' ? 'Zatvori' : 'Close'
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-in fade-in">
      <div className="bg-[#001D33] border border-[#004B80] rounded-2xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#003B64] bg-[#001726] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1472e6]/20 border border-[#1472e6]/40 flex items-center justify-center text-[#FFB800]">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-white">
                  {t.title}
                </h2>
                <span className="bg-[#FFB800] text-black text-[11px] font-black px-2 py-0.2 rounded-full">
                  {tickets.length}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                {t.subtitle}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-[#002D4E] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Pills */}
        <div className="px-4 py-2.5 bg-[#001424] border-b border-[#003152] flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 rounded-md font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-[#1472e6] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.all} ({tickets.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('in_play')}
              className={`px-3 py-1 rounded-md font-bold flex items-center gap-1.5 transition-all ${
                activeFilter === 'in_play'
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse"></span>
              <span>{t.inPlay}</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('cashed_out')}
              className={`px-3 py-1 rounded-md font-bold transition-all ${
                activeFilter === 'cashed_out'
                  ? 'bg-emerald-700 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t.settled}
            </button>
          </div>

          <div className="text-[11px] text-sky-400 hidden sm:flex items-center gap-1 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>EU RG Safeguard Active</span>
          </div>
        </div>

        {/* Success Toast Banner */}
        {successToast && (
          <div className="bg-emerald-950 border-b border-emerald-600 px-4 py-2 text-center text-xs font-bold text-emerald-200 flex items-center justify-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{successToast}</span>
          </div>
        )}

        {/* Scrollable List */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 flex-1">
          {filteredTickets.length === 0 ? (
            <div className="text-center py-10 bg-[#001726]/60 rounded-2xl border border-dashed border-[#003B64] p-6">
              <Clock className="w-8 h-8 text-slate-500 mx-auto mb-2 opacity-50" />
              <h4 className="text-sm font-bold text-slate-200">{t.emptyTitle}</h4>
              <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">{t.emptyDesc}</p>
            </div>
          ) : (
            filteredTickets.map((ticket) => {
              const isCashedOut = ticket.status === 'cashed_out';

              return (
                <div
                  key={ticket.id}
                  className={`bg-[#001726] border rounded-2xl p-4 transition-all shadow-md ${
                    isCashedOut
                      ? 'border-emerald-800/60 opacity-90'
                      : 'border-[#004A7F] hover:border-sky-400'
                  }`}
                >
                  {/* Top Bar: Ticket ID, Time, Status */}
                  <div className="flex items-center justify-between text-xs pb-3 border-b border-[#003050]">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-slate-400 text-[11px]">
                        #{ticket.ticketNumber}
                      </span>
                      <span className="text-[11px] text-slate-500">•</span>
                      <span className="text-slate-400 text-[11px] flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-500" />
                        {ticket.placedAt}
                      </span>
                    </div>

                    <div>
                      {isCashedOut ? (
                        <span className="bg-emerald-950 text-emerald-300 border border-emerald-700 px-2 py-0.5 rounded text-[10px] font-black tracking-wide flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{t.cashedOutLabel}</span>
                        </span>
                      ) : (
                        <span className="bg-red-950 text-red-300 border border-red-800 px-2 py-0.5 rounded text-[10px] font-black tracking-wide flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping"></span>
                          <span>{t.activeLabel}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Summary Grid: Stake, Odds, Potential Payout */}
                  <div className="grid grid-cols-3 gap-2 py-2.5 my-2 bg-[#001F36] rounded-xl px-3 border border-[#003B64] text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block">{t.stake}:</span>
                      <span className="font-mono text-white font-bold">€{ticket.stakeEUR.toFixed(2)}</span>
                    </div>
                    <div className="text-center">
                      <span className="text-[10px] text-slate-400 block">{t.odds}:</span>
                      <span className="font-mono text-[#FFB800] font-black">{ticket.totalOdds.toFixed(2)}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block">{t.payout}:</span>
                      <span className="font-mono text-emerald-400 font-bold">€{ticket.potentialPayoutEUR.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Match Selections in Ticket */}
                  <div className="space-y-2 mt-3">
                    {ticket.selections.map((sel, idx) => (
                      <div
                        key={idx}
                        className="bg-[#001322] border border-[#002B49] rounded-xl p-2.5 flex items-center justify-between gap-3 text-xs"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-white truncate">{sel.matchTitle}</span>
                            {sel.status === 'live' && (
                              <span className="bg-red-900/60 text-red-300 border border-red-700 text-[10px] px-1.5 rounded font-mono font-bold shrink-0">
                                {sel.score} ({sel.minute})
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-sky-300 mt-0.5 font-medium flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                            <span>{sel.selection}</span>
                          </div>
                        </div>

                        <div className="font-mono text-[#FFB800] font-bold shrink-0 text-sm">
                          {sel.odds.toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cash-Out Action Box (Only for in_play tickets) */}
                  {!isCashedOut && ticket.cashOutValueEUR && (
                    <div className="mt-4 pt-3 border-t border-[#003554]">
                      <div className="bg-gradient-to-br from-[#002845] to-[#001E33] border border-[#005088] rounded-xl p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                            <span className="text-xs font-bold text-white">
                              {t.cashOutAvailable}
                            </span>
                          </div>
                          <div className="font-mono text-base font-black text-emerald-400">
                            €{ticket.cashOutValueEUR.toFixed(2)}
                          </div>
                        </div>

                        {ticket.cashOutRationale && (
                          <div className="text-[11px] text-slate-300 bg-[#001627] p-2 rounded-lg border border-[#003050] flex items-start gap-2">
                            <AlertCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{ticket.cashOutRationale}</span>
                          </div>
                        )}

                        <button
                          type="button"
                          onClick={() => handleExecuteCashOut(ticket.id, ticket.cashOutValueEUR!)}
                          className="w-full bg-[#1472e6] hover:bg-[#1982ff] active:scale-[0.98] text-white font-black py-2 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                        >
                          <TrendingUp className="w-3.5 h-3.5 text-amber-300" />
                          <span>
                            {t.acceptCashOut}: €{ticket.cashOutValueEUR.toFixed(2)}
                          </span>
                        </button>
                      </div>
                    </div>
                  )}

                  {isCashedOut && (
                    <div className="mt-3 bg-emerald-950/40 border border-emerald-800/60 rounded-xl p-2.5 text-center text-xs text-emerald-300 font-bold flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>
                        {language === 'HR'
                          ? `Dobitak od €${(ticket.cashOutValueEUR || ticket.potentialPayoutEUR).toFixed(2)} je sigurno isplaćen na tvoj račun.`
                          : `Payout of €${(ticket.cashOutValueEUR || ticket.potentialPayoutEUR).toFixed(2)} was safely credited to your balance.`}
                      </span>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className="p-3 bg-[#001726] border-t border-[#003355] flex items-center justify-between text-xs text-slate-400">
          <span>ClarityCore™ Post-Bet Retention Engine</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#002B49] text-white hover:bg-[#003B64] font-bold text-xs transition-colors"
          >
            {t.close}
          </button>
        </div>
      </div>
    </div>
  );
};
