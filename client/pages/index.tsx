import Head from 'next/head';
import axios from 'axios';

/*  Components   */
import EventPage from '@/components/Mainpage/event';
import LandingPage from '@/components/Mainpage/landing';
import MenuPage from '@/components/Mainpage/menu';
import Location from '@/components/Mainpage/location';
import ParallaxImg from '@/components/Mainpage/utils/whatsAppButton/parallax';
import WtspButton from '@/components/Mainpage/utils/whatsAppButton/buttonWtsp';
import Navbar from '@/components/Mainpage/navbar';

export default function Home({ eventApiData }: { eventApiData: string[] }) {
  return (
    <>
      <WtspButton />
      <Navbar />
      <Head>
        <title> Bar Peronista | Lo de Eva</title>
      </Head>
      <main className='flex  flex-col items-center justify-between'>
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
          <EventPage eventDataApi={eventApiData} />
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

export const getServerSideProps = async () => {
  const eventApiGetData = await axios.get(
    'http://localhost:3100/api/v2/events/'
  );
  const eventApiData = eventApiGetData.data;
  return {
    props: {
      eventApiData,
    },
  };
};
