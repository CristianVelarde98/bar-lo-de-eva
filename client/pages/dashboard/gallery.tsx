// eslint-disable-next-line import/no-extraneous-dependencies
import { DatePicker, Space } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';

// * Components
import { useState } from 'react';
import Temporizador from '@/components/Temporizer';
import LayoutNavbar from '@/components/layoutNavbar';

type PropsState = {
  started: string;
  finally: string;
};

const { RangePicker } = DatePicker;

function Gallery() {
  const [date, dateCurrent] = useState<PropsState>({
    started: '',
    finally: '',
  });

  const onChange = (value: RangePickerProps['value']) => {
    if (value === null) dateCurrent({ started: '', finally: '' });
  };

  const onOk = (value: RangePickerProps['value']) => {
    if (value && value[0])
      dateCurrent({ ...date, started: String(Object.values(value[0])[2]) });

    if (value && value[1])
      dateCurrent({ ...date, finally: String(Object.values(value[1])[2]) });
  };

  return (
    <LayoutNavbar>
      <section className='w-full h-full flex flex-col gap-3'>
        <section className='h-1/4 bg-orange-600 flex justify-center items-center'>
          {date.started && date.finally && (
            <Temporizador
              startedTime={date.started}
              finallyTime={date.finally}
            />
          )}
        </section>
        <section className='h-1/2 flex justify-center items-center'>
          imagen
        </section>
        <section className='h-1/4 bg-orange-600 flex justify-center items-center'>
          <section>
            <Space direction='vertical' size={12}>
              <RangePicker
                status='error'
                size='large'
                showTime={{ format: 'HH:mm' }}
                format='YYYY-MM-DD HH:mm'
                onOk={onOk}
                onChange={onChange}
              />
            </Space>
          </section>
        </section>
      </section>
    </LayoutNavbar>
  );
}

export default Gallery;
