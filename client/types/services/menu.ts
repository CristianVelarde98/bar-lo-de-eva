export type TColumnMenu = {
  _id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  __v: number;
};

export type TMenu = {
  column1: TColumnMenu[];
  column2: TColumnMenu[];
};
