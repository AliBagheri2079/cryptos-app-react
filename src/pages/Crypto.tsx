import { useShallowEffect } from '@mantine/hooks';
import { type FC, useEffect } from 'react';

import getCoinCandleChart from '@/services/crypto/getCoinCandleChart';
import getCoinChart from '@/services/crypto/getCoinChart';
import getCoinHistory from '@/services/crypto/getCoinHistory';
import getCoinMarket from '@/services/crypto/getCoinMarket';
import getCoinsMarkets from '@/services/crypto/getCoinsMarkets';
import searchOnCoingecko from '@/services/crypto/searchOnCoingecko';

const Crypto: FC = () => {
  // const { response, statusCode, errorMessage, isLoading } = getCoinsMarkets({
  const searchData = searchOnCoingecko({
    query: 'bitcoin',
  });
  useEffect(() => {
    console.log('searchData', searchData);
  }, [searchData]);

  const coinsMarkets = getCoinsMarkets({
    vs_currency: 'usd',
    order: 'market_cap_desc',
    per_page: 250,
    sparkline: true,
    price_change_percentage: '24h',
    locale: 'en',
    // locale: 'ar',
  });
  useEffect(() => {
    console.log('coinsMarkets', coinsMarkets);
  }, [coinsMarkets]);

  const coinMarket = getCoinMarket({
    id: 'bitcoin',
    community_data: true,
    developer_data: true,
    localization: true,
    market_data: true,
    sparkline: true,
    tickers: true,
  });
  useEffect(() => {
    console.log('coinMarket', coinMarket);
  }, [coinMarket]);

  const coinHistory = getCoinHistory({
    id: 'bitcoin',
    date: '30-12-2022',
    localization: true,
  });
  useEffect(() => {
    console.log('coinHistory', coinHistory);
  }, [coinHistory]);

  const coinChart = getCoinChart({
    id: 'bitcoin',
    vs_currency: 'usd',
    days: 30,
    interval: 'daily',
  });
  useEffect(() => {
    console.log('coinChart', coinChart);
  }, [coinChart]);

  const coinCandleChart = getCoinCandleChart({
    id: 'bitcoin',
    vs_currency: 'usd',
    days: 30,
  });
  useEffect(() => {
    console.log('coinCandleChart', coinCandleChart);
  }, [coinCandleChart]);

  // useShallowEffect(() => {
  //   const getData = async (): Promise<void> => {
  //     await axiosFetch(cryptoApi, {
  //       method: 'get',
  //       url: '/posts',
  //     });
  //   };
  //   getData();
  // }, []);

  return (
    <div>
      <h1>Crypto</h1>
      {/* {isLoading && <p>isLoading...</p>}

      {status}

      {!isLoading && error && <p className='fs'>{error.message}</p>}

      {!isLoading && !error && data?.length && (
        <ul>
          {data.map((post, i) => (
            <li key={i}>{`${post.id}. ${post.title}`}</li>
          ))}
        </ul>
      )}

      {!isLoading && !error && !data?.length && data?.data && (
        <p>{`userId: ${data.data?.userId}, title: ${data.data?.title}, body: ${data.data?.body}`}</p>
      )}

      {!isLoading && !error && !data && <p>No data to display</p>} */}
    </div>
  );
};

export default Crypto;
