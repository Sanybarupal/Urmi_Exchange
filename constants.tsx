
import { CryptoAsset, Transaction, WalletBalance } from './types';

export const INITIAL_CRYPTO_DATA: CryptoAsset[] = [
  { id: '1', symbol: 'BTC', name: 'Bitcoin', price: 64230.45, change24h: 2.4, volume24h: '32.1B', marketCap: '1.2T', color: '#F7931A' },
  { id: '2', symbol: 'ETH', name: 'Ethereum', price: 3452.12, change24h: -1.2, volume24h: '15.4B', marketCap: '415B', color: '#627EEA' },
  { id: '3', symbol: 'SOL', name: 'Solana', price: 142.85, change24h: 5.7, volume24h: '4.2B', marketCap: '63B', color: '#14F195' },
  { id: '4', symbol: 'BNB', name: 'Binance Coin', price: 582.40, change24h: 0.8, volume24h: '1.1B', marketCap: '85B', color: '#F3BA2F' },
  { id: '5', symbol: 'ADA', name: 'Cardano', price: 0.45, change24h: -2.3, volume24h: '350M', marketCap: '16B', color: '#0033AD' },
  { id: '6', symbol: 'DOT', name: 'Polkadot', price: 7.24, change24h: 1.5, volume24h: '210M', marketCap: '10B', color: '#E6007A' },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 'tx1', type: 'buy', asset: 'BTC', amount: 0.05, value: 3211.50, date: '2024-03-20', status: 'completed' },
  { id: 'tx2', type: 'deposit', asset: 'USD', amount: 5000, value: 5000, date: '2024-03-18', status: 'completed' },
  { id: 'tx3', type: 'sell', asset: 'ETH', amount: 1.5, value: 5178.18, date: '2024-03-15', status: 'completed' },
  { id: 'tx4', type: 'withdraw', asset: 'USD', amount: 1000, value: 1000, date: '2024-03-10', status: 'completed' },
];

export const MOCK_WALLET: WalletBalance[] = [
  { asset: 'BTC', amount: 0.25, valueInUsd: 16057.61 },
  { asset: 'ETH', amount: 4.2, valueInUsd: 14498.90 },
  { asset: 'SOL', amount: 55, valueInUsd: 7856.75 },
  { asset: 'USDT', amount: 2450, valueInUsd: 2450.00 },
];
