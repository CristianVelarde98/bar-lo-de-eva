// import Image from 'next/image';
import React from 'react';
import { TEventsItem } from '@/types/services/api';

type TEventsCard = {
  dataset: TEventsItem[];
};

const EventsCard: React.FC<TEventsCard> = ({ dataset }) => {
  return (
    <section>
      {dataset.map((item: TEventsItem) => (
        <div>
          <h1>{item.imagen}</h1>
        </div>
      ))}
    </section>
  );
};

export default EventsCard;
