/* eslint-disable react/no-unused-prop-types */
// GanttChartSquareI
import {
  CalendarDaysIcon,
  HomeIcon,
  MenuSquareIcon,
  PackageSearchIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/ui/button';

type OptionsNavbar = {
  path: string;
  name: string;
  // eslint-disable-next-line no-undef
  img?: JSX.Element;
};

function Navbar() {
  const [mouse, enterOrLeave] = useState(false);

  function handleOnMouseEnter() {
    enterOrLeave(true);
  }

  function handleOnMouseLeave() {
    enterOrLeave(false);
  }

  const opciones: OptionsNavbar[] = [
    {
      path: '/',
      name: 'Home',
      img: <HomeIcon width={40} height={40} />,
    },
    {
      path: '/menu',
      name: 'Menu',
      img: <MenuSquareIcon width={40} height={40} />,
    },
    {
      path: '/products',
      name: 'Productos',
      img: <PackageSearchIcon width={40} height={40} />,
    },
    {
      path: '/events',
      name: 'Events',
      img: <CalendarDaysIcon width={40} height={40} />,
    },
  ];

  return (
    <section
      className='bg-black w-[60px] h-screen flex items-center justify-center transition-all absolute top-0 left-0'
      style={{ width: mouse ? '250px' : '70px' }}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <section className='w-full flex flex-col gap-4 items-center justify-center'>
        {opciones.map((element) => (
          <Link
            key={element.name}
            href={`/dashboard${element.path.toLowerCase()}`}
            className={`${mouse ? 'w-3/4' : 'w-full'}`}
          >
            <Button
              variant='ghost'
              type='button'
              className={`w-full flex items-center justify-around flex-row text-white font-semibold py-6 hover:text-black hover:bg-white   ${
                mouse ? '' : ''
              }`}
              // className={`${mouse ? 'openNavbar' : 'closeNavbar'} font-bold`}
            >
              {element.img}
              <h1>{mouse ? element.name : ''}</h1>
            </Button>
          </Link>
        ))}
      </section>
    </section>
  );
}

export default Navbar;
