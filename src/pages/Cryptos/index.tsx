import { type FC } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { Cryptos } from '@/features';

const CryptosPage: FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Cryptos Page</title>
        <meta
          name='description'
          content='Supper App Project a Simple Project that shows many tools and other tricks...'
        />
        <link rel='canonical' href='https://www.tacobell.com/' />
      </Helmet>

      <Cryptos />
    </HelmetProvider>
  );
};

export default CryptosPage;
