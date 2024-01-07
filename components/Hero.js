// Header component.
import Image from "next/image"
import styles from "../styles/Hero.module.scss"
const STRINGS = require('/public/strings.json')

const { heroContent, heroImage, heroWrapper, heroSubtitle, heroTitle } = styles;
const IMAGE_URL = "/img/ergin-hero.jpg"

export default (props) => {

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
        <h1 className={heroSubtitle}> {STRINGS.heroTitle} </h1>
        <p className={heroTitle}>{STRINGS.heroSubtitle}</p>
      </div>
    </div>
  )
}