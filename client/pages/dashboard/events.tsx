/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
import { MouseEvent, useEffect, useState, useCallback } from 'react';
import LayoutNavbar from '@/components/layoutNavbar';
import EventColumn from '@/components/EventColumn';
import dashboard from '@/store/dashboard';

function Events() {
  const {
    itemsEvents,
    newItemColumn1,
    removeItemColumn1,
    newItemColumn2,
    removeItemColumn2,
  } = dashboard((state) => state);

  const handleAddColumn1 = () => {
    newItemColumn1({
      _id: '0',
      nombre: 'Nombre del Producto',
      descripcion: 'Ingredientes',
      precio: 0,
    });
  };

  const handleAddColumn2 = () => {
    newItemColumn2({
      _id: '0',
      nombre: 'Nombre del Producto',
      descripcion: 'Ingredientes',
      precio: 0,
    });
  };

  const handleDeleteColumn1 = (event: MouseEvent<HTMLButtonElement>) => {
    removeItemColumn1(event.currentTarget.value);
  };

  const handleDeleteColumn2 = (event: MouseEvent<HTMLButtonElement>) => {
    removeItemColumn2(event.currentTarget.value);
  };

  return (
    <LayoutNavbar>
      <section className='h-full w-full bg-white p-5 flex flex-row justify-center gap-10 overflow-y-scroll'>
        <EventColumn
          column={itemsEvents.column1}
          handleDelete={handleDeleteColumn1}
          handleAdd={handleAddColumn1}
        />
        <EventColumn
          column={itemsEvents.column2}
          handleDelete={handleDeleteColumn2}
          handleAdd={handleAddColumn2}
        />
      </section>
    </LayoutNavbar>
  );
}

export default Events;
