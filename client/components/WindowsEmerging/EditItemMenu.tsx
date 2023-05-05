/* eslint-disable no-console */
import React, { useRef } from 'react';

type PropsEditItemMenu = {
  id: string;
  closeWindows: () => void;
};

function EditItemMenu({ id, closeWindows }: PropsEditItemMenu) {
  const name = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('name:', name.current?.value ?? '');
    console.log('description:', description.current?.value ?? '');
    console.log('price:', price.current?.value ?? '');
    console.log('id:', id);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className='h-screen w-screen backdrop-blur-sm z-20 flex items-center justify-center absolute top-0 left-0 bg-trasnparet-black'
    >
      <div className='h-auto w-1/3 text-black flex flex-col gap-7 p-4 bg-gray-100 rounded-lg shadow-2xl'>
        <div className='h-10 w-4/5'>
          <p>Nombre del Producto:</p>
          <input
            className='outline-none w-full rounded-md px-2 py-1 shadow-md'
            placeholder='Ingrese el nombre del producto'
            type='text'
          />
        </div>
        <div className='h-10 w-4/5 rounded-lg'>
          <p>Precio del Producto:</p>
          <input
            className='outline-none w-full rounded-md px-2 py-1 shadow-md'
            placeholder='Ingrese el precio del producto'
            type='number'
          />
        </div>
        <div className='h-10 w-4/5 rounded-lg'>
          <p>Description del Producto:</p>
          <input
            className='outline-none w-full rounded-md px-2 py-1 shadow-md'
            placeholder='Ingrese la description del producto'
            type='text'
          />
        </div>
        <div className='flex flex-col gap-2 font-bold text-white'>
          <button
            className='rounded-md p-1 bg-green-600 transform hover:scale-105 transition-all'
            type='submit'
          >
            Guardar Cambios
          </button>
          <button
            className='rounded-md p-1 bg-red-600 transform hover:scale-105 transition-all'
            type='button'
            onClick={closeWindows}
          >
            Cancelar Cambios
          </button>
        </div>
      </div>
    </form>
  );
}

export default EditItemMenu;
