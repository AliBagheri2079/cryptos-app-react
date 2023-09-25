import type { DeveloperData, Image, MarketData } from '../global';
import type { CoinMarketData } from './CoinMarket';

type CoinHistoryDefaultData = Pick<
  CoinMarketData,
  | 'id'
  | 'symbol'
  | 'name'
  | 'localization'
  | 'community_data'
  | 'public_interest_stats'
>;

type CoinHistoryImage = Record<'image', Omit<Image, 'large'>>;

type CoinHistoryMarketData = Record<
  'market_data',
  Pick<MarketData, 'current_price' | 'market_cap' | 'total_volume'>
>;

type CoinHistoryDeveloperData = Record<
  'developer_data',
  Omit<DeveloperData, 'last_4_weeks_commit_activity_series'>
>;

type CoinHistoryData = CoinHistoryDefaultData &
  CoinHistoryImage &
  CoinHistoryMarketData &
  CoinHistoryDeveloperData;

export type {
  CoinHistoryDefaultData,
  CoinHistoryImage,
  CoinHistoryMarketData,
  CoinHistoryDeveloperData,
  CoinHistoryData,
};
