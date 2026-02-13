
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import LandingPage from './pages/LandingPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import MarketsPage from './pages/MarketsPage.tsx';
import TradePage from './pages/TradePage.tsx';
import WalletPage from './pages/WalletPage.tsx';
import LoginPage from './pages/LoginPage.tsx';
import RegisterPage from './pages/RegisterPage.tsx';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-[#FDFDFF] text-slate-900'}`}>
        <Navbar 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          isAuthenticated={isAuthenticated} 
          setIsAuthenticated={setIsAuthenticated}
        />
        
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route 
              path="/login" 
              element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} 
            />
            <Route 
              path="/register" 
              element={<RegisterPage setIsAuthenticated={setIsAuthenticated} />} 
            />
            <Route 
              path="/dashboard" 
              element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />} 
            />
            <Route path="/markets" element={<MarketsPage />} />
            <Route path="/trade/:symbol" element={<TradePage />} />
            <Route path="/trade" element={<Navigate to="/trade/BTC" />} />
            <Route 
              path="/wallet" 
              element={isAuthenticated ? <WalletPage /> : <Navigate to="/login" />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
