import type { FC } from 'react';
import { useParams } from 'react-router-dom';

import CoinInfo from '@/layouts/private/CoinInfo';
import getCoinMarket from '@/services/crypto/getCoinMarket';
import type CoinMarketParams from '@/types/Api/Crypto/Params/CoinMarket';
import type { AxiosRefetchItems } from '@/types/Api/global/UseAxios';

const Coin: FC = () => {
  const { id: paramId } = useParams();

  const params: CoinMarketParams = {
    id: paramId as string,
    localization: true,
    tickers: false,
    market_data: true,
    community_data: false,
    developer_data: false,
    sparkline: true,
  };
  const refetchItems: AxiosRefetchItems<undefined> = [];
  const { data, error, status, isLoading } = getCoinMarket(
    params,
    refetchItems,
  );

  return <CoinInfo data={data} />;
};

export default Coin;
