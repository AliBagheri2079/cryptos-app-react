import type ApiResponse from './Response';

export type FetchResponse<T> = ApiResponse<T>;

export type FetchHandler = (
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) => Promise<void>;

type UseFetch<T> = () => [FetchResponse<T>, FetchHandler];

export default UseFetch;
