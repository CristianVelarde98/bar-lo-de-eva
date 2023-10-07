import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='es'>
      <Head />
      <body className='w-screen h-screen flex flex-row overflow-x-hidden scroll-smooth'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
