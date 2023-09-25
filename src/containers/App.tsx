import { type FC } from 'react';

import '../assets/styles/main.css';
import {
  I18nextProvider,
  LoaderProvider,
  MantineProvider,
  SWRProvider,
} from '@/lib/Provider';
import Routes from '@/routes';

const App: FC = () => {
  return (
    <MantineProvider>
      <LoaderProvider>
        <I18nextProvider>
          <SWRProvider>
            <Routes />
          </SWRProvider>
        </I18nextProvider>
      </LoaderProvider>
    </MantineProvider>
  );
};

export default App;
