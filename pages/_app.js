// import { appWithTranslation } from 'next-i18next'
import Head from 'next/head'
import '../styles/global.scss'
import { register } from 'swiper/element/bundle'
register()

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
    </Head>
    <Component {...pageProps} />
  </>
)

export default MyApp