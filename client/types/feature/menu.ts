// import { TColumnMenu } from '../services/menu';

export type TItemMenu = {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
};

export type TItemMenuInitialValues = {
  nombre: string;
  descripcion: string;
  precio: number;
};

export type TDashItemsColumnsProps = {
  column: string;
  dataset: TItemMenu;
};

export type TDashColumnsProps = {
  column: 'column1' | 'column2';
  dataset: TItemMenu[];
};
