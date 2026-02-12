
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import LoginModal from './components/LoginModal.tsx';
import LandingPage from './pages/LandingPage.tsx';
import DashboardPage from './pages/DashboardPage.tsx';
import MarketsPage from './pages/MarketsPage.tsx';
import TradePage from './pages/TradePage.tsx';
import WalletPage from './pages/WalletPage.tsx';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
        <Navbar 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          isAuthenticated={isAuthenticated} 
          setIsAuthenticated={setIsAuthenticated}
          onOpenLogin={openLoginModal}
        />
        
        <LoginModal 
          isOpen={isLoginModalOpen} 
          onClose={closeLoginModal} 
          setIsAuthenticated={setIsAuthenticated} 
        />

        <main className="pt-16 pb-12">
          <Routes>
            <Route path="/" element={<LandingPage onOpenLogin={openLoginModal} />} />
            
            <Route 
              path="/dashboard" 
              element={isAuthenticated ? <DashboardPage /> : <Navigate to="/" />} 
            />
            <Route path="/markets" element={<MarketsPage />} />
            <Route path="/trade/:symbol" element={<TradePage />} />
            <Route path="/trade" element={<Navigate to="/trade/BTC" />} />
            <Route 
              path="/wallet" 
              element={isAuthenticated ? <WalletPage /> : <Navigate to="/" />} 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
