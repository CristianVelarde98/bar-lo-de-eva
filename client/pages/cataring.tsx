// import { useState, useEffect } from 'react';
// import Loader from './loader';
import Image from 'next/image';
import AutoScrollComponent from '@/components/Mainpage/utils/autoScrollComponent';

function CatarinPage() {
  //   const [loading, isLoading] = useState(true);

  //   const changeLoading = () => {
  //     isLoading(false);
  //   };

  //   useEffect(() => {
  //     setTimeout(() => {
  //       changeLoading();
  //     }, 1000);
  //   }, []);

  return (
    <div className='w-screen h-screen flex items-center flex-col'>
      <Image
        src='/cataring.webp'
        fill
        alt='Cataring'
        className='-z-10 blur-sm object-cover'
        priority
      />
      <div className='h-16 sm:h-36 w-screen mt-20 sm:mt-28 flex justify-center items-center bg-black text-sm text-center sm:text-2xl text-amber-500 bg-opacity-90 font-serif'>
        Si quieres festejar tu cumpleaños o un evento, te asesoramos con nuestro
        servicio de Catering
      </div>
      <div className='h-2/6 w-full mt-8 flex rounded-md'>
        <AutoScrollComponent />
      </div>
      {/* <div className="h-20 w-2/3 bg-slate-50 mb-5 mt-5 justify-center items-center flex bg-opacity-80 rounded-lg">Consultas al wtsp para obtener mas informacion, pulsa aqui</div> */}
    </div>
  );
}

export default CatarinPage;
