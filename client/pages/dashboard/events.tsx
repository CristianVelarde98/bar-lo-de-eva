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
import LayoutNavbar from '@/components/Layout/LayoutNavbar';
import { useTask } from '@/Context/TaskBard';
import ItemGallery from '@/components/ItemGallery';

type PropsState = {
  started: string;
  finally: string;
};

const { RangePicker } = DatePicker;

function Events() {
  const { itemsEvents, newItemsEvents } = useTask();
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
      <section className='w-full h-full flex flex-col'>
        <section className='h-1/6 w-auto bg-black rounded-md flex justify-center items-center absolute left-20 top-2'>
          {date.started && date.finally && (
            <Temporizador
              startedTime={date.started}
              finallyTime={date.finally}
            />
          )}
        </section>

        {/* CAROUSEL OF GALLERY */}
        <section className='h-4/5 flex justify-center items-center'>
          <Splide
            options={{
              drag: false,
            }}
            hasTrack={false}
            className='w-full h-full flex items-center justify-center'
          >
            <SplideTrack className='w-full h-full center-items'>
              {itemsEvents.map(({ _id, imagen }, index) => (
                <SplideSlide
                  key={`${imagen + index}`}
                  className='w-full h-6/5 center-items'
                >
                  <ItemGallery identify='events' id={_id} imagen={imagen} />
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </section>

        {/* GETTER OF CALENDAR */}
        <section className='h-1/5 flex flex-row justify-center items-center gap-6'>
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
          <button
            onClick={() => {
              newItemsEvents(date.started, date.finally);
            }}
            type='button'
            className='w-auto h-11 p-2 transition-all duration-200 hover:scale-125 bg-blue-600 rounded-sm text-white font-bold'
          >
            Agregar nuevo elemento
          </button>
        </section>
      </section>
    </LayoutNavbar>
  );
}

export default Events;
