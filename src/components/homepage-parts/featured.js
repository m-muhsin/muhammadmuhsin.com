import React from 'react'
import WPTavernLogo from './images/wp-tavern-logo'
import PostStatusLogo from './images/post-status-logo'

const Featured = () => (
  <>
    <h2 className="section-title">Featured On</h2>
    <p>
      I was fortunate to be featured on these publications for my work a few
      times.
    </p>
    <section className="projects-container">
      <div className="work">
        <a href="https://wptavern.com/?s=Muhammad+Muhsin">
          <WPTavernLogo className="work-logo" />
        </a>
      </div>
      <div className="work">
        <a href="https://poststatus.com/?s=Muhammad+Muhsin">
          <PostStatusLogo className="work-logo" />
        </a>
      </div>
    </section>
  </>
)

export { Featured }
