import { type FC, Suspense } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import NothingFoundTemplate from '@/components/NothingFound';
import StyledComponentProvider from '@/lib/StyledComponent';

const NothingFound: FC = () => {
  return (
    <Suspense>
      <HelmetProvider>
        <Helmet>
          <title>404 Error</title>
          <link rel='canonical' href='https://www.tacobell.com/' />
        </Helmet>

        <StyledComponentProvider>
          <NothingFoundTemplate />
        </StyledComponentProvider>
      </HelmetProvider>
    </Suspense>
  );
};

export default NothingFound;
