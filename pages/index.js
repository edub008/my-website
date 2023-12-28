import { useTranslation } from 'next-i18next'
import Navbar from '/components/Navbar'
import Hero from '/components/Hero'
import GridItems from '/components/GridItems'
import Interests from '/components/Interests'
import System from '/components/System'
import Footer from '/components/Footer'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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
      <Navbar/>

      <Hero/>
      <GridItems sectionTitles={sectionTitles}/>
      <Interests id={sectionTitles[0].id}/>
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
