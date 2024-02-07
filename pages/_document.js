import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.css"
        ></link>
      </Head>
      {
        process.env.NODE_ENV === "production"
        ?
        <body>
          <Main />
          <NextScript />
          <Script strategy="lazyOnload" src="https://www.googletagmanager.com/gtag/js?id=G-38Y703GYJ9" />
          <Script strategy="lazyOnload" id="google-analytics">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
     
              gtag('config', 'G-38Y703GYJ9');
            `}
          </Script>
        </body>
        :
        <body>
          <Main />
          <NextScript />
        </body>
      }
    </Html>
  )
}