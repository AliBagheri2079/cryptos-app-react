import type { DeveloperData, Image, MarketData } from '../global';
import type CoinMarketData from './CoinMarket';

export type DefaultCoinHistoryData = Pick<
  CoinMarketData,
  | 'id'
  | 'symbol'
  | 'name'
  | 'localization'
  | 'community_data'
  | 'public_interest_stats'
>;

export type CoinHistoryImage = Record<'image', Omit<Image, 'large'>>;

export type CoinHistoryMarketData = Record<
  'market_data',
  Pick<MarketData, 'current_price' | 'market_cap' | 'total_volume'>
>;

export type CoinHistoryDeveloperData = Record<
  'developer_data',
  Omit<DeveloperData, 'last_4_weeks_commit_activity_series'>
>;

type CoinHistoryData = DefaultCoinHistoryData &
  CoinHistoryImage &
  CoinHistoryMarketData &
  CoinHistoryDeveloperData;

export default CoinHistoryData;
