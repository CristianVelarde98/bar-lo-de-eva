/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import localFont from 'next/font/local';
import DashboardApp from '@/components/dashboard/Layout/dashboardApp';

const localFontRevolution = localFont({
  src: [
    {
      path: '../public/fonts/VivelaRivoluzione.ttf',
      weight: '200',
    },
  ],
  variable: '--font-revolution',
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isDashboardRoute = useMemo(() => {
    return router.pathname.startsWith('/dashboard');
  }, [router.pathname]);

  if (isDashboardRoute)
    return <DashboardApp Component={Component} pageProps={pageProps} />;

  return (
    <main className={`overflow-x-hidden ${localFontRevolution.variable}`}>
      <Component {...pageProps} />;
    </main>
  );
}
