/* eslint-disable react/jsx-no-bind */
import Link from 'next/link';
import React, { useState } from 'react';

type Navbar = {
  path: string;
  icon: string;
  name: string;
};

/* eslint-disable jsx-a11y/mouse-events-have-key-events */
function NavbarDashboard() {
  const [mouse, leaveOrEnter] = useState(false);

  function handleMouseEnter() {
    leaveOrEnter(true);
  }

  function handleMouseLeave() {
    leaveOrEnter(false);
  }

  const itemsNavbar: Navbar[] = [
    {
      path: '/menu',
      icon: 'nani',
      name: 'editar menu',
    },
    {
      path: '/events',
      icon: 'nani',
      name: 'editar eventos',
    },
    {
      path: '/gallery',
      icon: 'nani',
      name: 'editar galeria',
    },
  ];

  return (
    <section
      className='flex flex-col gap-2 h-screen w-16 bg-slate-900 hover:trasnform hover:w-40 transition-all duration-200'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='h-11 w-full p-1 bg-slate-500'> logo </div>
      <div className='h-full w-full bg-red-600 p-0.5 flex flex-col items-center justify-center'>
        <ul className='flex flex-col items-center justify-center gap-3'>
          {itemsNavbar.map(({ path, name }, index) => (
            <li
              key={`${name + index}`}
              className={`${
                mouse ? 'bg-slate-50' : 'bg-slate-500'
              } w-full  rounded-md p-1 transition-all duration-200`}
            >
              <Link href={`/dashboard${path}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default NavbarDashboard;
