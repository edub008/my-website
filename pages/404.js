import Head from 'next/head'
import Image from 'next/image'

export default function Custom404() {
  return (

    <div>
      <Head>
        <title>{`Blog | Converting React to Next`}</title>
        <meta name="description" content="This articles describes how to convert React projects into Next.js, problems you may encounter, and some tips and tricks for the migration."/>
      </Head>
      <div className="section-bg" style={{minHeight:'100vh'}}>
        <div className="columns m-0 p-2">
          <div className="column has-text-centered">
            <h1 className="title is-2 has-text-white">Whoops!</h1>
            <h2 className="subtitle is-2 m-1 p-1 has-text-info">404 Page Not Found</h2>
          </div>
        </div>
        <div className="columns m-0 p-2">
          <div className="column has-text-centered p-2">
            <div className="container">
              <Image
                alt='react-to-nextjs'
                src='/icon.jpg'
                priority
                width={500}
                height={500}
                style={{ height: 'auto' }}
              />
            </div>
          </div>
        </div>
        <div className="columns m-0">
          <div className="column has-text-centered">
            <h3 className="title is-3 has-text-white" style={{marginTop:'1rem'}}>Looks like this page went on vacation.</h3>
            <h4 className="subtitle is-3 has-text-white">Try the <a href="/">homepage</a> or <a href="/blog">blog</a> instead.</h4>
          </div>
        </div>
      </div>
    </div>
  )
}