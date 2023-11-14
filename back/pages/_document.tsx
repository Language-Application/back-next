import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-[#381C11] flex flex-col overflow-hidden h-screen w-screen'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
