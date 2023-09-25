import type { Image } from '../global';
import type { CoinMarketData } from './CoinMarket';

type DefaultSearchData = {
  id: string;
  name: string;
};

type Coin = DefaultSearchData &
  Omit<Image, 'small'> &
  Pick<CoinMarketData, 'symbol' | 'market_cap_rank'> & {
    api_symbol: string;
  };

type Exchange = DefaultSearchData &
  Omit<Image, 'small'> & {
    market_type: string;
  };

type Category = DefaultSearchData;

type Nft = DefaultSearchData &
  Pick<CoinMarketData, 'symbol'> &
  Pick<Image, 'thumb'>;

type SearchOnCoingeckoData = {
  coins: Coin[];
  exchanges: Exchange[];
  icos: any[];
  categories: Category[];
  nfts: Nft[];
};

export type { DefaultSearchData, SearchOnCoingeckoData };
