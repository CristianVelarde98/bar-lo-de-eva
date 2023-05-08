/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { MouseEvent, memo, useCallback, useMemo, useState } from 'react';
import { Column } from '@/store/dashboard';
import EditItemMenu from './WindowsEmerging/EditItemMenu';
import { useTask } from '@/Context/TaskBard';

type PropsEventsColumn = {
  indentify: string;
  column: Column[];
};

function EventsColumn({ indentify, column }: PropsEventsColumn) {
  const { newItemColumn, deleteItemColumn } = useTask();
  const [openWindows, setOpenWindows] = useState(false);
  const [id, setId] = useState('');

  // const handleShowWindowsOpen = (
  //   event: React.MouseEvent<HTMLButtonElement>
  // ) => {
  //   setId(event.currentTarget.value);
  //   setOpenWindows(true);
  // };

  // const handleShowWindowsClose = () => {
  //   setId('');
  //   setOpenWindows(false);
  // };

  const generateId = function* generateId() {
    let idNew = 1;
    while (true) {
      yield (idNew += 1);
    }
  };
  const idGenerator = useMemo(generateId, []);

  const handleShowWindowsOpen = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setId(event.currentTarget.value);
      setOpenWindows(true);
    },
    []
  );

  const handleShowWindowsClose = useCallback(() => {
    setId('');
    setOpenWindows(false);
  }, []);

  const handleNewItem = useCallback(() => {
    newItemColumn(indentify, {
      _id: String(idGenerator.next().value),
      nombre: 'Nombre del Producto',
      descripcion: 'Ingredientes',
      precio: 0,
    });
  }, [idGenerator, indentify, newItemColumn]);

  const handleDeleteItem = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      deleteItemColumn(event.currentTarget.value, indentify);
    },
    [deleteItemColumn, indentify]
  );

  return (
    <section className='w-1/2 h-max flex flex-col items-center gap-3'>
      {column.map(({ _id, nombre, descripcion, precio }: Column) => (
        <section
          key={_id}
          className='bg-zinc-950 rounded-lg w-2/3 h-32 flex justify-center flex-col px-7 closeEvents style3d transition-all'
        >
          <button
            value={_id}
            onClick={handleDeleteItem}
            type='button'
            className='bg-red-700 text-white font-bold center-items shadow-md transition-all deleteItem'
          >
            X
          </button>
          <button
            value={_id}
            type='button'
            className='flex flex-row items-end gap-2'
            onClick={handleShowWindowsOpen}
          >
            <p className='text-xl text-center font-bold whitespace-nowrap text-amber-500'>
              {nombre}
            </p>
            <div className='vorder flex-1 border-amber-500' />
            <p className='text-xl text-center font-bold whitespace-nowrap text-amber-500'>
              {precio}$
            </p>
          </button>
          <p className='text-base text-white'>{descripcion}</p>
        </section>
      ))}
      <button
        onClick={handleNewItem}
        type='button'
        className='bg-red-600 rounded-lg font-bold text-white w-2/3 h-32'
      >
        New element
      </button>
      {openWindows && (
        <EditItemMenu id={id} closeWindows={handleShowWindowsClose} />
      )}
    </section>
  );
}

export default memo(EventsColumn);
