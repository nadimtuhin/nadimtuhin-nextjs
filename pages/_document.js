import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <link rel="apple-touch-icon" sizes="57x57" href="/static/favicons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/favicons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/favicons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/favicons/apple-icon-76x76.png" />
          <meta
            name="ahrefs-site-verification"
            content="d7cf323d63d52fb09b9e9cfdd3fd94857d825d15108fcbc4b531f83d4919fc7c"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/static/favicons/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/static/favicons/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/static/favicons/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/favicons/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/static/favicons/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/static/favicons/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/static/favicons/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="mask-icon" href="/static/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
            integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
            crossOrigin="anonymous"
          />
          <script
            src="https://analytics.ahrefs.com/analytics.js"
            data-key="Qc4+NaJlexE9AX6yp4SCUw"
            defer="true"
          />
        </Head>
        <body className="bg-white text-black antialiased dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
