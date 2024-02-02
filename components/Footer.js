import Link from 'next/link'
import Image from 'next/image'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { Fade } from "react-awesome-reveal"
import styles from "../styles/Footer.module.scss"

const IMAGE_URL1 = "/img/github.webp"
const IMAGE_URL2 = "/img/stack-overflow.webp"
const IMAGE_URL3 = "/img/linked-in.webp"

export default function Footer(props) {

  const smoothScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    element.scrollIntoView({
      block: 'start',
      behavior: 'smooth' // smooth scroll
    })
  }

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
            <div className="column m-1 p-2">
              <Fade direction="up" triggerOnce>
                <ul className="icon-list">
                  <li className="icon-list__item">
                    <a href="https://www.linkedin.com/in/ergindervisoglu/" target="_blank">
                      <div className="icon-box">
                        <div className="box__face box__face--front">
                          <svg t="1580194916849" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10901" width="40" height="40"><path d="M208.603429 808.009143l132.022857 0 0-396.580571-132.022857 0 0 396.580571zM349.110857 289.133714q-0.585143-29.696-20.553143-49.152t-53.174857-19.456-53.979429 19.456-20.845714 49.152q0 29.110857 20.260571 48.859429t52.882286 19.748571l0.585143 0q33.718857 0 54.272-19.748571t20.553143-48.859429zM683.446857 808.009143l132.022857 0 0-227.401143q0-87.990857-41.691429-133.12t-110.299429-45.129143q-77.677714 0-119.442286 66.852571l1.170286 0 0-57.709714-132.022857 0q1.682286 37.741714 0 396.580571l132.022857 0 0-221.696q0-21.723429 4.022857-32.036571 8.557714-19.968 25.746286-34.011429t42.276571-13.970286q66.267429 0 66.267429 89.746286l0 211.968zM950.857143 237.714286l0 548.571429q0 68.022857-48.274286 116.297143t-116.297143 48.274286l-548.571429 0q-68.022857 0-116.297143-48.274286t-48.274286-116.297143l0-548.571429q0-68.022857 48.274286-116.297143t116.297143-48.274286l548.571429 0q68.022857 0 116.297143 48.274286t48.274286 116.297143z" p-id="10902" fill="#545454"></path></svg>
                        </div>
                        <div className="box__face box__face--back"></div>
                        <div className="box__face box__face--right"></div>
                        <div className="box__face box__face--left"></div>
                        <div className="box__face box__face--top"></div>
                        <div className="box__face box__face--bottom"></div>
                      </div>
                    </a>
                  </li>
                  <li className="icon-list__item">
                    <a href="https://github.com/edub008" target="_blank">
                      <div className="icon-box">
                        <div className="box__face box__face--front">
                          <svg t="1580194880319" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10619" width="40" height="40"><path d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z" p-id="10620" fill="#545454"></path></svg>
                        </div>
                        <div className="box__face box__face--back"></div>
                        <div className="box__face box__face--right"></div>
                        <div className="box__face box__face--left"></div>
                        <div className="box__face box__face--top"></div>
                        <div className="box__face box__face--bottom"></div>
                      </div>
                    </a>
                  </li>
                  <li className="icon-list__item">
                    <a href="https://stackoverflow.com/users/1968395/ergin" target="_blank">
                      <div className="icon-box">
                        <div className="box__face box__face--front">
                          <svg aria-hidden="true" className="svg-icon iconLogoGlyphMd native native" width="32" height="37" viewBox="0 0 32 37"><path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#545454"></path><path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z" fill="#545454"></path></svg>
                        </div>
                        <div className="box__face box__face--back"></div>
                        <div className="box__face box__face--right"></div>
                        <div className="box__face box__face--left"></div>
                        <div className="box__face box__face--top"></div>
                        <div className="box__face box__face--bottom"></div>
                      </div>
                    </a>
                  </li>
                  <li className="icon-list__item">
                    <a href="https://discordapp.com/users/905896345401954355" target="_blank">
                      <div className="icon-box">
                        <div className="box__face box__face--front">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#545454" className="bi bi-discord" viewBox="0 0 16 16"><path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/></svg>
                        </div>
                        <div className="box__face box__face--back"></div>
                        <div className="box__face box__face--right"></div>
                        <div className="box__face box__face--left"></div>
                        <div className="box__face box__face--top"></div>
                        <div className="box__face box__face--bottom"></div>
                      </div>
                    </a>
                  </li>
                </ul>
              </Fade>
            </div>

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