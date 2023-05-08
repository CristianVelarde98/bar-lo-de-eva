/* eslint-disable no-unused-vars */
import { createContext, useContext } from 'react';
import { Column, TaskActionContextType, TaskContextType } from './types';

export const TaskContext = createContext<
  TaskContextType & TaskActionContextType
>({
  itemsMenu: [],
  itemsProducts: {},
  itemsEvents: [],
  newItemsMenu: () => {},
  newItemsEvents: (timeStarted: string, timeFinally: string) => {},
  newItemColumn: (column: string, newItem: Column) => {},
  deleteItemColumn: (id: string, column: string) => {},
  deleteItemMenu: (id: string) => {},
  deleteItemEvents: (id: string) => {},
});

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTask must be used within a TaskProvider');
  return context;
};
