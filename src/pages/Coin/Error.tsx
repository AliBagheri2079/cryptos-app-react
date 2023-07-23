import type { AxiosError } from 'axios';
import type { FC } from 'react';
import { useRouteError } from 'react-router-dom';

const CoinPageError: FC = () => {
  const error = useRouteError() as AxiosError;

  return (
    <div className='container mx-auto my-20'>
      <h2 className='my-5'>{error.message}</h2>
      <pre className='bg-gray-800'>
        Status: {error.status} - Error Code: {error.code}
      </pre>
    </div>
  );
};

export default CoinPageError;
