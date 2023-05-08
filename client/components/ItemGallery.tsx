/* eslint-disable @next/next/no-img-element */
import { useTask } from '@/Context/TaskBard';

type PropsItemGallery = {
  identify: string;
  id: string;
  imagen?: string;
};

function ItemGallery({ identify, imagen, id }: PropsItemGallery) {
  const { deleteItemMenu, deleteItemEvents } = useTask();
  const deleteItem = identify === 'menu' ? deleteItemMenu : deleteItemEvents;

  return (
    <section className='style3d w-full sizeContenedor rounded-3xl flex flex-row-reverse shadowDefault'>
      {/* BOTON PARA NUEVO ELEMENTO */}
      <button
        type='button'
        onClick={() => {
          deleteItem(id);
        }}
        className='text-2xl font-bold menuNew transition-all rounded-lg shadowDefault hover:bg-red-700 hover:text-white'
      >
        X
      </button>

      {/* IMAGEN CON BOTON DE CAMBIAR IMAGEN */}
      <div className='style3d w-full h-full'>
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

export default ItemGallery;
