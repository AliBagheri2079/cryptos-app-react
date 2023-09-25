import { devtools, persist } from 'zustand/middleware';

import type {
  StoreMiddlewareDevtoolsOptions as DevtoolsOptions,
  StoreMiddlewareInitializer as Initializer,
  StoreMiddlewarePersistOptions as PersistOptions,
  StoreMiddlewareReturnFunction as ReturnFunction,
} from '@/types/utility';

const storeMiddleware = <T>(
  initializer: Initializer<T>,
  persistOptions: PersistOptions<T>,
  devtoolsOptions: DevtoolsOptions,
): ReturnFunction<T> =>
  devtools(persist(initializer, persistOptions), devtoolsOptions);

export { storeMiddleware };
