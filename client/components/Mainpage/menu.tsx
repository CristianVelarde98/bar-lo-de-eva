import { useEffect, useState } from 'react';
import MenuCol from './utils/menuColum';

export default function MenuPage() {
  const [menuData, setMenuData] = useState([]);

  const getMenuData = async () => {
    // const res = await fetch('http://localhost:3030/menu');
    // const data = await res.json();
    // setMenuData(data);
  };
  useEffect(() => {
    getMenuData();
  }, []);
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='w-full h-[20%] flex justify-center items-center'>
        <span className='w-full h-1/2 text-1xl text-center sm:text-5xl text-white items-center justify-center flex bg-black'>
          DISFRUTA DE NUESTRO MENU VARIADO
        </span>
      </div>
      <div className=' w-[100%] h-[60%] sm:w-[80vw] sm:h-[65%] shadow-lg box-border shadow-slate-700 m-5 flex-col flex justify-center sm:rounded-2xl overflow-hidden bg-slate-950 bg-opacity-30'>
        <div className='w-full h-[10%] flex-col flex justify-center items-center'>
          <div className='w-[25%] h-1/2 text-5xl text-yellow-400 flex items-center justify-center'>
            <p className='font-black'>Menu</p>
          </div>
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className='w-[90%] h-full flex flex-col items-center justify-center'>
            <div className='w-full h-[15%] text-white font-bold tracking-wide'>
              <div className='w-1/2 h-1/2 flex items-center overflow-hidden'>
                <p className='ml-2 text-3xl'>CHORIS</p>{' '}
                <p className=' text-xs h-[50%] sm:h-[80%] bg-white text-black m-2 tracking-tighter p-2 sm:text-xl flex justify-center items-center'>
                  100% CERDO
                </p>
              </div>
              <div className='w-1/2 h-1/2 grid items-center'>
                <p className='ml-2  text-xl sm:text-3xl'>
                  Incluyen papas fritas
                </p>
              </div>
            </div>
            <div className='w-full h-full flex items-center justify-center divide-x divide-solid divide-black'>
              <div className='w-1/2 h-full '>
                {/* <MenuCol menuData={menuData} /> */}
              </div>
              <div className='w-1/2 h-full' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
