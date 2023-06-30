import type CoinChartParams from './CoinChart';

type CoinCandleChartParams = Omit<CoinChartParams, 'interval'>;

export default CoinCandleChartParams;
