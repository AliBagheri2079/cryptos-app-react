import type RefetchItems from './Refetch';
import type ApiResponse from './Response';

type FetchResponse<T> = ApiResponse<T>;

type FetchMethod = (
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) => Promise<void>;

type FetchAgain = {
  reload: number;
  refetch: () => void;
};

type FetchAgainItems<T> = RefetchItems<T>;

export type { FetchResponse, FetchMethod, FetchAgain, FetchAgainItems };
