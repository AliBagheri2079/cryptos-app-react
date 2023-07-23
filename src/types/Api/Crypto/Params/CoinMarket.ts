import type DefaultCoinParams from './DefaultCoin';

type CoinMarketParams = DefaultCoinParams & {
  id: string;
  localization?: boolean;
  tickers?: boolean;
  market_data?: boolean;
  community_data?: boolean;
  developer_data?: boolean;
};

export default CoinMarketParams;
