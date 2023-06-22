import axios, { AxiosResponse } from 'axios';
import type { TColumnMenu, TMenu } from '@/types/services/menu';

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
    const column1: AxiosResponse = await Api.get('/column1');
    const column2: AxiosResponse = await Api.get('/column2');
    return {
      column1: column1.data,
      column2: column2.data,
    };
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error('error desconocido');
  }
};

export const addMenu = async (menuItem: TColumnMenu): Promise<void> => {
  try {
    const response: AxiosResponse = await Api.post('/column1', menuItem);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error('error desconocido');
  }
};

export const deleteMenu = async (id: string): Promise<void> => {
  try {
    const response: AxiosResponse = await Api.delete(`/column1/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error('error desconocido');
  }
};
