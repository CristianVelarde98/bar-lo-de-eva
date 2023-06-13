import Image from 'next/image';
import React, { ReactNode, useState } from 'react';
import Paginated from './paginated';
import { handlerSetPage } from '@/Context/types';

const imagenes = [
  {
    main: 'Ejemplo1',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo2',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo3',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo4',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo5',
    secondary:
      'Pastel de cerdo con mucho cerdo y extra de cerdo sumado a la nuevapromocion de mas cerdo',
    price: '300$',
  },
  {
    main: 'Ejemplo6',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo7',
    secondary: 'Descripcion de ejemplo',
    price: '400$',
  },
  {
    main: 'Ejemplo8',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo9',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo10',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo11',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo12',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo8',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo9',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo10',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo11',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo12',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo8',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'pastel de cerdo',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
  {
    main: 'Ejemplo10',
    secondary: 'Descripcion de ejemplo',
    price: '300000$',
  },
  {
    main: 'Ejemplo11',
    secondary: 'Descripcion de ejemplo',
    price: '300$',
  },
];

// type handlerSetPage = (Event: React.MouseEvent<HTMLButtonElement>)=>void

export default function Menu() {
  const [actualPage, SetActualPage] = useState(1);

  // const index: Array<ReactNode> = [];
  // initial index
  const indexInit = actualPage;
  // items per page
  const itemsPerPAge = 4;
  // start index
  const startIndex = (indexInit - 1) * itemsPerPAge;
  // Final index for the slice
  const endIndex = startIndex + itemsPerPAge;
  // this is expected to set the start and the end of the page
  const currentPage = imagenes.slice(startIndex, endIndex);
  // add itemsPerPage to logic for goes 1 page ahead
  const currentPageSeconDiv = imagenes.slice(
    startIndex + itemsPerPAge,
    endIndex + itemsPerPAge
  );
  // needs the total pages to make an for.
  const totalPages = Math.ceil(imagenes.length / itemsPerPAge);

  const handlerPage: handlerSetPage = (event) => {
    const prop = Number((event.target as HTMLInputElement)?.value);
    if (prop !== actualPage) {
      SetActualPage(prop);
    }
  };

  return (
    <>
      <div className='h-full flex flex-col items-center'>
        <div className=' bg-black w-full h-1/6 flex'>
          <div className='flex items-center w-full '>
            <span className='text-xl text-white m-10'>CHORIS</span>
            <div className='h-1/6 bg-white text-xs ml-2 flex items-center font-bold'>
              100% CERDO
            </div>
          </div>
          <Image
            src='/EvaLogoBlanco.png'
            height={100}
            width={100}
            alt='Imagen no encontrada'
            className='float-right'
          />
        </div>
        <div className='w-full h-full flex'>
          <div className=' h-full w-1/2 sm:w-1/2 flex flex-col justify-between'>
            {currentPage.map((a) => {
              return (
                <div
                  className={`text-lg text-white 
                h-1/5
                flex
                `}
                  key={a.main}
                >
                  <ul
                    className='
                  h-full w-4/5 
                  flex-col
                  flex
                  items-center
                  '
                  >
                    <li
                      className='w-5/6 h-1/2 grid items-center text-left'
                      key={a.main}
                    >
                      {a.main}
                    </li>
                    <li
                      className='w-5/6 h-1/2  text-sm text-left'
                      key={a.secondary}
                    >
                      {a.secondary}
                    </li>
                  </ul>
                  <div
                    className=' 
                  h-full 
                  w-1/5 grid 
                  items-center'
                    key={a.price}
                  >
                    {a.price}
                  </div>
                </div>
              );
            })}
          </div>
        <div className='h-full w-1/2  sm:w-1/2 flex flex-col justify-between border-l-2 border-white border-opacity-'>
          {currentPageSeconDiv.map((a) => {
            return (
              <div
                className={`text-lg text-white 
                h-1/5
                flex
                `}
                key={a.main}
              >
                <div
                  className='
                  h-full w-4/5 
                  flex-col
                  flex
                  items-center
                  '
                >
                  <div
                    className='w-5/6 h-1/2 grid items-center text-left'
                    key={a.main}
                  >
                    {a.main}
                  </div>
                  <div
                    className='w-5/6 h-1/2  text-sm text-left'
                    key={a.secondary}
                  >
                    {a.secondary}
                  </div>
                </div>
                <div
                  className=' 
                  h-full 
                  w-1/5 grid 
                  items-center'
                  key={a.price}
                >
                  {a.price}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
      <Paginated
        totalPages={totalPages}
        actualPage={actualPage}
        handler={handlerPage}
      />
      {/* <div className='absolute -right-12 top-1/3 '>
        <div
          className='
        bg-white
        bg-opacity-90
        flex flex-col 
        rounded-3xl 
        paginado'
        >
          {index}
        </div>
      </div> */}
    </>
  );
}
