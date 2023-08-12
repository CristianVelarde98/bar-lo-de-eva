import React from 'react';
import Carousel from '@/components/Shared/carousel';
import { Input } from '@/components/ui/input';

function Dashboard() {
  return (
    <section className='w-full h-full flex-col flex items-center justify-center bg-lime-600'>
      <h1>Bienvenido al panel de administracion</h1>
      <section className='w-3/4 h-3/4 bg-rose-500 rounded-3xl flex justify-center'>
        <Carousel>
          <section>
            <Input
              accept='image/*'
              id='picture'
              type='file'
              className='cursor-pointer'
            />
          </section>
        </Carousel>
        <p className='m-3'>
          ultimos cambios realizados X personas cambiaron a las y tanto horas.
        </p>
      </section>
    </section>
  );
}

export default Dashboard;
