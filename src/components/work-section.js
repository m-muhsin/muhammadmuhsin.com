import React from 'react'

export default () => (
  <>
    <h2>Featured client work</h2>
    <p>
      I cannot show some of my best work here due to non disclosure agreements.
      I have worked with enterprise clients and built multi-lingual sites for
      government organizations. Here are some of my latests works I'm allowed to
      display.
    </p>
    <section className="projects-container">
      <div className="work-project">
        <a href="https://www.casefora.com/">
          <img
            className="work-logo"
            src={require('../images/CaseFora-logo.png')}
            alt="Casefora"
          />
        </a>
        <p>Front-End & Back-End Development</p>
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
        <p>Front-End Development</p>
        <div className="project-technologies">
          <span>WordPress</span> <span>LearnDash</span>{' '}
          <span>React Native</span>
        </div>
      </div>
      <div className="work-project">
        <a href="https://www.minitreatslk.com/">
          <img
            className="work-logo"
            src={require('../images/minitreats-logo.png')}
            alt="Mini Treats"
          />
        </a>
        <p>Front-End Development</p>
        <div className="project-technologies">
          <span>Gatsby</span> <span>React</span>
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
    </section>

    <h2 className="section-title">Featured open source projects</h2>
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
            A Next.js (Server-side React) app that fetches product fata from
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
  </>
)