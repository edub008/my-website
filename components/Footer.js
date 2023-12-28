import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-awesome-reveal"
import styles from "../styles/Footer.module.scss"
const linkedInImgAlt = "ergin dervisoglu - linkedin"
const gitHubImgAlt = "ergin dervisoglu - github"
const stackOverflowImgAlt = "ergin dervisoglu - stack overflow"

const IMAGE_URL1 = "/github.webp"
const IMAGE_URL2 = "/stack-overflow.webp"
const IMAGE_URL3 = "/linked-in.webp"

export default function Footer(props) {

  const smoothScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth' // smooth scroll
    })
  };

  const siteImages = [
    <Image className="auto-margins-x" width={100} height={100} src={IMAGE_URL1} alt={gitHubImgAlt} />,
    <Image className="auto-margins-x" width={100} height={100} src={IMAGE_URL2} alt={stackOverflowImgAlt} />,
    <Image className="auto-margins-x" width={100} height={100} src={IMAGE_URL3} alt={linkedInImgAlt} />
  ]

  const gridItems = props.sites.map( (item, index) =>
    
    <div className={`column ${styles.footerCol}`} key={`site-${item.title}`} id={props.id}>
      <Fade direction="up" triggerOnce>
        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer">
          <div className="has-text-centered">
            {siteImages[index]}
            <div className={`title is-4 has-text-info`}>
              {item.title} <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="sm" className="mx-4"/>
            </div>
          </div>
        </Link>
      </Fade>
    </div>
    
  )

  return (
      <div className="columns m-0 section-bg is-justify-content-center">
        <div className="column is-8 has-text-centered">

          <div className="columns m-0 is-justify-content-center">
            <div className="column is-6 is-relative ">
              <div className="section-title has-text-primary mx-1 my-1"> <span> {props.title} </span> </div>
            </div>
          </div>

          <div className="subtitle is-5 has-text-white">
            <Fade direction="up" triggerOnce>
              {props.desc}
            </Fade>
          </div>
          <div className="columns m-0">
            {gridItems}
          </div>
          <div className="columns m-0">
            <div className="column" style={{paddingTop:'4rem'}}>
              <Fade triggerOnce>
                <div className="subtitle is-6 has-text-white" dangerouslySetInnerHTML={{__html: props.about }}></div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
  )

}