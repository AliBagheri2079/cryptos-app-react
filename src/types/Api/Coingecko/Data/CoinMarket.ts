import type {
  CommunityData,
  DeveloperData,
  Image,
  InterestStat,
  Links,
  Localization,
  MarketData,
  Ticker,
} from '../global';
import type { DefaultCoinData } from './DefaultCoin';

type CoinDataLocalization = Record<Localization, string>;

type CoinMarketData = DefaultCoinData & {
  asset_platform_id?: unknown;
  platforms?: unknown;
  detail_platforms?: unknown;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  public_notice?: unknown;
  additional_notices: unknown[];
  localization: CoinDataLocalization;
  description: CoinDataLocalization;
  links: Links;
  image: Image;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  coingecko_rank: number;
  coingecko_score: number;
  developer_score: number;
  community_score: number;
  liquidity_score: number;
  public_interest_score: number;
  market_data: MarketData;
  community_data: CommunityData;
  developer_data: DeveloperData;
  public_interest_stats: InterestStat;
  status_updates: any[];
  tickers: Ticker[];
  error?: string;
};

export type { CoinDataLocalization, CoinMarketData };
