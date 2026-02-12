
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_CRYPTO_DATA } from '../constants.tsx';

interface LandingPageProps {
  onOpenLogin: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onOpenLogin }) => {
  const [swapType, setSwapType] = useState<'buy' | 'sell' | 'exchange'>('buy');

  return (
    <div className="relative bg-slate-50 dark:bg-slate-950 transition-colors duration-500">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-full h-[1200px] overflow-hidden -z-10 pointer-events-none opacity-50">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-200/40 dark:bg-indigo-900/10 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-violet-200/30 dark:bg-violet-900/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900 dark:text-white">
                  Where Speed <br />
                  Meets Security in <br />
                  <span className="text-indigo-600 dark:text-indigo-400">Crypto Exchange.</span>
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                  Unlock limitless financial possibilities by seamlessly earning interest and borrowing assets across diverse blockchains, fostering a borderless and efficient ecosystem.
                </p>
              </div>

              {/* Email Signup Bar */}
              <div className="max-w-md relative group">
                <div className="absolute -inset-1 bg-indigo-500/10 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                <div className="relative flex p-2 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 shadow-xl shadow-indigo-500/5">
                  <input 
                    type="email" 
                    placeholder="satoshi@email.com" 
                    className="flex-1 bg-transparent px-6 py-3 outline-none text-slate-900 dark:text-white"
                  />
                  <button 
                    onClick={onOpenLogin}
                    className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all active:scale-95 shadow-lg shadow-indigo-600/20"
                  >
                    Sign up
                  </button>
                </div>
              </div>

              {/* Stats Bar (Rockie Style) */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                {[
                  { label: "User Active", val: "380+" },
                  { label: "Trusted Company", val: "190+" },
                  { label: "Total Volume", val: "$207B+" },
                  { label: "Transaction", val: "$230M+" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1 group">
                    <div className="text-3xl font-extrabold text-indigo-600 group-hover:scale-105 transition-transform">{stat.val}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Widget & Mockup */}
            <div className="relative">
              {/* Swap Widget (Floating) */}
              <div className="relative z-20 w-full max-w-md mx-auto lg:ml-auto bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden p-8 space-y-8 animate-in slide-in-from-right duration-700">
                <div className="flex bg-slate-50 dark:bg-slate-800 p-1.5 rounded-2xl">
                  {['Buy', 'Sell', 'Exchange'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSwapType(t.toLowerCase() as any)}
                      className={`flex-1 py-2 text-sm font-bold rounded-xl transition-all ${swapType === t.toLowerCase() ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-400'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-400 ml-2">Buy Crypto Using USD</label>
                    <div className="flex items-center bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-transparent focus-within:border-indigo-500 transition-all">
                       <div className="flex items-center space-x-2 bg-white dark:bg-slate-900 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                          <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center text-[10px] text-white">₿</div>
                          <span className="font-bold text-sm uppercase">BTC</span>
                       </div>
                       <input type="number" placeholder="0.51" className="flex-1 text-right bg-transparent outline-none font-bold text-xl" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-transparent focus-within:border-indigo-500 transition-all">
                       <div className="flex items-center space-x-2 bg-white dark:bg-slate-900 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                          <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center text-[10px] text-white">$</div>
                          <span className="font-bold text-sm uppercase">USD</span>
                       </div>
                       <input type="number" placeholder="13496.28" className="flex-1 text-right bg-transparent outline-none font-bold text-xl" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  {[
                    { l: "Exchange rate", v: "0.00087" },
                    { l: "Minimum received", v: "0.041 BTC" },
                    { l: "Platform fee", v: "$0.5" },
                    { l: "Price impact", v: "0.41%" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between text-[11px] font-bold">
                      <span className="text-slate-400">{item.l}</span>
                      <span className="text-slate-900 dark:text-white">{item.v}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={onOpenLogin}
                  className="w-full py-5 bg-indigo-600 text-white font-extrabold rounded-2xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all active:scale-[0.98]"
                >
                  Buy Now
                </button>
              </div>

              {/* Decorative Mockup Elements */}
              <div className="absolute top-[20%] right-[-15%] hidden xl:block w-72 h-[500px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl rotate-6 overflow-hidden -z-10 group-hover:rotate-12 transition-transform duration-1000">
                <div className="p-6 space-y-6">
                   <div className="flex justify-between items-center">
                     <div className="w-10 h-2 bg-slate-700 rounded-full"></div>
                     <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                   </div>
                   <div className="space-y-2">
                     <div className="h-4 w-3/4 bg-slate-700 rounded"></div>
                     <div className="h-8 w-1/2 bg-slate-700 rounded"></div>
                   </div>
                   <div className="h-32 w-full bg-indigo-600/20 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section (Connective Diagram Style) */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="space-y-4 mb-20">
            <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white">Why Choose Us Over Others</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">
              Choose us for reliable, innovative solutions, exceptional support, proven results, and unmatched expertise in every project.
            </p>
          </div>

          <div className="relative flex justify-center items-center py-20 overflow-visible">
            {/* Center Orb */}
            <div className="relative z-10 w-64 h-64 rounded-full bg-white dark:bg-slate-900 border-[12px] border-slate-100 dark:border-slate-800 shadow-2xl flex items-center justify-center">
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 opacity-10 animate-pulse"></div>
              <img src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=200&q=80" className="w-40 h-40 object-cover rounded-full shadow-inner" alt="Orb Visual" />
            </div>

            {/* Connecting Lines (SVG) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20 hidden md:block" viewBox="0 0 1000 500">
              <path d="M250,150 Q500,250 500,250" stroke="currentColor" fill="none" className="text-indigo-400" strokeWidth="2" strokeDasharray="8 8" />
              <path d="M250,350 Q500,250 500,250" stroke="currentColor" fill="none" className="text-indigo-400" strokeWidth="2" strokeDasharray="8 8" />
              <path d="M750,150 Q500,250 500,250" stroke="currentColor" fill="none" className="text-indigo-400" strokeWidth="2" strokeDasharray="8 8" />
              <path d="M750,350 Q500,250 500,250" stroke="currentColor" fill="none" className="text-indigo-400" strokeWidth="2" strokeDasharray="8 8" />
            </svg>

            {/* Feature Cards Grid (Absolute Positioning for Diagram Effect) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-96 gap-y-12">
              <div className="md:text-right space-y-3 p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl max-w-xs transform hover:-translate-x-2 transition-all">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-slate-800 rounded-xl flex items-center justify-center ml-auto">
                   <span className="text-2xl">⚡</span>
                </div>
                <h4 className="text-xl font-bold">Speedy Transactions</h4>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">Trade fast and stay ahead. Deals happen in just seconds.</p>
              </div>

              <div className="text-left space-y-3 p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl max-w-xs transform hover:translate-x-2 transition-all">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                   <span className="text-2xl">🌐</span>
                </div>
                <h4 className="text-xl font-bold">Future-Ready Exchange</h4>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">Always upgrading to bring you better trading with blockchain.</p>
              </div>

              <div className="md:text-right space-y-3 p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl max-w-xs transform hover:-translate-x-2 transition-all">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-slate-800 rounded-xl flex items-center justify-center ml-auto">
                   <span className="text-2xl">🤝</span>
                </div>
                <h4 className="text-xl font-bold">Trusted by Thousands</h4>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">Be part of a global community trading with safety and trust.</p>
              </div>

              <div className="text-left space-y-3 p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-xl max-w-xs transform hover:translate-x-2 transition-all">
                <div className="w-12 h-12 bg-indigo-50 dark:bg-slate-800 rounded-xl flex items-center justify-center">
                   <span className="text-2xl">🎧</span>
                </div>
                <h4 className="text-xl font-bold">Expert Support</h4>
                <p className="text-sm text-slate-400 font-medium leading-relaxed">Got questions? Our support team is here to help 24/7.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials (Minimal Style) */}
      <section className="py-32 bg-indigo-600 dark:bg-indigo-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-10">
               <h2 className="text-5xl font-extrabold text-white leading-tight">Minimal, It Wins Trust Every Time.</h2>
               <p className="text-indigo-100 text-lg font-medium opacity-80">
                 Over 12 million global users trust our platform. Our focus on simplicity and transparency is why we are ranked #1 in customer satisfaction.
               </p>
               <div className="flex space-x-12">
                 <div>
                   <div className="text-4xl font-extrabold text-white">4.9/5</div>
                   <div className="text-xs font-bold text-indigo-200 uppercase tracking-widest mt-1">Trustpilot Score</div>
                 </div>
                 <div>
                   <div className="text-4xl font-extrabold text-white">99.9%</div>
                   <div className="text-xs font-bold text-indigo-200 uppercase tracking-widest mt-1">Platform Uptime</div>
                 </div>
               </div>
             </div>

             <div className="grid gap-6">
                {[
                  { name: "Dawid Malan", role: "Active Trader", text: "I love how I can track my rewards in real time. Everything is clear, and I see exactly how much I've earned from staking." },
                  { name: "Marie Bender", role: "Portfolio Manager", text: "Staking motivates me to hold my crypto long term. Not only does my portfolio grow, but I also contribute to the network security." }
                ].map((testimonial, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/20 text-white space-y-4 hover:bg-white/15 transition-all">
                    <div className="flex items-center space-x-4">
                       <div className="w-12 h-12 rounded-full bg-white/20"></div>
                       <div>
                         <div className="font-bold">{testimonial.name}</div>
                         <div className="text-xs text-indigo-200 font-medium">{testimonial.role}</div>
                       </div>
                       <div className="ml-auto flex text-amber-400">
                          {"★★★★★".split('').map((s, i) => <span key={i}>{s}</span>)}
                       </div>
                    </div>
                    <p className="italic text-indigo-50 font-medium">"{testimonial.text}"</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-12 mb-20">
             <div className="col-span-2 space-y-8">
               <Link to="/" className="flex items-center space-x-3 group">
                 <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-600/20">
                   <span className="text-white font-bold text-2xl">U</span>
                 </div>
                 <span className="text-3xl font-extrabold tracking-tight">Urmi Exchange</span>
               </Link>
               <p className="text-slate-400 font-medium leading-relaxed max-w-sm">
                 The premium choice for digital asset management. Regulated, secure, and built for the next generation of finance.
               </p>
               <div className="flex space-x-4">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-900 hover:bg-indigo-600 transition-colors cursor-pointer"></div>
                 ))}
               </div>
             </div>
             
             <div>
               <h4 className="font-extrabold mb-8 uppercase text-xs tracking-widest text-slate-400">Service</h4>
               <ul className="space-y-4 text-slate-500 font-bold text-sm">
                 <li><a href="#" className="hover:text-indigo-600">Buy Crypto</a></li>
                 <li><a href="#" className="hover:text-indigo-600">Spot Trading</a></li>
                 <li><a href="#" className="hover:text-indigo-600">Staking</a></li>
               </ul>
             </div>

             <div>
               <h4 className="font-extrabold mb-8 uppercase text-xs tracking-widest text-slate-400">Company</h4>
               <ul className="space-y-4 text-slate-500 font-bold text-sm">
                 <li><a href="#" className="hover:text-indigo-600">About Us</a></li>
                 <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
                 <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
               </ul>
             </div>

             <div>
               <h4 className="font-extrabold mb-8 uppercase text-xs tracking-widest text-slate-400">Legal</h4>
               <ul className="space-y-4 text-slate-500 font-bold text-sm">
                 <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
                 <li><a href="#" className="hover:text-indigo-600">Terms of Service</a></li>
                 <li><a href="#" className="hover:text-indigo-600">Cookie Policy</a></li>
               </ul>
             </div>

             <div>
               <h4 className="font-extrabold mb-8 uppercase text-xs tracking-widest text-slate-400">Support</h4>
               <ul className="space-y-4 text-slate-500 font-bold text-sm">
                 <li><a href="#" className="hover:text-indigo-600">Help Center</a></li>
                 <li><a href="#" className="hover:text-indigo-600">FAQ</a></li>
                 <li><a href="#" className="hover:text-indigo-600">API Support</a></li>
               </ul>
             </div>
          </div>
          
          <div className="pt-8 border-t border-slate-100 dark:border-slate-900 flex justify-between items-center">
            <p className="text-slate-400 text-xs font-bold">© 2024 Urmi Exchange Ltd. All rights reserved.</p>
            <div className="flex space-x-6">
              <span className="text-slate-300 dark:text-slate-800 text-xs font-bold tracking-tighter uppercase">Regulatory ID: 99421-XB-01</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
