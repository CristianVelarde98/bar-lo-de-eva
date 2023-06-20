import { NextComponentType, NextPageContext } from 'next';

// * _app.tsx
export interface PropsDashboardApp {
  Component: NextComponentType<NextPageContext, any, any>;
  pageProps: any;
}
