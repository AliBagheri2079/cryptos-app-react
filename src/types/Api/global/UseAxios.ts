import type { AxiosInstance, AxiosRequestConfig } from 'axios';

import type ApiResponse from './Response';

type AxiosResponse<T> = ApiResponse<T>;

type AxiosFetch = (
  instance: AxiosInstance,
  options: AxiosRequestConfig,
) => Promise<void>;

type AxiosRefetch = {
  reload: number;
  refetch: () => void;
};

export type { AxiosResponse, AxiosFetch, AxiosRefetch };
