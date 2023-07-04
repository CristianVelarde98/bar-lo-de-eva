import React, { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/ui/card';
import type { TDashItemsColumnsProps } from '@/types/feature/menu';

const DashItemsColumns: FC<TDashItemsColumnsProps> = ({ dataset }) => {
  return (
    <Card className='w-full min-w-[320px] max-w-sm bg-gray-900 border-gray-900'>
      <CardHeader>
        <CardTitle className='flex flex-row items-end leading-10 font-normal font-jejumyeongjo whitespace-nowrap gap-2 text-xl text-yellow-400'>
          {dataset.nombre}
          <div className='border-b-4 border-dotted w-full border-yellow-400' />
          {dataset.precio.toLocaleString('es-AR', {
            style: 'currency',
            currency: 'ARS',
          })}
        </CardTitle>
      </CardHeader>
      <CardContent className='text-white text-base font-medium font-kellyslab'>
        <p>{dataset.descripcion}</p>
      </CardContent>
    </Card>
  );
};

export default DashItemsColumns;
