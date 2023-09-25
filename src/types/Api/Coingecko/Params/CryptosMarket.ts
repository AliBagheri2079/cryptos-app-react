import type { Currency, Localization, Order } from '../global';
import type { DefaultCoinParams } from './DefaultCoin';

type CryptosMarketParams = DefaultCoinParams & {
  vs_currency: Currency;
  ids?: string;
  category?: string;
  order: Order;
  per_page: number;
  page?: number;
  price_change_percentage: string;
  locale: Localization;
  precision?: string;
};

export type { CryptosMarketParams };
