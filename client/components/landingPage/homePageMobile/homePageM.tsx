import Image from 'next/image';
import Link from 'next/link';

function HomePageM() {
  return (
    <section className='w-full h-full bg-black items-center justify-center flex flex-col'>
      <div className='bg-white w-[40vh] h-[40vh] rounded-full flex justify-center items-center'>
        <Image
          src='/logo/evaLogoNegro1.webp'
          width='120'
          height='120'
          alt='Imagen no encontrada'
          style={{ width: '60%', height: '75%' }}
        />
      </div>
      <div className='h-20 w-screen text-center text-lg font-custom tracking-widest text-amber-400 flex justify-center items-center animate-pulse'>
        {' '}
        {`< < `} <Link href='#events'>Proximos Eventos Aqui</Link>
        {` > >`}
      </div>
    </section>
  );
}

export default HomePageM;
