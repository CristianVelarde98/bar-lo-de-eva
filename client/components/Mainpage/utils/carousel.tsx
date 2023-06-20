import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';

/*  Splice Styles  */

import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// import '@splidejs/react-splide/css/core';

interface props {
  height: string;
}

export default function Carousel(Props: props) {
  const { height } = Props;
  return (
    <Splide
      options={{
        autoplay: true,
        type: 'loop',
        pauseOnHover: false,
        resetProgress: false,
        height: height,
        width: '100%',
        gap: '1rem',
        arrows: false,
      }}
      hasTrack={false}
    >
      <div style={{ position: 'relative' }}>
        <SplideTrack>
          <SplideSlide className='flex item justify-center'>
            <Image className='w-full bg-red-500' alt='no encontrado' />
          </SplideSlide>
          <SplideSlide className='flex item justify-center'>
            <Image className='w-full bg-blue-500' alt='no encontrado' />
          </SplideSlide>
          <SplideSlide className='flex item justify-center'>
            <Image className='w-full bg-purple-500' alt='no encontrado' />
          </SplideSlide>
        </SplideTrack>
      </div>
    </Splide>
  );
}
