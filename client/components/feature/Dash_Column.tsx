import React from 'react';
import * as yup from 'yup';
import { CopyPlus } from 'lucide-react';
import {
  TDashColumnsProps,
  TItemMenuInitialValues,
} from '@/types/feature/menu';
import { Button } from '@/ui/button';
import WindowsForm from '@/shared/WindowsForm';
import InputsText from '@/shared/Inputs/InputsText';
import useWindowsModel from '@/Hooks/useWindowsModel';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addMenuC1, addMenuC2 } from '@/services/api';
import DashItemsColumns from './Dash_ItemsColumns';

const DashColumn: React.FC<TDashColumnsProps> = ({ dataset, column }) => {
  const queryClient = useQueryClient();
  const [isOpen, handleOpen, handleClose] = useWindowsModel(false);
  const addItemMutationC1 = useMutation({
    mutationFn: addMenuC1,
    onSuccess: () => {
      queryClient.invalidateQueries(['menu']);
    },
  });
  const addItemMutationC2 = useMutation({
    mutationFn: addMenuC2,
    onSuccess: () => {
      queryClient.invalidateQueries(['menu']);
    },
  });

  const handleSubmit = (values: TItemMenuInitialValues) => {
    if (column === 'column1') addItemMutationC1.mutate(values);
    else addItemMutationC2.mutate(values);
    handleClose();
  };
  const initialValues: TItemMenuInitialValues = {
    nombre: '',
    descripcion: '',
    precio: 0,
  };
  const validatorSchema = yup.object().shape({
    nombre: yup.string().required('El nombre es requerido'),
    descripcion: yup.string().required('La descripción es requerida'),
    precio: yup
      .number()
      .required('El precio es requerido')
      .positive('El precio debe ser mayor a 0'),
  });

  return (
    <section className='h-max flex flex-col gap-2'>
      {dataset.map((item) => (
        <DashItemsColumns key={item.nombre} dataset={item} column={column} />
      ))}
      <Button
        onClick={handleOpen}
        className='gap-5 font-jejumyeongjo font-bold text-base p-3 bg-green-600 hover:scale-105 hover:bg-green-600 transform transition-all'
      >
        <CopyPlus className='text-white' /> Agregar nuevo Producto
      </Button>

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
    </section>
  );
};

export default DashColumn;
