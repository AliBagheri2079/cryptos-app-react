import type { Currency } from '../Params';
import type { Sparkline } from './Sparkline';

type DataPrice = Record<Currency, number | string>;

type MarketData = {
  current_price: DataPrice;
  total_value_locked?: unknown;
  mcap_to_tvl_ratio?: unknown;
  fdv_to_tvl_ratio?: unknown;
  roi?: unknown;
  ath: DataPrice;
  ath_change_percentage: DataPrice;
  ath_date: DataPrice;
  atl: DataPrice;
  atl_change_percentage: DataPrice;
  atl_date: DataPrice;
  market_cap: DataPrice;
  market_cap_rank: number;
  fully_diluted_valuation: DataPrice;
  total_volume: DataPrice;
  high_24h: DataPrice;
  low_24h: DataPrice;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_24h_in_currency: DataPrice;
  price_change_percentage_1h_in_currency: DataPrice;
  price_change_percentage_24h_in_currency: DataPrice;
  price_change_percentage_7d_in_currency: DataPrice;
  price_change_percentage_14d_in_currency: DataPrice;
  price_change_percentage_30d_in_currency: DataPrice;
  price_change_percentage_60d_in_currency: DataPrice;
  price_change_percentage_200d_in_currency: DataPrice;
  price_change_percentage_1y_in_currency: DataPrice;
  market_cap_change_24h_in_currency: DataPrice;
  market_cap_change_percentage_24h_in_currency: DataPrice;
  total_supply: number;
  max_supply: number;
  circulating_supply: number;
  sparkline_7d: Sparkline;
  last_updated: string;
};

export type { DataPrice, MarketData };
