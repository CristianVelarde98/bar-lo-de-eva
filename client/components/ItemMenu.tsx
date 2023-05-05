/* eslint-disable @next/next/no-img-element */
import dashboard from '@/store/dashboard';

type PropsItemMenu = {
  imagen?: string;
};

function ItemMenu({ imagen }: PropsItemMenu) {
  const { newItemMenu } = dashboard((state) => state);

  const newItem = () => {
    newItemMenu({ imagen: '/default/menu.webp' });
  };

  return (
    <section className='style3d w-auto h-3/5 bg-white rounded-3xl flex flex-row-reverse shadowDefault'>
      {/* BOTON PARA NUEVO ELEMENTO */}
      <button
        type='button'
        onClick={newItem}
        className='text-2xl font-bold menuNew transition-all rounded-lg shadowDefault'
      >
        +
      </button>

      {/* IMAGEN CON BOTON DE CAMBIAR IMAGEN */}
      <div className='size-img-menu style3d'>
        <img
          className='rounded-3xl size-img-menu z-0 opacity-90'
          src={imagen || '/default/menu.webp'}
          alt='icon'
        />
        <button
          type='button'
          className='transition-all duration-200 trasnform shadow-md hover:scale-125 font-bold text-white rounded-lg z-10 bg-menu h-8 w-36 text-center p-1 absolute top-1/2 left-1/2 -translate-x-1/2'
        >
          Cambiar Imagen
        </button>
      </div>
    </section>
  );
}

export default ItemMenu;
