/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import type { PropsDashboardApp } from '@/types/Dashboard';
import LayoutNavbar from '@/components/dashboard/Layout/LayoutNavbar';

const queryClient = new QueryClient();

export default function DashboardApp({
  Component,
  pageProps,
}: PropsDashboardApp) {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutNavbar>
        <Component {...pageProps} />
      </LayoutNavbar>
    </QueryClientProvider>
  );
}
