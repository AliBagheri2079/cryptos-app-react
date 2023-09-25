import type { FC, ReactNode } from 'react';
import { I18nextProvider as Provider } from 'react-i18next';

import i18n from './i18n';

type Props = {
  children: ReactNode;
};

const I18nextProvider: FC<Props> = ({ children }) => {
  return (
    <Provider i18n={i18n} defaultNS={'translation'}>
      {children}
    </Provider>
  );
};

export default I18nextProvider;
