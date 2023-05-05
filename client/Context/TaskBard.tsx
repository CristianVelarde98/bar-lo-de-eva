import {
  createContext,
  useState,
  useMemo,
  useCallback,
  useContext,
} from 'react';
import type {
  PropsTaskProvider,
  TaskContextType,
  ItemsMenuType,
} from './types';

const TaskContext = createContext({});

export default function TaskProvider({ children }: PropsTaskProvider) {
  const [tasks, setTaks] = useState<TaskContextType>({
    itemsGallery: [],
    itemsEvents: [],
    itemsMenu: [
      { imagen: '/default/menu.webp' },
      { imagen: '/default/menu.webp' },
      { imagen: '/default/menu.webp' },
    ],
  });

  const newItemMenu = useCallback(
    (newItem: ItemsMenuType) => {
      setTaks({
        ...tasks,
        itemsMenu: [...tasks.itemsMenu, newItem],
      });
    },
    [tasks]
  );

  const value = useMemo(
    () => ({
      itemsGallery: tasks.itemsGallery,
      itemsEvents: tasks.itemsEvents,
      itemsMenu: tasks.itemsMenu,
      newItemMenu,
    }),
    [tasks, newItemMenu]
  );

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}

export const useTask = () => {
  const context = useContext(TaskContext);
  if (!context) throw new Error('useTask must be used within a TaskProvider');
};
