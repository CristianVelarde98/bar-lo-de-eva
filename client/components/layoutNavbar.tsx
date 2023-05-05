import { ReactNode } from 'react';
import Navbar from './navbar';

type PropsChildren = {
  children: ReactNode;
};

function LayoutNavbar({ children }: PropsChildren) {
  return (
    <section className='flex flex-row w-screen h-screen'>
      <Navbar />
      <section className='h-full  flex items-center justify-center navbarRest'>
        {children}
      </section>
    </section>
  );
}

export default LayoutNavbar;
