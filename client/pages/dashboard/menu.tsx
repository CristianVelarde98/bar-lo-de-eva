/* eslint-disable @next/next/no-img-element */
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import LayoutNavbar from '@/components/layoutNavbar';
import ItemMenu from '@/components/ItemMenu';
import dashboard from '@/store/dashboard';

// * CSS
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

function Menu() {
  const { itemsMenu } = dashboard((state) => state);

  return (
    <LayoutNavbar>
      {/* CONTENEDOR DE MENU */}
      <section className='w-full h-full flex flex-col items-center justify-center'>
        <Splide
          hasTrack={false}
          className='w-full h-5/6 flex items-center justify-center'
        >
          <SplideTrack className='w-max h-full center-items'>
            {itemsMenu.map(({ imagen }) => (
              <SplideSlide className='w-max h-full center-items'>
                <ItemMenu imagen={imagen} />
              </SplideSlide>
            ))}
          </SplideTrack>
        </Splide>
        <button
          type='button'
          className='w-36 h-18 p-1 transition-all duration-200 hover:scale-125 bg-green-700 rounded-sm text-white font-bold'
        >
          Aceptar cambios
        </button>
      </section>
    </LayoutNavbar>
  );
}

export default Menu;
