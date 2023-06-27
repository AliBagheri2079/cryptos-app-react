import { type FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';

const Routes: FC = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
