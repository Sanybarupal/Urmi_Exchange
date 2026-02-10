
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { MOCK_WALLET, MOCK_TRANSACTIONS } from '../constants.tsx';

const DashboardPage: React.FC = () => {
  const chartData = [
    { name: 'Mon', value: 35000 },
    { name: 'Tue', value: 38000 },
    { name: 'Wed', value: 37500 },
    { name: 'Thu', value: 41000 },
    { name: 'Fri', value: 39500 },
    { name: 'Sat', value: 42000 },
    { name: 'Sun', value: 45210 },
  ];

  const pieData = MOCK_WALLET.map(w => ({
    name: w.asset,
    value: w.valueInUsd
  }));

  const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f59e0b'];

  const totalBalance = MOCK_WALLET.reduce((acc, curr) => acc + curr.valueInUsd, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-8">
      <header className="flex flex-col md:flex-row md:items-end md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold">Dashboard Overview</h1>
          <p className="text-slate-500">Welcome back, here's what's happening today.</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition-colors">Deposit</button>
          <button className="px-4 py-2 border border-slate-300 dark:border-slate-700 rounded-lg font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Withdraw</button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="text-slate-500 text-sm font-medium">Total Balance</span>
              <h2 className="text-3xl font-bold">${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 2 })}</h2>
            </div>
            <div className="text-right">
              <span className="text-emerald-500 font-bold">+12.4%</span>
              <p className="text-xs text-slate-500">Past 7 days</p>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0f172a', 
                    border: 'none', 
                    borderRadius: '12px',
                    color: '#fff'
                  }} 
                  itemStyle={{ color: '#818cf8' }}
                />
                <Area type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Allocation</h3>
          <div className="h-56 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
              <span className="text-xs text-slate-500">Total</span>
              <span className="text-lg font-bold">${Math.round(totalBalance/1000)}k</span>
            </div>
          </div>
          <div className="mt-4 space-y-3">
            {pieData.map((item, idx) => (
              <div key={item.name} className="flex justify-between items-center text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[idx % COLORS.length] }}></div>
                  <span className="font-medium">{item.name}</span>
                </div>
                <span className="text-slate-500">{((item.value / totalBalance) * 100).toFixed(1)}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-xl font-bold">Recent Transactions</h3>
          <button className="text-indigo-500 text-sm font-bold hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr className="text-left">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Type</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Asset</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Value</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {MOCK_TRANSACTIONS.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4">
                    <span className={`capitalize font-bold ${tx.type === 'buy' || tx.type === 'deposit' ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {tx.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-semibold">{tx.asset}</td>
                  <td className="px-6 py-4">{tx.amount.toLocaleString()}</td>
                  <td className="px-6 py-4">${tx.value.toLocaleString()}</td>
                  <td className="px-6 py-4 text-slate-500 text-sm">{tx.date}</td>
                  <td className="px-6 py-4 text-right">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-bold">
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
