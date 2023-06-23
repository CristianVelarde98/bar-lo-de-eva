import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta
          content='Bar | Choripaneria peronista, ven y disfruta de tu tarde acompañado de nuestra tematica sobre evita'
          key='og:description'
        />
        <meta name='keywords' content='Bar Peronista, LodeEva, La Plata Bar' />
      </Head>
      <body className='w-screen h-screen flex flex-row overflow-x-hidden scroll-smooth'>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
