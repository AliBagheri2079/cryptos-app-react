import type CoinMarketParams from './CoinMarket';

type CoinHistoryParams = Pick<CoinMarketParams, 'localization' | 'id'> & {
  date: string;
};

export default CoinHistoryParams;
