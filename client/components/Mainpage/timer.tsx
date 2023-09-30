// import { useEffect, useState } from 'react';

// interface timer {
//   hour: number;
//   minute: number;
//   seconds: number;
// }

// function DateTimer() {
//   const [timer, setTimer] = useState<timer>({ hour: 0, minute: 0, seconds: 0 });

//   const finishTimer = !!(
//     timer.hour < 0 &&
//     timer.minute < 0 &&
//     timer.seconds < 0
//   );

//   const getTime = () => {
//     const date = new Date().getTime();
//     const actualDate = new Date('2023-06-03T12:00:00Z').getTime();
//     const lessDate = actualDate - date;
//     setTimer({
//       hour: Math.floor(lessDate / (1000 * 60 * 60)),
//       minute: Math.floor((lessDate % (1000 * 60 * 60)) / (1000 * 60)),
//       seconds: Math.floor((lessDate % (1000 * 60)) / 1000),
//     });
//   };

//   useEffect(() => {
//     const id = setInterval(() => {
//       getTime();
//     }, 1000);

//     return () => clearInterval(id);
//   }, [timer]);

//   return (
//     <div className='flex justify-center items-center'>
//       {finishTimer ? (
//         <div className='bg-white h-20 w-60 flex items-center justify-center'>
//           ES HORA DEL EVENTO
//         </div>
//       ) : (
//         <>
//           <div className='bg-black text-white h-14 w-10 flex justify-center items-center rounded-md'>
//             {timer.hour >= 10 ? timer.hour : `0${timer.hour.toString()}`}
//           </div>
//           <span className='text-xl text-white animate-pulse m-1'>:</span>
//           <div className=' bg-black text-white h-14 w-10 flex justify-center items-center rounded-md'>
//             {timer.minute >= 10 ? timer.minute : `0${timer.minute.toString()}`}
//           </div>
//           <span className='text-xl text-white animate-pulse m-1'>:</span>
//           <div className=' bg-black text-white h-14 w-10 flex justify-center items-center rounded-md'>
//             {timer.seconds >= 10
//               ? timer.seconds
//               : `0${timer.seconds.toString()}`}
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// export default DateTimer;
