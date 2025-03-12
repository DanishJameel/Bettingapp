// src/utils/constants.js
export const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT || 'http://localhost:3001';
export const SOCKET_ENDPOINT = import.meta.env.VITE_SOCKET_ENDPOINT || 'http://localhost:3001';

export const ODDS_FORMAT = {
  DECIMAL: 'decimal',
  FRACTIONAL: 'fractional',
  AMERICAN: 'american',
};

export const SPORTS = {
  FOOTBALL: 'football',
  BASKETBALL: 'basketball',
  TENNIS: 'tennis',
  HOCKEY: 'hockey',
};

export const BET_TYPES = {
  SINGLE: 'single',
  MULTIPLE: 'multiple',
  SYSTEM: 'system',
};

export const MATCH_STATUS = {
  LIVE: 'live',
  UPCOMING: 'upcoming',
  FINISHED: 'finished',
};