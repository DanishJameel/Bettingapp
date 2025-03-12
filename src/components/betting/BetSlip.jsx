// src/components/betting/BetSlip.jsx
import React from 'react';
import { useBetting } from '../../contexts/BettingContext';
import { useAuth } from '../../contexts/AuthContext';

function BetSlip() {
  const { bets, removeBet, calculateTotalStake, placeBet } = useBetting();
  const { isAuthenticated } = useAuth();
  const [stake, setStake] = React.useState('');

  const handlePlaceBet = () => {
    if (!isAuthenticated) {
      alert('Please login to place bets');
      return;
    }
    placeBet(parseFloat(stake));
    setStake('');
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-xl text-white font-bold mb-4">Bet Slip</h3>
      {bets.length === 0 ? (
        <p className="text-gray-400">No bets selected</p>
      ) : (
        <>
          {bets.map((bet) => (
            <div key={bet.id} className="bg-gray-700 p-3 rounded mb-2">
              <div className="flex justify-between">
                <span className="text-white">{bet.match}</span>
                <button
                  onClick={() => removeBet(bet.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  ×
                </button>
              </div>
              <div className="text-gray-300 text-sm">{bet.selection}</div>
              <div className="text-blue-400">Odds: {bet.odds}</div>
            </div>
          ))}
          <div className="mt-4">
            <input
              type="number"
              value={stake}
              onChange={(e) => setStake(e.target.value)}
              placeholder="Enter stake"
              className="w-full p-2 rounded bg-gray-700 text-white mb-2"
            />
            <div className="text-gray-300 mb-2">
              Potential Win: ${calculateTotalStake(parseFloat(stake) || 0).toFixed(2)}
            </div>
            <button
              onClick={handlePlaceBet}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Place Bet
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default BetSlip;