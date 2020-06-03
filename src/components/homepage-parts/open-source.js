import React from 'react'

const OpenSource = () => (
  <>
    <h2 className="section-title">Open Source</h2>
    <p>
      I'm a WordPress Core and Gatsby Core Contributor. Here are a few other open-source projects I have contributed to:
    </p>
    <section className="projects-container">

      <div className="work open-source">
        <a
          href="https://github.com/m-muhsin/gatsby-wp-graphql-apollo"
          style={{ color: 'white', textAlign: 'left' }}
        >
          <h3 className="open-source-title">gatsby-wp-graphql-apollo</h3>
          <p className="open-source-desc">
            A Gatsby site with a live connection with WordPress via WPGraphQL and Apollo.
          </p>
        </a>
      </div>

      <div className="work open-source">
        <a
          href="https://github.com/rtCamp/wp-decoupled"
          style={{ color: 'white', textAlign: 'left' }}
        >
          <h3 className="open-source-title">wp-decoupled</h3>
          <p className="open-source-desc">
            An eCommerce site using WordPress, WooCommerce, WPGraphQL and Next.js.
          </p>
        </a>
      </div>

      <div className="work open-source">
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
      <div className="work open-source">
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

      <div className="work open-source">
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

      <div className="work open-source">
        <a
          href="https://wordpress.org/plugins/testimonials-slider-block/"
          style={{ color: 'white', textAlign: 'left' }}
        >
          <h3 className="open-source-title">testimonials-slider-block</h3>
          <p className="open-source-desc">
            Allows you to add a testimonials slider block to the WordPress
            Gutenberg Editor.
          </p>
        </a>
      </div>
    </section>
  </>
)

export { OpenSource }
