import { useQuery } from '@tanstack/react-query';
import { getMenu } from '@/services/api';
import DashColumn from '@/components/feature/Dash_Column';

function Products() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['menu'],
    queryFn: getMenu,
  });

  if (isLoading) return <>Loading...</>;
  if (isError) return <div>Error:</div>;

  return (
    <section className='h-full w-full flex flex-col items-center overflow-y-auto p-5'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-yellow-700 font-jejumyeongjo'>
        Menu
      </h1>
      <section className='w-full flex flex-row justify-around py-10'>
        <DashColumn dataset={data.column1} column='column1' />
        <DashColumn dataset={data.column2} column='column2' />
      </section>
    </section>
  );
}

export default Products;
