import type CoinsMarketsParams from './CoinsMarkets';

type CoinChartParams = Pick<CoinsMarketsParams, 'vs_currency' | 'precision'> & {
  id: string;
  days?: number;
  interval?: 'daily';
};

export default CoinChartParams;
