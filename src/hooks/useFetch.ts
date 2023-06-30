import { useEffect, useState } from 'react';

import type { FetchHandler, FetchResponse } from '@/types/Api/global/UseFetch';

function useFetch<T>(): [FetchResponse<T>, FetchHandler] {
  const [response, setResponse] = useState<T | undefined>();
  const [statusCode, setStatusCode] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<Error | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [controller, setController] = useState<AbortController>();

  const fetchHandler: FetchHandler = async (input, init) => {
    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);

      const res = await fetch(input, {
        ...init,
        signal: ctrl.signal,
      });
      const data = await res.json();
      const status = res.status;

      setResponse(data);
      setStatusCode(status);
    } catch (error: unknown) {
      if (error instanceof Error) {
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

  return [{ response, statusCode, errorMessage, isLoading }, fetchHandler];
}

export default useFetch;
