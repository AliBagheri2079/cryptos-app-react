import { type ApiResponse } from './ApiResponse';

export type FetchResponse<T> = ApiResponse<T>;

export type Fetch = (
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) => Promise<void>;

export type UseFetch<T> = () => [FetchResponse<T>, Fetch];
