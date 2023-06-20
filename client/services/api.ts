import axios, { AxiosResponse } from 'axios';
import { TMenu } from '@/types/services/menu';

const Api = axios.create({
  baseURL: 'http://localhost:3031',
  withCredentials: true,
});

export default Api;

// * MENU

/**
 * @param
 *
 */
export const getMenu = async (): Promise<TMenu> => {
  try {
    const response: AxiosResponse = await Api.get('/menu');
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error('error desconocido');
  }
};
