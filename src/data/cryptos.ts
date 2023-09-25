import type { CryptosColumnProp, CryptosOrderProp } from '@/types/Prop';

const cryptosTableColumnData: CryptosColumnProp[] = [
  {
    column: 'cryptosTableColumn_1',
  },
  {
    column: 'cryptosTableColumn_2',
  },
  {
    column: 'cryptosTableColumn_3',
  },
  {
    column: 'cryptosTableColumn_4',
  },
  {
    column: 'cryptosTableColumn_5',
  },
];

const cryptosOrderData: CryptosOrderProp[] = [
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

export { cryptosTableColumnData, cryptosOrderData };
