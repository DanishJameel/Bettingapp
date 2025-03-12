// src/components/betting/OddsDisplay.jsx
import React from 'react';
import { useBetting } from '../../contexts/BettingContext';

function OddsDisplay() {
  const { selectedMatch, odds, addBet } = useBetting();

  if (!selectedMatch) {
    return (
      <div className="bg-gray-800 p-4 rounded-lg">
        <p className="text-gray-400">Select a match to view odds</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-xl text-white font-bold mb-4">{selectedMatch.teams.join(' vs ')}</h3>
      <div className="space-y-4">
        {odds.map((market) => (
          <div key={market.id} className="border-b border-gray-700 pb-4">
            <h4 className="text-gray-300 mb-2">{market.name}</h4>
            <div className="grid grid-cols-3 gap-2">
              {market.selections.map((selection) => (
                <button
                  key={selection.id}
                  onClick={() => addBet(selectedMatch, selection)}
                  className="bg-gray-700 p-2 rounded text-white hover:bg-gray-600"
                >
                  <div className="text-sm">{selection.name}</div>
                  <div className="text-blue-400">{selection.odds}</div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OddsDisplay;