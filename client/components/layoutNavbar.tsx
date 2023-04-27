import { ReactNode } from 'react';
import Navbar from './navbar';

type PropsChildren = {
  children: ReactNode;
};

function LayoutNavbar({ children }: PropsChildren) {
  return (
    <section className='flex flex-row w-screen h-screen bg-red-600'>
      <Navbar />
      <section className='w-full h-full bg-blue-800 flex items-center justify-center navbarRest'>
        {children}
      </section>
    </section>
  );
}

export default LayoutNavbar;
