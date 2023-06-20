export default function MenuPage() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='w-full h-[20%] flex justify-center items-center'>
        <span className='w-full h-1/2 text-1xl text-center sm:text-4xl text-white items-center justify-center flex bg-black font-serif'>
          DISFRUTA DE NUESTRO MENU VARIADO
        </span>
      </div>
      <div className=' w-[100%] h-[60%] sm:w-[80vw] sm:h-[65%] shadow-lg box-border shadow-slate-700 m-5 flex-col flex justify-center sm:rounded-2xl overflow-hidden bg-slate-400 bg-opacity-70'>
        <div className='w-full h-[10%] bg-black flex-col flex justify-center items-center'>
          <div className='w-[25%] h-1/2 text-5xl text-yellow-400 flex items-center justify-center font-serif'>
            <p>Menu</p>
          </div>
        </div>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <div className='w-[90%] h-full flex flex-col items-center justify-center'>
            <div className='w-full h-[15%] text-white font-bold'>
              <div className='w-1/2 h-1/2 flex items-center overflow-hidden'>
                <p className='ml-2'>CHORIS</p>{' '}
                <p className=' text-xs h-[50%] sm:h-[80%] bg-black m-2 font-extralight p-2 sm:text-xl flex justify-center items-center'>
                  100% CERDO
                </p>
              </div>
              <div className='w-1/2 h-1/2 grid items-center'>
                <p className='ml-2  text-base sm:text-lg'>
                  Incluyen papas fritas
                </p>
              </div>
            </div>
            <div className='w-full h-full flex items-center justify-center divide-x divide-solid divide-black'>
              <div className='w-1/2 h-full'></div>
              <div className='w-1/2 h-full'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
