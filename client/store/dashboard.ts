/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { create } from 'zustand';

type ItemsMenuType = {
  imagen: string;
};

export type Column = {
  _id: string;
  nombre: string;
  descripcion: string;
  precio: number;
};

type ItemsEventsType = {
  [x: string]: Column[];
};

type State = {
  itemsGallery: string[];
  itemsEvents: ItemsEventsType;
  itemsMenu: ItemsMenuType[];
};

type Actions = {
  newItemMenu: (newItem: ItemsMenuType) => void;
  newItemColumn1: (newItemColumn: Column) => void;
  newItemColumn2: (newItemColumn: Column) => void;
  removeItemColumn1: (itemId: string) => void;
  removeItemColumn2: (itemId: string) => void;
};

const dashboard = create<State & Actions>((set) => ({
  itemsGallery: [],
  itemsEvents: {
    column1: [
      {
        _id: '10',
        nombre: 'fideos con tuco',
        descripcion: 'fideos con tuco, noseas forro',
        precio: 20000,
      },
    ],
    column2: [
      {
        _id: '20',
        nombre: 'fideos con tuco',
        descripcion: 'fideos con tuco, noseas forro',
        precio: 20000,
      },
    ],
  },
  itemsMenu: [
    { imagen: '/default/menu.webp' },
    { imagen: '/default/menu.webp' },
    { imagen: '/default/menu.webp' },
  ],
  newItemMenu: (newItem: ItemsMenuType) =>
    set((state) => {
      let newItems = [...state.itemsMenu];

      if (state.itemsMenu.length < 5) newItems = [...state.itemsMenu, newItem];

      return { ...state, itemsMenu: newItems };
    }),
  newItemColumn1: (newItemColumn: Column) => {
    set((state) => {
      const column1 = [...state.itemsEvents.column1, newItemColumn];
      const itemsEvents = { ...state.itemsEvents, column1 };
      return { ...state, itemsEvents };
    });
  },
  removeItemColumn1: (itemId: string) =>
    set((state) => ({
      itemsEvents: {
        ...state.itemsEvents,
        column1: state.itemsEvents.column1.filter(
          (item) => item._id !== itemId
        ),
      },
    })),
  newItemColumn2: (newItemColumn: Column) => {
    set((state) => {
      const column2 = [...state.itemsEvents.column2, newItemColumn];
      const itemsEvents = { ...state.itemsEvents, column2 };
      return { ...state, itemsEvents };
    });
  },
  removeItemColumn2: (itemId: string) =>
    set((state) => ({
      itemsEvents: {
        ...state.itemsEvents,
        column2: state.itemsEvents.column2.filter(
          (item) => item._id !== itemId
        ),
      },
    })),
}));

export default dashboard;
