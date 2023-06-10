import React from 'react';
import Image from 'next/image';
import { ScreenSize } from '@/Context/types';

function HomePage({ isMobile }: ScreenSize) {
  return (
    <div className=' w-full h-full items-center justify-center flex'>
      <div className='w-full h-full -z-10'>
        {isMobile ? (
          <section className='bg-black h-full w-full z-10 absolute'>
            <div className='h-full w-full z-20 relative'> </div>
          </section>
        ) : (
          <Image
            src='/homepage/homebg.webp'
            alt='background'
            className='brightness-50 -z-10 object-cover'
            priority
            fill
            style={{ width: '100%', height: '100%' }}
          />
        )}
      </div>
      <div className='flex items-center justify-center flex-col lg:mt-24'>
        {isMobile ? (
          <div className='w-64 h-64 bg-black rounded-full flex justify-center items-center'>
            <div className='w-60 h-60 bg-white rounded-full flex justify-center items-center relative'>
              <Image
                src='/logo/evaLogoNegro1.webp'
                width='120'
                height='120'
                alt='Imagen no encontrada'
                style={{ width: '60%', height: '75%' }}
              />
            </div>
          </div>
        ) : (
          <div className='w-7/12 h-1/5 flex items-center justify-center text-center lg:text-8xl border-dotted border-4 lg:border-custom border-white fuente-custom md:w-5/12 md:h-1/6 lg:w-2/6 lg:h-2/6 sm:w-2/6'>
            <div className='w-9/12 h-30 text-4xl justify-center items-center  border-b-4 lg:border-b-8 border-dotted border-slate-50 flex text-white sm:text-5xl md:w-8/12 lg:w-80 lg:text-8xl md:text-6xl'>
              LO DE EVA
            </div>
          </div>
        )}
        <div className='h-20 w-screen text-center text-xl font-custom tracking-widest text-amber-400 flex justify-center items-center animate-pulse md:text-3xl sm:text-2xl'>
          {' '}
          {`< < `} <a href='#events'>Proximos Eventos Aqui</a>
          {` > >`}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
