import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta
            name='title'
            content='Analytics — Monitor Your business on a real-time dashboard'
          />
          <meta
            name='description'
            content='A real-time analytics tool for your business and enterprise. Plug and Play model to support all your needs.'
          />

          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content='https://analytics-landing.vercel.app/'
          />
          <meta
            property='og:title'
            content='Analytics — Monitor Your business on a real-time dashboard'
          />
          <meta
            property='og:description'
            content='A real-time analytics tool for your business and enterprise. Plug and Play model to support all your needs.'
          />
          <meta
            property='og:image'
            content='https://analytics-landing.vercel.app/assets/images/MetaTag.png'
          />

          <meta property='twitter:card' content='summary_large_image' />
          <meta
            property='twitter:url'
            content='https://analytics-landing.vercel.app/'
          />
          <meta
            property='twitter:title'
            content='Analytics — Monitor Your business on a real-time dashboard'
          />
          <meta
            property='twitter:description'
            content='A real-time analytics tool for your business and enterprise. Plug and Play model to support all your needs.'
          />
          <meta
            property='twitter:image'
            content='https://analytics-landing.vercel.app/assets/images/MetaTag.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
