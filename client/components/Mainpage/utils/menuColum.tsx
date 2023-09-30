import React from 'react';
import { FaMoneyBill } from 'react-icons/fa';

interface menu {
  _id: string;
  nombre: string;
  descripcion: string;
  precio: number;
}
export default function MenuCol({ menuData }: { menuData: menu[] }) {
  //    initial index.
  const indexInit = 1;
  //    items per page.
  const itemsPerPage = 4;
  //    start index
  const startIndex = (indexInit - 1) * itemsPerPage;
  //    Final index for the slice
  const endIndex = startIndex + itemsPerPage;
  // this is expected to set the start and the end of the page
  const currentPage = menuData.slice(startIndex, endIndex);
  //    add itemsPerPage to logic for goes 1 page ahead
  return (
    <div className='w-full h-full flex'>
      <div className=' h-full w-1/2 sm:w-full flex flex-col justify-between divide-black divide-y-[0.5px] px-4'>
        {currentPage.map((a: menu) => {
          return (
            <div
              className={`text-lg text-white
                h-1/4
                flex
                `}
            >
              <div
                className='
                  h-full w-3/5 
                  flex-col
                  flex
                  justify-center
                  items-center
                  '
              >
                <div className='w-5/6 h-1/4 grid items-center text-sm md:text-xl text-left'>
                  {a.nombre}
                </div>
                <div className='w-5/6 h-1/4 flex items-center text-xs md:text-base text-left'>
                  {a.descripcion}
                </div>
              </div>
              <div
                className=' 
                  h-full 
                  w-2/5 flex 
                  items-center
                  overflow-hidden
                  '
              >
                <div className='w-full h-full flex'>
                  <figure className='w-1/2 h-full flex items-center justify-end'>
                    <FaMoneyBill color='#8FFAAF' />
                  </figure>
                  <div className='w-1/2 h-full flex items-center justify-center'>
                    {a.precio}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
