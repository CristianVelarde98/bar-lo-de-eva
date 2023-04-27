/* eslint-disable @next/next/no-img-element */
import LayoutNavbar from '@/components/layoutNavbar';

function Menu() {
  return (
    <LayoutNavbar>
      {/* CONTENEDOR DE MENU */}
      <section className='w-full h-full flex flex-col items-center justify-center'>
        {/* CONTENEDOR DE LA BARRA */}
        <section className='style3d w-3/4 h-64 bg-white  rounded-3xl flex flex-row-reverse shadow-sm'>
          {/* BOTON PARA NUEVO ELEMENTO */}

          <button
            type='button'
            className='absolute -top-5 -right-5 z-10 w-10 h-10 rounded-md bg-white flex item-center justify-center transform hover:scale-125 shadow-lg transition-all duration-200'
          >
            +
          </button>

          {/* IMAGEN CON BOTON DE CAMBIAR IMAGEN */}
          <div className='size-img-menu style3d'>
            <img
              className='rounded-3xl size-img-menu z-0 opacity-90'
              src='/default/menu.webp'
              alt='icon'
            />
            <button
              type='button'
              className='transition-all duration-200 trasnform shadow-md hover:scale-125 font-bold text-white rounded-lg z-10 bg-menu h-8 w-36 text-center p-1 absolute top-1/2 left-1/2 -translate-x-1/2'
            >
              Cambiar Imagen
            </button>
          </div>

          {/* RESTO DE LA BARRA */}
          <div className='w-full h-full flex items-center justify-center'>
            <div className='w-3/4 h-3/4 rounded-md bg-zinc-400 flex items-center justify-center' />
          </div>
        </section>

        {/* CONTENEDOR DEL BOTON NEW DATA */}
        <section className='my-3 w-1/3 h-1/4 rounded-lg bg-orange-700 p-5 '>
          <button type='button'>New Data</button>
        </section>
      </section>
    </LayoutNavbar>
  );
}

export default Menu;
