import { isAxiosError } from 'axios';
import { useEffect, useState } from 'react';

import type { AxiosFetch, AxiosResponse } from '@/types/Api/global/UseAxios';

function useAxios<T>(): [AxiosResponse<T>, AxiosFetch] {
  const [response, setResponse] = useState<T | undefined>();
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<Error | null>(null);
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

      setResponse(data);
      setStatusCode(status);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        console.error(`error message: ${error.message}`);
        setErrorMessage(error);
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

  return [{ response, statusCode, errorMessage, isLoading }, axiosFetch];
}

export default useAxios;
