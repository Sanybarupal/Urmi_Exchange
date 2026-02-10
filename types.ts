
export interface CryptoAsset {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  volume24h: string;
  marketCap: string;
  color: string;
}

export interface Transaction {
  id: string;
  type: 'buy' | 'sell' | 'deposit' | 'withdraw';
  asset: string;
  amount: number;
  value: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
}

export interface WalletBalance {
  asset: string;
  amount: number;
  valueInUsd: number;
}

export interface OrderBookEntry {
  price: number;
  amount: number;
  total: number;
}
