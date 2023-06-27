import { type FC, type ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n';

type Props = {
  children: ReactNode;
};

const I18next: FC<Props> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n} defaultNS={'translation'}>
      {children}
    </I18nextProvider>
  );
};

export default I18next;
