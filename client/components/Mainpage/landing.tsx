import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className='w-full h-full flex justify-center items-center bg-gradient-radial from-slate-800 from-15% to-black'>
      <div className='w-[90%] h-[90%] sm:hidden md:block'>
        <div className='w-full h-2/5 md:h-2/4 flex items-end justify-center'>
          <h1 className='w-1/2 h-1/4 bg-red-500 text-white flex items-center justify-center sm:h-48  sm:text-6xl lg:text-8xl font-thin  border-8 border-white'>
            LO DE EVA
          </h1>
        </div>
        <div className='w-full h-2/5 flex justify-center'>
          <div className='w-1/2 h-min flex items-center justify-center md:text-lg lg:text-2xl font-bold text-center'>
            <Link
              href='/#Eventos'
              className='animate-pulse text-yellow-400 hover:text-yellow-600'
            >
              Enterate de nuestros proximos eventos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
