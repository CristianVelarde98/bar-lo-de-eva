import React from 'react';

// * Components
import LayoutNavbar from '@/components/layoutNavbar';

function Dashboard() {
  return (
    <LayoutNavbar>
      <section className='w-full h-full flex-col flex items-center justify-center bg-lime-600'>
        <h1>Bienvenido al panel de administracion</h1>
        <section className='w-3/4 h-3/4 bg-rose-500 rounded-3xl flex justify-center'>
          <p className='m-3'>
            ultimos cambios realizados X personas cambiaron a las y tanto horas.
          </p>
        </section>
      </section>
    </LayoutNavbar>
  );
}

export default Dashboard;
