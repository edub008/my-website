// Header component.
import Image from "next/image"
import { useTranslation } from 'next-i18next'
import styles from "../styles/Hero.module.scss"

const { heroContent, heroImage, heroWrapper, heroSubtitle, heroTitle } = styles;
const IMAGE_URL = "/ergin-hero.jpg"

export default (props) => {

  const { t } = useTranslation('common')

  return (
    <div className={heroWrapper}>
      <Image
        priority
        src={IMAGE_URL}
        fill
        style={{objectFit:"cover"}}
        alt="Ergin Dervisoglu hero"
      />

      <div className={heroContent}>
        <h1 className={heroSubtitle}> {t('hero-title')} </h1>
        <p className={heroTitle}>{t('hero-subtitle')}</p>
      </div>
    </div>
  )
}