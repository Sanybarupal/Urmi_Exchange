
import React, { useState } from 'react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  setIsAuthenticated: (val: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, setIsAuthenticated }) => {
  const [loading, setLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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
        className="absolute inset-0 bg-slate-900/30 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-white dark:bg-slate-950 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-500 h-[650px]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 left-6 z-[110] p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors md:hidden"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center bg-white dark:bg-slate-900 overflow-y-auto">
          <div className="max-w-sm mx-auto w-full space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {isRegistering ? 'Create account' : 'Welcome back'}
              </h1>
              <p className="text-slate-500 text-sm font-medium">
                Continue with one of the following options
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                {/* Email Input */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-900 dark:text-slate-300 ml-1">Email</label>
                  <input 
                    type="email" 
                    required 
                    className="w-full px-5 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-1 focus:ring-slate-900 dark:focus:ring-indigo-500 outline-none transition-all text-sm" 
                    placeholder="Email Address"
                  />
                </div>
                
                {/* Password Input */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-900 dark:text-slate-300 ml-1">Password</label>
                  <div className="relative">
                    <input 
                      type={showPassword ? "text" : "password"} 
                      required 
                      className="w-full px-5 py-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:ring-1 focus:ring-slate-900 dark:focus:ring-indigo-500 outline-none transition-all text-sm pr-12" 
                      placeholder="Password 8-16 character"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? (
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      ) : (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" /></svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              {!isRegistering && (
                <div className="flex items-center justify-between text-xs font-bold">
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <div className="relative">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="w-4 h-4 border-2 border-slate-200 rounded peer-checked:bg-slate-900 peer-checked:border-slate-900 transition-all flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white scale-0 peer-checked:scale-100 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>
                      </div>
                    </div>
                    <span className="text-slate-400 group-hover:text-slate-600 transition-colors">Remember me</span>
                  </label>
                  <a href="#" className="text-slate-900 dark:text-white hover:underline">Forgot Password?</a>
                </div>
              )}

              <div className="space-y-4 pt-2">
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 bg-black dark:bg-white dark:text-black text-white font-bold rounded-xl hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center text-sm"
                >
                  {loading ? (
                    <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : isRegistering ? "Sign up" : "Sign in"}
                </button>

                <button 
                  type="button"
                  className="w-full py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center space-x-3 text-sm shadow-sm"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  <span>Continue with Google</span>
                </button>
              </div>
            </form>

            <p className="text-center text-slate-500 text-sm mt-8">
              {isRegistering ? 'Already have an account?' : "Already have an account?"} {' '}
              <button 
                onClick={() => setIsRegistering(!isRegistering)}
                className="text-slate-900 dark:text-white font-extrabold hover:underline"
              >
                {isRegistering ? 'Log In' : 'Log In'}
              </button>
            </p>
          </div>
        </div>

        {/* Right Side: Image/Visual */}
        <div className="hidden md:block w-1/2 relative bg-[#F4F7FF] overflow-hidden">
          {/* Abstract Blurred Background Elements */}
          <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-pink-400/20 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-[100px]"></div>
          <div className="absolute top-[40%] right-[30%] w-[200px] h-[200px] bg-indigo-500/10 rounded-full blur-[60px]"></div>

          {/* Main Visual */}
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="relative w-full h-full border border-slate-200/50 rounded-[2rem] overflow-hidden flex items-center justify-center group">
              {/* Astronaut Image - Using a stylized representation */}
              <img 
                src="https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=800&q=80" 
                alt="Astronaut in space"
                className="w-full h-full object-cover transform scale-110 group-hover:scale-105 transition-transform duration-1000"
              />
              
              {/* Overlay Glass Effect */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] pointer-events-none"></div>
              
              {/* Floating Astronaut Shadow/Glow (Simulated) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/30 rounded-full blur-[120px] animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
