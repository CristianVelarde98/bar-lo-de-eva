// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from 'react';

// * Components
import Temporizador from '@/components/Temporizer';
import LayoutNavbar from '@/components/Layout/LayoutNavbar';

type PropsState = {
  started: string;
  finally: string;
};

function Events() {
  const [date] = useState<PropsState>({
    started: '',
    finally: '',
  });

  return (
    <LayoutNavbar>
      <section className='w-full h-full flex flex-col'>
        <section className='h-1/6 w-auto bg-black rounded-md flex justify-center items-center absolute left-20 top-2'>
          {date.started && date.finally && (
            <Temporizador
              startedTime={date.started}
              finallyTime={date.finally}
            />
          )}
        </section>

        {/* CAROUSEL OF GALLERY */}
        <section className='h-4/5 flex justify-center items-center' />

        {/* GETTER OF CALENDAR */}
        <section className='h-1/5 flex flex-row justify-center items-center gap-6' />
      </section>
    </LayoutNavbar>
  );
}

export default Events;
