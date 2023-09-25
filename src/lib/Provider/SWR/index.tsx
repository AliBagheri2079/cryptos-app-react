import type { FC, ReactNode } from 'react';
import { SWRConfig } from 'swr';

import { fetcher } from '@/utils/helpers';

type Props = {
  children: ReactNode;
};

const SWRProvider: FC<Props> = ({ children }) => {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      {children}
    </SWRConfig>
  );
};

export default SWRProvider;
