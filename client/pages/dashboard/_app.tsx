/* eslint-disable react/jsx-props-no-spreading */
import { NextComponentType, NextPageContext } from 'next';
import TaskProvider from '@/components/TaskProvider';

interface PropsDashboardApp {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: any;
}

export default function DashboardApp({
  Component,
  pageProps,
}: PropsDashboardApp) {
  return (
    <TaskProvider>
      <Component {...pageProps} />
    </TaskProvider>
  );
}
