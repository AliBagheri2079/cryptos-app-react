import type { RefetchItem } from './Refetch';
import type { ApiResponse } from './Response';

type FetchResponse<T> = ApiResponse<T>;

type FetchMethod = (
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
) => Promise<void>;

type RefetchMethod = {
  reload: number;
  refetch: () => void;
};

type RefetchMethodItem<T> = RefetchItem<T>;

export type { FetchResponse, FetchMethod, RefetchMethod, RefetchMethodItem };
