import { Html, Head, Main, NextScript } from 'next/document'

// * Components
import NavbarDashboard from '@/components/navbar';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='w-screen h-screen flex flex-row bg-lime-600'>
        <NavbarDashboard />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
