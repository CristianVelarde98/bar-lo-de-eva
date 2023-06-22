/* eslint-disable no-unused-vars */
import React from 'react';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { Ban, PlusCircle } from 'lucide-react';
import { Button } from '@/ui/button';
import InputsText from './Inputs/InputsText';

// TODO: mueve los tipados a la carpeta types

type WindowsFormProps<T> = {
  isOpen: boolean;
  children: React.ReactNode;
  initialValues: T;
  validationSchema: any;
  handleSubmit: (values: T) => void;
  onClose: () => void;
  title?: string;
  className?: string;
};

const WindowsForm = <T extends object>({
  isOpen,
  children,
  initialValues,
  validationSchema,
  handleSubmit,
  onClose,
  title,
  className,
}: WindowsFormProps<T>) => {
  if (!isOpen) return null;

  return (
    <section className='absolute top-0 left-0 z-10 w-screen h-screen flex items-center justify-center backdrop-blur bg-opacity-20 bg-black'>
      <section className={`${className} rounded-sm p-5 bg-white shadow-lg`}>
        {title ? (
          <h1 className='font-jejumyeongjo text-xl w-full text-center'>
            {title}
          </h1>
        ) : null}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className='flex flex-col gap-3'>
            {children}
            <section className='w-full flex flex-row gap-2'>
              <Button
                onClick={onClose}
                className='bg-red-600 text-white text-lg flex gap-2 font-jejumyeongjo w-full'
              >
                <Ban /> Cancelar
              </Button>
              <Button
                type='submit'
                className='bg-green-600 text-white text-lg flex gap-2 font-jejumyeongjo w-full'
              >
                <PlusCircle /> Agregar
              </Button>
            </section>
          </Form>
        </Formik>
      </section>
    </section>
  );
};

export default WindowsForm;
