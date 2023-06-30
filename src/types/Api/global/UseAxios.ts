import type { AxiosInstance, AxiosRequestConfig } from 'axios';

import type ApiResponse from './Response';

export type AxiosResponse<T> = ApiResponse<T>;

export type AxiosFetch = (
  instance: AxiosInstance,
  options: AxiosRequestConfig,
) => Promise<void>;

type UseAxios<T> = () => [AxiosResponse<T>, AxiosFetch];

export default UseAxios;
