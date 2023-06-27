import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import type { AxiosFetch, UseAxios } from '@/global/types/other/UseAxios';

type TData = Array<any | null>;

const useAxios: UseAxios<TData> = () => {
  const [data, setData] = useState<TData>([]);
  const [status, setStatus] = useState<number | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [controller, setController] = useState<AbortController>();

  const axiosFetch: AxiosFetch = async (instance, options) => {
    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);

      const { data, status } = await instance({
        ...options,
        signal: ctrl.signal,
      });

      setData(data);
      setStatus(status);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
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

  return [{ data, status, error, isLoading }, axiosFetch];
};

export default useAxios;
