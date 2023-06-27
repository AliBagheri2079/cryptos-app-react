import { type FC, useEffect } from 'react';

import useAxios from '@/hooks/useAxios';
import cryptoApi from '@/services/api/crypto';

const Crypto: FC = () => {
  const [{ data, status, error, isLoading }, axiosFetch] = useAxios();

  useEffect(() => {
    const getData = async (): Promise<void> => {
      await axiosFetch(cryptoApi, {
        method: 'get',
        url: '/posts',
      });
    };
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Crypto</h1>
      {isLoading && <p>isLoading...</p>}

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

      {!isLoading && !error && !data && <p>No data to display</p>}
    </div>
  );
};

export default Crypto;
