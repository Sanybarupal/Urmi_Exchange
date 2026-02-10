
import React from 'react';
import { MOCK_WALLET } from '../constants';

const WalletPage: React.FC = () => {
  const totalBalance = MOCK_WALLET.reduce((acc, curr) => acc + curr.valueInUsd, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Summary */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-2xl shadow-indigo-600/30">
            <span className="text-indigo-100 font-medium block mb-2">Total Balance</span>
            <h2 className="text-4xl font-extrabold mb-8">${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="py-3 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-slate-100 transition-colors">Deposit</button>
              <button className="py-3 bg-indigo-500 text-white font-bold rounded-2xl hover:bg-indigo-400 transition-colors">Withdraw</button>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="text-lg font-bold mb-6">Linked Accounts</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 flex items-center justify-center rounded-xl font-bold">B</div>
                  <div>
                    <p className="font-bold text-sm">Chase Bank</p>
                    <p className="text-xs text-slate-500">Checking .... 4521</p>
                  </div>
                </div>
                <span className="text-emerald-500 text-xs font-bold">Active</span>
              </div>
              <button className="w-full py-3 border border-dashed border-slate-300 dark:border-slate-700 rounded-2xl text-slate-500 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">+ Add Payment Method</button>
            </div>
          </div>
        </div>

        {/* Main Balances Table */}
        <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col">
          <div className="p-8 border-b border-slate-200 dark:border-slate-800">
            <h1 className="text-2xl font-bold">Your Assets</h1>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 dark:bg-slate-800/50">
                <tr className="text-xs font-bold text-slate-500 uppercase">
                  <th className="px-8 py-4">Asset</th>
                  <th className="px-8 py-4">Balance</th>
                  <th className="px-8 py-4">Value</th>
                  <th className="px-8 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {MOCK_WALLET.map(w => (
                  <tr key={w.asset} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center space-x-3">
                         <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 flex items-center justify-center rounded-lg font-bold text-xs">{w.asset[0]}</div>
                         <span className="font-bold">{w.asset}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-medium">{w.amount} {w.asset}</td>
                    <td className="px-8 py-6 font-bold">${w.valueInUsd.toLocaleString()}</td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end space-x-2">
                        <button className="text-xs font-bold px-3 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 hover:bg-indigo-100 transition-colors">Trade</button>
                        <button className="text-xs font-bold px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 transition-colors">History</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
