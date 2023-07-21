import type { Order } from '../Api/Crypto/global';
import type CoinsMarketsData from '@/types/Api/Crypto/Data/CoinsMarkets';

type ColumnProp = {
  column: string;
};

type RowProp = CoinsMarketsData;

type OrderProp = {
  value: Order;
  label: string;
  name?: string;
  group?: string;
};

export type { ColumnProp, RowProp, OrderProp };
