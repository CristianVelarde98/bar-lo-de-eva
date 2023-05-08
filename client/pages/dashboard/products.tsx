import LayoutNavbar from '@/pages/dashboard/layout';
import EventColumn from '@/components/EventColumn';
import { useTask } from '@/Context/TaskBard';

function Products() {
  const { itemsProducts } = useTask();

  return (
    <LayoutNavbar>
      <section className='h-full w-full bg-white p-5 flex flex-row justify-center gap-10 overflow-y-scroll'>
        <EventColumn indentify='column1' column={itemsProducts.column1} />
        <EventColumn indentify='column2' column={itemsProducts.column2} />
      </section>
    </LayoutNavbar>
  );
}

export default Products;
