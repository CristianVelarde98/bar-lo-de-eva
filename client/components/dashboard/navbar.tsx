/* eslint-disable react/no-unused-prop-types */
// GanttChartSquareI
import {
  CalendarDaysIcon,
  HomeIcon,
  MenuSquareIcon,
  PackageSearchIcon,
  LogOutIcon,
} from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Button } from '@/ui/button';

// TODO: move to folder types
type OptionsNavbar = {
  path: string;
  name: string;
  // eslint-disable-next-line no-undef
  img?: JSX.Element;
};

function Navbar() {
  const router = useRouter();
  const Logout = async () => {
    const removeCookie = await axios.get('/api/logout');
    const verifyLogOut = removeCookie.data;
    if (verifyLogOut.logOut) {
      router.push('/login');
    }
  };

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
      className='bg-black  h-screen items-center justify-center transition-all absolute top-0 left-0 z-10 w-[25vh] grid grid-rows-4'
      // style={{ width: mouse ? '' : '' }}
      // onMouseLeave={handleOnMouseLeave}
    >
      {opciones.map((element) => (
        <Link
          key={element.name}
          href={`/dashboard${element.path.toLowerCase()}`}
          // className={`${mouse ? 'w-3/4' : 'w-full'}  delay-500`}
        >
          <Button
            // @ts-ignore
            value={element.name}
            variant='ghost'
            type='button'
            className={`w-full flex items-center justify-around flex-row text-white font-semibold py-6 hover:text-black hover:bg-white
            }`}
            // onClick={translateHandler}
            // className={`${mouse ? 'openNavbar' : 'closeNavbar'} font-bold`}
          >
            {element.img}
            {/* <h1>{mouse ? element.name : ''}</h1> */}
          </Button>
        </Link>
      ))}

      <Button
        onClick={Logout}
        // @ts-ignore
        variant='ghost'
        type='button'
        className='w-full flex items-center justify-around flex-row text-white font-semibold py-6 hover:text-black hover:bg-white'
      >
        <LogOutIcon width={40} height={40} color='#f86b6b' />
      </Button>
    </section>
  );
}

export default Navbar;
