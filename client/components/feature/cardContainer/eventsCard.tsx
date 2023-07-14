import { useQuery } from '@tanstack/react-query';
// import Image from 'next/image';
import React from 'react';

function EventsCard() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['events'],
    queryFn: () => {
      console.log('hola');
    },
  });

  if (isLoading) return <>Loading...</>;
  if (isError) return <div>Error</div>;

  return (
    <section>
      {/* <Image width={420} height={420} src={} /> */}
      {JSON.stringify(data)}
    </section>
  );
}

export default EventsCard;
