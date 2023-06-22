import { TColumnMenu } from '../services/menu';

export type TDashItemsColumnsProps = {
  column: string;
  dataset: TColumnMenu;
};

export type TDashColumnsProps = {
  column: string;
  dataset: TColumnMenu[];
};
