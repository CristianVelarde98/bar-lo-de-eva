// eslint-disable-next-line import/no-extraneous-dependencies
import { useState } from 'react';
import { DatePicker, Space } from 'antd';
import type { RangePickerProps } from 'antd/es/date-picker';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';

// * CSS
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';

// * Components
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
    const [startDate, endDate] = value || [];

    dateCurrent({
      started: startDate ? String(Object.values(startDate)[2]) : date.started,
      finally: endDate ? String(Object.values(endDate)[2]) : date.finally,
    });
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

        {/* CAROUSEL OF GALLERY */}
        <section className='h-1/2 flex justify-center items-center'>
          <Splide hasTrack={false}>
            <SplideTrack>
              <SplideSlide>
                <div className='w-full h-max bg-lime-600'>...0</div>
              </SplideSlide>
              <SplideSlide>
                <div className='w-full h-max bg-lime-600'>...1</div>
              </SplideSlide>
              <SplideSlide>
                <div className='w-full h-max bg-lime-600'>...2</div>
              </SplideSlide>
            </SplideTrack>
          </Splide>
        </section>

        {/* GETTER OF CALENDAR */}
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
