import { useState, useEffect } from 'react';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import type { useFetchResponse, FetchOptions } from '@/types/Hooks/useFetch';
import Api from '@/services/api';

/**
Hook useFetch - facilita las solicitudes y proporciona un control básico de la solicitud realizada.
@param {string} url - ruta del endpoint.
@param {string} method - método de la solicitud (GET, POST, PUT, DELETE).
@param {FetchOptions} options - opciones del endpoint.
@returns {useFetchResponse<T>} - Array [ data: (array | null), isLoading: boolean, error: string | null ].
@example
// Ejemplo de uso:
const [data, isLoading, error] = useFetch<Service[]>('url', 'GET', options?);
*/
const useFetch = <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  options: FetchOptions = {}
): useFetchResponse<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorData, setErrorData] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response: AxiosResponse<T> = await Api({
          method,
          url,
          data: options as AxiosRequestConfig,
        });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [data, isLoading, errorData];
};

export default useFetch;
