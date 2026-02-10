
import React from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_CRYPTO_DATA } from '../constants';

const LandingPage: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center lg:text-left lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-8 max-w-2xl mx-auto lg:mx-0">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                Buy & Sell <span className="text-indigo-600">Crypto</span> with Confidence
              </h1>
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 font-medium">
                Join 10M+ users globally to invest in BTC, ETH, and 100+ other cryptocurrencies. Secure, fast, and simple.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <Link 
                  to="/register" 
                  className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-xl shadow-indigo-600/30 transition-all text-center"
                >
                  Create Your Account
                </Link>
                <Link 
                  to="/markets" 
                  className="px-8 py-4 border border-slate-300 dark:border-slate-700 font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-center"
                >
                  View Markets
                </Link>
              </div>
            </div>
            
            <div className="hidden lg:block relative">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Live Portfolio</span>
                    <span className="text-emerald-500 font-bold">+12.4%</span>
                  </div>
                  <div className="h-40 bg-indigo-600/5 rounded-xl flex items-center justify-center">
                    <svg className="w-full h-full p-4 text-indigo-500" viewBox="0 0 100 40">
                      <path d="M0,35 Q10,10 20,25 T40,15 T60,30 T80,10 T100,5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                      <span className="block text-xs text-slate-500">Balance</span>
                      <span className="text-lg font-bold">$12,450.00</span>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl">
                      <span className="block text-xs text-slate-500">Profit</span>
                      <span className="text-lg font-bold text-emerald-500">+$1,540.32</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Prices Ticker */}
      <section className="bg-slate-100/50 dark:bg-slate-900/50 py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INITIAL_CRYPTO_DATA.slice(0, 4).map(asset => (
              <div key={asset.id} className="p-6 bg-white dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: asset.color }}>
                    {asset.symbol[0]}
                  </div>
                  <div>
                    <h3 className="font-bold">{asset.name}</h3>
                    <span className="text-xs text-slate-500">{asset.symbol}</span>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-bold">${asset.price.toLocaleString()}</span>
                  <span className={`text-sm font-bold ${asset.change24h >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                    {asset.change24h > 0 ? '+' : ''}{asset.change24h}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl font-bold">Why choose Urmi Exchange?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">We provide the most robust and secure infrastructure for your digital assets.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard 
            icon="🛡️" 
            title="Secure Storage" 
            description="The vast majority of digital assets are stored in secure offline cold storage." 
          />
          <FeatureCard 
            icon="⚡" 
            title="Instant Trading" 
            description="Execute trades in milliseconds with our high-performance matching engine." 
          />
          <FeatureCard 
            icon="📱" 
            title="Unified Interface" 
            description="Manage your wallet, trade assets, and track performance from a single dashboard." 
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto px-4 mb-20">
        <div className="bg-indigo-600 rounded-[2.5rem] p-12 text-center text-white space-y-8 shadow-2xl shadow-indigo-600/40">
          <h2 className="text-4xl font-bold">Start your crypto journey today</h2>
          <p className="text-indigo-100 max-w-xl mx-auto text-lg">It takes less than 3 minutes to verify your identity and start trading your first Bitcoin.</p>
          <div className="pt-4">
            <Link 
              to="/register" 
              className="px-10 py-5 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-slate-100 transition-colors inline-block"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center space-y-4">
          <p className="text-slate-500">© 2024 Urmi Exchange. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-sm hover:text-indigo-500">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-indigo-500">Terms of Service</a>
            <a href="#" className="text-sm hover:text-indigo-500">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
  <div className="p-8 bg-slate-50 dark:bg-slate-900 rounded-3xl space-y-4 hover:translate-y-[-4px] transition-transform">
    <div className="text-4xl">{icon}</div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-slate-500 dark:text-slate-400">{description}</p>
  </div>
);

export default LandingPage;
