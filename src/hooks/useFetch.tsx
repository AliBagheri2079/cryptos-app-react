import { useEffect, useState } from 'react';

import type { Fetch, UseFetch } from '@/global/types/other/UseFetch';

type TData = Array<any | null>;

export const useFetch: UseFetch<TData> = () => {
  const [data, setData] = useState<TData>([]);
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [controller, setController] = useState<AbortController>();

  const fetchFC: Fetch = async (input, init) => {
    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);

      const response = await fetch(input, {
        ...init,
        signal: ctrl.signal,
      });
      const data = await response.json();
      const status = response.status;

      setData(data);
      setStatus(status);
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

  return [{ data, status, error, isLoading }, fetchFC];
};

export default useFetch;
