import React from 'react';
import { useUser } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function BettingDashboard() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  // Redirect to register if no user
  if (!user) {
    navigate('/register');
    return null;
  }

  const handleLogout = () => {
    logout();
    navigate('/register');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Sports Betting</h1>
          <div className="flex items-center gap-4">
            <span className="text-gray-300">{user.email}</span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <div className="bg-gray-800 rounded-lg p-6">
          <h2 className="text-2xl text-white font-bold mb-4">Welcome to Sports Betting!</h2>
          <p className="text-gray-300 mb-4">
            Your account has been created successfully. You can now start placing bets
            and enjoying our platform.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample betting options */}
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-white font-bold mb-2">Football</h3>
              <p className="text-gray-300">Coming soon...</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-white font-bold mb-2">Basketball</h3>
              <p className="text-gray-300">Coming soon...</p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h3 className="text-white font-bold mb-2">Tennis</h3>
              <p className="text-gray-300">Coming soon...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BettingDashboard;
