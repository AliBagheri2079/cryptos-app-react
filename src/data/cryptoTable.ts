import type { ColumnProp, OrderProp } from '@/types/Prop/CryptoTable';

const cryptoTableColumnData: ColumnProp[] = [
  {
    column: 'cryptoTableHeaderColumn_1',
  },
  {
    column: 'cryptoTableHeaderColumn_2',
  },
  {
    column: 'cryptoTableHeaderColumn_3',
  },
  {
    column: 'cryptoTableHeaderColumn_4',
  },
  {
    column: 'cryptoTableHeaderColumn_5',
  },
];

const cryptoTableOrderData: OrderProp[] = [
  {
    value: 'market_cap_asc',
    label: 'Market Cap Asc',
    name: 'Market Cap Asc',
  },
  {
    value: 'market_cap_desc',
    label: 'Market Cap Desc',
    name: 'Market Cap Desc',
  },
  {
    value: 'id_asc',
    label: 'Id Asc',
    name: 'Id Asc',
  },
  {
    value: 'id_desc',
    label: 'Id Desc',
    name: 'Id Desc',
  },
  {
    value: 'volume_asc',
    label: 'Volume Asc',
    name: 'Volume Asc',
  },
  {
    value: 'volume_desc',
    label: 'Volume Desc',
    name: 'Volume Desc',
  },
  {
    value: 'gecko_asc',
    label: 'Gecko Asc',
    name: 'Gecko Asc',
  },
  {
    value: 'gecko_desc',
    label: 'Gecko Desc',
    name: 'Gecko Desc',
  },
];

export { cryptoTableColumnData, cryptoTableOrderData };
