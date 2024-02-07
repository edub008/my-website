// Header component.
import Image from "next/image"
import styles from "../styles/Hero.module.scss"
const STRINGS = require('/public/strings.json')

const { heroSubtitle, heroTitle } = styles;
const IMAGE_URL = "/img/portrait.jpg"

export default (props) => {

  return (
    
    <section className={`${styles.heroBg} section-mg has-text-centered ${styles.heroSpacing}`}>
      <Image
        src={IMAGE_URL}
        className={styles.borderCircle}
        height={144}
        width={144}
        alt=""
      />
      <p className={heroSubtitle}> {STRINGS.heroTitle} </p>
      <h1 className={heroTitle}>{STRINGS.heroSubtitle}</h1>
      <p className={heroSubtitle}>{STRINGS.heroDesc}</p>

    </section>
  )
}