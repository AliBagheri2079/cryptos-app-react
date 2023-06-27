export type ApiResponse<T> = {
  data: T;
  status: number | null;
  error: Error | null;
  isLoading: boolean;
};
