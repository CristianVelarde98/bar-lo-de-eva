import { useContext } from 'react';
import ContextMain from '@/Context/contextMain';
import Landing from '@/components/landingPage/landing';
import MenuPage from '@/components/Mainpage/menuPage/menu';

export default function Home() {
  const { isMobile } = useContext(ContextMain);

  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <section className='w-screen h-screen relative'>
        <Landing isMobile={isMobile} />
      </section>
      <section className='w-screen h-[220vh] relative'>
        <MenuPage isMobile={isMobile} />
      </section>
    </main>
  );
}
