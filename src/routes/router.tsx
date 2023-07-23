import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '@/layouts/private/Dashboard';
import {
  CoinPage,
  CoinPageError,
  CoinPageLoader,
  CryptoPage,
  NothingFoundPage,
  RedirectPage,
} from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/dashboard',
    children: [
      {
        index: true,
        element: (
          <Dashboard>
            <RedirectPage />
          </Dashboard>
        ),
      },
      {
        path: 'crypto',
        children: [
          {
            index: true,
            element: (
              <Dashboard>
                <CryptoPage />
              </Dashboard>
            ),
          },
          {
            path: ':id',
            element: (
              <Dashboard>
                <CoinPage />
              </Dashboard>
            ),
            errorElement: <CoinPageError />,
            loader: CoinPageLoader,
          },
        ],
      },
      {
        path: '*',
        element: (
          <Dashboard>
            <RedirectPage />
          </Dashboard>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NothingFoundPage />,
  },
]);
