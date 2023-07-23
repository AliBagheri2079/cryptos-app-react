import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '@/layouts/private/Dashboard';
import { Coin, Crypto, NothingFound, Redirect } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/dashboard',
    children: [
      {
        index: true,
        element: (
          <Dashboard>
            <Redirect />
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
                <Crypto />
              </Dashboard>
            ),
          },
          {
            path: ':id',
            element: (
              <Dashboard>
                <Coin />
              </Dashboard>
            ),
          },
        ],
      },
      {
        path: '*',
        element: (
          <Dashboard>
            <Redirect />
          </Dashboard>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NothingFound />,
  },
  {
    // children: [
    //   {
    // with this data loaded before rendering
    // loader: async ({ request, params }) => {
    //   return fetch(
    //     `/fake/api/teams/${params.teamId}.json`,
    //     { signal: request.signal }
    //   );
    // },
    // performing this mutation when data is submitted to it
    // action: async ({ request }) => {
    //   return updateFakeTeam(await request.formData());
    // },
    // errorElement: <ErrorBoundary />,
    //     path: 'crypto/:id',
    //     element: <Coin />,
    //   },
    // ],
  },
]);
