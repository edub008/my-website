import Head from 'next/head'
import Script from 'next/script'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Navbar from '/components/Navbar'
import Hero from '/components/Hero'
import GridItems from '/components/GridItems'
import Interests from '/components/Interests'
import System from '/components/System'
import Footer from '/components/Footer'
import UseWindowSize from '/components/UseWindowSize'

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common'
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default function Home() {

  const wSize = UseWindowSize();
  // console.log(`width = ${wSize.width}, height = ${wSize.height}`)
  const { t } = useTranslation('common')
  const sectionTitles = [
    {title: t('section.one'), id: "interests"},
    {title: t('section.two'), id: "system"},
    {title: t('section.three'), id: "communities"},
    // {title: t('section.four'), id: "education"}
  ]
  const communitySites = [
    {title: t('communities.one.title'), link: t('communities.one.link')},
    {title: t('communities.two.title'), link: t('communities.two.link')},
    {title: t('communities.three.title'), link: t('communities.three.link')},
  ]
  const communityDesc = t('communities.desc')
  const footerAbout = t('about')

  return (
    <div id="top">
      <Head>
        <title>Ergin Dervisoglu | Home </title>
        <meta name="description" content="Ergin Dervisoglu is a Product & Engineering Director located in the San Francisco Bay Area. Learn more about my interests, system, and communities through this website I built using Next.js and React.js." key="title" />

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

      </Head>

      <Navbar/>

      <Hero/>
      <GridItems sectionTitles={sectionTitles}/>
      <Interests id={sectionTitles[0].id} wSize={wSize}/>
      <System id={sectionTitles[1].id} />

      <Footer 
        id={sectionTitles[2].id}
        title={sectionTitles[2].title}
        sites={communitySites}
        desc={communityDesc}
        about={footerAbout}/>
    </div>
  )
}
