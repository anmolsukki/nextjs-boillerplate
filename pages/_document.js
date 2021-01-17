import getConfig from 'next/config';
import Document, { Head, Main, NextScript } from 'next/document';

const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
  render() {
    return (
      <html lang="en-US">
        <Head>
          <meta charSet="utf-8" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="Next Boillerplate" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
          <meta name="application-name" content="Next Boillerplate" />
          <meta name="theme-color" content="#f60" />
          <meta name="msapplication-navbutton-color" content="#f60" />
          <meta name="msapplication-TileColor" content="#fff" />
          <meta name="msapplication-starturl" content="/" />
          <meta name="description" content="A social media site built with Next.js" />

          <link rel="apple-touch-icon" type="image/png" sizes="192x192" href={`${publicRuntimeConfig.assetPrefix}/static/icons/icon-192x192.png`} />
          <link rel="apple-touch-icon" type="image/png" sizes="512x512" href={`${publicRuntimeConfig.assetPrefix}/static/icons/icon-512x512.png`} />
          <link rel="icon" type="image/png" sizes="16x16" href={`${publicRuntimeConfig.assetPrefix}/favicon.ico`} />
          <link rel="icon" type="image/png" sizes="32x32" href={`${publicRuntimeConfig.assetPrefix}/favicon.ico`} />
          <link rel="icon" type="image/png" sizes="192x192" href={`${publicRuntimeConfig.assetPrefix}/static/icons/icon-192x192.png`} />
          <link rel="icon" type="image/png" sizes="512x512" href={`${publicRuntimeConfig.assetPrefix}/static/icons/icon-512x512.png`} />
          <link rel="icon" href={`${publicRuntimeConfig.assetPrefix}/favicon.ico`} type="image/x-icon" />
          <link rel="shortcut icon" href={`${publicRuntimeConfig.assetPrefix}/favicon.ico`} type="image/x-icon" />
          {publicRuntimeConfig.NODE_ENV === 'development' ? (
            <link rel="manifest" href={`${publicRuntimeConfig.renderUrl}/static/manifest.json`} />
          ) : (
            <link rel="manifest" href={`${publicRuntimeConfig.renderUrl}/static/manifest.json`} />
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
