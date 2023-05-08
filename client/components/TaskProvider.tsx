/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */
import React, { useCallback, useMemo, useReducer } from 'react';
import { produce } from 'immer';
import type {
  TaskContextType,
  PropsTaskProvider,
  TaskAction,
  Column,
  TaskActionContextType,
} from '@/Context/types';
import { TaskContext } from '@/Context/TaskBard';

const initialState: TaskContextType = {
  itemsMenu: [{ _id: '0', imagen: '/default/menu.webp' }],
  itemsProducts: {
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
  itemsEvents: [],
};

const handleState = (state: TaskContextType, { type, payload }: TaskAction) => {
  switch (type) {
    case 'ADD_ITEM_MENU':
      return produce(state, (draftState) => {
        if (draftState.itemsMenu.length < 5) draftState.itemsMenu.push(payload);
      });
    case 'ADD_ITEM_EVENTS':
      return produce(state, (draftState) => {
        if (draftState.itemsEvents.length < 5)
          draftState.itemsEvents.push(payload);
      });
    case 'ADD_ITEM_COLUMN':
      return produce(state, (draftState) => {
        draftState.itemsProducts[payload.column].push(payload.item);
      });
    case 'DELETE_ITEM_COLUMN':
      return produce(state, (draftState) => {
        // eslint-disable-next-line no-param-reassign
        draftState.itemsProducts[payload.column] = draftState.itemsProducts[
          payload.column
        ].filter((item: { _id: string }) => item._id !== payload.id);
      });
    case 'DELETE_ITEM_MENU':
      return produce(state, (draftState) => {
        // eslint-disable-next-line no-param-reassign
        draftState.itemsMenu = draftState.itemsMenu.filter(
          (item: { _id: string }) => item._id !== payload.id
        );
      });
    case 'DELETE_ITEM_EVENTS':
      return produce(state, (draftState) => {
        // eslint-disable-next-line no-param-reassign
        draftState.itemsEvents = draftState.itemsEvents.filter(
          (item: { _id: string }) => item._id !== payload.id
        );
      });
    default:
      return state;
  }
};

function TaskProvider({ children }: PropsTaskProvider) {
  const [task, dispatch] = useReducer(handleState, initialState);

  const generateId = function* generateId() {
    let id = 1;
    while (true) {
      yield (id += 1);
    }
  };

  const idGenerator = useMemo(generateId, []);

  const newItemsMenu = useCallback(
    () =>
      dispatch({
        type: 'ADD_ITEM_MENU',
        payload: {
          _id: String(idGenerator.next().value),
          imagen: '/default/menu.webp',
        },
      }),
    [idGenerator]
  );

  const deleteItemMenu = useCallback(
    (id: string) =>
      dispatch({
        type: 'DELETE_ITEM_MENU',
        payload: { id },
      }),
    [dispatch]
  );

  const newItemColumn = useCallback(
    (column: string, newItem: Column) =>
      dispatch({ type: 'ADD_ITEM_COLUMN', payload: { column, item: newItem } }),
    [dispatch]
  );

  const deleteItemColumn = useCallback(
    (id: string, column: string) => {
      dispatch({ type: 'DELETE_ITEM_COLUMN', payload: { id, column } });
    },
    [dispatch]
  );

  const newItemsEvents = useCallback(
    (timeStarted: string, timeFinally: string) =>
      dispatch({
        type: 'ADD_ITEM_EVENTS',
        payload: {
          _id: String(idGenerator.next().value),
          imagen: '/default/menu.webp',
          timeStarted,
          timeFinally,
        },
      }),
    [idGenerator]
  );

  const deleteItemEvents = useCallback(
    (id: string) =>
      dispatch({
        type: 'DELETE_ITEM_EVENTS',
        payload: { id },
      }),
    [dispatch]
  );

  const value: TaskContextType & TaskActionContextType = useMemo(
    () => ({
      itemsMenu: task.itemsMenu,
      itemsProducts: task.itemsProducts,
      itemsEvents: task.itemsEvents,
      newItemsMenu,
      newItemColumn,
      newItemsEvents,
      deleteItemColumn,
      deleteItemMenu,
      deleteItemEvents,
    }),
    [
      deleteItemEvents,
      deleteItemMenu,
      deleteItemColumn,
      newItemsEvents,
      newItemColumn,
      newItemsMenu,
      task.itemsEvents,
      task.itemsMenu,
      task.itemsProducts,
    ]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export default TaskProvider;
