import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { useFetchResponse, FetchOptions } from '@/types/Hooks/useFetch';

/**
 * Hook useFetch - facilitates requests and provides a basic control of the request made.
 * @param {string} url - path of endpoint/json.
 * @param {FetchOptions} options - options the endpoint/json.
 * @returns {useFetchResponse<T>} - Array[ data: (array | null), isLoading: boolean, error: string | null ].
 * @example
 * // Example of use:
 * const [data, isLoading, error] = useFetch<Service[]>('url', options?);
 */
const useFetch = <T>(
  url: string,
  options: FetchOptions = {}
): useFetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorData, setErrorData] = useState<string | null>(null);

  // const memoizedOptions = useMemo(() => options, [options]);
  // const memoizedUrl = useMemo(() => url, [url]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response: AxiosResponse<T> = await axios(
          url,
          options as AxiosRequestConfig
        );
        if (response.status !== 200)
          throw new Error('Error al realizar la petición');

        setData(response.data);
      } catch (error: unknown) {
        if (error instanceof Error) setErrorData(error.message);
        else setErrorData('Error desconocido');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [options, url]);

  return [data, isLoading, errorData];
};

export default useFetch;
