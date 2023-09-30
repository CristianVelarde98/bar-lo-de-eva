import React from 'react';
// import Carousel from '@/components/Shared/carousel';
// import { Input } from '@/components/ui/input';

function Dashboard() {
  return (
    <section className='w-full h-full flex items-center justify-center bg-slate-700'>
      {/* <h1>Bienvenido al panel de administracion</h1> */}
      <section className='w-2/4 h-4/5 bg-white rounded-tl-md rounded-bl-md grid grid-cols-2 grid-rows-2 overflow-hidden'>
        <div className=' col-span-3 border-2 grid place-items-center text-center font-jejumyeongjo font-bold text-3xl'>
          {' '}
          Bienvenido al panel de administrador
        </div>
        <div className='border-2 text-center items-center flex justify-center'>
          Revisar Notion y la base de datos.
        </div>
        {/* <div className=' bg-purple-200'></div> */}
        <div className='border-2' />
      </section>
      <section className='w-1/4 h-4/5 bg-white rounded-tr rounded-br border-2 items-center justify-center flex text-center'>
        {' '}
        Ultimos cambios realizados X personas cambiaron a las y tanto horas.{' '}
      </section>
    </section>
  );
}

export default Dashboard;
