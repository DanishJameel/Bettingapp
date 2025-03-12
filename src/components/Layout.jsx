// src/components/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import BetSlip from './betting/BetSlip';

function Layout({ children }) {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold">BetMaster</Link>
              <div className="ml-10 flex items-center space-x-4">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/dashboard" className="hover:text-gray-300">Live Betting</Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <span>Balance: ${user?.balance || 0}</span>
                  <button onClick={logout} className="bg-red-600 px-4 py-2 rounded">Logout</button>
                </>
              ) : (
                <>
                  <Link to="/login" className="bg-blue-600 px-4 py-2 rounded">Login</Link>
                  <Link to="/register" className="bg-green-600 px-4 py-2 rounded">Register</Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <div className="flex">
        <main className="flex-1 p-4">{children}</main>
        <BetSlip className="w-80 bg-gray-800 p-4" />
      </div>
    </div>
  );
}

export default Layout;