import { RenderPageResult } from 'next/dist/next-server/lib/utils'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ReactElement } from 'react'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<RenderPageResult> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render(): ReactElement {
    return (
      <Html>
        <Head>{/* all metatagas here */}</Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
