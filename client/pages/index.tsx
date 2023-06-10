import { useEffect, useState } from 'react';
import HomePage from '@/components/Mainpage/homePage';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    function handleReSize() {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }
    window.addEventListener('resize', handleReSize);
    return () => {
      window.removeEventListener('resize', handleReSize);
    };
  }, []);
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <section className='w-screen h-screen relative'>
        <HomePage isMobile={isMobile} />
      </section>
    </main>
  );
}
