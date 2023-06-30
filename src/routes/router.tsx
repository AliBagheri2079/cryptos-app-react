import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '@/layouts/private/Dashboard';
import { Crypto } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/home',
    element: (
      <Dashboard>
        <div>home</div>
      </Dashboard>
    ),
  },
  {
    path: '/crypto',
    element: (
      <Dashboard>
        <Crypto />
      </Dashboard>
    ),
  },
  {
    path: '/market-news',
    element: (
      <Dashboard>
        <div>market news</div>
      </Dashboard>
    ),
  },
]);
