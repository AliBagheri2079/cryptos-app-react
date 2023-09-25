import type { Sparkline } from '../global';
import type { DefaultCoinData } from './DefaultCoin';

type CryptosMarketData = DefaultCoinData & {
  image: string;
  current_price: number;
  market_cap: number;
  fully_diluted_valuation?: number;
  total_volume?: number;
  high_24h?: number;
  low_24h?: number;
  price_change_24h?: number;
  price_change_percentage_24h?: number;
  market_cap_change_24h?: number;
  market_cap_change_percentage_24h?: number;
  circulating_supply?: number;
  total_supply?: number;
  max_supply?: number;
  ath?: number;
  ath_change_percentage?: number;
  ath_date?: string;
  atl?: number;
  atl_change_percentage?: number;
  atl_date?: string;
  roi?: unknown;
  sparkline_in_7d?: Sparkline;
  price_change_percentage_24h_in_currency?: number;
};

export type { CryptosMarketData };
