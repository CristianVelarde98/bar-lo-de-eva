/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { MouseEvent, memo, useState } from 'react';
import { Column } from '@/store/dashboard';
import EditItemMenu from './WindowsEmerging/EditItemMenu';

type PropsEventsColumn = {
  column: Column[];
  handleDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  handleAdd: (event: MouseEvent<HTMLButtonElement>) => void;
};

function EventsColumn({ column, handleDelete, handleAdd }: PropsEventsColumn) {
  const [openWindows, setOpenWindows] = useState(false);
  const [id, setId] = useState('');

  const handleShowWindowsOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setId(event.currentTarget.value);
    setOpenWindows(true);
  };

  const handleShowWindowsClose = () => {
    setId('');
    setOpenWindows(false);
  };

  return (
    <section className='w-1/2 h-max flex flex-col items-center gap-3'>
      {column.map(({ _id, nombre, descripcion, precio }: Column) => (
        <section
          key={_id}
          className='bg-zinc-950 rounded-lg w-2/3 h-32 flex justify-center flex-col px-7 closeEvents style3d transition-all'
        >
          <button
            value={_id}
            onClick={(events) => handleDelete(events)}
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
        onClick={handleAdd}
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
