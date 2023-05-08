/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import LayoutNavbar from '@/pages/dashboard/layout';

// * CSS
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';
import { useTask } from '@/Context/TaskBard';
import ItemGallery from '@/components/ItemGallery';

function Menu() {
  const { itemsMenu, newItemsMenu } = useTask();

  return (
    <LayoutNavbar>
      {/* CONTENEDOR DE MENU */}
      <section className='w-full h-full flex flex-col items-center justify-center'>
        <Splide
          options={{
            drag: false,
          }}
          hasTrack={false}
          className='w-full h-5/6 flex items-center justify-center'
        >
          <SplideTrack className='w-full h-full center-items'>
            {itemsMenu.map(({ _id, imagen }, index) => (
              <SplideSlide
                key={`${imagen + index}`}
                className='w-full h-full center-items'
              >
                <ItemGallery identify='menu' id={_id} imagen={imagen} />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
        <div className='flex flex-row gap-5'>
          <button
            type='button'
            className='w-36 h-18 p-1 transition-all duration-200 hover:scale-125 bg-green-700 rounded-sm text-white font-bold'
          >
            Aceptar cambios
          </button>
          <button
            onClick={newItemsMenu}
            type='button'
            className='w-36 h-18 p-1 transition-all duration-200 hover:scale-125 bg-blue-600 rounded-sm text-white font-bold'
          >
            Agregar nuevo elemento
          </button>
        </div>
      </section>
    </LayoutNavbar>
  );
}

export default Menu;
