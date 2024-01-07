import Head from 'next/head'
// import Script from 'next/script'
// import { useTranslation } from 'next-i18next'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Navbar from '/components/Navbar'
import Hero from '/components/Hero'
import GridItems from '/components/GridItems'
import Interests from '/components/Interests'
import System from '/components/System'
import Footer from '/components/Footer'
import UseWindowSize from '/components/UseWindowSize'
const STRINGS = require('/public/strings.json')

export default function Home() {

  const wSize = UseWindowSize();
  // console.log(`width = ${wSize.width}, height = ${wSize.height}`)
  // const { t } = useTranslation('common')
  const sectionTitles = [
    {title: STRINGS.section.one, id: "interests"},
    {title: STRINGS.section.two, id: "system"},
    {title: STRINGS.section.three, id: "communities"},
    // {title: STRINGS.section.four, id: "education"}
  ]
  const communitySites = [
    {title: STRINGS.communities.one.title, link: STRINGS.communities.one.link},
    {title: STRINGS.communities.two.title, link: STRINGS.communities.two.link},
    {title: STRINGS.communities.three.title, link: STRINGS.communities.three.link},
  ]
  const communityDesc = STRINGS.communities.desc
  const footerAbout = STRINGS.about

  return (
    <div id="top">
      <Head>
        <title>Ergin Dervisoglu | Home </title>
        <meta name="description" content="Ergin Dervisoglu is a Product & Engineering Director located in the San Francisco Bay Area. Learn more about my interests, system, and communities through this website I built using Next.js and React.js." key="title" />
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
