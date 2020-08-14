import React from 'react'
import WPTavernLogo from './images/wp-tavern-logo'
import PostStatusLogo from './images/post-status-logo'
import LearnDashLogo from './images/learndash-logo'
import CSSTricksLogo from './images/css-tricks-logo'
import ShifterLogo from './images/shifter-logo'
import WPGraphQL from './images/wpgraphql-logo'

const Featured = () => (
  <>
    <h2 className="section-title">Featured On</h2>
    <p>
      I am lucky to have had my work mentioned on these sites!
    </p>
    <section className="projects-container">
      <div className="work">
        <a href="https://css-tricks.com/?s=Muhammad+Muhsin">
          <CSSTricksLogo className="work-logo" />
        </a>
      </div>
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
      <div className="work">
        <a href="https://www.learndash.com/best-wordpress-lms-plugin/">
          <LearnDashLogo className="work-logo" />
        </a>
      </div>
      <div className="work">
        <a href="https://www.getshifter.io/blog/were-going-to-wordcamp-us-and-wordcamp-tokyo">
          <ShifterLogo className="work-logo" />
        </a>
      </div>
      <div className="work">
        <a href="https://www.wpgraphql.com/2019/03/19/wpgraphql-gatsby-tutorial/">
          <WPGraphQL className="work-logo" />
        </a>
      </div>
    </section>
  </>
)

export { Featured }
