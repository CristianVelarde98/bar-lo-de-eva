/* eslint-disable no-underscore-dangle */
import React, { FC } from 'react';
import { Edit, XCircle } from 'lucide-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import type { TDashItemsColumnsProps, TItemMenu } from '@/types/feature/menu';
import {
  deleteMenuC1,
  deleteMenuC2,
  puthMenuC1,
  puthMenuC2,
} from '@/services/api';
import WindowsForm from '@/shared/WindowsForm';
import { Button } from '@/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/ui/card';
import * as yup from 'yup';
import useWindowsModel from '@/Hooks/useWindowsModel';
import InputsText from '@/shared/Inputs/InputsText';

const DashItemsColumns: FC<TDashItemsColumnsProps> = ({ dataset, column }) => {
  const [isOpen, handleOpen, handleClose] = useWindowsModel(false);
  const queryClient = useQueryClient();
  // * delete
  const deleteMutationC1 = useMutation({
    mutationFn: deleteMenuC1,
    onSuccess: () => {
      queryClient.invalidateQueries(['menu']);
    },
  });
  const deleteMutationC2 = useMutation({
    mutationFn: deleteMenuC2,
    onSuccess: () => {
      queryClient.invalidateQueries(['menu']);
    },
  });

  // * puth
  const puthMutationC1 = useMutation({
    mutationFn: puthMenuC1,
    onSuccess: () => {
      queryClient.invalidateQueries(['menu']);
    },
  });
  const puthMutationC2 = useMutation({
    mutationFn: puthMenuC2,
    onSuccess: () => {
      queryClient.invalidateQueries(['menu']);
    },
  });

  const handleDelete = () => {
    if (column === 'column1') deleteMutationC1.mutate(dataset.id);
    else deleteMutationC2.mutate(dataset.id);
  };

  const initialValues: TItemMenu = {
    id: dataset.id,
    nombre: dataset.nombre,
    descripcion: dataset.descripcion,
    precio: dataset.precio,
  };
  const validatorSchema = yup.object().shape({
    nombre: yup.string().required('El nombre es requerido'),
    descripcion: yup.string().required('La descripción es requerida'),
    precio: yup
      .number()
      .required('El precio es requerido')
      .positive('El precio debe ser mayor a 0'),
  });

  const handleSubmit = (values: TItemMenu) => {
    if (column === 'column1') puthMutationC1.mutate(values);
    else puthMutationC2.mutate(values);
    handleClose();
  };

  return (
    <>
      <Card className='w-full min-w-[320px] max-w-sm bg-gray-900 border-gray-900 p-1'>
        <CardHeader>
          <CardTitle className='flex flex-row items-end leading-10 text-2xl font-jejumyeongjo whitespace-nowrap gap-2 text-yellow-400'>
            {dataset.nombre}
            <div className='border-b-4 border-dotted w-full border-yellow-400' />
            {dataset.precio.toLocaleString('es-AR', {
              style: 'currency',
              currency: 'ARS',
            })}
          </CardTitle>
        </CardHeader>
        <CardContent className='text-white text-lg font-medium font-kellyslab'>
          <p>{dataset.descripcion}</p>
        </CardContent>
        <CardFooter className='p-2 flex flex-row justify-end gap-1'>
          <Button
            className=' flex items-center justify-center gap-2 font-jejumyeongjo text-lg'
            onClick={handleOpen}
          >
            <Edit className='text-green-600' />
            Editar
          </Button>
          <Button
            className=' flex items-center justify-center gap-2 font-jejumyeongjo text-lg'
            onClick={handleDelete}
          >
            <XCircle className='text-red-600' />
            Eliminar
          </Button>
        </CardFooter>
      </Card>
      <WindowsForm
        className='w-2/5'
        title={column}
        initialValues={initialValues}
        validationSchema={validatorSchema}
        isOpen={isOpen}
        onClose={handleClose}
        handleSubmit={handleSubmit}
      >
        <InputsText
          name='nombre'
          label='Nombre:'
          placeholder='Ingrese el nombre del producto'
        />
        <InputsText
          name='descripcion'
          label='Descripcion:'
          placeholder='Ingrese una descripcion del producto'
        />
        <InputsText
          type='number'
          name='precio'
          label='Precio:'
          placeholder='Ingrese el precio del producto'
        />
      </WindowsForm>
    </>
  );
};

export default DashItemsColumns;
