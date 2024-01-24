import Head from 'next/head'
// import NavBarBlog from '../../components/NavBarBlog.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styles from "../../styles/Blog.module.scss"
const STRINGS = require('/public/strings.json')

const navBack = "Back to ergin-d"
const actionTitle = "View Blog"

export default function Blog() {
  return (

    <div>
      <Head>
        <title>{STRINGS.blogTitle}</title>
        <meta name="description" content="I'm a technology professional from the SF Bay Area with lots of full stack development and management experience. I like to blog about trending topics other developers hopefully find useful including Web3, blockchains, and frontend technologies such as React and Next.js." key="title" />
      </Head>
    
    {/* <NavBarBlog /> */}

    <div className="section-bg" style={{minHeight:'100vmin', paddingBottom:'5rem'}}>
        <div className="columns m-0">
          <div className="column has-text-centered" style={{paddingBottom:'2rem'}}>
            <div className="title is-1 neon-sign"> <span>{STRINGS.blogTitle}</span> </div>
            <div className="subtitle is-5 has-text-info">{STRINGS.blogSubtitle}</div>
          </div>
        </div>

        <div className="columns m-2">
          <div className="column m-2">
            <div className="tile is-ancestor">
              <div className="tile is-parent">
                <div className={`tile is-child box p-0 ${styles.blog1Img} ${styles.blogTileBorder}`}>
                  <div className={styles.blogTitleOverlay}>
                    <div style={{position:'relative'}}>
                      <div className={`title is-4 has-text-white`}>{STRINGS.blogs[0].title}</div>
                      <div className={`subtitle is-6 has-text-white`}>{STRINGS.blogs[0].date}</div>
                      <a className="button is-primary" href={STRINGS.blogs[0].url}>{actionTitle}</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tile is-5 is-vertical is-parent">
                <div className={`tile is-child box p-0 ${styles.blog2Img} ${styles.blogTileBorder}`}>
                  <div className={styles.blogTitleOverlay}>
                    <div style={{position:'relative'}}>
                      <div className={`title is-5 has-text-white`}>{STRINGS.blogs[1].title}</div>
                      <div className={`subtitle is-6 has-text-white`}>{STRINGS.blogs[1].date}</div>
                      <a className="button is-primary" href={STRINGS.blogs[1].url}>{actionTitle}</a>
                    </div>
                  </div>
                </div>
                <div className={`tile is-child box p-0 ${styles.blog3Img} ${styles.blogTileBorder}`}>
                  <div className={styles.blogTitleOverlay}>
                    <div style={{position:'relative'}}>
                      <div className={`title is-5 has-text-white`}>{STRINGS.blogs[2].title}</div>
                      <div className={`subtitle is-6 has-text-white`}>{STRINGS.blogs[2].date}</div>
                      <div disabled className="button">Coming Soon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="columns m-0">
          <div className="column has-text-centered m-3">
            <div className="subtitle is-5">
              <a href="/"> <FontAwesomeIcon icon={faArrowLeft} size="sm" className="mx-4"/>{navBack} </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}