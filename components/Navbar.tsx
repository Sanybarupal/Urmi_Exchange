
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (val: boolean) => void;
  onOpenLogin: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isDarkMode, 
  toggleTheme, 
  isAuthenticated, 
  setIsAuthenticated,
  onOpenLogin
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, label }: { to: string, label: string }) => (
    <Link 
      to={to} 
      className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        isActive(to) 
          ? 'bg-indigo-600/10 text-indigo-500' 
          : 'hover:bg-slate-200/50 dark:hover:bg-slate-800'
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/60 dark:border-slate-800/60 backdrop-blur-md bg-white/70 dark:bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <span className="text-white font-bold">U</span>
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">Urmi Exchange</span>
            </Link>

            <div className="hidden md:flex space-x-1">
              <NavLink to="/markets" label="Markets" />
              <NavLink to="/trade" label="Trade" />
              {isAuthenticated && <NavLink to="/dashboard" label="Dashboard" />}
              {isAuthenticated && <NavLink to="/wallet" label="Wallet" />}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707-.707M7.757 6.364l.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex flex-col items-end">
                  <span className="text-xs text-slate-500 font-medium">Verified User</span>
                  <span className="text-sm font-semibold">$45,210.32</span>
                </div>
                <button 
                  onClick={handleLogout}
                  className="px-4 py-2 text-sm font-semibold text-rose-500 border border-rose-500/30 rounded-lg hover:bg-rose-500/10 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <button 
                  onClick={onOpenLogin}
                  className="px-4 py-2 text-sm font-semibold hover:text-indigo-600 transition-colors"
                >
                  Sign In
                </button>
                <button 
                  onClick={onOpenLogin}
                  className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 shadow-lg shadow-indigo-600/20 transition-all active:scale-95"
                >
                  Get Started
                </button>
              </div>
            )}
            
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 py-4 px-6 space-y-2">
          <Link to="/markets" onClick={() => setIsMenuOpen(false)} className="block py-2 text-base font-medium">Markets</Link>
          <Link to="/trade" onClick={() => setIsMenuOpen(false)} className="block py-2 text-base font-medium">Trade</Link>
          {isAuthenticated && (
            <>
              <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className="block py-2 text-base font-medium">Dashboard</Link>
              <Link to="/wallet" onClick={() => setIsMenuOpen(false)} className="block py-2 text-base font-medium">Wallet</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
