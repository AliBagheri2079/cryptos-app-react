/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '@/layouts/private/Dashboard';

// import {
//   CoinPage,
//   CoinPageError,
//   CryptoPage,
//   NothingFoundPage,
//   RedirectPage,
// } from '@/pages';

const CoinPage = lazy(async () => await import('@/pages/Coin'));
const CoinPageError = lazy(async () => await import('@/pages/Coin/Error'));
const CryptoPage = lazy(async () => await import('@/pages/Crypto'));
const NothingFoundPage = lazy(
  async () => await import('@/pages/Status/NothingFound'),
);
const RedirectPage = lazy(async () => await import('@/pages/Status/Redirect'));

export const router = createBrowserRouter([
  {
    path: '/',
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
            // loader: CoinPageLoader,
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
