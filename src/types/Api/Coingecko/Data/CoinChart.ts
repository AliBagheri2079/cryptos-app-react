import type { ChartData } from '../global';

type CoinChartData = {
  prices: ChartData<number>;
  market_caps: ChartData<number>;
  total_volumes: ChartData<number>;
};

export type { CoinChartData };
