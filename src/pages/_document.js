import { Html, Head, Main, NextScript } from 'next/document'
import JitsiScript from '../../Components/JitsiScript'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
{/* <Background /> */}
        <Main />
        <JitsiScript/>
        <NextScript />
      </body>
    </Html>
  )
}

/*

1. api route "lessons/[id]"

*/