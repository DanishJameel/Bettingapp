// src/contexts/BettingContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockMatches, mockOdds, simulateMatchUpdate, simulateOddsUpdate } from '../utils/mockData';

const BettingContext = createContext(null);

export function BettingProvider({ children }) {
  const [matches, setMatches] = useState(mockMatches);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [odds, setOdds] = useState([]);
  const [bets, setBets] = useState([]);
  const [selectedSport, setSelectedSport] = useState(null);

  // Simulate real-time match updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMatches(simulateMatchUpdate());
    }, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Simulate real-time odds updates
  useEffect(() => {
    if (selectedMatch) {
      const interval = setInterval(() => {
        setOdds(simulateOddsUpdate(selectedMatch.id));
      }, 3000); // Update odds every 3 seconds

      return () => clearInterval(interval);
    }
  }, [selectedMatch]);

  const selectMatch = (match) => {
    setSelectedMatch(match);
    // Set initial odds from mock data
    setOdds(mockOdds[match.id]);
  };

  const addBet = (match, selection) => {
    setBets(currentBets => [
      ...currentBets,
      {
        id: Date.now(),
        match: `${match.teams[0]} vs ${match.teams[1]}`,
        selection: selection.name,
        odds: selection.odds,
      }
    ]);
  };

  const removeBet = (betId) => {
    setBets(currentBets => currentBets.filter(bet => bet.id !== betId));
  };

  const calculateTotalStake = (stake) => {
    const totalOdds = bets.reduce((acc, bet) => acc * bet.odds, 1);
    return stake * totalOdds;
  };

  const placeBet = async (stake) => {
    try {
      const response = await fetch('/api/bets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          bets,
          stake,
        }),
      });
      
      if (response.ok) {
        setBets([]);
        alert('Bet placed successfully!');
      } else {
        throw new Error('Failed to place bet');
      }
    } catch (error) {
      console.error('Error placing bet:', error);
      alert('Failed to place bet. Please try again.');
    }
  };

  const value = {
    matches,
    selectedMatch,
    odds,
    bets,
    selectedSport,
    selectMatch,
    addBet,
    removeBet,
    calculateTotalStake,
    placeBet,
    setSelectedSport,
  };

  return <BettingContext.Provider value={value}>{children}</BettingContext.Provider>;
}

export const useBetting = () => {
  const context = useContext(BettingContext);
  if (!context) {
    throw new Error('useBetting must be used within a BettingProvider');
  }
  return context;
};