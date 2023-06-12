import Link from 'next/link';
// import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import { ScreenSize } from '@/Context/types';
import BtnNavBar from './BtnNavbar/BtnNavbar';

function Navbar({ isMobile }: ScreenSize) {
  // const router = useRouter();
  const [isListOpen, setIsListOpen] = useState(false);

  const stateList = {
    open: 'open',
    closed: 'closed',
  };
  const openList = isListOpen ? stateList.open : stateList.closed;

  const navbarDesktop = [
    {
      path: '/#Home',
      name: 'Inicio',
    },
    {
      path: '/#Menu',
      name: 'Menu',
    },
    {
      path: '/#Eventos',
      name: 'Eventos',
    },
    {
      path: '/#Ubicacion',
      name: 'Ubicacion',
    },
    {
      path: '/Cataring',
      name: 'Cataring',
    },
  ];

  // const navbarMobile = [{}];

  const options = () => {
    setIsListOpen(!isListOpen);
  };

  return (
    <nav className='w-screen h-14 sm:h-20 bg- sm:bg-black text-white fixed z-30 flex'>
      {isMobile ? (
        <div className='inline-block w-screen z-50'>
          <button type='button' className='p-4 bg-slate-900' onClick={options}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
          <figure className='bg-white h-full w-16 flex items-center justify-center float-right'>
            <Image
              src='/evaLogoNegro1.webp'
              width={40}
              height={40}
              alt='Imagen no encontrada'
            />
          </figure>
          {isListOpen ? (
            <ul
              className={`absolute top-0 right-0 left-auto z-50 text-black w-full h-5/6 flex-col text-center items-center justify-center ${openList}`}
            >
              <li className='h-14 w-full bg-slate-200 grid items-center hover:bg-slate-300'>
                <button
                  type='button'
                  className=' w-14 h-full bg-slate-300 float-left'
                  onClick={options}
                >
                  X
                </button>
              </li>
              {navbarDesktop.map((a) => {
                return <BtnNavBar route={a.path} message={a.name} />;
              })}
              <li className='h-10 bg-white flex justify-center items-center hover:bg-slate-300'>
                <Link
                  className='flex justify-center items-center w-full h-full'
                  href='/catering'
                  scroll={false}
                >
                  Cataring
                </Link>
              </li>
            </ul>
          ) : null}
        </div>
      ) : null}
    </nav>
  );
  //     ) : (
  //       <ul className='flex justify-center w-full text-sm z-20'>
  //         <li className='mr-14 text-white items-center flex justify-center lg:text-lg'>
  //           <Link
  //             className='flex justify-center items-center w-full h-full hover:text-stone-400'
  //             href={router.pathname === '/' ? '#Home' : '/#Home'}
  //             scroll={false}
  //           >
  //             Home
  //           </Link>
  //         </li>
  //         <li className='mr-14 text-white items-center flex justify-center lg:text-lg hover:text-stone-400'>
  //           <Link
  //             className='flex justify-center items-center  w-full h-full'
  //             href={router.pathname === '/' ? '#Menu' : '/#Menu'}
  //             scroll={false}
  //           >
  //             Menu
  //           </Link>
  //         </li>
  //         <li className='h-28 w-28 lg:h-32 lg:w-32  bg-black rounded-full flex justify-center items-center lg:text-lg '>
  //           <Link
  //             href={router.pathname === '/' ? '#Home' : '/#Home'}
  //             scroll={false}
  //             as='image'
  //           >
  //             <div className='h-24 w-24 lg:h-28 lg:w-28 bg-white rounded-full flex justify-center items-center'>
  //               <Image
  //                 src='/evaLogoNegro1.webp'
  //                 width={70}
  //                 height={70}
  //                 alt='Imagen no encontrada'
  //                 priority
  //               />
  //             </div>
  //           </Link>
  //         </li>
  //         <li className='ml-14 text-white items-center flex justify-center lg:text-lg hover:text-stone-400'>
  //           <Link
  //             className='flex justify-center items-center w-full h-full'
  //             href={router.pathname === '/' ? '#events' : '/#events'}
  //             scroll={false}
  //           >
  //             Eventos
  //           </Link>
  //         </li>
  //         <li className='ml-14 text-white items-center flex justify-center lg:text-lg hover:text-stone-400'>
  //           <Link
  //             className='flex justify-center items-center w-full h-full'
  //             href='/#location'
  //             scroll={false}
  //           >
  //             Ubicanos
  //           </Link>
  //         </li>
  //       </ul>
  //     )}
  //     {!isMobile ? (
  //       <button
  //         type='button'
  //         className='absolute right-0 m-9 bg-red-300 md:hidden'
  //       >
  //         Hola COMO ESTA?
  //       </button>
  //     ) : null}
  //   </nav>
}

export default Navbar;
