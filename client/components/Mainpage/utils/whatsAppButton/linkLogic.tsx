import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

//  aca se habilita el mensaje custom-descomentar el tipado y agregarlo como argumento.

type num = {
  phoneNumber: number;
  message: string;
};

export default function LinkLogic({ phoneNumber, message }: num) {
  const link = `https://wa.me/${phoneNumber} ${
    message ? `?text=${encodeURIComponent(message)}` : ''
  }`;

  return (
    <div className='fixed right-0 bottom-0 min-w-screen flex items-end  z-50 sm:animate-bounce'>
      <div className='bg-green-500 h-16 w-16 rounded-full items-center justify-center flex mr-2 mb-2 sm:mr-4 sm:mb-4'>
        <Link href={link}>
          <FaWhatsapp color='white' size={40} />
        </Link>
      </div>
    </div>
  );
}
