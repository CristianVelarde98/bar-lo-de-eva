import { TItemMenu } from '@/types/feature/menu';

// MENU
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

// EVENTS
type ISODateString = `${string}T${string}.000Z`;

export type TEventsItem = {
  ID: string;
  key: string;
  inicio: ISODateString;
  fin: ISODateString;
  Image: string;
  __v: 0;
};
