import React from 'react';
import { handlerSetPage } from '@/Context/types';

interface total {
  totalPages: number;
  actualPage: number;
  handler: handlerSetPage;
}
export default function Paginated({ totalPages, actualPage, handler }: total) {
  const index: Array<React.ReactNode> = [];

  for (let i = 1; i <= totalPages - 1; i++) {
    index.push(
      <button
        type='button'
        key={i}
        value={i}
        aria-label={`Button ${i}`}
        onClick={handler}
        className={`w-5 h-5 ${
          actualPage === i ? 'bg-red-600' : 'bg-slate-900'
        } bg-opacity-80 m-2 rounded-full flex justify-center items-center transition-colors duration-500`}
      />
    );
  }

  return (
    <div className='absolute -right-12 top-1/3 '>
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
    </div>
  );
}
