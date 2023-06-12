/* eslint-disable react/jsx-props-no-spreading */
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import DashboardApp from './dashboard/_app';
// import Navbar from '@/components/Mainpage/navbar';
// import { Provider } from '@/Context/contextMainProvider';
// import contextMain from '@/Context/contextMain';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  // const { isMobile } = useContext(contextMain);

  const isDashboardRoute = useMemo(() => {
    return router.pathname.startsWith('/dashboard');
  }, [router.pathname]);

  if (isDashboardRoute)
    return <DashboardApp Component={Component} pageProps={pageProps} />;

  return (
    // <Provider>
    //   <Navbar isMobile={isMobile} />
    <Component {...pageProps} />
    // </Provider>
  );
}
