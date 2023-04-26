/* eslint-disable react/no-unused-prop-types */
import Link from 'next/link';
import { useState } from 'react';

type OptionsNavbar = {
  path: string;
  name: string;
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
    { path: '/', name: 'home' },
    { path: '/menu', name: 'menu' },
    { path: '/events', name: 'eventos' },
    { path: '/gallery', name: 'galeria' },
  ];

  return (
    <section
      className='h-full w-32 bg-slate-700 flex flex-col gap-1 hover:transform hover:w-48 transition-all duration-200 absolute left-0 top-0'
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <section className='w-full flex items-center justify-center'>
        logo
      </section>
      <ul className='h-full flex flex-col justify-center gap-2 bg-amber-600'>
        {opciones.map(({ path, name }: OptionsNavbar) => (
          <li
            key={name}
            className={`${
              mouse ? 'text-slate-950' : 'text-amber-600'
            }  rounded-lg bg-white `}
          >
            <Link href={`/dashboard${path}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Navbar;
