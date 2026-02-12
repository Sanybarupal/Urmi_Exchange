
import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  setIsAuthenticated: (val: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, setIsAuthenticated }) => {
  const [loading, setLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsAuthenticated(true);
      setLoading(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 p-8 md:p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center space-y-2 mb-8">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl">U</span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            {isRegistering ? 'Create Account' : 'Welcome Back'}
          </h1>
          <p className="text-slate-500">
            {isRegistering ? 'Start your crypto journey today' : 'Sign in to manage your assets'}
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          {isRegistering && (
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="First Name"
                className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
              />
              <input 
                type="text" 
                placeholder="Last Name"
                className="w-full px-5 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
              />
            </div>
          )}
          
          <div className="space-y-4">
            <input 
              type="email" 
              required 
              className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
              placeholder="Email Address"
            />
            <input 
              type="password" 
              required 
              className="w-full px-5 py-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" 
              placeholder="Password"
            />
          </div>
          
          {!isRegistering && (
            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input type="checkbox" className="rounded-md border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                <span className="text-slate-500 font-medium">Remember me</span>
              </label>
              <a href="#" className="text-indigo-600 font-bold hover:underline">Forgot Password?</a>
            </div>
          )}

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 shadow-xl shadow-indigo-600/20 transition-all active:scale-[0.98] flex items-center justify-center"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : isRegistering ? "Create Account" : "Sign In"}
          </button>
        </form>

        <p className="text-center text-slate-500 text-sm mt-8">
          {isRegistering ? 'Already have an account?' : "Don't have an account?"} {' '}
          <button 
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-indigo-600 font-bold hover:underline"
          >
            {isRegistering ? 'Log In' : 'Register Now'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
