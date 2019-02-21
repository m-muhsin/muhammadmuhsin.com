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
        <a href="https://www.techgrapher.com/">
          <img
            className="work-logo"
            src={require('../images/TechGrapher-logo.png')}
            alt="Techgrapher"
          />
        </a>
        <p>Front-End Development</p>
        <div className="project-technologies">
          <span>WordPress</span>
        </div>
      </div>
      <div className="work-project">
        <a href="https://www.smashingmagazine.com/author/muhammad-muhsin/">
          <img
            className="work-logo"
            src={require('../images/smashing-magazine.svg')}
            alt="Smashing Magazine"
          />
        </a>
        <p>Writing, Reviewing</p>

        <div className="project-technologies">
          <span>WordPress</span> <span>Gutenberg</span> <span>React</span>{' '}
          <span>React Native</span>
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
        <p>Writing</p>
        <div className="project-technologies">
          <span>React</span> <span>Gatsby</span> <span>Context API</span>
        </div>
      </div>
    </section>
  </Layout>
)

export default WorkPage
