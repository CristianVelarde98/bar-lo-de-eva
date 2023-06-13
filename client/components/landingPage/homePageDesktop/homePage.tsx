import React from 'react';
import Image from 'next/image';

function HomePageDesktop() {
  return (
    <div className='w-full h-full items-center justify-center flex'>
      <div className='w-full h-full -z-10'>
        <Image
          src='/bg-landing.webp'
          alt='background'
          className='brightness-50 -z-10 object-cover'
          priority
          fill
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      {/* Black logo for the landing page responsive */}
      <div className='w-full h-3/6 flex items-center justify-center flex-col lg:mt-[5%] bg-violet-800'>
        <div className='w-1/5 h-full flex items-center justify-center text-center bg-orange-900 lg:text-8xl border-dotted border-4 lg:border-custom border-white fuente-custom md:w-5/12 md:h-1/6 lg:w-2/6 lg:h-2/3 sm:w-2/6'>
          <div className='w-9/12 h-30 text-4xl justify-center items-center border-slate-50 flex text-white sm:text-5xl md:w-8/12 lg:w-full lg:text-8xl md:text-6xl bg-cyan-300'>
            LO DE EVA
          </div>
        </div>
        <div className='h-20 w-screen text-center text-xl font-custom tracking-widest text-amber-400 flex justify-center items-center animate-pulse md:text-3xl sm:text-2xl bg-fuchsia-700'>
          {' '}
          {`< < `} <a href='#events'>Proximos Eventos Aqui</a>
          {` > >`}
        </div>
      </div>
    </div>
  );
}

export default HomePageDesktop;
