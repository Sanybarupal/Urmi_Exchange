
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { INITIAL_CRYPTO_DATA } from '../constants.tsx';
import { OrderBookEntry } from '../types.ts';

const TradePage: React.FC = () => {
  const { symbol } = useParams<{ symbol: string }>();
  const [activeTab, setActiveTab] = useState<'buy' | 'sell'>('buy');
  const [orderType, setOrderType] = useState<'limit' | 'market'>('market');
  const [amount, setAmount] = useState<string>('');
  
  const asset = INITIAL_CRYPTO_DATA.find(a => a.symbol === (symbol || 'BTC')) || INITIAL_CRYPTO_DATA[0];

  // Mock chart data
  const generateMockChartData = () => {
    const data = [];
    let base = asset.price * 0.95;
    for (let i = 0; i < 20; i++) {
      base += (Math.random() - 0.45) * (asset.price * 0.02);
      data.push({ time: i, price: base });
    }
    return data;
  };
  const [chartData, setChartData] = useState(generateMockChartData());

  // Mock order book
  const bids: OrderBookEntry[] = Array.from({ length: 8 }, (_, i) => ({
    price: asset.price * (1 - (i + 1) * 0.001),
    amount: Math.random() * 2,
    total: 0
  })).map((b, _, arr) => ({ ...b, total: arr.reduce((acc, curr, idx) => idx <= _ ? acc + curr.amount : acc, 0) }));

  const asks: OrderBookEntry[] = Array.from({ length: 8 }, (_, i) => ({
    price: asset.price * (1 + (i + 1) * 0.001),
    amount: Math.random() * 2,
    total: 0
  })).reverse().map((b, _, arr) => ({ ...b, total: arr.reduce((acc, curr, idx) => idx <= _ ? acc + curr.amount : acc, 0) }));

  return (
    <div className="max-w-[1600px] mx-auto px-4 pt-6">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
        
        {/* Left Column: Asset Header & Chart */}
        <div className="xl:col-span-9 space-y-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-wrap items-center gap-8 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: asset.color }}>{asset.symbol[0]}</div>
              <div>
                <h1 className="text-lg font-bold">{asset.symbol}/USDT</h1>
                <p className="text-xs text-slate-500 font-medium">{asset.name}</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">Price</p>
              <p className={`text-lg font-bold ${asset.change24h >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                ${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-bold uppercase">24h Change</p>
              <p className={`font-bold ${asset.change24h >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                {asset.change24h > 0 ? '+' : ''}{asset.change24h}%
              </p>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-slate-500 font-bold uppercase">24h High</p>
              <p className="font-bold">${(asset.price * 1.05).toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
            </div>
            <div className="hidden sm:block">
              <p className="text-xs text-slate-500 font-bold uppercase">24h Low</p>
              <p className="font-bold">${(asset.price * 0.95).toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 h-[500px] shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-lg text-xs font-bold">
                {['1H', '4H', '1D', '1W'].map(t => (
                  <button key={t} className={`px-3 py-1.5 rounded-md ${t === '1D' ? 'bg-white dark:bg-slate-700 text-indigo-500 shadow-sm' : 'text-slate-500'}`}>{t}</button>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                 <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                 <span className="text-xs font-bold text-slate-400">LIVE</span>
              </div>
            </div>
            <div className="flex-1">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="tradeGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={asset.color} stopOpacity={0.2}/>
                      <stop offset="95%" stopColor={asset.color} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#334155" opacity={0.1} />
                  <XAxis dataKey="time" hide />
                  <YAxis domain={['auto', 'auto']} orientation="right" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 11}} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '8px', color: '#fff' }}
                    labelStyle={{ display: 'none' }}
                  />
                  <Area type="monotone" dataKey="price" stroke={asset.color} strokeWidth={2} fillOpacity={1} fill="url(#tradeGradient)" animationDuration={1000} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Right Column: Order Book & Trade Form */}
        <div className="xl:col-span-3 space-y-4">
          {/* Order Book */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-sm h-[400px] flex flex-col">
            <h3 className="text-sm font-bold mb-3 uppercase tracking-wider text-slate-500">Order Book</h3>
            <div className="grid grid-cols-3 text-[10px] font-bold text-slate-500 mb-2">
              <span>Price(USDT)</span>
              <span className="text-right">Amount({asset.symbol})</span>
              <span className="text-right">Total</span>
            </div>
            <div className="flex-1 overflow-hidden flex flex-col">
              <div className="flex flex-col-reverse mb-4">
                {asks.map((ask, i) => (
                  <div key={i} className="grid grid-cols-3 text-[11px] font-medium py-0.5 hover:bg-rose-500/5 relative">
                     <div className="absolute right-0 top-0 bottom-0 bg-rose-500/10 pointer-events-none" style={{ width: `${(ask.total / asks[0].total) * 100}%` }}></div>
                     <span className="text-rose-500">{ask.price.toFixed(2)}</span>
                     <span className="text-right">{ask.amount.toFixed(4)}</span>
                     <span className="text-right z-10">{ask.total.toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="py-2 text-center border-y border-slate-200 dark:border-slate-800 mb-4">
                <span className={`text-xl font-bold ${asset.change24h >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>{asset.price.toFixed(2)}</span>
              </div>
              <div className="flex flex-col">
                {bids.map((bid, i) => (
                  <div key={i} className="grid grid-cols-3 text-[11px] font-medium py-0.5 hover:bg-emerald-500/5 relative">
                     <div className="absolute right-0 top-0 bottom-0 bg-emerald-500/10 pointer-events-none" style={{ width: `${(bid.total / bids[bids.length-1].total) * 100}%` }}></div>
                     <span className="text-emerald-500">{bid.price.toFixed(2)}</span>
                     <span className="text-right">{bid.amount.toFixed(4)}</span>
                     <span className="text-right z-10">{bid.total.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Trade Form */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 shadow-sm">
            <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-6">
              <button 
                onClick={() => setActiveTab('buy')}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'buy' ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/20' : 'text-slate-500'}`}
              >
                Buy
              </button>
              <button 
                onClick={() => setActiveTab('sell')}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === 'sell' ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/20' : 'text-slate-500'}`}
              >
                Sell
              </button>
            </div>

            <div className="flex space-x-2 mb-4">
              <button onClick={() => setOrderType('market')} className={`px-3 py-1 text-xs font-bold rounded-md ${orderType === 'market' ? 'bg-slate-200 dark:bg-slate-700' : 'text-slate-500'}`}>Market</button>
              <button onClick={() => setOrderType('limit')} className={`px-3 py-1 text-xs font-bold rounded-md ${orderType === 'limit' ? 'bg-slate-200 dark:bg-slate-700' : 'text-slate-500'}`}>Limit</button>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <label className="text-xs text-slate-500 font-bold mb-1 block">Amount ({asset.symbol})</label>
                <input 
                  type="number" 
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-bold" 
                  placeholder="0.00"
                />
              </div>
              <div className="flex justify-between text-xs font-bold text-slate-500">
                <span>Available:</span>
                <span>0.00 USDT</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['25%', '50%', '75%', '100%'].map(p => (
                  <button key={p} className="py-1 text-[10px] font-bold bg-slate-100 dark:bg-slate-800 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700">{p}</button>
                ))}
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 mt-4 space-y-2">
                 <div className="flex justify-between text-sm">
                   <span className="text-slate-500 font-medium">Estimated Total</span>
                   <span className="font-bold">${((parseFloat(amount) || 0) * asset.price).toFixed(2)}</span>
                 </div>
                 <button className={`w-full py-4 rounded-xl font-bold text-white shadow-lg transition-all active:scale-[0.98] ${activeTab === 'buy' ? 'bg-emerald-500 hover:bg-emerald-600 shadow-emerald-500/20' : 'bg-rose-500 hover:bg-rose-600 shadow-rose-500/20'}`}>
                   {activeTab === 'buy' ? 'Buy' : 'Sell'} {asset.symbol}
                 </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradePage;
