import { type FC } from 'react';

import I18nextProvider from '@/lib/I18next';
import MantineProvider from '@/lib/Mantine';
import Routes from '@/routes';

const App: FC = () => {
  return (
    <I18nextProvider>
      <MantineProvider>
        {/* <CustomFonts /> */}

        <Routes />
      </MantineProvider>
    </I18nextProvider>
  );
};

export default App;
