
import React from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_CRYPTO_DATA } from '../constants.tsx';

const LandingPage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-violet-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-500 text-xs font-bold uppercase tracking-widest">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                <span>The Future of Trading is Here</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
                Securely Trade <br />
                <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent animate-gradient-x">Digital Assets</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                Experience the next generation of cryptocurrency trading. Professional tools, institutional-grade security, and lightning-fast execution.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                <Link 
                  to="/register" 
                  className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 shadow-2xl shadow-indigo-600/30 transition-all transform hover:-translate-y-1 active:scale-95 text-center"
                >
                  Get Started Free
                </Link>
                <Link 
                  to="/markets" 
                  className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-bold rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-all text-center"
                >
                  View Markets
                </Link>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                <div>
                  <div className="text-2xl font-bold">$4.2B+</div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Trading Volume</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">12M+</div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Active Users</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">0.01%</div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Lowest Fees</div>
                </div>
              </div>
            </div>

            {/* Visual Hero Mockup */}
            <div className="hidden lg:block relative group">
              <div className="absolute inset-0 bg-indigo-500/20 rounded-[3rem] blur-3xl group-hover:bg-indigo-500/30 transition-colors"></div>
              <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-2xl backdrop-blur-sm overflow-hidden transform group-hover:rotate-1 transition-all duration-700">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">U</span>
                      </div>
                      <span className="text-lg font-bold">Trading Terminal</span>
                    </div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-amber-500/20"></div>
                      <div className="w-3 h-3 rounded-full bg-emerald-500/20"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-4xl font-extrabold">$64,230.45</span>
                      <span className="text-emerald-500 font-bold">+2.4% Today</span>
                    </div>
                    <div className="h-48 flex items-end space-x-2">
                      {[40, 60, 45, 70, 55, 80, 65, 90, 75, 95, 85, 100].map((h, i) => (
                        <div 
                          key={i} 
                          className="flex-1 bg-indigo-500/20 rounded-t-lg transition-all duration-500" 
                          style={{ height: `${h}%`, opacity: 0.3 + (i * 0.05) }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <div className="text-xs text-slate-500 font-bold mb-1">MARKET BUY</div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">1.25 BTC</span>
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7 7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-800">
                      <div className="text-xs text-slate-500 font-bold mb-1">TOTAL PROFIT</div>
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-emerald-500">+$12,450</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Security Banner */}
      <section className="py-12 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">🛡️</span>
              <span className="text-sm font-bold uppercase tracking-wider">Cold Storage Security</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">⚡</span>
              <span className="text-sm font-bold uppercase tracking-wider">Fast Execution Engine</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📊</span>
              <span className="text-sm font-bold uppercase tracking-wider">Deep Liquidity Pools</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📞</span>
              <span className="text-sm font-bold uppercase tracking-wider">24/7 Priority Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Market Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 space-y-4 md:space-y-0">
            <div className="space-y-2">
              <h2 className="text-4xl font-extrabold">Market Trends</h2>
              <p className="text-slate-500 dark:text-slate-400">Track the world's most popular digital assets in real-time.</p>
            </div>
            <Link to="/markets" className="text-indigo-600 font-bold flex items-center hover:underline">
              View All 100+ Assets
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INITIAL_CRYPTO_DATA.slice(0, 6).map((asset) => (
              <div 
                key={asset.id} 
                className="group p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg" style={{ backgroundColor: asset.color }}>
                      {asset.symbol[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{asset.name}</h3>
                      <span className="text-sm text-slate-500 font-bold">{asset.symbol}</span>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-lg text-xs font-bold ${asset.change24h >= 0 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                    {asset.change24h > 0 ? '+' : ''}{asset.change24h}%
                  </div>
                </div>
                
                <div className="space-y-1">
                  <div className="text-3xl font-extrabold">${asset.price.toLocaleString()}</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-widest">Market Cap: {asset.marketCap}</div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <div className="h-8 w-24">
                    <svg className={`w-full h-full ${asset.change24h >= 0 ? 'text-emerald-500' : 'text-rose-500'}`} viewBox="0 0 100 20">
                      <path d="M0,10 Q25,5 50,15 T100,8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <Link 
                    to={`/trade/${asset.symbol}`} 
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 group-hover:bg-indigo-600 group-hover:text-white rounded-xl font-bold transition-all text-sm"
                  >
                    Trade
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-24 bg-slate-100/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
               <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent blur-3xl rounded-full"></div>
               <div className="relative bg-white dark:bg-slate-950 p-8 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl">
                 <div className="space-y-6">
                   <div className="p-4 bg-indigo-500/10 rounded-2xl flex items-center space-x-4">
                     <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 00-2 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                     </div>
                     <div>
                       <div className="font-bold">2FA Protection</div>
                       <div className="text-xs text-slate-500">Identity verification active</div>
                     </div>
                   </div>
                   <div className="p-4 bg-emerald-500/10 rounded-2xl flex items-center space-x-4">
                     <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                     </div>
                     <div>
                       <div className="font-bold">Insurance Fund</div>
                       <div className="text-xs text-slate-500">$500M user protection</div>
                     </div>
                   </div>
                   <div className="p-4 bg-amber-500/10 rounded-2xl flex items-center space-x-4">
                     <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-white">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                     </div>
                     <div>
                       <div className="font-bold">Low Latency</div>
                       <div className="text-xs text-slate-500">1.2M transactions / sec</div>
                     </div>
                   </div>
                 </div>
               </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Your Assets Are Safe With <span className="text-indigo-600">Institutional Grade</span> Security</h2>
              <p className="text-lg text-slate-500 dark:text-slate-400">
                We use multi-signature wallets, cold storage, and hardware security modules to protect your digital identity and wealth.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">98% Cold Storage</h4>
                    <p className="text-sm text-slate-500">Most user funds are held in secure offline environments.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Proof of Reserves</h4>
                    <p className="text-sm text-slate-500">Real-time transparency into our wallet balances.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Link to="/register" className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors inline-block">
                  Learn About Security
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3rem] bg-indigo-600 p-12 md:p-20 overflow-hidden shadow-2xl shadow-indigo-600/40">
             <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
             <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-900/40 rounded-full blur-3xl"></div>
             
             <div className="relative z-10 text-center space-y-8">
               <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">Ready to start your <br />crypto journey?</h2>
               <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                 Join over 12 million people who trust Urmi Exchange for their financial future.
               </p>
               <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
                 <Link to="/register" className="w-full sm:w-auto px-10 py-5 bg-white text-indigo-600 font-extrabold rounded-2xl hover:bg-indigo-50 transition-all text-lg shadow-xl shadow-indigo-900/20">
                   Create Free Account
                 </Link>
                 <Link to="/login" className="w-full sm:w-auto px-10 py-5 bg-indigo-500/30 text-white border border-white/30 font-extrabold rounded-2xl hover:bg-white/10 transition-all text-lg">
                   Log In Now
                 </Link>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
             <div className="col-span-2 lg:col-span-2 space-y-6">
               <Link to="/" className="flex items-center space-x-2">
                 <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                   <span className="text-white font-bold text-xl">U</span>
                 </div>
                 <span className="text-2xl font-bold tracking-tight">Urmi Exchange</span>
               </Link>
               <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                 Urmi Exchange is a professional trading platform built for institutional and retail investors globally. Regulated, secure, and lightning-fast.
               </p>
               <div className="flex space-x-4">
                 {['twitter', 'facebook', 'instagram', 'linkedin'].map(social => (
                   <a key={social} href="#" className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                     <span className="sr-only">{social}</span>
                     <div className="w-5 h-5 bg-current opacity-20 rounded-sm"></div>
                   </a>
                 ))}
               </div>
             </div>
             
             <div>
               <h4 className="font-bold mb-6">Product</h4>
               <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
                 <li><Link to="/markets" className="hover:text-indigo-600 transition-colors">Exchange</Link></li>
                 <li><Link to="/trade" className="hover:text-indigo-600 transition-colors">Spot Trading</Link></li>
                 <li><a href="#" className="hover:text-indigo-600 transition-colors">Margin Trading</a></li>
                 <li><a href="#" className="hover:text-indigo-600 transition-colors">Derivatives</a></li>
               </ul>
             </div>

             <div>
               <h4 className="font-bold mb-6">Resources</h4>
               <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
                 <li><a href="#" className="hover:text-indigo-600 transition-colors">Help Center</a></li>
                 <li><a href="#" className="hover:text-indigo-600 transition-colors">API Docs</a></li>
                 <li><a href="#" className="hover:text-indigo-600 transition-colors">Trading Fees</a></li>
                 <li><a href="#" className="hover:text-indigo-600 transition-colors">Urmi Academy</a></li>
               </ul>
             </div>

             <div>
               <h4 className="font-bold mb-6">Company</h4>
               <ul className="space-y-4 text-slate-500 dark:text-slate-400 text-sm">
                 <li><a href="#" className="hover:text-indigo-600 transition-colors">About Us</a></li>
                 <li><a href="#" className="hover:text-indigo-600 transition-colors">Careers</a></li>
                 <li><a href="#" className="hover:text-indigo-600 transition-colors">Press</a></li>
                 <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
               </ul>
             </div>
          </div>
          
          <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm">© 2024 Urmi Exchange. All rights reserved.</p>
            <div className="flex space-x-6 text-sm text-slate-500">
              <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600">Terms of Service</a>
              <a href="#" className="hover:text-indigo-600">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
