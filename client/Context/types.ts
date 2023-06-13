/* eslint-disable no-unused-vars */
import React, { ReactNode } from 'react';

export type handlerSetPage = (
  Event: React.MouseEvent<HTMLButtonElement>
) => void;

export type ScreenSize = {
  isMobile: boolean;
};

export type ItemsMenuType = {
  _id: string;
  imagen: string;
};

export type ItemsEventsType = {
  _id: string;
  imagen: string;
  timeStarted: string;
  timeFinally: string;
};

export type Column = {
  _id: string;
  nombre: string;
  descripcion: string;
  precio: number;
};

export type ItemsProductsType = {
  [x: string]: Column[];
};

export interface TaskContextType {
  itemsMenu: ItemsMenuType[];
  itemsProducts: ItemsProductsType;
  itemsEvents: ItemsEventsType[];
}

export interface TaskActionContextType {
  newItemsMenu: () => void;
  newItemsEvents: (timeStarted: string, timeFinally: string) => void;
  newItemColumn: (column: string, newItem: Column) => void;
  deleteItemColumn: (id: string, column: string) => void;
  deleteItemMenu: (id: string) => void;
  deleteItemEvents: (id: string) => void;
}

export type PropsTaskProvider = {
  children: ReactNode;
};

export type TaskAction =
  | { type: 'ADD_ITEM_MENU'; payload: ItemsMenuType }
  | { type: 'ADD_ITEM_EVENTS'; payload: ItemsEventsType }
  | { type: 'ADD_ITEM_COLUMN'; payload: { column: string; item: Column } }
  | { type: 'DELETE_ITEM_MENU'; payload: { id: string } }
  | { type: 'DELETE_ITEM_EVENTS'; payload: { id: string } }
  | { type: 'DELETE_ITEM_COLUMN'; payload: { id: string; column: string } };
