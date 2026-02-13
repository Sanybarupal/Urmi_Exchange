
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [swapType, setSwapType] = useState<'buy' | 'sell' | 'exchange'>('buy');
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login');
  };

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                  Where Speed <br />
                  Meets Security in <br />
                  <span className="text-indigo-600 dark:text-indigo-400">Crypto Exchange.</span>
                </h1>
                <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
                  Unlock limitless financial possibilities by seamlessly earning interest and borrowing assets across diverse blockchains.
                </p>
              </div>

              {/* Email Signup */}
              <div className="max-w-md relative">
                <div className="flex p-1.5 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800 shadow-xl">
                  <input 
                    type="email" 
                    placeholder="satoshi@email.com" 
                    className="flex-1 bg-transparent px-6 py-3 outline-none text-slate-900 dark:text-white"
                  />
                  <button 
                    onClick={handleStart}
                    className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 transition-all active:scale-95"
                  >
                    Sign up
                  </button>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-4">
                {[
                  { label: "User Active", val: "380+" },
                  { label: "Trusted Company", val: "190+" },
                  { label: "Total Volume", val: "$207B+" },
                  { label: "Transaction", val: "$230M+" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-3xl font-extrabold text-indigo-600">{stat.val}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Widget */}
            <div className="relative">
              <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl p-8 space-y-8 max-w-md mx-auto">
                <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl">
                  {['Buy', 'Sell', 'Exchange'].map((t) => (
                    <button
                      key={t}
                      onClick={() => setSwapType(t.toLowerCase() as any)}
                      className={`flex-1 py-2.5 text-sm font-bold rounded-xl transition-all ${swapType === t.toLowerCase() ? 'bg-white dark:bg-slate-700 text-indigo-600 shadow-sm' : 'text-slate-400'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 ml-2">Buy Crypto Using USD</label>
                    <div className="flex items-center bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700">
                       <div className="flex items-center space-x-2 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer">
                          <div className="w-5 h-5 bg-amber-500 rounded-full flex items-center justify-center text-[10px] text-white">₿</div>
                          <span className="font-bold text-sm uppercase">BTC</span>
                          <span className="text-slate-400 text-xs">▼</span>
                       </div>
                       <input type="number" placeholder="0.51" className="flex-1 text-right bg-transparent outline-none font-bold text-xl" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center bg-slate-50 dark:bg-slate-800 rounded-2xl p-4 border border-slate-100 dark:border-slate-700">
                       <div className="flex items-center space-x-2 bg-white dark:bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer">
                          <div className="w-5 h-5 bg-indigo-500 rounded-full flex items-center justify-center text-[10px] text-white">$</div>
                          <span className="font-bold text-sm uppercase">USD</span>
                          <span className="text-slate-400 text-xs">▼</span>
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
                  onClick={handleStart}
                  className="w-full py-5 bg-indigo-600 text-white font-extrabold rounded-2xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-700 transition-all active:scale-[0.98]"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Mobile App & Crypto Trading Section */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative flex justify-center lg:justify-start space-x-8">
              {/* Left Phone */}
              <div className="relative w-64 h-[500px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="absolute inset-0 p-6 bg-gradient-to-b from-slate-800 to-slate-950 text-white space-y-6">
                  <div className="flex justify-between">
                    <span className="text-xs text-slate-400">Welcome back!</span>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-3xl font-bold">$70,250</h3>
                    <p className="text-xs text-indigo-400">Last 30 days +5.27%</p>
                  </div>
                  <div className="h-32 bg-indigo-500/10 rounded-2xl border border-indigo-500/20"></div>
                  <div className="grid grid-cols-4 gap-2">
                    {[1,2,3,4].map(i => <div key={i} className="h-12 bg-slate-800 rounded-lg"></div>)}
                  </div>
                </div>
              </div>
              {/* Right Phone */}
              <div className="relative w-64 h-[500px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden translate-y-12 rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="absolute inset-0 p-6 bg-indigo-600 text-white space-y-8">
                  <div className="h-8 w-8 bg-white/20 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-4 w-3/4 bg-white/20 rounded"></div>
                    <div className="h-10 w-full bg-white/20 rounded-xl"></div>
                  </div>
                  <div className="space-y-4">
                     {[1,2,3].map(i => (
                       <div key={i} className="flex justify-between items-center py-2 border-b border-white/10">
                         <div className="h-4 w-12 bg-white/20 rounded"></div>
                         <div className="h-4 w-8 bg-white/20 rounded"></div>
                       </div>
                     ))}
                  </div>
                  <div className="h-24 bg-white/10 rounded-2xl flex items-center justify-center font-bold text-xl">
                    Portfolio
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-16">
              <div className="space-y-6">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center">
                  <span className="text-3xl">🚀</span>
                </div>
                <h2 className="text-4xl font-extrabold">Fast, Secure, Easy Crypto Trading</h2>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
                  Sign up quickly, fund your account securely, and start trading crypto instantly. Our platform is optimized for performance and ease of use.
                </p>
              </div>

              <div className="space-y-6">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h2 className="text-4xl font-extrabold">Get Started in Minutes</h2>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-lg">
                  Sign up, verify, and start trading instantly — begin your journey today with the most trusted platform in the industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#FDFDFF] dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="space-y-4 mb-20">
            <h2 className="text-5xl font-extrabold text-slate-900 dark:text-white">Why Choose Us Over Others</h2>
            <p className="text-slate-400 max-w-2xl mx-auto font-medium">
              Reliable, innovative solutions, exceptional support, proven results, and unmatched expertise.
            </p>
          </div>

          <div className="relative flex justify-center items-center py-12">
            {/* Diagram Center */}
            <div className="relative z-10 w-64 h-64 rounded-full bg-white dark:bg-slate-900 border-[12px] border-slate-50 dark:border-slate-800 shadow-2xl flex items-center justify-center">
              <img src="https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=200&q=80" className="w-40 h-40 object-cover rounded-full" alt="Visual" />
            </div>

            {/* Connecting Lines Simplified */}
            <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-10">
               <div className="w-full h-1 bg-indigo-500 max-w-4xl rounded-full"></div>
               <div className="h-full w-1 bg-indigo-500 max-h-96 rounded-full absolute"></div>
            </div>

            {/* Features */}
            <div className="absolute inset-0 flex flex-wrap justify-between content-between max-w-5xl mx-auto py-4">
              <div className="w-64 p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl text-right transform hover:-translate-x-2 transition-all">
                <h4 className="text-xl font-bold mb-2">Speedy Transactions</h4>
                <p className="text-sm text-slate-400">Trade fast and stay ahead in seconds.</p>
              </div>
              <div className="w-64 p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl text-left transform hover:translate-x-2 transition-all">
                <h4 className="text-xl font-bold mb-2">Future-Ready</h4>
                <p className="text-sm text-slate-400">Upgrading the trading experience.</p>
              </div>
              <div className="w-64 p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl text-right transform hover:-translate-x-2 transition-all">
                <h4 className="text-xl font-bold mb-2">Trusted by All</h4>
                <p className="text-sm text-slate-400">Join a global trading community.</p>
              </div>
              <div className="w-64 p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl text-left transform hover:translate-x-2 transition-all">
                <h4 className="text-xl font-bold mb-2">Expert Support</h4>
                <p className="text-sm text-slate-400">24/7 help from our pro team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-10 text-white">
               <h2 className="text-5xl font-extrabold leading-tight">Minimal, It Wins Trust Every Time.</h2>
               <p className="text-indigo-100 text-lg opacity-80">
                 Over 12 million global users trust our simplicity and transparency.
               </p>
               <div className="flex space-x-12">
                 <div>
                   <div className="text-4xl font-extrabold">4.9/5</div>
                   <div className="text-xs font-bold uppercase tracking-widest mt-1">Trustpilot Score</div>
                 </div>
                 <div>
                   <div className="text-4xl font-extrabold">99.9%</div>
                   <div className="text-xs font-bold uppercase tracking-widest mt-1">Platform Uptime</div>
                 </div>
               </div>
             </div>

             <div className="space-y-6">
                {[
                  { name: "Dawid Malan", text: "Everything is clear, and I see exactly how much I've earned from staking." },
                  { name: "Marie Bender", text: "Staking motivates me to hold my crypto long term. My portfolio grows while I sleep." }
                ].map((testimonial, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/20 text-white space-y-4">
                    <div className="flex items-center space-x-4">
                       <div className="w-12 h-12 rounded-full bg-indigo-400 flex items-center justify-center font-bold">{testimonial.name[0]}</div>
                       <div>
                         <div className="font-bold">{testimonial.name}</div>
                         <div className="flex text-amber-400 text-xs">★★★★★</div>
                       </div>
                    </div>
                    <p className="italic font-medium text-lg">"{testimonial.text}"</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
             <div className="col-span-2 text-left space-y-6">
               <div className="flex items-center space-x-3">
                 <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl">U</div>
                 <span className="text-2xl font-black">Urmi</span>
               </div>
               <p className="text-slate-400 max-w-sm">Premium choice for digital asset management. Regulated, secure, and built for you.</p>
             </div>
             <div className="text-left space-y-4">
               <h4 className="font-bold text-slate-400 text-xs uppercase tracking-widest">Service</h4>
               <ul className="space-y-2 text-sm font-bold text-slate-600">
                 <li>Buy Crypto</li>
                 <li>Trade</li>
                 <li>Staking</li>
               </ul>
             </div>
             <div className="text-left space-y-4">
               <h4 className="font-bold text-slate-400 text-xs uppercase tracking-widest">Support</h4>
               <ul className="space-y-2 text-sm font-bold text-slate-600">
                 <li>Help Center</li>
                 <li>Terms</li>
                 <li>Privacy</li>
               </ul>
             </div>
          </div>
          <p className="text-slate-400 text-xs font-bold pt-8 border-t border-slate-100">© 2024 Urmi Exchange. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
