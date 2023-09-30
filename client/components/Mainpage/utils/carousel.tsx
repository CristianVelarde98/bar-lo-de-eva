import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import ImageComp from './cloudinaryGet';

/*  Splice Styles  */

import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// import '@splidejs/react-splide/css/core';

interface props {
  height: string;
  dataImg: string[] | undefined;
}

export default function Carousel(Props: props) {
  const { height, dataImg } = Props;
  const heightData = height;

  if (!dataImg?.length)
    return (
      <div className='text-center bg-white text-xl justify-center items-center flex w-full h-full'>
        Por favor introduce alguna imagen
      </div>
    );

  return (
    <Splide
      options={{
        autoplay: true,
        type: 'loop',
        pauseOnHover: false,
        resetProgress: false,
        height: heightData,
        width: '100%',
        gap: '1rem',
        arrows: false,
      }}
      hasTrack={false}
    >
      <div style={{ position: 'relative' }}>
        <SplideTrack>
          {dataImg?.map((a) => (
            <SplideSlide className='flex item justify-center'>
              <ImageComp directorio={a} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </div>
    </Splide>
  );
}
