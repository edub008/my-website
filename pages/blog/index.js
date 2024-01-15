import Head from 'next/head'
import NavBarBlog from '../../components/NavBarBlog.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styles from "../../styles/Blog.module.scss"
const STRINGS = require('/public/strings.json')

const navBack = "Back to ergin-d.com"

export default function Blog() {
  return (

    <div>
      <Head>
        <title>{STRINGS.blogTitle}</title>
        <meta name="description" content="I'm a technology professional from the SF Bay Area with lots of full stack development and management experience. I like to blog about trending topics other developers hopefully find useful including Web3, blockchains, and frontend technologies such as React and Next.js." key="title" />
      </Head>
    
    <NavBarBlog />

    <div className="section-bg" style={{minHeight:'100vmin'}}>
        <div className="columns m-2">
          <div className="column has-text-centered">
            <h1 className="title is-1 neon-sign"> <span>{STRINGS.blogTitle}</span> </h1>
          </div>
        </div>

        <div className="columns m-2">
          <div className="column m-2">
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <div className={`tile is-child box ${styles.blog1Img} ${styles.blogTileBorder}`}>
                  <div className={`p-3 ${styles.blogTitleOverlay}`}>
                    <p className={`title is-4 has-text-white`}>{STRINGS.blogs[0].title}</p>
                    <p className={`subtitle is-6 has-text-white`}>{STRINGS.blogs[0].date}</p>
                    <a className="button is-primary" href={STRINGS.blogs[0].url}>Read More</a>
                  </div>
                </div>
              </div>
              <div className="tile is-5 is-vertical is-parent">
                <div className={`tile is-child box ${styles.blog2Img} ${styles.blogTileBorder}`}>
                  <div className={`p-3 ${styles.blogTitleOverlay}`}>
                    <p className={`title is-4 has-text-white`}>{STRINGS.blogs[1].title}</p>
                    <p className={`subtitle is-6 has-text-white`}>{STRINGS.blogs[1].date}</p>
                    <div disabled className="button">Coming Soon</div>
                  </div>
                </div>
                <div className={`tile is-child box ${styles.blog3Img} ${styles.blogTileBorder}`}>
                  <div className={`p-3 ${styles.blogTitleOverlay}`}>
                  <p className={`title is-4 has-text-white`}>{STRINGS.blogs[2].title}</p>
                    <p className={`subtitle is-6 has-text-white`}>{STRINGS.blogs[2].date}</p>
                  <div disabled className="button">Coming Soon</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}