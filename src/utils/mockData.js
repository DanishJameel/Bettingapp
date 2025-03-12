// src/utils/mockData.js
export const mockMatches = [
  {
    id: 1,
    teams: ['Manchester United', 'Arsenal'],
    score: [2, 1],
    time: 75,
    league: 'Premier League',
    status: 'live',
  },
  {
    id: 2,
    teams: ['Lakers', 'Warriors'],
    score: [89, 92],
    time: 43,
    league: 'NBA',
    status: 'live',
  },
  {
    id: 3,
    teams: ['Nadal', 'Djokovic'],
    score: [1, 1],
    time: 55,
    league: 'Wimbledon',
    status: 'live',
  },
];

export const mockOdds = {
  1: [
    {
      id: 1,
      name: 'Match Result',
      selections: [
        { id: 1, name: 'Manchester United', odds: 2.5 },
        { id: 2, name: 'Draw', odds: 3.2 },
        { id: 3, name: 'Arsenal', odds: 2.8 },
      ],
    },
    {
      id: 2,
      name: 'Both Teams to Score',
      selections: [
        { id: 4, name: 'Yes', odds: 1.8 },
        { id: 5, name: 'No', odds: 2.1 },
      ],
    },
  ],
  2: [
    {
      id: 3,
      name: 'Match Winner',
      selections: [
        { id: 6, name: 'Lakers', odds: 2.2 },
        { id: 7, name: 'Warriors', odds: 1.7 },
      ],
    },
    {
      id: 4,
      name: 'Total Points',
      selections: [
        { id: 8, name: 'Over 210.5', odds: 1.9 },
        { id: 9, name: 'Under 210.5', odds: 1.9 },
      ],
    },
  ],
  3: [
    {
      id: 5,
      name: 'Match Winner',
      selections: [
        { id: 10, name: 'Nadal', odds: 2.1 },
        { id: 11, name: 'Djokovic', odds: 1.8 },
      ],
    },
    {
      id: 6,
      name: 'Set Score',
      selections: [
        { id: 12, name: '2-0', odds: 2.5 },
        { id: 13, name: '2-1', odds: 3.0 },
        { id: 14, name: '1-2', odds: 2.8 },
        { id: 15, name: '0-2', odds: 2.2 },
      ],
    },
  ],
};

export const simulateOddsUpdate = (matchId) => {
  const currentOdds = mockOdds[matchId];
  return currentOdds.map(market => ({
    ...market,
    selections: market.selections.map(selection => ({
      ...selection,
      odds: Number((selection.odds + (Math.random() * 0.4 - 0.2)).toFixed(2)),
    })),
  }));
};

export const simulateMatchUpdate = () => {
  return mockMatches.map(match => ({
    ...match,
    score: match.status === 'live' 
      ? [
          match.score[0] + (Math.random() < 0.1 ? 1 : 0),
          match.score[1] + (Math.random() < 0.1 ? 1 : 0),
        ]
      : match.score,
    time: match.time + 1 > 90 ? 90 : match.time + 1,
  }));
};