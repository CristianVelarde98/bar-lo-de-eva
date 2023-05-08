import { useCallback, useEffect, useState, memo, useMemo } from 'react';

type PropsTemporizer = {
  startedTime: string;
  finallyTime: string;
};

function Temporizador({ startedTime, finallyTime }: PropsTemporizer) {
  const [currentTime, setCurrentTime] = useState(Date.now());

  const calculateTime = useCallback(
    (time: string) => {
      const startDate = new Date(time).getTime();
      const timeDiff = startDate - currentTime;
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds };
    },
    [currentTime]
  );

  const startedTemporizer = useMemo(() => {
    const startDate = new Date(startedTime).getTime();
    if (currentTime >= startDate) return calculateTime(finallyTime);

    return calculateTime(startedTime);
  }, [startedTime, finallyTime, currentTime, calculateTime]);

  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className='flex flex-col items-center justify-center gap-2 p-5 rounded-lg'>
      <h1 className='text-3xl font-bold text-white'>INICIA</h1>
      <section className='flex flex-row gap-2'>
        <p className='w-12 h-10 rounded-md bg-white font-bold flex items-center justify-center shadow-lg'>
          {startedTemporizer.days || '0'} D
        </p>
        <p className='w-12 h-10 rounded-md bg-white font-bold flex items-center justify-center shadow-lg'>
          {startedTemporizer.hours || '0'} H
        </p>
        <p className='w-12 h-10 rounded-md bg-white font-bold flex items-center justify-center shadow-lg'>
          {startedTemporizer.minutes || '0'} m
        </p>
        <p className='w-12 h-10 rounded-md bg-white font-bold flex items-center justify-center shadow-lg'>
          {startedTemporizer.seconds || '0'} s
        </p>
      </section>
    </section>
  );
}

export default memo(Temporizador);
