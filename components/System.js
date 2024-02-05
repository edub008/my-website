import Image from "next/image"
import { Fade } from "react-awesome-reveal"
import styles from "../styles/System.module.scss"
const STRINGS = require('/public/strings.json')

const IMAGE_URL = "/img/turkiye.jpeg"

export default function System(props) {

  const systemItems = [
    <Fade direction="up" triggerOnce>{STRINGS.system.rule1}</Fade>,
    <Fade direction="up" triggerOnce>{STRINGS.system.rule2}</Fade>,
    <Fade direction="up" triggerOnce>{STRINGS.system.rule3}</Fade>,
    <Fade direction="up" triggerOnce>{STRINGS.system.rule4}</Fade>,
    <Fade direction="up" triggerOnce>{STRINGS.system.rule5}</Fade>,
    <Fade direction="up" triggerOnce>{STRINGS.system.rule6}</Fade>,
    <Fade direction="up" triggerOnce>{STRINGS.system.rule7}</Fade>
  ]
  const mySystemItems = systemItems.map((item, index) =>
    <div key={`system-item-${index+1}`} >
      <div className="column">
        <ul style={{listStyleType: 'none'}}>
          <li className={`title is-3 ${styles.mySystemText}`}> {item} </li>
        </ul>
      </div>
    </div>
  )

  return (
    <div className="section-bg section-mg" id={props.id}>
      <Image
        priority
        src={IMAGE_URL}
        fill
        style={{objectFit:"cover"}}
        alt="Bodrum - Turkiye"
        className="my-0"
      />
      <div className="columns m-0 is-justify-content-center">
        <div className="column is-6 is-relative ">
          <div className="section-title has-text-primary mx-1 my-4"> <span> {STRINGS.section.two} </span> </div>
        </div>
      </div>
      <div className="container py-6 is-fullhd has-text-centered">
        <div className="content">
          <div className="columns m-0 auto-margins-x is-justify-content-center is-relative">
            <div className={`column is-7 p-2 ${styles.mySystemOverlay}`}>
              {mySystemItems}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}