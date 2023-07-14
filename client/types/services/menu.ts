import { TItemMenu } from '@/types/feature/menu';

export type TColumnMenu = {
  _id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  __v: number;
};

export type TMenu = {
  column1: TItemMenu[];
  column2: TItemMenu[];
};
