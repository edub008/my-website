import Head from 'next/head'
import BlogSwiper from './blogSwiper'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import styles from "../../styles/Blog.module.scss"
const STRINGS = require('/public/strings.json')

const navBack = "ergin-d.com"
const disabledTitle = "Coming Soon"
const featuredTitle = "Featured"
const microBlogsTitle = "Micro blogs"

const featuredBlogsData = [
  {title: STRINGS.blogs[0].title, date: STRINGS.blogs[0].date, url: STRINGS.blogs[0].url, img: '/img/blog1-convert-react-to-next.png'},
  {title: STRINGS.blogs[1].title, date: STRINGS.blogs[1].date, url: STRINGS.blogs[1].url, img: '/img/blog2-internet-computer.png'},
  {title: STRINGS.blogs[2].title, date: STRINGS.blogs[2].date, url: STRINGS.blogs[2].url, img: '/img/zkProof.png'}
]
const miniBlogsData = [
  {title: STRINGS.miniBlogs[0].title, date: STRINGS.miniBlogs[0].date, url: STRINGS.miniBlogs[0].url, ready: true},
  {title: STRINGS.miniBlogs[1].title, date: STRINGS.miniBlogs[1].date, url: STRINGS.miniBlogs[1].url, ready: false},
  {title: STRINGS.miniBlogs[2].title, date: STRINGS.miniBlogs[2].date, url: STRINGS.miniBlogs[2].url, ready: false}
]
const miniBlogBkgds = [
  styles.miniblog1Img,
  styles.miniblog2Img,
  styles.miniblog3Img,
]

export default function Blog() {

  const miniBlogs = miniBlogsData.map( (blog, idx) => 
    <div className="tile is-parent" key={`mini-blog-${idx+1}`}>
      <div className={`tile is-child box p-0 ${styles.blogTileBorder} ${miniBlogBkgds[idx]}` }>
        <div className={styles.blogTitleOverlay}>
          <div style={{position:'relative'}}>
            <div className={`title is-5 has-text-white`}>{STRINGS.miniBlogs[idx].title}</div>
            <div className={`subtitle is-6 has-text-white`}>{STRINGS.miniBlogs[idx].date}</div>
            {
              !blog.ready 
              ?
              <div disabled className="button">{disabledTitle}</div>
              :
              <a className="button is-primary" href={STRINGS.miniBlogs[idx].url}>{STRINGS.blogBtn}</a>
            }
          </div>
        </div>
      </div>
    </div>
  )

  return (

    <div>
      <Head>
        <title>{STRINGS.blogTitle}</title>
        <meta name="description" content="I'm a technology professional from the SF Bay Area with lots of full stack development and management experience. I like to blog about trending topics other developers hopefully find useful including Web3, blockchains, and frontend technologies such as React and Next.js." key="title" />
      </Head>
      <div className="blog-bg">
        <div className="columns m-0">
          <div className="column has-text-centered" style={{paddingBottom:'2rem'}}>
            <div className="title is-1 neon-sign"> <span>{STRINGS.blogTitle}</span> </div>
            <div className="subtitle is-5 has-text-info">{STRINGS.blogSubtitle}</div>
          </div>
        </div>
        <div className="columns m-0 is-justify-content-center">
          <div className="column is-10 m-4 p-1">
            <div className="title is-5 has-text-primary"> {featuredTitle} </div>
            <hr style={{backgroundColor:'#faa014'}} />
            <BlogSwiper featuredBlogsData={featuredBlogsData} />
          </div>
        </div>

        <section>
          <div className="columns m-0 is-justify-content-center">
            <div className="column is-10 m-4 p-1">
              <div className="title is-5 has-text-primary"> {microBlogsTitle} </div>
                <hr style={{backgroundColor:'#faa014'}} />
                <div className="tile is-ancestor">
                  {miniBlogs}
                </div>
            </div>
          </div>
        </section>
        <div className="columns m-0">
          <div className="column has-text-centered m-3">
            <div className="subtitle is-6">
              <a href="/"> <FontAwesomeIcon icon={faArrowLeft} size="sm" className="mx-2"/>{navBack} </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}