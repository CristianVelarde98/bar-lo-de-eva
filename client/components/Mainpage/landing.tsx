import Link from 'next/link';
import Image from 'next/image';

// const Viva = LocalFont({ src: '../../public/fonts/VivelaRivoluzione.ttf' });

export default function LandingPage() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-gradient-radial from-slate-800 from-15% to-black'>
      <div className='w-[90%] h-[90%] hidden '>
        <div className='w-full h-2/5 md:h-2/4 flex items-end justify-center'>
          <h1 className='w-1/2 h-1/4 font-revolution bg-red-500 text-white flex items-center justify-center sm:h-48  sm:text-6xl lg:text-8xl font-thin  border-8 border-white'>
            LO DE EVA
          </h1>
        </div>
        <div className='w-full h-2/5 flex justify-center bg-purple-700'>
          <div className='w-1/2 h-min flex items-center justify-center md:text-lg lg:text-2xl font-bold text-center'>
            <Link
              href='/#Eventos'
              className='animate-pulse text-yellow-400 hover:text-yellow-600'
            >
              Enterate de nuestros proximos eventos
            </Link>
          </div>
        </div>
      </div>
      <div className='w-full h-full flex'>
        <div className='w-3/5 h-full flex-col flex items-center justify-center bg-black'>
          <h1 className='w-1/2 h-1/4 font-revolution text-white flex items-center justify-center sm:h-48  sm:text-6xl lg:text-8xl font-thin  border-8 border-white'>
            LO DE EVA
          </h1>
          <div className='w-1/2 h-min flex items-center justify-center md:text-lg lg:text-2xl font-bold text-center'>
            <Link
              href='/#Eventos'
              className='animate-pulse text-white hover:text-yellow-200'
            >
              Enterate de nuestros proximos eventos
            </Link>
          </div>
        </div>
        <div className='w-2/5 h-full flex justify-center items-center relative'>
          <div className='w-60 h-60 flex items-center justify-center overflow-hidden rounded-full bg-black absolute z-10 bg-opacity-80'>
            <Image
              src='/logo/evaLogoBlanco.webp'
              width={150}
              height={150}
              alt='Imagen no encontrada'
              loading='lazy'
            />
          </div>
          <Image
            src='/bg-landing.webp'
            alt='Imagen no encontrada'
            className='object-cover'
            fill
          />
        </div>
      </div>
    </div>
  );
}
