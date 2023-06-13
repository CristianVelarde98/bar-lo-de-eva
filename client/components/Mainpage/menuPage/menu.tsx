import Image from 'next/image';
import { ScreenSize } from '@/Context/types';
import MenuPaginated from './menuPaginate/menuList';

function MenuPage({ isMobile }: ScreenSize) {
  return (
    <div className='w-full h-full overflow-hidden '>
      <Image
        src='/menubg.webp'
        alt='Imagen no encontrada'
        fill
        className='-z-10 opacity-70 contrast-100 object-cover'
      />
      <div className='w-full h-[15vh] text-sm sm:text-4xl sm:h-t30 mt-24 lg:text-4xl font-serif text-amber-500 lg:h-40 lg:mt-20 bg-black text-center items-center justify-center flex bg-opacity-90'>
        DISFRUTA DE NUESTRO MENU VARIADO
      </div>
      <div className='w-full h-full inline-flex flex-col items-center'>
        <div
          id='Pasarela'
          key='Pasarela'
          className='sm:w-4/6 lg:w-3/5 lg:h-1/4 justify-center items-center overflow-hidden mt-4'
        >
          {/* <CarouselComp /> */}
        </div>
        <div className='w-4/5 h-4/6 lg:w-3/5 lg:h-3/6 text-center flex flex-col mt-5'>
          <div className='w-full h-[15vh] bg-white font-serif sm:rounded-t-xl text-3xl text-amber-500 justify-center flex items-center'>
            MENU
          </div>
          <div className='w-full h-full inline-flex'>
            <div className='h-full sm:h-full w-full sm:w-full flex justify-center '>
              <ul className='min-h-full relative min-w-full sm:rounded-b-xl bg-black bg-opacity-70'>
                {isMobile ? null : <MenuPaginated />}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuPage;
