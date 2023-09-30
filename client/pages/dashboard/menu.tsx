function Menu() {
  return (
    <section className='w-full h-full flex items-center justify-center bg-slate-300'>
      <section className=' w-[80%] min-h-[80%] grid grid-cols-2 '>
        <section className='h-[80vh] items-center justify-center flex'>
          {' '}
          <div className='w-1/2 h-full bg-slate-900 rounded-lg overflow-hidden '>
            <div className='w-full h-[15vh] bg-white' />
          </div>
        </section>
        <section className='h-[80vh] items-center justify-center flex'>
          {' '}
          <div className='w-1/2 h-full bg-slate-900 rounded-lg overflow-hidden'>
            <div className='w-full h-[15vh] bg-white' />
          </div>
        </section>
      </section>
    </section>
  );
}

export default Menu;
