import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* Global site tag (gtag.js) - Google Analytics --> */}
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
    </Html>
  )
}