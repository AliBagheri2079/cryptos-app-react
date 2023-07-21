import { isAxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';

import type {
  AxiosFetch,
  AxiosRefetch,
  AxiosResponse,
} from '@/types/Api/global/UseAxios';

function useAxios<T>(): [AxiosResponse<T>, AxiosFetch, AxiosRefetch] {
  const [data, setData] = useState<T | undefined>();
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [controller, setController] = useState<AbortController>();
  const [reload, setReload] = useState<number>(0);

  const refetch = (): void => setReload(prev => prev + 1);

  const axiosFetch: AxiosFetch = useCallback(async (instance, options) => {
    try {
      setLoading(true);

      const ctrl = new AbortController();
      setController(ctrl);

      const response = await instance({
        signal: ctrl.signal,
        ...options,
      });

      setData(response.data);
      setStatus(response.status);
    } catch (err: unknown) {
      if (isAxiosError(err)) {
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

  return [{ data, status, error, isLoading }, axiosFetch, { reload, refetch }];
}

export default useAxios;
