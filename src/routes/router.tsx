/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import CoinError from '@/pages/Cryptos/Coin/Error';
import CryptosError from '@/pages/Cryptos/Error';
import { NotfoundPage, RedirectPage } from '@/pages/Status';

const Dashboard = lazy(async () => await import('@/layouts/private/Dashboard'));
const CryptosPage = lazy(async () => await import('@/pages/Cryptos'));
const CoinPage = lazy(async () => await import('@/pages/Cryptos/Coin'));

const router = createBrowserRouter([
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
        path: 'home',
        element: (
          <Dashboard>
            <RedirectPage />
          </Dashboard>
        ),
      },
      {
        path: 'cryptos',
        children: [
          {
            index: true,
            element: (
              <Dashboard>
                <CryptosPage />
              </Dashboard>
            ),
            errorElement: <CryptosError />,
          },
          {
            path: ':id',
            element: (
              <Dashboard>
                <CoinPage />
              </Dashboard>
            ),
            errorElement: <CoinError />,
            // loader: CoinLoader,
          },
        ],
      },
      {
        path: 'market-news',
        element: (
          <Dashboard>
            <RedirectPage />
          </Dashboard>
        ),
      },
      {
        path: 'releases',
        element: (
          <Dashboard>
            <RedirectPage />
          </Dashboard>
        ),
      },
      {
        path: 'analytics',
        element: (
          <Dashboard>
            <RedirectPage />
          </Dashboard>
        ),
      },
      {
        path: 'contracts',
        element: (
          <Dashboard>
            <RedirectPage />
          </Dashboard>
        ),
      },
      {
        path: 'settings',
        element: (
          <Dashboard>
            <RedirectPage />
          </Dashboard>
        ),
      },
      {
        path: 'security',
        element: (
          <Dashboard>
            <RedirectPage />
          </Dashboard>
        ),
      },
      {
        path: 'account',
        element: (
          <Dashboard>
            <RedirectPage />
          </Dashboard>
        ),
      },
      {
        path: 'logout',
        element: (
          <Dashboard>
            <RedirectPage />
          </Dashboard>
        ),
      },
      {
        path: '*',
        element: <NotfoundPage />,
      },
    ],
  },
]);

export { router };
