import { useQuery } from '@tanstack/react-query';
import { getEvents } from '@/services/api';
import EventsCard from '@/components/feature/cardContainer/eventsCard';

function Events() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });

  if (isLoading) return <>Loading...</>;
  if (isError) return <div>Error</div>;
  return (
    <section className='w-full h-full flex flex-col'>
      <EventsCard dataset={data} />
    </section>
  );
}

export default Events;
