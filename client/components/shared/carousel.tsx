import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

type TCarouselProps = {
  children: React.ReactNode;
};

const Carousel: React.FC<TCarouselProps> = ({ children }) => {
  const [currentItem, setItem] = useState<number>(0);
  const numSlides = React.Children.count(children);

  const handleRightItem = () => {
    setItem((prev) => (prev === numSlides - 1 ? prev : prev + 1));
  };

  const handleLefttItem = () => {
    setItem((prev) => (prev === 0 ? prev : prev - 1));
  };

  return (
    <section className='w-screen h-full bg-blue-700 relative'>
      {/* ARROW BUTTON LEFT */}
      <Button
        variant='ghost'
        size='icon'
        onClick={handleLefttItem}
        className='absolute top-1/2 -translate-x-1/2 left-12'
      >
        <ChevronLeft className='h-6 w-6' />
      </Button>
      {/* ELEMENTS JSX */}
      {React.Children.toArray(children)[currentItem]}
      {/* ARROW BUTTON RIGHT */}
      <Button
        variant='ghost'
        size='icon'
        onClick={handleRightItem}
        className='absolute top-1/2 -translate-x-1/2 right-5'
      >
        <ChevronRight className='h-6 w-6' />
      </Button>
    </section>
  );
};

export default Carousel;
