import { type FC, useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { preload } from 'swr';

import { Coin } from '@/features';
import { capitalize, fetcher } from '@/utils/helpers';

const baseURL = import.meta.env.VITE_COINGECKO_BASE_URL as string;

const CoinPage: FC = () => {
  const { id } = useParams<string>();
  const coin = id as string;
  const title = capitalize(coin);

  useEffect(() => {
    preload(
      () =>
        `${baseURL}/coins/${coin}?localization=true&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=true`,
      fetcher,
    );
  }, [coin]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{`${title} Page`}</title>
        <meta
          name='description'
          content='Supper App Project a Simple Project that shows many tools and other tricks...'
        />
        <link rel='canonical' href='https://www.tacobell.com/' />
      </Helmet>

      <Coin />
    </HelmetProvider>
  );
};

export default CoinPage;
