
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_CRYPTO_DATA } from '../constants.tsx';

const MarketsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredData = INITIAL_CRYPTO_DATA.filter(asset => {
    const matchesSearch = asset.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          asset.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h1 className="text-4xl font-extrabold">Market Prices</h1>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search coins..." 
                className="w-full sm:w-64 pl-10 pr-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border-none focus:ring-2 focus:ring-indigo-500 outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex bg-slate-100 dark:bg-slate-900 p-1 rounded-xl">
              {['All', 'Spot', 'Futures'].map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1 rounded-lg text-sm font-bold transition-all ${filter === f ? 'bg-white dark:bg-slate-800 shadow-sm text-indigo-500' : 'text-slate-500'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-950 rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xl shadow-indigo-600/5">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-900/50 text-slate-500 border-b border-slate-200 dark:border-slate-800">
                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider">Asset</th>
                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider">Price</th>
                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider">24h Change</th>
                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider hidden md:table-cell">Market Cap</th>
                <th className="px-8 py-5 text-sm font-bold uppercase tracking-wider hidden lg:table-cell">24h Volume</th>
                <th className="px-8 py-5 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredData.map(asset => (
                <tr key={asset.id} className="hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors group">
                  <td className="px-8 py-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm" style={{ backgroundColor: asset.color }}>
                        {asset.symbol[0]}
                      </div>
                      <div>
                        <div className="font-bold text-lg">{asset.name}</div>
                        <div className="text-sm text-slate-500">{asset.symbol}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="font-bold text-lg">${asset.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</div>
                  </td>
                  <td className="px-8 py-6">
                    <span className={`inline-flex items-center font-bold ${asset.change24h >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {asset.change24h >= 0 ? (
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                      {Math.abs(asset.change24h)}%
                    </span>
                  </td>
                  <td className="px-8 py-6 hidden md:table-cell">
                    <div className="text-slate-500 dark:text-slate-400">{asset.marketCap}</div>
                  </td>
                  <td className="px-8 py-6 hidden lg:table-cell">
                    <div className="text-slate-500 dark:text-slate-400">{asset.volume24h}</div>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <Link 
                      to={`/trade/${asset.symbol}`} 
                      className="px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 rounded-xl font-bold transition-all"
                    >
                      Trade
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredData.length === 0 && (
            <div className="py-20 text-center space-y-4">
              <div className="text-6xl">🔍</div>
              <h3 className="text-xl font-bold text-slate-500">No assets found matching "{searchTerm}"</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketsPage;
