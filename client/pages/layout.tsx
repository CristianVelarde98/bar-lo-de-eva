/* eslint-disable no-alert */
import React, { ReactNode } from 'react';
import Navbar from '@/components/Mainpage/navbar';
import WtspButton from '@/components/Mainpage/utils/whatsAppButton/buttonWtsp';

type PropsChildren = {
  children: ReactNode;
};

export default function Layout({ children }: PropsChildren) {
  return (
    <>
      <Navbar />
      <WtspButton />
      <div>{children}</div>
    </>
  );
}
