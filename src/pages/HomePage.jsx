// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import LiveMatches from '../components/betting/LiveMatches';

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl text-white font-bold mb-4">Welcome to BetMaster</h1>
        <p className="text-gray-400">Your premier destination for sports betting</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl text-white font-bold mb-4">Featured Matches</h2>
          <LiveMatches />
        </div>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl text-white font-bold mb-4">Popular Sports</h2>
          <div className="grid grid-cols-2 gap-4">
            {['Football', 'Basketball', 'Tennis', 'Hockey'].map((sport) => (
              <Link
                key={sport}
                to="/dashboard"
                className="bg-gray-700 p-4 rounded-lg text-white hover:bg-gray-600"
              >
                {sport}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-blue-600 p-6 rounded-lg text-center">
        <h2 className="text-2xl text-white font-bold mb-4">New to BetMaster?</h2>
        <p className="text-white mb-4">Sign up now and get a welcome bonus!</p>
        <Link
          to="/register"
          className="inline-block bg-white text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-gray-100"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
}

export default HomePage;