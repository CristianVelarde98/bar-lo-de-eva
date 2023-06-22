import React from 'react';
import * as yup from 'yup';
import { CopyPlus } from 'lucide-react';
import DashItemsColumns from './Dash_ItemsColumns';
import { TDashColumnsProps } from '@/types/feature/menu';
import { Button } from '@/ui/button';
import WindowsForm from '@/shared/WindowsForm';
import InputsText from '@/shared/Inputs/InputsText';
import useWindowsModel from '@/Hooks/useWindowsModel';

// TODO: mover los tipados para
type TItemMenu = {
  nombre: '';
  descripcion: '';
  precio: 0;
};

const DashColumn: React.FC<TDashColumnsProps> = ({ dataset, column }) => {
  const [isOpen, handleOpen, handleClose] = useWindowsModel(false);

  const handleSubmit = (values: TItemMenu) => {
    // eslint-disable-next-line no-console
    console.log(
      '🚀 ~ file: Dash_Column.tsx:17 ~ handleSubmit ~ values: ',
      values
    );
    handleClose();
  };
  const initialValues: TItemMenu = {
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
        // eslint-disable-next-line no-underscore-dangle
        <DashItemsColumns key={item._id} dataset={item} column={column} />
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
