import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

interface Props {
  text: string;
  img: string;
}

export default function ParallaxImg({ text, img }: Props) {
  return (
    <div className='w-full h-full'>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            {
              image: img,
              speed: -60,
              opacity: [0.65, 0.65],
            },
            {
              speed: -10,
              children: (
                <div className='absolute inset-0 flex items-center justify-center'>
                  <h1 className='text-white font-semibold text-opacity-80 stroke-slate-950 relative z-10'>
                    <span className=' text-white text-7xl sm:text-9xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] '>
                      {text}
                    </span>
                  </h1>
                </div>
              ),
            },
          ]}
          className='w-full h-full'
        />
      </ParallaxProvider>
    </div>
  );
}
