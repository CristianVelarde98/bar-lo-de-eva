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
    <section className='h-screen w-full bg-red-700 '>
      <DashColumn column={data.column1} />
    </section>
  );
}

export default Products;
