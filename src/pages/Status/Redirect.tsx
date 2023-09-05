import { type FC, Suspense, useEffect, useRef } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import InProgressTemplate from '@/components/InProgress';

const Redirect: FC = () => {
  const navigate = useNavigate();
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timer.current = setTimeout(() => navigate('/crypto'), 3000);

    return () => {
      clearInterval(timer.current as NodeJS.Timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Suspense>
      <HelmetProvider>
        <Helmet>
          <title>Redirect Error</title>
          <link rel='canonical' href='https://www.tacobell.com/' />
        </Helmet>
        <InProgressTemplate />;
      </HelmetProvider>
    </Suspense>
  );
};

export default Redirect;
