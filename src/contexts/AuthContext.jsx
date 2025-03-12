// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const auth0Config = {
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    redirectUri: window.location.origin,
  };

  return (
    <Auth0Provider {...auth0Config}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </Auth0Provider>
  );
}

function AuthContextProvider({ children }) {
  const { isAuthenticated, user, loginWithRedirect, logout: auth0Logout } = useAuth0();
  const [userBalance, setUserBalance] = useState(0);

  useEffect(() => {
    if (isAuthenticated && user) {
      // Fetch user balance from API
      fetchUserBalance();
    }
  }, [isAuthenticated, user]);

  const fetchUserBalance = async () => {
    try {
      const response = await fetch(`/api/users/${user.sub}/balance`);
      const data = await response.json();
      setUserBalance(data.balance);
    } catch (error) {
      console.error('Error fetching user balance:', error);
    }
  };

  const value = {
    isAuthenticated,
    user: user ? { ...user, balance: userBalance } : null,
    login: loginWithRedirect,
    logout: () => auth0Logout({ returnTo: window.location.origin }),
    updateBalance: setUserBalance,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};