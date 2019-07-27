import React from 'react'

export default () => (
  <>
    <h2>Trusted By</h2>
    <p>
      I have been working with big and small companies doing React and WordPress.
      I cannot talk about some of my best work due to non disclosure agreements.
      Here are some of them.
    </p>
    <section className="projects-container">
      <div className="work-project">
        <a href="https://www.rtcamp.com/">
          <img
            className="work-logo"
            src={require('../images/rtCamp-Logo.png')}
            alt="rtCamp"
          />
        </a>
        <div className="project-technologies">
          <span>React</span> <span>WordPress</span> <span>VIP</span>
        </div>
      </div>
      <div className="work-project">
        <a href="https://www.capbase.com/">
          <img
            className="work-logo"
            src={require('../images/capbase.png')}
            alt="Capbase"
          />
        </a>
        <div className="project-technologies">
          <span>React</span> <span>GraphQL</span> <span>AWS</span>
        </div>
      </div>
      <div className="work-project">
        <a href="https://www.learndash.com/">
          <img
            className="work-logo"
            src={require('../images/LearnDash.png')}
            alt="LearnDash"
          />
        </a>
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
        <div className="project-technologies">
          <span>React</span> <span>Gatsby</span> <span>WordPress</span>{' '}
        </div>
      </div>
      <div className="work-project">
        <a href="https://www.simplur.com/">
          <img
            className="work-logo"
            src={require('../images/simplur.svg')}
            alt="Simplur"
          />
        </a>
        <div className="project-technologies">
          <span>React</span> <span>Gatsby</span> <span>WordPress</span> <span>WooCommerce</span>{' '}
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
      <div className="work-project">
        <a href="https://blog.logrocket.com/author/muhammadmuhsin/">
          <img
            className="work-logo"
            src={require('../images/logrocket.png')}
            alt="LogRocket"
          />
        </a>
        <div className="project-technologies">
          <span>React</span> <span>SSR</span>
        </div>
      </div>
    </section>

    <h2 className="section-title">Speaking</h2>
    <p>
      I also speak at conferences and meetups.
    </p>
    <section className="projects-container">
      <div className="work-project">
        <a href="https://javascriptforwp.com/conference/">
          <img
            className="work-logo"
            src={require('../images/2019-js-for-wp-conference-logo.png')}
            alt="JS for WP Conf 2019"
          />
        </a>
          <h4 style={{ marginBottom: 10 }}>JS for WP Conf 2019</h4>
          <h5  style={{ marginBottom: 10 }}>Server Side React for WordPress</h5>
          <div className="project-technologies">
            <span>July 12, 2019</span> <span><a style={{ color: 'black', fontWeight: 'bold' }} href="https://www.slideshare.net/rtcamp/server-side-react-for-wordpress-by-muhammad-muhsin-the-javascript-for-wordpress-conference-jsforwpconf-12-jul-2019">Slides</a></span>
          </div>
      </div>
      <div className="work-project">
        <a href="https://www.meetup.com/GatsbyJS-Montreal-Meetup/events/261575408/">
          <img
            className="work-logo"
            src={require('../images/gatsby-icon.png')}
            alt="Gatsby"
          />
        </a>
          <h4 style={{ marginBottom: 10 }}>GatsbyJS Montréal Meetup #1</h4>
          <h5  style={{ marginBottom: 10 }}>Building with Gatsby and WordPress</h5>
          <div className="project-technologies">
            <span>July 12, 2019</span> <span><a style={{ color: 'black', fontWeight: 'bold' }} href="https://gatsbyjs-montreal-meetup.muhammad.dev">Slides</a></span>
          </div>
      </div>
      <div className="work-project">
        <a href="https://woosesh.com/">
          <img
            className="work-logo"
            src={require('../images/WooSesh-2018-Logo.png')}
            alt="Gatsby"
          />
        </a>
          <h4 style={{ marginBottom: 10 }}>WooSesh 2018</h4>
          <h5  style={{ marginBottom: 10 }}>Creating a WooCommerce Mobile App with React Native</h5>
          <div className="project-technologies">
            <span>October 18, 2018</span> <span><a style={{ color: 'black', fontWeight: 'bold' }} href="https://docs.google.com/presentation/d/1TKkt9M8RViageCS7whYPafjVdmLtgNQ2Bd9taCLjrLU/present">Slides</a></span>
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
          href="https://github.com/rtCamp/wp-decoupled"
          style={{ color: 'white', textAlign: 'left' }}
        >
          <h3 className="open-source-title">wp-decoupled</h3>
          <p className="open-source-desc">
            An app using WordPress, WPGraphQL and Next.js.
          </p>
        </a>
      </div>
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
