import type { StateCreator } from 'zustand';
import type { DevtoolsOptions, PersistOptions } from 'zustand/middleware';

type StoreMiddlewareInitializer<T> = StateCreator<
  T,
  [['zustand/devtools', never], ['zustand/persist', unknown]],
  []
>;
type StoreMiddlewarePersistOptions<T> = PersistOptions<T, T>;
type StoreMiddlewareDevtoolsOptions = DevtoolsOptions | undefined;
type StoreMiddlewareReturnFunction<T> = StateCreator<
  T,
  [],
  [['zustand/devtools', never], ['zustand/persist', T]]
>;

export type {
  StoreMiddlewareInitializer,
  StoreMiddlewarePersistOptions,
  StoreMiddlewareDevtoolsOptions,
  StoreMiddlewareReturnFunction,
};
