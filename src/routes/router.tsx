import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '@/layouts/private/Dashboard';

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
