/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import DashboardApp from '@/components/Layout/dashboardApp';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const isDashboardRoute = useMemo(() => {
    return router.pathname.startsWith('/dashboard');
  }, [router.pathname]);

  if (isDashboardRoute)
    return <DashboardApp Component={Component} pageProps={pageProps} />;

  return <Component {...pageProps} />;
}
