// import { appWithTranslation } from 'next-i18next'
import '../styles/global.scss'
import { register } from 'swiper/element/bundle'
register()

const MyApp = ({ Component, pageProps }) => (
  <Component {...pageProps} />
)

export default MyApp