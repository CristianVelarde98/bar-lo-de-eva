import React from 'react';

// * Components
import axios from 'axios';
import LayoutNavbar from '@/components/layoutNavbar';

function Dashboard() {
  async function peticionPrueba() {
    const prueba = await axios.post(
      'http://localhost:3030/auth',
      {
        user: 'rozoparraduvan@gmail.com',
        password: '123456789Kk/',
      },
      { withCredentials: true }
    );
    console.log(prueba);
  }

  return (
    <LayoutNavbar>
      <section className='w-full h-full flex-col flex items-center justify-center bg-lime-600'>
        <h1>Bienvenido al panel de administracion</h1>
        <section className='w-3/4 h-3/4 bg-rose-500 rounded-3xl flex justify-center'>
          <p className='m-3'>
            ultimos cambios realizados X personas cambiaron a las y tanto horas.
          </p>
          <button type='button' onClick={peticionPrueba}>
            prueba
          </button>
        </section>
      </section>
    </LayoutNavbar>
  );
}

export default Dashboard;
