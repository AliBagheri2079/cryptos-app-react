import { useEffect, useState } from 'react';

import type {
  FetchAgain,
  FetchMethod,
  FetchResponse,
} from '@/types/Api/global/UseFetch';

function useFetch<T>(): [FetchResponse<T>, FetchMethod, FetchAgain] {
  const [data, setData] = useState<T | undefined>();
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [controller, setController] = useState<AbortController>();
  const [reload, setReload] = useState<number>(0);

  const refetch = (): void => setReload(prev => prev + 1);

  const fetchMethod: FetchMethod = async (input, init) => {
    try {
      setLoading(true);

      const ctrl = new AbortController();
      setController(ctrl);

      const response = await fetch(input, {
        ...init,
        signal: ctrl.signal,
      });
      const responseData = await response.json();
      const responseStatus = response.status;

      setData(responseData);
      setStatus(responseStatus);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(`error message: ${error.message}`);
        setError(error);
      } else {
        throw new Error('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);

  return [{ data, status, error, isLoading }, fetchMethod, { reload, refetch }];
}

export default useFetch;
