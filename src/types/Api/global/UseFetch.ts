import { type ApiResponse } from './Response';

export type FetchResponse<T> = ApiResponse<T>;

export type Fetch = (
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) => Promise<void>;

type UseFetch<T> = () => [FetchResponse<T>, Fetch];

export default UseFetch;
