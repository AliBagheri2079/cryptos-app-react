import type { CryptosMarketParams } from './CryptosMarket';

type CoinChartParams = Pick<
  CryptosMarketParams,
  'vs_currency' | 'precision'
> & {
  id: string;
  days?: number;
  interval?: 'daily';
};

export type { CoinChartParams };
