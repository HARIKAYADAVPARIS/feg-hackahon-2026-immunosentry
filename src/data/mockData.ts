import { 
  SportsMatch, 
  ArenaTicket, 
  GoldenMarketOffer, 
  PlayerSpecialGroup, 
  SpecialBet 
} from '../types';

export const PSK_GOLDEN_MARKETS: GoldenMarketOffer[] = [
  {
    id: 'gm1',
    tag: 'GOLDEN MARKET',
    startsIn: 'STARTS IN 8AM',
    betCount: '308+ BET',
    title: 'REAL MADRID - INTER M.',
    legs: [
      'Real Madrid to win',
      'Over 3.5 goals',
      'Kylian Mbappe to score anytime'
    ],
    odds: 3.30,
    isBoosted: true
  },
  {
    id: 'gm2',
    tag: 'ODDS BOOSTER',
    startsIn: 'STARTS IN 8AM',
    betCount: '136+ BETTING',
    title: 'PORTO - MAN.CITY',
    legs: [
      'Man City to win',
      'Erling Braut Haaland to score anytime'
    ],
    wasOdds: 2.25,
    odds: 2.35,
    isBoosted: true
  },
  {
    id: 'gm3',
    tag: 'SUPER OFFER',
    startsIn: 'STARTS IN 5 HOURS',
    betCount: '94+ BET',
    title: 'AEK ATHENS - LASK LINZ',
    legs: [
      'AEK Athens to win',
      'Lovro Majer to score anytime'
    ],
    wasOdds: 5.10,
    odds: 5.30,
    isBoosted: true
  }
];

export const PSK_PLAYER_SPECIALS: PlayerSpecialGroup[] = [
  {
    id: 'ps1',
    playerName: 'KYLIAN MBAPPE',
    matchTitle: 'REAL MADRID — INTER MILAN',
    matchTime: 'TOMORROW 00:30',
    props: [
      { id: 'p1', label: 'score a goal', wasOdds: 1.70, odds: 1.75, isBooster: true, isHot: true },
      { id: 'p2', label: '3+ shots on target', wasOdds: 2.10, odds: 2.20, isBooster: true },
      { id: 'p3', label: '1+ assists', odds: 4.00 }
    ]
  },
  {
    id: 'ps2',
    playerName: 'ERLING HAALAND',
    matchTitle: 'FC PORTO — MAN.CITY',
    matchTime: 'TOMORROW 00:30',
    props: [
      { id: 'p4', label: '2+ shots on target', wasOdds: 2.20, odds: 2.30, isBooster: true, isHot: true },
      { id: 'p5', label: 'score a goal', wasOdds: 1.80, odds: 1.90, isBooster: true },
      { id: 'p6', label: '4+ shots', odds: 1.80 }
    ]
  },
  {
    id: 'ps3',
    playerName: 'AEK - PLAYER SCORES A GOAL',
    matchTitle: 'AEK ATHENS — LASK',
    matchTime: 'TODAY 22:15',
    props: [
      { id: 'p7', label: 'Mayer, Lovro', wasOdds: 4.60, odds: 4.70, isBooster: true },
      { id: 'p8', label: 'Jovic, Luka', wasOdds: 2.20, odds: 2.40, isBooster: true, isHot: true },
      { id: 'p9', label: 'Varga, Barnabas', wasOdds: 2.50, odds: 2.70, isBooster: true }
    ]
  }
];

export const PSK_SPECIAL_BETS: SpecialBet[] = [
  {
    id: 'sb1',
    badge: '🔥 709 BET',
    endsIn: 'ENDS IN 22 DAYS',
    category: 'SPECIAL BETS',
    question: 'Will the release date of GTA VI be pushed back from November 19, 2026?',
    stakeSharePctYes: 68.9,
    stakeSharePctNo: 31.1,
    oddsYes: 5.20,
    oddsNo: 1.12
  }
];

export const PSK_ARENA_TICKETS: ArenaTicket[] = [
  {
    id: 'arena-1',
    username: 'lukisuzuki',
    avatarColor: '#38bdf8',
    inspirations: 70,
    inspirationsFormatted: 'inspiracija 70',
    eventsCount: 5,
    ticketType: 'Običan',
    time: 'Danas 21:00',
    stakeEUR: 100.00,
    totalOdds: 10.04,
    payoutEUR: 867.92,
    hasBB: true,
    selections: [
      {
        matchId: 'rm-int',
        matchTitle: 'Real Madrid vs Inter Milan',
        selection: 'Real Madrid (Home Win)',
        odds: 1.65,
        marketName: 'Basic offer 1X2',
        clarityNote: 'Bernabéu European night pedigree (84% win rate at home)'
      },
      {
        matchId: 'por-mci',
        matchTitle: 'FC Porto vs Man.City',
        selection: 'Man City (Away Win)',
        odds: 1.75,
        marketName: 'Basic offer 1X2',
        clarityNote: 'Pep Guardiola squad depth & Haaland finishing index'
      },
      {
        matchId: 'eng-bou',
        matchTitle: 'Bournemouth vs Lincoln',
        selection: 'Bournemouth (Home Win)',
        odds: 1.30,
        marketName: 'EFL Cup 1X2',
        clarityNote: 'Premier League rotation vs League One opposition'
      },
      {
        matchId: 'm1',
        matchTitle: 'GNK Dinamo Zagreb vs HNK Hajduk Split',
        selection: 'Dinamo Zagreb (Home Win)',
        odds: 1.85,
        marketName: 'SuperSport HNL 1X2',
        clarityNote: 'Maksimir Fortress: Dinamo conceded only 0.7 goals/match'
      },
      {
        matchId: 'dor-vil',
        matchTitle: 'Dortmund vs Villarreal',
        selection: 'Dortmund (Home Win)',
        odds: 1.85,
        marketName: 'Champions League 1X2',
        clarityNote: 'Signal Iduna Park yellow wall momentum'
      }
    ]
  },
  {
    id: 'arena-2',
    username: 'zuna123',
    avatarColor: '#4ade80',
    inspirations: 1700,
    inspirationsFormatted: 'inspiracija 1,7 tis.',
    eventsCount: 5,
    ticketType: 'Običan',
    time: 'Danas 21:00',
    stakeEUR: 50.00,
    totalOdds: 20.49,
    payoutEUR: 880.70,
    hasBB: true,
    selections: [
      {
        matchId: 'rm-int',
        matchTitle: 'Real Madrid vs Inter Milan',
        selection: 'Kylian Mbappe to score',
        odds: 1.75,
        marketName: 'Player Specials Booster',
        clarityNote: 'Averaging 1.1 goals per 90 in Champions League home games'
      },
      {
        matchId: 'por-mci',
        matchTitle: 'FC Porto vs Man.City',
        selection: 'Erling Haaland to score',
        odds: 1.90,
        marketName: 'Player Specials Booster',
        clarityNote: 'Expected goals (xG) 1.25 across European fixtures'
      },
      {
        matchId: 'aek-las',
        matchTitle: 'AEK Athens vs LASK',
        selection: 'AEK Athens (Home Win)',
        odds: 1.75,
        marketName: 'Basic offer 1X2',
        clarityNote: 'OPAP Arena undefeated home streak in 2026'
      },
      {
        matchId: 'ned-nij',
        matchTitle: 'Nijmegen vs SBV Excelsior',
        selection: 'Nijmegen (Home Win)',
        odds: 1.65,
        marketName: 'Eredivisie 1X2',
        clarityNote: 'Excelsior conceded in 9 of last 10 away encounters'
      },
      {
        matchId: 'eng-sou',
        matchTitle: 'Southampton vs Swansea',
        selection: 'Southampton (Home Win)',
        odds: 1.80,
        marketName: 'Championship 1X2',
        clarityNote: 'St Marys stadium high-possession conversion'
      }
    ]
  },
  {
    id: 'arena-3',
    username: 'Robi0109',
    avatarColor: '#f97316',
    inspirations: 26600,
    inspirationsFormatted: 'inspiracija 26,6 tis. 🔥',
    eventsCount: 6,
    ticketType: 'Običan',
    time: 'Danas 21:00',
    stakeEUR: 44.00,
    totalOdds: 13.28,
    payoutEUR: 503.77,
    hasBB: true,
    selections: [
      {
        matchId: 'rm-int',
        matchTitle: 'Real Madrid vs Inter Milan',
        selection: 'Real Madrid Win',
        odds: 1.65,
        marketName: '1X2',
        clarityNote: 'Clarity Rating: High conversion model confidence'
      },
      {
        matchId: 'por-mci',
        matchTitle: 'FC Porto vs Man.City',
        selection: 'Man City Win',
        odds: 1.75,
        marketName: '1X2',
        clarityNote: 'High expected value against defensive transition'
      },
      {
        matchId: 'eng-bou',
        matchTitle: 'Bournemouth vs Lincoln',
        selection: 'Bournemouth Win',
        odds: 1.30,
        marketName: '1X2',
        clarityNote: 'Solid squad depth gap'
      },
      {
        matchId: 'dor-vil',
        matchTitle: 'Dortmund vs Villarreal',
        selection: 'Dortmund Win',
        odds: 1.85,
        marketName: '1X2',
        clarityNote: 'Strong home attack consistency'
      },
      {
        matchId: 'bru-ast',
        matchTitle: 'Club Brugge vs Aston Villa',
        selection: 'Both Teams to Score (Yes)',
        odds: 1.68,
        marketName: 'BTTS',
        clarityNote: 'Both sides score in 82% of European meetings'
      },
      {
        matchId: 'lil-bet',
        matchTitle: 'Lille vs Real Betis',
        selection: 'Lille Win',
        odds: 2.20,
        marketName: '1X2',
        clarityNote: 'Stade Pierre-Mauroy home field advantage'
      }
    ]
  },
  {
    id: 'arena-4',
    username: 'Ljuba18',
    avatarColor: '#a855f7',
    inspirations: 71,
    inspirationsFormatted: 'inspiracija 71',
    eventsCount: 6,
    ticketType: 'Običan',
    time: 'Danas 21:00',
    stakeEUR: 35.00,
    totalOdds: 45.41,
    payoutEUR: 1362.22,
    hasBB: true,
    selections: [
      {
        matchId: 'rm-int',
        matchTitle: 'Real Madrid vs Inter Milan',
        selection: 'Over 3.5 Goals',
        odds: 2.45,
        marketName: 'Goals Over/Under',
        clarityNote: 'Both sides attacking index > 2.1 xG'
      },
      {
        matchId: 'por-mci',
        matchTitle: 'FC Porto vs Man.City',
        selection: 'Man City & Haaland 2+ Shots',
        odds: 2.30,
        marketName: 'Booster Combo',
        clarityNote: 'Haaland lands 3.1 shots on target avg in away UCL'
      },
      {
        matchId: 'dor-vil',
        matchTitle: 'Dortmund vs Villarreal',
        selection: 'Dortmund Win & BTTS',
        odds: 3.40,
        marketName: 'Result & BTTS',
        clarityNote: 'Villarreal counter-attacking threat'
      },
      {
        matchId: 'aek-las',
        matchTitle: 'AEK Athens vs LASK',
        selection: 'AEK Athens Win',
        odds: 1.75,
        marketName: '1X2',
        clarityNote: 'Solid European home consistency'
      }
    ]
  },
  {
    id: 'arena-5',
    username: 'Tonimtk19',
    avatarColor: '#ec4899',
    inspirations: 68,
    inspirationsFormatted: 'inspiracija 68',
    eventsCount: 11,
    ticketType: 'Običan',
    time: 'Sutra 18:45',
    stakeEUR: 50.61,
    totalOdds: 11.85,
    payoutEUR: 517.57,
    selections: [
      {
        matchId: 'eng-bou',
        matchTitle: 'Bournemouth vs Lincoln',
        selection: 'Bournemouth Win',
        odds: 1.30,
        marketName: '1X2',
        clarityNote: 'Class difference'
      },
      {
        matchId: 'rm-int',
        matchTitle: 'Real Madrid vs Inter Milan',
        selection: 'Real Madrid 1X',
        odds: 1.20,
        marketName: 'Double Chance',
        clarityNote: 'Safe European anchor'
      },
      {
        matchId: 'por-mci',
        matchTitle: 'FC Porto vs Man.City',
        selection: 'Over 1.5 Goals',
        odds: 1.22,
        marketName: 'Over/Under',
        clarityNote: 'Consistent goal production'
      }
    ]
  },
  {
    id: 'arena-6',
    username: 'SANDI1237',
    avatarColor: '#06b6d4',
    inspirations: 1300,
    inspirationsFormatted: 'inspiracija 1,3 tis.',
    eventsCount: 8,
    ticketType: 'Običan',
    time: 'Danas 21:00',
    stakeEUR: 25.00,
    totalOdds: 64.49,
    payoutEUR: 1356.71,
    hasBB: true,
    selections: [
      {
        matchId: 'rm-int',
        matchTitle: 'Real Madrid vs Inter Milan',
        selection: 'Real Madrid Win & Mbappe Goal',
        odds: 2.65,
        marketName: 'Player & Result',
        clarityNote: 'High conversion rate'
      },
      {
        matchId: 'por-mci',
        matchTitle: 'FC Porto vs Man.City',
        selection: 'Erling Haaland 2+ shots on target',
        odds: 2.30,
        marketName: 'Player Booster',
        clarityNote: 'Dominant aerial and finishing prowess'
      }
    ]
  },
  {
    id: 'arena-7',
    username: 'IBPSK123',
    avatarColor: '#eab308',
    inspirations: 13100,
    inspirationsFormatted: 'inspiracija 13,1 tis.',
    eventsCount: 8,
    ticketType: 'Običan',
    time: 'Danas 21:00',
    stakeEUR: 10.00,
    totalOdds: 3940.39,
    payoutEUR: 30214.37,
    selections: [
      {
        matchId: 'eng-bol',
        matchTitle: 'Bolton vs West Ham',
        selection: 'West Ham Win (Away)',
        odds: 1.60,
        marketName: '1X2',
        clarityNote: 'Away favorite dominance'
      },
      {
        matchId: 'sb1',
        matchTitle: 'Special: GTA VI Release Date',
        selection: 'Yes (Pushed back)',
        odds: 5.20,
        marketName: 'Special Bets',
        clarityNote: '68.9% public community stake consensus'
      }
    ]
  },
  {
    id: 'arena-8',
    username: 'Azaza',
    avatarColor: '#10b981',
    inspirations: 146,
    inspirationsFormatted: 'inspiracija 146',
    eventsCount: 3,
    ticketType: 'Običan',
    time: 'Danas 21:00',
    stakeEUR: 750.00,
    totalOdds: 3.48,
    payoutEUR: 2289.45,
    selections: [
      {
        matchId: 'rm-int',
        matchTitle: 'Real Madrid vs Inter Milan',
        selection: 'Real Madrid Win',
        odds: 1.65,
        marketName: '1X2',
        clarityNote: 'Whale tier high-liquidity anchor'
      },
      {
        matchId: 'por-mci',
        matchTitle: 'FC Porto vs Man.City',
        selection: 'Man City Win',
        odds: 1.75,
        marketName: '1X2',
        clarityNote: 'Expected Value: Top European favorite'
      },
      {
        matchId: 'eng-bou',
        matchTitle: 'Bournemouth vs Lincoln',
        selection: 'Bournemouth Win',
        odds: 1.30,
        marketName: '1X2',
        clarityNote: 'Dominant statistical home conversion'
      }
    ]
  }
];

export const SAMPLE_MATCHES: SportsMatch[] = [
  // UEFA Champions League Matches (Direct from PSK.hr live screens)
  {
    id: 'rm-int',
    league: 'Champions League',
    country: 'Europe',
    sport: 'football',
    homeTeam: 'Real Madrid',
    awayTeam: 'Inter Milan',
    time: 'tomorrow 00:30',
    timeCategory: 'TOMORROW',
    isLive: false,
    hasBB: true,
    hasGoldenMarket: true,
    isTopOffer: true,
    odds: {
      home: 1.65,
      draw: 4.70,
      away: 5.50,
      over25: 1.55,
      under25: 2.45,
      bttsYes: 1.62,
      bttsNo: 2.20,
    },
    clarityInsights: {
      tag: 'Golden Market Anchor',
      summary: 'Real Madrid is unbeaten in 18 UCL home group/knockout matches. High goal probability with Mbappe starting.',
      statFact: 'Bernabéu factor: 84% home win rate with average 2.7 goals scored per match.',
      confidenceGrade: 'A',
      fairValueAssessment: 'Home Win (1.65) carries highest statistical expected value on the board.',
    },
    h2hStats: {
      homeRecent: ['W', 'W', 'W', 'D', 'W'],
      awayRecent: ['W', 'D', 'W', 'L', 'W'],
      lastMeeting: 'Real Madrid 2 - 0 Inter Milan',
    },
  },
  {
    id: 'dor-vil',
    league: 'Champions League',
    country: 'Europe',
    sport: 'football',
    homeTeam: 'Dortmund',
    awayTeam: 'Villarreal',
    time: 'tomorrow 00:30',
    timeCategory: 'TOMORROW',
    isLive: false,
    hasBB: true,
    isTopOffer: true,
    odds: {
      home: 1.85,
      draw: 4.30,
      away: 4.50,
      over25: 1.60,
      under25: 2.30,
      bttsYes: 1.55,
      bttsNo: 2.30,
    },
    clarityInsights: {
      tag: 'Home Dominance',
      summary: 'Dortmund has scored in 24 consecutive European home games at Signal Iduna Park.',
      statFact: 'Yellow Wall atmosphere: Dortmund averages 2.4 goals per match at home.',
      confidenceGrade: 'A',
      fairValueAssessment: 'Home Win (1.85) presents exceptional risk-reward profile.',
    },
    h2hStats: {
      homeRecent: ['W', 'W', 'D', 'W', 'W'],
      awayRecent: ['D', 'W', 'L', 'W', 'D'],
      lastMeeting: 'First European knockout clash',
    },
  },
  {
    id: 'por-mci',
    league: 'Champions League',
    country: 'Europe',
    sport: 'football',
    homeTeam: 'FC Porto',
    awayTeam: 'Man.City',
    time: 'tomorrow 00:30',
    timeCategory: 'TOMORROW',
    isLive: false,
    hasBB: true,
    isTopOffer: true,
    odds: {
      home: 5.00,
      draw: 4.30,
      away: 1.75,
      over25: 1.65,
      under25: 2.25,
      bttsYes: 1.70,
      bttsNo: 2.10,
    },
    clarityInsights: {
      tag: 'Tactical Supremacy',
      summary: 'Man City controls 67% average away possession in Europe; Haaland in peak physical form.',
      statFact: 'City won 6 of last 7 away UCL matches by 2 or more clear goals.',
      confidenceGrade: 'A',
      fairValueAssessment: 'Man City Away (1.75) is among the most backed selections across FEG CEE.',
    },
    h2hStats: {
      homeRecent: ['W', 'D', 'W', 'W', 'L'],
      awayRecent: ['W', 'W', 'W', 'W', 'D'],
      lastMeeting: 'Man City 3 - 1 FC Porto',
    },
  },
  {
    id: 'aek-las',
    league: 'Champions League',
    country: 'Europe',
    sport: 'football',
    homeTeam: 'AEK Athens',
    awayTeam: 'LASK',
    time: 'today 22:15',
    timeCategory: 'TODAY',
    isLive: false,
    hasBB: true,
    isTopOffer: true,
    odds: {
      home: 1.75,
      draw: 4.10,
      away: 4.30,
      over25: 1.80,
      under25: 2.00,
      bttsYes: 1.78,
      bttsNo: 1.98,
    },
    clarityInsights: {
      tag: 'Home Pressure',
      summary: 'AEK Athens has won 8 of their last 9 home fixtures with Lovro Majer commanding midfield tempo.',
      statFact: 'OPAP Arena fortress: AEK scored 14 goals in last 5 home continental matches.',
      confidenceGrade: 'B+',
      fairValueAssessment: 'AEK Athens (1.75) represents balanced value with high backing volume.',
    },
    h2hStats: {
      homeRecent: ['W', 'W', 'W', 'D', 'W'],
      awayRecent: ['L', 'D', 'W', 'L', 'D'],
      lastMeeting: 'LASK 1 - 1 AEK Athens',
    },
  },
  {
    id: 'bru-ast',
    league: 'Champions League',
    country: 'Europe',
    sport: 'football',
    homeTeam: 'Club Brugge',
    awayTeam: 'Aston Villa',
    time: 'today 22:15',
    timeCategory: 'TODAY',
    isLive: false,
    hasBB: true,
    isTopOffer: true,
    odds: {
      home: 2.60,
      draw: 3.70,
      away: 2.90,
      over25: 1.75,
      under25: 2.10,
    },
    clarityInsights: {
      tag: 'Evenly Matched',
      summary: 'Unai Emery tactical European pedigree vs Brugge dynamic high pressing line.',
      statFact: 'Both teams scored in 80% of their last 10 competitive European outings.',
      confidenceGrade: 'Balanced',
      fairValueAssessment: 'Draw (3.70) or Both Teams to Score carries solid mathematical symmetry.',
    },
    h2hStats: {
      homeRecent: ['W', 'W', 'D', 'L', 'W'],
      awayRecent: ['W', 'L', 'W', 'W', 'D'],
      lastMeeting: 'First meeting between clubs',
    },
  },
  {
    id: 'lil-bet',
    league: 'Champions League',
    country: 'Europe',
    sport: 'football',
    homeTeam: 'Lille',
    awayTeam: 'Betis',
    time: 'tomorrow 00:30',
    timeCategory: 'TOMORROW',
    isLive: false,
    hasBB: true,
    isTopOffer: true,
    odds: {
      home: 2.20,
      draw: 3.40,
      away: 3.30,
      over25: 1.95,
      under25: 1.85,
    },
    clarityInsights: {
      tag: 'French Home Edge',
      summary: 'Lille defensive discipline at Stade Pierre-Mauroy conceded just 3 goals in last 6 fixtures.',
      statFact: 'Home conversion rate: Lille converted 64% of close chances into victories.',
      confidenceGrade: 'B+',
      fairValueAssessment: 'Lille (2.20) gives favorable risk compensation.',
    },
    h2hStats: {
      homeRecent: ['W', 'D', 'W', 'W', 'D'],
      awayRecent: ['D', 'W', 'L', 'D', 'W'],
      lastMeeting: 'Betis 1 - 0 Lille',
    },
  },

  // 1. South Korea (Live In-play matches from screenshot 2)
  {
    id: 'kor-inc',
    league: '1.South Korea',
    country: 'South Korea',
    sport: 'football',
    homeTeam: 'Incheon United',
    awayTeam: 'Bucheon 1995',
    time: 'Live 21m',
    timeCategory: 'LIVE',
    isLive: true,
    liveMinute: '1. poluvrijeme - 21m',
    score: '0 - 0',
    hasBB: true,
    isTopOffer: true,
    odds: {
      home: 2.15,
      draw: 2.90,
      away: 3.50,
      over25: 2.10,
      under25: 1.68,
    },
    clarityInsights: {
      tag: 'In-Play Live',
      summary: 'Incheon pressing high with 64% early possession and 3 corner kicks earned.',
      statFact: 'Under 2.5 Goals (1.68) historically lands in 72% of K-League matches 0-0 at 20\'.',
      confidenceGrade: 'B+',
      fairValueAssessment: 'Incheon Draw No Bet or Under 2.5 represents low-volatility in-play value.',
    },
    h2hStats: {
      homeRecent: ['D', 'W', 'L', 'D', 'W'],
      awayRecent: ['L', 'L', 'D', 'W', 'L'],
      lastMeeting: 'Bucheon 0 - 2 Incheon',
    },
  },
  {
    id: 'kor-uls',
    league: '1.South Korea',
    country: 'South Korea',
    sport: 'football',
    homeTeam: 'Ulsan Hyundai',
    awayTeam: 'FC Seoul',
    time: 'Live 21m',
    timeCategory: 'LIVE',
    isLive: true,
    liveMinute: '1. poluvrijeme - 21m',
    score: '0 - 0',
    hasBB: true,
    isTopOffer: true,
    odds: {
      home: 3.20,
      draw: 3.00,
      away: 2.20,
      over25: 1.95,
      under25: 1.85,
    },
    clarityInsights: {
      tag: 'In-Play High Pace',
      summary: 'FC Seoul looking dangerous on fast counter-attacks through the midfield channels.',
      statFact: 'Seoul has scored first in 6 of their last 7 matches against Ulsan.',
      confidenceGrade: 'Balanced',
      fairValueAssessment: 'Away Win (2.20) backed by sharp match momentum.',
    },
    h2hStats: {
      homeRecent: ['L', 'D', 'W', 'L', 'D'],
      awayRecent: ['W', 'W', 'D', 'W', 'L'],
      lastMeeting: 'FC Seoul 1 - 0 Ulsan',
    },
  },

  // Italy Primavera 2 (U19)
  {
    id: 'ita-pal',
    league: 'Italy-Primavera 2 (U19)',
    country: 'Italy',
    sport: 'football',
    homeTeam: 'Palermo FC U19',
    awayTeam: 'Pescara Calcio U19',
    time: 'Live 88m',
    timeCategory: 'LIVE',
    isLive: true,
    liveMinute: '2. poluvrijeme - 88m',
    score: '2 - 1',
    isTopOffer: true,
    odds: {
      home: 1.10,
      draw: 5.10,
      away: 60.00,
    },
    clarityInsights: {
      tag: 'Closing Minutes',
      summary: 'Palermo defending with 5-man low block to preserve 2-1 lead with 2 minutes remaining.',
      statFact: 'Palermo has preserved late leads in 95% of youth fixtures this term.',
      confidenceGrade: 'A',
      fairValueAssessment: 'Home Win (1.10) safe accumulator anchor.',
    },
    h2hStats: {
      homeRecent: ['W', 'W', 'D', 'L', 'W'],
      awayRecent: ['L', 'D', 'L', 'W', 'L'],
      lastMeeting: 'Palermo 3 - 2 Pescara',
    },
  },

  // Portugal (U23)
  {
    id: 'por-est',
    league: 'Portugal (U23)',
    country: 'Portugal',
    sport: 'football',
    homeTeam: 'Estoril Praia U23',
    awayTeam: 'FC Famalicao U23',
    time: 'Live 45m',
    timeCategory: 'LIVE',
    isLive: true,
    liveMinute: '1. poluvrijeme - 45m',
    score: '0 - 0',
    isTopOffer: true,
    odds: {
      home: 2.60,
      draw: 2.65,
      away: 3.10,
    },
    clarityInsights: {
      tag: 'Halftime In-Play',
      summary: 'Cautious first half in Lisbon outskirts; defensive stalemate with only 2 total shots on goal.',
      statFact: 'Second halves in Portugal U23 see 68% of match goals scored.',
      confidenceGrade: 'B+',
      fairValueAssessment: 'Draw (2.65) aligns with low chance creation metrics.',
    },
    h2hStats: {
      homeRecent: ['D', 'W', 'D', 'L', 'W'],
      awayRecent: ['D', 'L', 'W', 'D', 'L'],
      lastMeeting: 'Famalicao 1 - 1 Estoril',
    },
  },
  {
    id: 'por-rio',
    league: 'Portugal (U23)',
    country: 'Portugal',
    sport: 'football',
    homeTeam: 'Rio Ave U23',
    awayTeam: 'SC Uniao Torreense U23',
    time: 'Live Halftime',
    timeCategory: 'LIVE',
    isLive: true,
    liveMinute: 'Pauza (Halftime)',
    score: '0 - 1',
    odds: {
      home: 8.00,
      draw: 3.70,
      away: 1.45,
    },
    clarityInsights: {
      tag: 'Halftime Shift',
      summary: 'Torreense leads 0-1 at the break; Rio Ave struggling to break past mid-block.',
      statFact: 'Torreense has won all 4 matches this season when leading at halftime.',
      confidenceGrade: 'A',
      fairValueAssessment: 'Away Win (1.45) high certainty based on game state.',
    },
    h2hStats: {
      homeRecent: ['L', 'L', 'D', 'W', 'L'],
      awayRecent: ['W', 'W', 'W', 'D', 'L'],
      lastMeeting: 'Rio Ave 0 - 0 Torreense',
    },
  },

  // 1. Netherlands
  {
    id: 'ned-nij',
    league: '1.Netherlands',
    country: 'Netherlands',
    sport: 'football',
    homeTeam: 'Nijmegen',
    awayTeam: 'SBV Excelsior',
    time: 'today 22:15',
    timeCategory: 'TODAY',
    isLive: false,
    hasBB: true,
    isTopOffer: true,
    odds: {
      home: 1.65,
      draw: 4.20,
      away: 4.70,
      over25: 1.55,
      under25: 2.35,
    },
    clarityInsights: {
      tag: 'Eredivisie Value',
      summary: 'Nijmegen scored 11 goals in their last 4 Eredivisie fixtures at Goffertstadion.',
      statFact: 'Excelsior has lost 5 straight away matches in all competitions.',
      confidenceGrade: 'A',
      fairValueAssessment: 'Home Win (1.65) statistically high confidence.',
    },
    h2hStats: {
      homeRecent: ['W', 'W', 'D', 'W', 'L'],
      awayRecent: ['L', 'L', 'L', 'D', 'L'],
      lastMeeting: 'Excelsior 0 - 3 Nijmegen',
    },
  },

  // 2. England (Championship)
  {
    id: 'eng-bol',
    league: '2. England',
    country: 'England',
    sport: 'football',
    homeTeam: 'Bolton',
    awayTeam: 'West Ham',
    time: 'tomorrow 00:30',
    timeCategory: 'TOMORROW',
    isLive: false,
    hasBB: true,
    isTopOffer: true,
    odds: {
      home: 5.10,
      draw: 4.20,
      away: 1.60,
    },
    clarityInsights: {
      tag: 'Class Mismatch',
      summary: 'West Ham squad superiority should dominate Bolton defensive transitions.',
      statFact: 'Hammers won 8 consecutive cup ties against lower league opponents.',
      confidenceGrade: 'A',
      fairValueAssessment: 'Away Win (1.60) is one of the most reliable selections tonight.',
    },
    h2hStats: {
      homeRecent: ['W', 'D', 'L', 'W', 'D'],
      awayRecent: ['W', 'W', 'L', 'W', 'D'],
      lastMeeting: 'Bolton 0 - 2 West Ham',
    },
  },
  {
    id: 'eng-sou',
    league: '2. England',
    country: 'England',
    sport: 'football',
    homeTeam: 'Southampton',
    awayTeam: 'Swansea',
    time: 'tomorrow 00:15',
    timeCategory: 'TOMORROW',
    isLive: false,
    hasBB: true,
    isTopOffer: true,
    odds: {
      home: 1.80,
      draw: 3.70,
      away: 4.20,
    },
    clarityInsights: {
      tag: 'Possession Edge',
      summary: 'Saints average 63% possession at St Marys with intense counter-pressing.',
      statFact: 'Southampton has beaten Swansea in 4 of their last 5 head-to-head meetings.',
      confidenceGrade: 'A',
      fairValueAssessment: 'Home Win (1.80) offers solid conversion value.',
    },
    h2hStats: {
      homeRecent: ['W', 'W', 'D', 'L', 'W'],
      awayRecent: ['D', 'L', 'W', 'L', 'D'],
      lastMeeting: 'Southampton 3 - 0 Swansea',
    },
  },

  // England EFL Cup
  {
    id: 'eng-bou',
    league: 'England EFL Cup',
    country: 'England',
    sport: 'football',
    homeTeam: 'Bournemouth',
    awayTeam: 'Lincoln',
    time: 'tomorrow 00:15',
    timeCategory: 'TOMORROW',
    isLive: false,
    hasBB: true,
    isTopOffer: true,
    odds: {
      home: 1.30,
      draw: 5.80,
      away: 8.60,
    },
    clarityInsights: {
      tag: 'Cup Heavy Favorite',
      summary: 'Premier League vitality against League One Lincoln; heavy rotation still holds massive quality advantage.',
      statFact: 'Bournemouth has scored 3+ goals in 7 of their last 8 home cup ties.',
      confidenceGrade: 'A',
      fairValueAssessment: 'Home Win (1.30) anchor pick.',
    },
    h2hStats: {
      homeRecent: ['W', 'D', 'W', 'L', 'W'],
      awayRecent: ['L', 'D', 'W', 'D', 'L'],
      lastMeeting: 'First modern cup meeting',
    },
  },

  // SuperSport HNL (Croatia) - National Hero Derby
  {
    id: 'm1',
    league: 'HNK Croatia-Cup / SuperSport HNL',
    country: 'Croatia',
    sport: 'football',
    homeTeam: 'GNK Dinamo Zagreb',
    awayTeam: 'HNK Hajduk Split',
    time: 'Tonight 20:00 CEST',
    timeCategory: 'TODAY',
    isLive: false,
    hasBB: true,
    isTopOffer: true,
    odds: {
      home: 1.85,
      draw: 3.40,
      away: 4.20,
      over25: 1.92,
      under25: 1.88,
      bttsYes: 1.80,
      bttsNo: 1.95,
    },
    clarityInsights: {
      tag: 'Vječni Derbi Insight',
      summary: 'Dinamo has won 4 of the last 5 Eternal Derbies at Maksimir with an average of 2.6 goals.',
      statFact: 'Maksimir Fortress: Dinamo conceded only 0.7 goals per home match this season.',
      confidenceGrade: 'A',
      fairValueAssessment: 'Home Win (1.85) aligns with historical home conversion model.',
    },
    h2hStats: {
      homeRecent: ['W', 'W', 'D', 'W', 'W'],
      awayRecent: ['W', 'L', 'W', 'D', 'W'],
      lastMeeting: 'Dinamo 2 - 1 Hajduk (Maksimir)',
    },
  },
  {
    id: 'm3',
    league: 'HNK Croatia-Cup / SuperSport HNL',
    country: 'Croatia',
    sport: 'football',
    homeTeam: 'HNK Rijeka',
    awayTeam: 'NK Osijek',
    time: 'Live 64\'',
    timeCategory: 'LIVE',
    isLive: true,
    liveMinute: '64\'',
    score: '1 - 0',
    hasBB: true,
    odds: {
      home: 1.38,
      draw: 4.10,
      away: 8.50,
      over25: 2.15,
      under25: 1.62,
    },
    clarityInsights: {
      tag: 'In-Play Momentum',
      summary: 'Rijeka controlling 61% possession with 8 shots on target. Osijek operating with a low block.',
      statFact: 'Under 2.5 Goals (1.62) has landed in 75% of second halves where Rijeka led 1-0 at 60\'.',
      confidenceGrade: 'B+',
      fairValueAssessment: 'Under 2.5 goals represents conservative in-play consistency.',
    },
    h2hStats: {
      homeRecent: ['W', 'D', 'W', 'W', 'L'],
      awayRecent: ['L', 'D', 'W', 'L', 'D'],
      lastMeeting: 'Osijek 0 - 1 Rijeka',
    },
  },
];

export const STAGE_CREDENTIALS_INFO = {
  stageUrl: 'https://www-dc1.stage.psk.hr/',
  prodUrl: 'https://www.psk.hr/',
  totalUsers: 60,
  exampleUser: 'HackathonSTG01',
  examplePassword: 'Hackathon01',
  userRange: 'HackathonSTG01 to HackathonSTG60',
  passwordRule: 'Replace STG with empty string (e.g. HackathonSTG25 -> Hackathon25)',
};

export interface FEGMarket {
  id: string;
  country: string;
  flag: string;
  brand: string;
  domain: string;
  monthlySessions: string;
  status: string;
  taxLaw: string;
}

export const FEG_CORPORATE_PROFILE = {
  name: 'Fortuna Entertainment Group (FEG)',
  website: 'https://www.feg.eu',
  tagline: 'The Largest Central European Betting Operator',
  scale: '6,000+ Employees Across Europe & FEG India GCC (Hyderabad)',
  markets: [
    {
      id: 'hr',
      country: 'Croatia',
      flag: '🇭🇷',
      brand: 'PSK (Prva Sportska Kladionica)',
      domain: 'psk.hr',
      monthlySessions: '2.4M',
      status: 'Live Pilot Focus',
      taxLaw: 'Zakon o igrama na sreću (10% statutory winnings tax)',
    },
    {
      id: 'cz',
      country: 'Czech Republic',
      flag: '🇨🇿',
      brand: 'Fortuna CZ (Founding Brand)',
      domain: 'ifortuna.cz',
      monthlySessions: '3.1M',
      status: 'Phase 2 Rollout',
      taxLaw: 'Czech Gambling Act No. 186/2016',
    },
    {
      id: 'sk',
      country: 'Slovakia',
      flag: '🇸🇰',
      brand: 'Fortuna SK',
      domain: 'ifortuna.sk',
      monthlySessions: '1.8M',
      status: 'Phase 2 Rollout',
      taxLaw: 'Slovak Gambling Act No. 30/2019',
    },
    {
      id: 'pl',
      country: 'Poland',
      flag: '🇵🇱',
      brand: 'Fortuna PL',
      domain: 'efortuna.pl',
      monthlySessions: '2.2M',
      status: 'Phase 3 Rollout',
      taxLaw: 'Polish Ustawa o grach hazardowych',
    },
    {
      id: 'ro',
      country: 'Romania',
      flag: '🇷🇴',
      brand: 'Fortuna & Casa Pariurilor',
      domain: 'efortuna.ro / casapariurilor.ro',
      monthlySessions: '2.5M',
      status: 'Phase 3 Rollout',
      taxLaw: 'ONJN Romanian Gambling Directives',
    },
  ] as FEGMarket[],
};

