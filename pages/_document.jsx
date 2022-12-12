import Document, { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@nextui-org/react';
import config from 'config/config.json'

class MyDocument extends Document {
  render() {
    return (
      <Html lang={config.locale}>
        <Head>
          {/* NextUI CSS Reset */}
          {/* {CssBaseline.flush()} */}
        </Head>
        <body className='dark:bg-gray-800 text-gray-800 dark:text-gray-100'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
