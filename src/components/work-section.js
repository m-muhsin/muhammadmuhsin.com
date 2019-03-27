import React from 'react'

export default () => (
  <>
    <h2>Trusted By</h2>
    <p>
      I have been working with big and small companies doing WordPress.
      I cannot talk about some of my best work due to non disclosure agreements.
       Here are some of my clients.
    </p>
    <section className="projects-container">
      <div className="work-project">
        <a href="https://www.learndash.com/">
          <img
            className="work-logo"
            src={require('../images/LearnDash.png')}
            alt="LearnDash"
          />
        </a>
        <p>LearnDash</p>
        <div className="project-technologies">
          <span>React</span> <span>Redux</span> <span>WordPress</span>{' '}
        </div>
      </div>
      <div className="work-project">
        <a href="https://javascriptforwp.com/">
          <img
            className="work-logo"
            src={require('../images/jsforwp.png')}
            alt="JS for WP"
          />
        </a>
        <p>JS for WP (Zac Gordon)</p>
        <div className="project-technologies">
          <span>React</span> <span>Gatsby</span> <span>WordPress</span>{' '}
        </div>
      </div>
      <div className="work-project">
        <a href="https://www.jatstudio.com/">
          <img
            className="work-logo"
            src={require('../images/jatstudio.svg')}
            alt="Jatstudio"
          />
        </a>
        <p>Jatstudio</p>
        <div className="project-technologies">
          <span>React</span> <span>Gatsby</span> <span>WordPress</span>{' '}
        </div>
      </div>
      {/* <div className="work-project">
        <a href="https://www.casefora.com/">
          <img
            className="work-logo"
            src={require('../images/simplur.svg')}
            alt="Simplur"
          />
        </a>
        <p>Simplur</p>
        <div className="project-technologies">
          <span>React</span> <span>Gatsby</span> <span>WordPress</span>{' '}
        </div>
      </div> */}
      <div className="work-project">
        <a href="https://www.casefora.com/">
          <img
            className="work-logo"
            src={require('../images/CaseFora-logo.png')}
            alt="Casefora"
          />
        </a>
        <p>Casefora</p>
        <div className="project-technologies">
          <span>React</span> <span>Redux</span> <span>WordPress</span>{' '}
          <span>Elasticsearch</span>
        </div>
      </div>
      <div className="work-project">
        <a href="https://www.lexcampus.in/">
          <img
            className="work-logo"
            src={require('../images/LexCampus-logo.png')}
            alt="LexCampus"
          />
        </a>
        <p>LexCampus</p>
        <div className="project-technologies">
          <span>WordPress</span> <span>LearnDash</span>{' '}
          <span>React Native</span>
        </div>
      </div>
    </section>

    <h2 className="section-title">Writing</h2>
    <p>
      I love to write and explain with words and code. I have been fortunate to
      have been published on the following sites.
    </p>
    <section className="projects-container">
      <div className="work-project">
        <a href="https://www.smashingmagazine.com/author/muhammad-muhsin/">
          <img
            className="work-logo"
            src={require('../images/smashing-magazine.svg')}
            alt="Smashing Magazine"
          />
        </a>
        <div className="project-technologies">
          <span>React</span> <span>React Native</span> <span>WordPress</span>{' '}
          <span>Gutenberg</span>
        </div>
      </div>
      <div className="work-project">
        <a href="https://www.gatsbyjs.org/contributors/muhammad-muhsin/">
          <img
            className="work-logo"
            src={require('../images/gatsby-icon.png')}
            alt="Gatsby"
          />
        </a>
        <div className="project-technologies">
          <span>React</span> <span>Gatsby</span>
        </div>
      </div>
      <div className="work-project">
        <a href="https://javascriptforwp.com/author/muhammad-muhseen/">
          <img
            className="work-logo"
            src={require('../images/jsforwp.png')}
            alt="JS for WP"
          />
        </a>
        <div className="project-technologies">
          <span>React</span> <span>Gatsby</span> <span>WordPress</span>
        </div>
      </div>
    </section>

    <h2 className="section-title">Open Source</h2>
    <p>
      I spend part of my time on open source work. Here are a few of those
      projects.
    </p>
    <section className="projects-container">
      <div className="work-project open-source">
        <a
          href="https://github.com/zgordon/twentynineteen-gatsby-theme"
          style={{ color: 'white', textAlign: 'left' }}
        >
          <h3 className="open-source-title">twentynineteen-gatsby-theme</h3>
          <p className="open-source-desc">
            A port of the Twenty Nineteen WordPress Theme over to Gatsby
          </p>
        </a>
      </div>
      <div className="work-project open-source">
        <a
          href="https://github.com/m-muhsin/celestial"
          style={{ color: 'white', textAlign: 'left' }}
        >
          <h3 className="open-source-title">celestial</h3>
          <p className="open-source-desc">
            A WordPress theme built with React.
          </p>
        </a>
      </div>

      <div className="work-project open-source">
        <a
          href="https://github.com/m-muhsin/woocommerce-next"
          style={{ color: 'white', textAlign: 'left' }}
        >
          <h3 className="open-source-title">woocommerce-next</h3>
          <p className="open-source-desc">
            A Next.js (Server-side React) app that fetches product data from
            WooCommcere.
          </p>
        </a>
      </div>

      <div className="work-project open-source">
        <a
          href="https://github.com/m-muhsin/woosesh-store"
          style={{ color: 'white', textAlign: 'left' }}
        >
          <h3 className="open-source-title">woosesh-store</h3>
          <p className="open-source-desc">
            A React Native app that fetches product data from WooCommerce and
            uses Context API for cart management.
          </p>
        </a>
      </div>

      <div className="work-project open-source">
        <a
          href="https://github.com/laccadive-io/testimonials-slider-block"
          style={{ color: 'white', textAlign: 'left' }}
        >
          <h3 className="open-source-title">testimonials-slider-block</h3>
          <p className="open-source-desc">
            Allows you to add a testimonials slider block to the WordPress
            Gutenberg Editor.
          </p>
        </a>
      </div>

      <div className="work-project open-source">
        <a
          href="https://github.com/m-muhsin/gatsby-dark-mode"
          style={{ color: 'white', textAlign: 'left' }}
        >
          <h3 className="open-source-title">gatsby-dark-mode</h3>
          <p className="open-source-desc">
            Demo of how to use React Context API with Gatsby.
          </p>
        </a>
      </div>
    </section>

    <h2 className="section-title">Featured On</h2>
    <p>
      I was fortunate to be featured on these publications for my work.
    </p>
    <section className="projects-container">
      <div className="work-project">
        <a href="https://wptavern.com/gatsby-wordpress-themes-project-partners-with-theme-shops-to-port-popular-themes-to-gatsby">
          <img
            className="work-logo"
            src={require('../images/wp-tavern.png')}
            alt="WP Tavern"
          />
        </a>
      </div>
      <div className="work-project">
        <a href="https://poststatus.com/footnotes/muhammad-muhsin-wrote-a-tutorial-about/">
          <img
            className="work-logo"
            src={require('../images/post-status.png')}
            alt="Post Status"
          />
        </a>
      </div>
    </section>
  </>
)
