import Image from 'next/image';
import { useState } from 'react';
import { MdArrowForwardIos } from 'react-icons/md';
import Carousel from './utils/carousel';

export default function EventPage() {
  const [open, setOpen] = useState(false);

  const hanlderArrow = () => {
    setOpen(!open);
  };

  return (
    <div className=' w-full h-full flex items-center justify-center'>
      <div className='w-full h-full bg-black sm:hidden'>
        <div className='h-2/6 w-full flex items-center justify-center'>
          <p className='text-5xl mb-16 text-white'>Menu</p>
          <p className='text-6xl text-yellow-300 font-semibold'>&</p>
          <p className='text-5xl mt-16 text-white'>Show</p>
        </div>
        <div className='h-min w-full'>
          <Carousel height='40vh' />
        </div>
        <div className='w-full h-1/6 flex flex-col items-center'>
          <input
            className='bg-white w-5/6 h-1/3 focus:outline-none text-xl text-center justify-center items-center'
            placeholder='Introduce tu correo...'
          />
          <button className='bg-red-600 w-1/2 h-1/3 rounded-md m-2'>Suscribirse</button>
        </div>
      </div>

      {/* Desktop */}
      <div className='lg:w-[90%] lg:h-[90%]  shadow-lg shadow-slate-500 rounded-2xl overflow-hidden hidden sm:flex items-center justify-center'>
        <div
          className={`${
            open ? 'w-1/2' : 'w-1/4'
          }  h-full bg-gradient-to-t from-40% from-blue-200 to-white transition-all`}
        >
          <div className='h-2/6 flex justify-center items-center w-full'>
            <div className='w-[25vh] h-[25vh] bg-red-200 rounded-full overflow-hidden flex items-center justify-center'>
              <Image
                src='/logo/evaLogoNegro1.webp'
                width={80}
                height={80}
                style={{ width: '60%', height: '70%' }}
                alt='Imagen no encontrada'
              />
            </div>
          </div>
          <div
            className={`w-full h-[70%] items-center justify-center ${
              open ? 'hidden' : 'flex'
            }`}
          >
            <MdArrowForwardIos size={60} onClick={hanlderArrow} />
          </div>
          <div
            className={`h-[70%] w-full flex-col justify-center items-center ${
              open ? 'flex' : 'hidden'
            }`}
          >
            <div className='w-full h-1/3 flex items-center justify-center font-extralight'>
              <p className='text-5xl mb-20'>Menu</p>
              <p className='text-7xl text-yellow-300 font-semibold'>&</p>
              <p className='text-5xl mt-20'>Show</p>
            </div>
            <div className='h-full w-[90%] flex flex-col items-center'>
              <div className='h-1/3 w-full flex justify-center items-center text-xl text-center'>
                <p>
                  Tenemos eventos cada fin de semana unete y mantente
                  informado/a, Suscribete!
                </p>
              </div>
              <div className='h-1/3 w-full items-center flex'>
                <button
                  className='w-1/3 h-1/4 bg-slate-800 hover:bg-slate-950 transition-colors text-white rounded-l-xl'
                  type='button'
                >
                  {' '}
                  Suscribete
                </button>
                <input
                  type='text'
                  placeholder='Introduce tu Email aquí...'
                  className='h-1/4 w-full text-center placeholder:text-center rounded-r-xl focus:outline-none focus:border-b-2 box-border border-cyan-600'
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${
            open ? 'w-1/2' : 'w-3/4'
          } h-full flex flex-col justify-center items-center`}
        >
          <div className='w-full h-1/5 bg-stone-100'>{/*  Timer  */}</div>
          <div className='w-full h-4/5 bg-gradient-radial from-black to-blue-950'>
            <Carousel height='60vh' />
          </div>
        </div>
      </div>
    </div>
  );
}
