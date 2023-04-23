// eslint-disable-next-line import/no-unresolved
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

// ! CUIDADO CON MOVER LAS REGLAS
