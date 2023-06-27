import type { AxiosInstance, AxiosRequestConfig } from 'axios';

import { type ApiResponse } from './ApiResponse';

export type AxiosResponse<T> = ApiResponse<T>;

export type AxiosFetch = (
  instance: AxiosInstance,
  options: AxiosRequestConfig,
) => Promise<void>;

export type UseAxios<T> = () => [AxiosResponse<T>, AxiosFetch];
