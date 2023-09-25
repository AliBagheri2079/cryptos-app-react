import type { CryptosMarketData, Order } from '../Api/Coingecko';

type CryptosColumnProp = {
  column: string;
};

type CryptosItemProp = CryptosMarketData;

type CryptosOrderProp = {
  value: Order;
  label: string;
  name?: string;
  group?: string;
};

export type { CryptosColumnProp, CryptosItemProp, CryptosOrderProp };
