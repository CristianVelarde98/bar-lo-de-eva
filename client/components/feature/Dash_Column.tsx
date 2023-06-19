/* eslint-disable no-underscore-dangle */
import React from 'react';
import { TDashColumnsProps } from '@/types/feature/menu';
import DashItemsColumns from './Dash_ItemsColumns';

const DashColumn: React.FC<TDashColumnsProps> = ({ column }) => {
  return (
    <section className='flex flex-col gap-2'>
      {column.map((item) => (
        <DashItemsColumns key={item._id} dataset={item} />
      ))}
    </section>
  );
};

export default DashColumn;
