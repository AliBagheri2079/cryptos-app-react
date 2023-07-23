import { type FC } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import InProgressTemplate from '@/components/InProgress';

const Redirect: FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Redirect Error</title>
        <link rel='canonical' href='https://www.tacobell.com/' />
      </Helmet>
      <InProgressTemplate />;
    </HelmetProvider>
  );
};

export default Redirect;
