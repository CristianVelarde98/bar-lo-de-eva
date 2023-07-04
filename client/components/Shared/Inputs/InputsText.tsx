import React from 'react';
import { useField } from 'formik';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// TODO mover los tipados
type TInputsText = {
  name: string;
  placeholder: string;
  type?: string;
  className?: string;
  label?: string;
  disableError?: boolean;
};

const InputsText: React.FC<TInputsText> = ({
  name,
  placeholder,
  className,
  label,
  type = 'text',
  disableError = false,
}) => {
  const [field, meta, helpers] = useField(name);
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(event.currentTarget.value);
  };
  return (
    <section>
      {label ? (
        <Label htmlFor={name} className='font-jejumyeongjo text-lg'>
          {label}
        </Label>
      ) : null}
      <Input
        type={type}
        value={field.value}
        onChange={handleInput}
        placeholder={placeholder}
        className={`${className} font-jejumyeongjo text-base`}
        min={0}
      />
      {!disableError && meta.error && (
        <span className='text-red-600 font-jejumyeongjo text-lg'>
          *{meta.error}
        </span>
      )}
    </section>
  );
};

export default InputsText;
