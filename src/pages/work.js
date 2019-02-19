import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const WorkPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1 style={{ fontSize: '2em' }}>The projects I've worked on so far</h1>
    <section
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
      }}
    >
      <div
        style={{
          maxWidth: 400,
          padding: 20,
          textAlign: 'center',
        }}
      >
        <img
          className="work-logo"
          src={require('../images/CaseFora-logo.png')}
          alt="Casefora"
        />
        <p>Front-End & Back-End Development</p>
        <p>React, Redux, WordPress, Jetpack Elasticsearch</p>
      </div>

      <div
        style={{
          maxWidth: 400,
          padding: 20,
          textAlign: 'center',
        }}
      >
        <img
          className="work-logo"
          src={require('../images/LexCampus-logo.png')}
          alt="LexCampus"
        />
        <p>Front-End Development</p>
        <p>WordPress, Learndash, WooCommerce</p>
      </div>
      <div
        style={{
          maxWidth: 400,
          padding: 20,
          textAlign: 'center',
        }}
      >
        <img
          className="work-logo"
          src={require('../images/TechGrapher-logo.png')}
          alt="Techgrapher"
        />
        <p>Front-End Development</p>
        <p>WordPress</p>
      </div>
      <div
        style={{
          maxWidth: 400,
          padding: 20,
          textAlign: 'center',
        }}
      >
        <img
          className="work-logo"
          src={require('../images/smashing-magazine.svg')}
          alt="Techgrapher"
        />
        <p>Writing, Reviewing</p>
        <p>WordPress, Gutenberg, WooCommerce, React, React Native</p>
      </div>
      <div
        style={{
          maxWidth: 400,
          padding: 20,
          textAlign: 'center',
        }}
      >
        <img
          className="work-logo"
          src={require('../images/gatsby-icon.png')}
          alt="Techgrapher"
        />
        <p>Writing</p>
        <p>React, Context API, Gatsby</p>
      </div>
    </section>
  </Layout>
)

export default WorkPage
