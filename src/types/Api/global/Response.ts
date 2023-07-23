type ApiResponse<T> = {
  data: T | undefined;
  status: number | null;
  error: Error | null;
  isLoading: boolean;
};

export default ApiResponse;
