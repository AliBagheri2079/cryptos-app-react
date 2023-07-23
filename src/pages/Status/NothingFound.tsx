import type { FC } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import NothingFoundTemplate from '@/components/NothingFound';
import StyledComponentProvider from '@/lib/StyledComponent';

const NothingFound: FC = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>404 Error</title>
        <link rel='canonical' href='https://www.tacobell.com/' />
      </Helmet>

      <StyledComponentProvider>
        <NothingFoundTemplate />
      </StyledComponentProvider>
    </HelmetProvider>
  );
};

export default NothingFound;
