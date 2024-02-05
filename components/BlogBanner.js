const STRINGS = require('/public/strings.json')

export default (props) => {
  return (
    <section className="hero is-small has-background-dark section-mg">
      <div className="hero-body p-0">
        <div className="columns m-0">
          <div className="column m-2 has-text-centered">
            <div className="subtitle is-5 has-text-info">{STRINGS.blogHighlight}</div>
          </div>
          <div className="column m-0 blogBannerTile is-flex is-justify-content-center is-align-items-center">
            <a href="/blog" className="button is-primary">{STRINGS.blogBtn}</a>
          </div>
        </div>
      </div>
    </section>
  )
}