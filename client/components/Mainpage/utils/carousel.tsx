import { Splide, SplideTrack, SplideSlide } from '@splidejs/react-splide';
import Image from 'next/image';
// import ImageComp from './cloudinaryGet';

/*  Splice Styles  */
import '@splidejs/react-splide/css';
// import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
// import '@splidejs/react-splide/css/core';

interface props {
  height: string;
  dataImg: any | undefined;
}

export default function Carousel(Props: props) {
  const { height, dataImg } = Props;
  const heightData = height;
  if (!dataImg)
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
          {dataImg.map((data: any) => (
            <SplideSlide className='flex item justify-center' key={data.id}>
              <Image
                src={data.image}
                width={800}
                height={500}
                alt='Carousel Content'
                key={data.id}
              />
              {/* <ImageComp directorio={image} /> */}
            </SplideSlide>
          ))}
        </SplideTrack>
      </div>
    </Splide>
  );
}
