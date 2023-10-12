// import Image from 'next/image';
import React, { useState } from 'react';
import Image from 'next/image';
import {
  PlusIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowLeft,
} from 'lucide-react';
import axios from 'axios';
import { TEventsItem } from '@/types/services/api';

type TEventsCard = {
  dataset: TEventsItem[];
};

const EventsCard: React.FC<TEventsCard> = ({ dataset }) => {
  const [actualFocusImage, setImage] = useState(1);
  const [fileImg, setFileImage] = useState();
  const [actualSlice, setActualSlice] = useState({
    init: 0,
    end: 3,
  });

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    setFileImage(selectedFile);
  };

  const changeImage = (event: any) => {
    const BeforeOrNext = event.target as HTMLButtonElement;
    if (BeforeOrNext.value !== 'next') {
      if (actualSlice.init === 0) {
        setImage(0);
      } else if (actualFocusImage === 0) {
        setImage(dataset.length - 1);
      } else if (actualSlice.init > 0) {
        setActualSlice({
          init: actualSlice.init - 1,
          end: actualSlice.end - 1,
        });
      }
    }
    if (BeforeOrNext.value !== 'before') {
      if (actualSlice.end === dataset.length + 1) {
        setActualSlice({
          init: 0,
          end: 3,
        });
        setImage(0);
      } else if (dataset.length - 1 === actualFocusImage) {
        setImage(0);
      } else if (actualFocusImage === 0) {
        setImage(1);
      } else if (actualSlice.end < dataset.length + 1) {
        setActualSlice({
          init: actualSlice.init + 1,
          end: actualSlice.end + 1,
        });
      }
    }
  };

  // const beforeHandler = (value: string) => {
  //   if (value === 'next' && dataset.length - 1 === actualFocusImage) {
  //     setImage(0);
  //   }
  //   if (value === 'next') {
  //     setImage(actualFocusImage + 1);
  //     setActualSlice({ init: actualSlice.init + 1, end: actualSlice.end + 1 });
  //   }
  // };

  const sendImage = async () => {
    if (!fileImg) return null;
    const formData = new FormData();
    const time = {
      start: '2023-08-15T12:00:00.000-05:00',
      end: '2023-08-23T12:00:00.000-05:00',
      time_zone: null,
    };
    formData.append('image', fileImg);
    formData.append('Name', 'Peron Peron');
    formData.append('Time', JSON.stringify(time));
    // const sendData = {
    //   Image: formData,
    //   Name: 'Richard',
    //   Time: 'adios',
    // };
    const send = await axios.post(
      'http://localhost:3100/api/v2/events/',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  };

  return (
    <section className='w-full h-screen items-center justify-center flex bg-blue-300 flex-col'>
      <div className='flex'>
        {dataset
          .slice(actualSlice.init, actualSlice.end)
          .map((item: TEventsItem, index) => {
            const isCurrentImage = actualFocusImage === index;
            const translateClass = isCurrentImage
              ? 'border-2 border-red-500'
              : '';
            const lessThanIndex =
              actualFocusImage < index ? 'translate-x-32' : '';
            const moreThanIndex =
              actualFocusImage > index ? '-translate-x-32' : '';
            return (
              <div
                className={`transform transition-all ${moreThanIndex} ${lessThanIndex} ${translateClass}`}
                key={item.key}
              >
                <Image
                  src={item.Image}
                  width={200}
                  height={200}
                  alt={`${item.Image}`}
                  className='rounded-lg'
                />
              </div>
            );
          })}
        {/* {
          dataset.map((item: TEventsItem, index) => (
            <div
              className={`transform transition-all ${
                actualFocusImage === index ? 'translate-x-0' : 'translate-x-32'
              }`}
              key={item.key}
            >
              <Image
                src={item.Image}
                width={200}
                height={200}
                alt={`${item.Image}`}
                className='rounded-lg'
              />
            </div>
          ))[actualFocusImage + 1]
        } */}
        {/* {fileImg && (
          <div className='w-30 h-30'>
            <Image
              src={URL.createObjectURL(fileImg)}
              width={200}
              height={200}
              alt='intento'
            />
          </div>
        )} */}
      </div>
      <div className='w-1/2 justify-around flex'>
        <button type='button' value='before' onClick={changeImage}>
          <ArrowLeftIcon width={50} height={50} pointerEvents='none' />
        </button>
        <button type='button' value='next' onClick={changeImage}>
          <ArrowRightIcon width={50} height={50} pointerEvents='none' />
        </button>
      </div>
      {/* <input type='file' accept='image/' onChange={handleFileChange} /> */}
      {/* {
        <button
          type='submit'
          className='border-2 border-purple-800'
          onClick={sendImage}
        >
          {' '}
          enviar al backend
        </button>
      } */}
      {/* {dataset.length >= 1 && (
        <button
          className='border-2 border-zinc-400 rounded-md bg-white'
          type='button'
        >
          <PlusIcon width={40} height={40} />
        </button>
      )} */}
    </section>
  );
};

export default EventsCard;
