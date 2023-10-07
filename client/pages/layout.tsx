/* eslint-disable no-alert */
import React, { ReactNode } from 'react';
import localFont from 'next/font/local';

const localFontRevolution = localFont({
  src: [
    {
      path: '../public/fonts/VivelaRivoluzione.ttf',
      weight: '200',
    },
  ],
  variable: '--font-revolution',
});

type PropsChildren = {
  children: ReactNode;
};

export default function Layout({ children }: PropsChildren) {
  return <div className={`${localFontRevolution.variable}`}>{children}</div>;
}
