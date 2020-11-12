import Document, { Head, Html, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"
import { createMediaStyle } from "v2/Utils/Responsive"

const mediaStyle = createMediaStyle()

class RootDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      // sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="http://webfonts.artsy.net/artsy-icons.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="crossorigin"
          />
          <link
            rel="preload"
            href="http://webfonts.artsy.net/ll-unica77_regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="crossorigin"
          />
          <link
            rel="preload"
            href="http://webfonts.artsy.net/ll-unica77_medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="crossorigin"
          />
          <link
            rel="preload"
            href="http://webfonts.artsy.net/adobe-garamond-pro_regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="crossorigin"
          />
          <link
            rel="preload"
            href="http://webfonts.artsy.net/adobe-garamond-pro_bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="crossorigin"
          />
          <style type="text/css">${mediaStyle}</style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default RootDocument
