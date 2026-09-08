export type ActiveView = 'prototype' | 'demo' | 'impact' | 'compliance' | 'pitch';

export type UserPersona = 'casual' | 'analytical' | 'responsible_check';

export type PSKTimeFilter = 'LIVE' | 'TODAY' | '1H' | '3H' | 'TOMORROW' | 'ALL';
export type PSKSportType = 'all' | 'football' | 'tennis' | 'basketball' | 'handball' | 'icehockey';

export interface SportsMatch {
  id: string;
  league: string;
  country: string;
  sport: 'football' | 'basketball' | 'tennis' | 'handball' | 'icehockey';
  homeTeam: string;
  awayTeam: string;
  time: string;
  timeCategory?: 'LIVE' | 'TODAY' | '1H' | '3H' | 'TOMORROW';
  isLive: boolean;
  liveMinute?: string;
  score?: string;
  hasBB?: boolean;
  hasGoldenMarket?: boolean;
  isTopOffer?: boolean;
  odds: {
    home: number;
    draw?: number;
    away: number;
    over25?: number;
    under25?: number;
    bttsYes?: number;
    bttsNo?: number;
  };
  clarityInsights: {
    tag: string;
    summary: string;
    statFact: string;
    confidenceGrade: 'A' | 'B+' | 'Balanced';
    fairValueAssessment: string;
  };
  h2hStats: {
    homeRecent: string[];
    awayRecent: string[];
    lastMeeting: string;
  };
}

export interface BetslipItem {
  id?: string;
  matchId: string;
  matchTitle: string;
  selection: string;
  odds: number;
  marketName: string;
  clarityNote: string;
  confidenceGrade?: string;
  stakeSharePct?: number;
}

export type BetSlipItem = BetslipItem;

export interface ActiveTicketSelection {
  matchTitle: string;
  selection: string;
  odds: number;
  score?: string;
  minute?: string;
  isWinning?: boolean;
  status: 'live' | 'upcoming' | 'finished';
}

export interface ActiveTicket {
  id: string;
  ticketNumber: string;
  placedAt: string;
  stakeEUR: number;
  totalOdds: number;
  potentialPayoutEUR: number;
  status: 'in_play' | 'won' | 'cashed_out' | 'settled';
  cashOutValueEUR?: number;
  cashOutRationale?: string;
  selections: ActiveTicketSelection[];
}

export interface ArenaTicket {
  id: string;
  username: string;
  avatarColor: string;
  inspirations: number;
  inspirationsFormatted: string;
  eventsCount: number;
  ticketType: string; // e.g. "Običan"
  time: string; // e.g. "Danas 21:00"
  stakeEUR: number;
  totalOdds: number;
  payoutEUR: number;
  hasBB?: boolean;
  selections: BetslipItem[];
}

export interface PlayerPropItem {
  id: string;
  label: string;
  wasOdds?: number;
  odds: number;
  isBooster?: boolean;
  isHot?: boolean;
}

export interface PlayerSpecialGroup {
  id: string;
  playerName: string;
  matchTitle: string;
  matchTime: string;
  props: PlayerPropItem[];
}

export interface GoldenMarketOffer {
  id: string;
  tag: string;
  startsIn: string;
  betCount: string;
  title: string;
  legs: string[];
  wasOdds?: number;
  odds: number;
  isBoosted?: boolean;
}

export interface SpecialBet {
  id: string;
  badge: string;
  endsIn: string;
  category: string;
  question: string;
  stakeSharePctYes: number;
  stakeSharePctNo: number;
  oddsYes: number;
  oddsNo: number;
}

export interface SessionMetrics {
  sessionDurationSec: number;
  pagesViewed: number;
  actionsCompleted: number;
  sqiScore: number; // 0 - 100 Session Quality Index
  frictionPointsAvoided: number;
  confidenceIndicator: number; // 0 - 100
  rgHealthStatus: 'Optimal' | 'Caution' | 'Cool-down Active';
}

export interface ImpactModelInputs {
  monthlySessions: number; // e.g. 12,000,000 across FEG CEE
  baselineConversionRate: number; // e.g. 14.2%
  projectedConversionUplift: number; // e.g. +3.8%
  averageActionValue: number; // e.g. €8.50
  finalStepAbandonmentBaseline: number; // e.g. 38%
  finalStepRecoveryRate: number; // e.g. 24%
  retentionD90Uplift: number; // e.g. +6.5%
}
