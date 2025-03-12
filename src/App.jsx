// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/betting/BettingDashboard';
import { useUser } from './context/UserContext';

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useUser();
  if (!isLoggedIn()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

// App Routes component to avoid context issues
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/register" replace />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

function App() {
  return (
    <Router>
      <UserProvider>
        <div className="min-h-screen bg-gray-900">
          <AppRoutes />
        </div>
      </UserProvider>
    </Router>
  );
}

export default App;