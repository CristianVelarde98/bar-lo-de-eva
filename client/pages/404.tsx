import Link from 'next/link';

export default function Custom404() {
  return (
    <div className='w-screen h-screen bg-slate-400 flex-col flex justify-center items-center'>
      <h1>Pagina no encontrada</h1>
      <p>
        Por favor, regresa al menu presionando{' '}
        <Link
          href='/#home'
          scroll={false}
          className='font-bold text-2xl animate-pulse'
        >
          aqui
        </Link>{' '}
      </p>
    </div>
  );
}
