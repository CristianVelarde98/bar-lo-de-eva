import { ReactNode } from 'react';

export type ItemsMenuType = {
  imagen: string;
};

export interface TaskContextType {
  itemsGallery: string[];
  itemsEvents: string[];
  itemsMenu: ItemsMenuType[];
}

export type PropsTaskProvider = {
  children: ReactNode;
};
