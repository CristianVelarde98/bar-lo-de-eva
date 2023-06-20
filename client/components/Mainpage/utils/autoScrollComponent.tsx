import Image from 'next/image';

export default function AutoScrollComponent() {
  const trueImage = [
    'https://dummyimage.com/600x400/000/fff',
    'https://dummyimage.com/600x400/b04cb0/ffffff',
    'https://dummyimage.com/600x400/3f6efc/ffffff',
    'https://dummyimage.com/600x400/000/fff',
  ];

  return (
    <div className='w-full h-full flex items-center justify-center'>
      {/* 1. */}
      <div className='w-full h-full border-t border-b border-gray-600 overflow-hidden relative'>
        {/* 2. */}
        <div className='w-[200%] flex items-center h-full absolute left-0 animate animate'>
          {trueImage.map((i) => {
            return (
              <div
                className='flex justify-center items-start w-5/6 h-full relative'
                key={i}
              >
                <Image
                  src={i}
                  alt='image not found'
                  className='object-cover'
                  fill
                />
              </div>
            );
          })}

          {trueImage.map((i) => {
            return (
              <div className='flex justify-center items-start w-5/6 min-h-full overflow-hidden relative'>
                <div className='bg-slate-300 h-full'>
                  <Image
                    src={i}
                    alt='image notfound'
                    className='object-cover'
                    fill
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
