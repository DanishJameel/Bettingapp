// src/components/betting/LiveMatches.jsx
import React from 'react';
import { useBetting } from '../../contexts/BettingContext';

function LiveMatches() {
  const { matches, selectMatch, selectedMatch } = useBetting();

  return (
    <div className="space-y-4">
      {matches.map((match) => (
        <div
          key={match.id}
          onClick={() => selectMatch(match)}
          className={`bg-gray-800 p-4 rounded-lg cursor-pointer ${
            selectedMatch?.id === match.id ? 'ring-2 ring-blue-500' : ''
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <div className="text-white font-bold">{match.teams[0]}</div>
              <div className="text-white font-bold">{match.teams[1]}</div>
            </div>
            <div className="text-center">
              <div className="text-green-500">{match.score[0]}</div>
              <div className="text-green-500">{match.score[1]}</div>
            </div>
            <div className="text-gray-400">
              <div>{match.time}'</div>
              <div>{match.league}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LiveMatches;