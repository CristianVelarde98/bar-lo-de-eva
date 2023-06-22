/* eslint-disable no-underscore-dangle */
import React, { FC } from 'react';
import { Edit, XCircle } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import type { TDashItemsColumnsProps } from '@/types/feature/menu';
import { Button } from '../ui/button';
import { deleteMenu } from '@/services/api';

const DashItemsColumns: FC<TDashItemsColumnsProps> = ({ dataset }) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: deleteMenu,
    onSuccess: () => {
      queryClient.invalidateQueries(['menu']);
    },
  });

  return (
    <Card className='w-full min-w-[320px] max-w-sm bg-gray-900 border-gray-900 p-1'>
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
      <CardFooter className='p-2 flex flex-row justify-end gap-1'>
        <Button>
          <Edit className='text-green-600' />
        </Button>
        <Button
          onClick={() => {
            deleteMutation.mutate(dataset._id);
          }}
        >
          <XCircle className='text-red-600' />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DashItemsColumns;
