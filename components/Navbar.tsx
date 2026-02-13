
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (val: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isDarkMode, 
  toggleTheme, 
  isAuthenticated, 
  setIsAuthenticated
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({ to, label }: { to: string, label: string }) => (
    <Link 
      to={to} 
      className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
        isActive(to) 
          ? 'text-indigo-600 bg-indigo-50 dark:bg-indigo-900/20' 
          : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 dark:border-slate-900 backdrop-blur-xl bg-white/80 dark:bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-12">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-6 transition-transform shadow-lg shadow-indigo-600/20">
                <span className="text-white font-bold text-xl">U</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">Urmi</span>
            </Link>

            <div className="hidden lg:flex space-x-2">
              <NavLink to="/" label="Home" />
              <NavLink to="/markets" label="Markets" />
              <NavLink to="/trade" label="Exchange" />
              {isAuthenticated && <NavLink to="/wallet" label="Wallet" />}
              <NavLink to="/explorer" label="Explorer" />
              <NavLink to="/institutional" label="Institutional" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z" /></svg>
              )}
            </button>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleLogout}
                  className="px-6 py-3 text-sm font-extrabold text-slate-900 bg-slate-100 dark:bg-slate-900 dark:text-white rounded-2xl hover:bg-slate-200 dark:hover:bg-slate-800 transition-all"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={handleLogin}
                  className="px-8 py-3 text-sm font-extrabold text-white bg-indigo-600 rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 transition-all active:scale-95"
                >
                  Login
                </button>
              </div>
            )}
            
            <button 
              className="lg:hidden p-3 rounded-2xl bg-slate-50 dark:bg-slate-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
