import { useCallback, useEffect, useState } from 'react';

import type {
  FetchMethod,
  FetchResponse,
  RefetchMethod,
} from '@/types/Api/global';

function useFetch<T>(): [FetchResponse<T>, FetchMethod, RefetchMethod] {
  const [data, setData] = useState<T | undefined>();
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [controller, setController] = useState<AbortController>();
  const [reload, setReload] = useState<number>(0);

  const refetch = (): void => setReload(prev => prev + 1);

  const fetchMethod: FetchMethod = useCallback(async (input, init) => {
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
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(`error message: ${err.message}`);
        setError(err);
      } else {
        throw new Error('An unexpected error occurred');
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);

  return [{ data, status, error, isLoading }, fetchMethod, { reload, refetch }];
}

export { useFetch };
