export type ApiResponse<T> = {
  response: T | undefined;
  statusCode: number | null;
  errorMessage: Error | null;
  isLoading: boolean;
};
