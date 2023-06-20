import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import BtnNavbar from './utils/btnNavbar';

function Navbar() {
  const [isListOpen, setListOpen] = useState(false);
  const navBarRef = useRef(null);

  const stateList = {
    open: 'open',
    closed: 'closed',
  };
  const openList = isListOpen ? stateList.open : stateList.closed;

  const navbarData = [
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

  const handleClickOutside = (event: any) => {
    console.log(navBarRef.current.contains(event.target), 'Abr ☪🛐');
    if (navBarRef.current && !navBarRef.current.contains(event.target)) {
      setListOpen(false);
    }
  };

  const options = () => {
    setListOpen(!isListOpen);
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <nav className='w-screen text-white fixed z-30 flex' ref={navBarRef}>
      <div className='w-full h-full text-white flex items-center justify-around min-w-[320px] max-w-[425px] sm:hidden bg-black'>
        <div className='inline-block w-screen z-50'>
          <button type='button' className='p-4 bg-black' onClick={options}>
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
          {/* Background e imagen para el navbar mobile */}
          <div className='bg-white h-full w-16 flex items-center justify-center float-right'>
            <Image
              src='/logo/evaLogoNegro1.webp'
              alt='Imagen no encontrada'
              width={50}
              height={50}
              className='object-contain'
              sizes='100vw'
              //   style={{ width: '80%', height: 'auto' }}
            />
          </div>
          {/* Ternario para abrir o cerrar la lista segun el estado */}
          {isListOpen && (
            <ul
              className={`absolute top-0 right-0 left-auto z-50 text-black w-full h-5/6 flex-col text-center items-center justify-center ${openList}`}
            >
              <li
                className='h-14 w-full bg-slate-200 grid items-center hover:bg-slate-300'
                key='close'
              >
                <button
                  type='button'
                  className=' w-14 h-full bg-slate-300 float-left'
                  onClick={options}
                  key='x'
                >
                  X
                </button>
              </li>
              {/* {Lista de botones} */}
              {navbarData.map((a) => {
                return (
                  <BtnNavbar route={a.path} message={a.name} key={a.name} />
                );
              })}
            </ul>
          )}
        </div>
      </div>
      <div className='w-full h-20 bg-black hidden sm:flex justify-center items-center relative'>
        <ul className='h-full w-full flex justify-center items-center'>
          <li className='w-32 m-4 h-full items-center flex justify-center'>
            <Link href='/#Home' scroll={false} type='button'>
              Inicio
            </Link>
          </li>
          <li className='w-32 m-4 h-full items-center flex justify-center'>
            <Link href='/#Menu' scroll={false} type='button'>
              Menu
            </Link>
          </li>
          <li className='h-32 w-32 m-8 bg-black rounded-full flex justify-around items-center mt-20'>
            <Link href='#Home' scroll={false}>
              <div className='h-28 w-28 bg-white rounded-full flex justify-center items-center'>
                <Image
                  src='/logo/evaLogoNegro1.webp'
                  width={70}
                  height={70}
                  alt='Imagen no encontrada'
                  priority
                />
              </div>
            </Link>
          </li>
          <li className='w-32 m-4 h-full items-center flex justify-center'>
            <Link href='/#Eventos' scroll={false} type='button'>
              Eventos
            </Link>
          </li>
          <li className='w-32 m-4 h-full items-center flex justify-center'>
            <Link href='/#Ubicacion' scroll={false} type='button'>
              Ubicacion
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
