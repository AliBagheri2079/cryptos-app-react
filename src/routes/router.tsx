import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '@/layouts/private/Dashboard';
import { Crypto } from '@/pages';

export const router = createBrowserRouter([
  {
    path: '/home',
    element: (
      <Dashboard>
        <Crypto />
      </Dashboard>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <Dashboard>
        <div>dashboard</div>
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
