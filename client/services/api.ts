import axios, { AxiosResponse } from 'axios';
import type { TMenu } from '@/types/services/menu';
import type { TItemMenu, TItemMenuInitialValues } from '@/types/feature/menu';

const Api = axios.create({
  baseURL: 'http://localhost:3031',
  withCredentials: true,
});

export default Api;

// * MENU
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

// TODO: SERVER JSON es bueno pero no es complejo en terminos de realziar un backend asi que se debera modificar este apartado
export const addMenuC1 = async (
  menuItem: TItemMenuInitialValues
): Promise<void> => {
  try {
    const response: AxiosResponse = await Api.post('/column1', {
      id: '64508d84e2asbccca0310cb3',
      nombre: menuItem.nombre,
      descripcion: menuItem.descripcion,
      precio: menuItem.precio,
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error('error desconocido');
  }
};

export const addMenuC2 = async (
  menuItem: TItemMenuInitialValues
): Promise<void> => {
  try {
    const response: AxiosResponse = await Api.post('/column2', menuItem);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error('error desconocido');
  }
};

export const deleteMenuC1 = async (id: string): Promise<void> => {
  try {
    const response: AxiosResponse = await Api.delete(`/column1/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error('error desconocido');
  }
};

export const deleteMenuC2 = async (id: string): Promise<void> => {
  try {
    const response: AxiosResponse = await Api.delete(`/column2/${id}`);
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error('error desconocido');
  }
};

export const puthMenuC1 = async (menuItem: TItemMenu): Promise<void> => {
  try {
    const response: AxiosResponse = await Api.patch(`/column1/${menuItem.id}`, {
      id: menuItem.id,
      nombre: menuItem.nombre,
      descripcion: menuItem.descripcion,
      precio: menuItem.precio,
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error('error desconocido');
  }
};

export const puthMenuC2 = async (menuItem: TItemMenu): Promise<void> => {
  try {
    const response: AxiosResponse = await Api.patch(
      `/column2/${menuItem.id}`,
      menuItem
    );
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(error.message);
    else throw new Error('error desconocido');
  }
};
