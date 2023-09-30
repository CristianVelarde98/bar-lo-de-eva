import Head from 'next/head';

/*  Components   */
import EventPage from '@/components/Mainpage/event';
import LandingPage from '@/components/Mainpage/landing';
import MenuPage from '@/components/Mainpage/menu';
import Location from '@/components/Mainpage/location';
import ParallaxImg from '@/components/Mainpage/utils/whatsAppButton/parallax';

export default function Home() {
  return (
    <>
      <Head>
        <title> Bar Peronista | Lo de Eva</title>
      </Head>
      <main className='flex min-h-screen flex-col items-center justify-between'>
        <section className='w-screen h-screen relative' id='Home'>
          <LandingPage />
        </section>
        <section className='w-screen h-[20vh]'>
          <ParallaxImg img='menubg.webp' text='Menu' />
        </section>
        <section className='w-screen h-[120vh] relative' id='Menu'>
          <MenuPage />
        </section>
        <section className='w-screen h-[20vh]'>
          <ParallaxImg img='eventsBackground.webp' text='Eventos' />
        </section>
        <section className='w-screen h-screen relative' id='Eventos'>
          <EventPage />
        </section>
        <section className='w-screen h-[20vh]'>
          <ParallaxImg img='ubicacion.webp' text='Ubicanos' />
        </section>
        <section className='w-screen h-screen relative' id='Ubicacion'>
          <Location />
        </section>
      </main>
    </>
  );
}
