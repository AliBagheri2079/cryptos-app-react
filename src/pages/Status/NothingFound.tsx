import type { FC } from 'react';

import NothingFoundTemplate from '@/components/NothingFound';
import StyledComponentProvider from '@/lib/StyledComponent';

const NothingFound: FC = () => {
  return (
    <StyledComponentProvider>
      <NothingFoundTemplate />
    </StyledComponentProvider>
  );
};

export default NothingFound;
