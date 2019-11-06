import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Work from '../components/work'
import Writing from '../components/writing'
import Speaking from '../components/speaking'
import OpenSource from '../components/open-source'
import Featured from '../components/featured'
import Testimonials from '../components/testimonials'

const IndexPage = () => (
  <Layout location="home">
    <SEO
      title="Home"
      keywords={[
        `muhammad muhsin`,
        `full stack developer`,
        `wordpress`,
        `react`,
      ]}
    />
    <Intro />
    <Work />
    <Writing />
    <Speaking />
    <OpenSource />
    <Featured />
    <Testimonials />
    <Contact />
  </Layout>
)

export default IndexPage

const Intro = () => (
  <>
    <h1 className="main-title">
      Full Stack Engineer, Writer, Speaker and Open Source Contributor
    </h1>
    <p>
      Hi there{' '}
      <span role="img" aria-label="hi">
        👋
      </span>{' '}
      I'm a software consultant focusing on front-end technologies. I
      work with React, WordPress, Gatsby, Next.js and React Native. 
      I currently work remotely as Senior React Developer at rtCamp - a WordPress VIP Agency from India.
    </p>
    <p>
      Feel free to check out my <Link to="/blog">blog posts</Link> or{' '}
      <Link to="/contact">get in touch with me!</Link>
    </p>
    <div style={{ textAlign: 'center' }}>
      <a href="https://2019.us.wordcamp.org/speaker/muhammad-muhsin" target="_blank" rel="noopener noreferrer">
        <img style={{ width: 340 }} src={require('../images/Speaking.png')} alt="WordCamp US 2019 Speaker" />
      </a>
    </div>
  </>
)

const Contact = () => (
  <section>
    <h2 className="section-title">Talk to me!</h2>
    <p>
      I hope you are now interested in hiring me for your next project. You can
      also contact me for writing and speaking opportunities.
    </p>
    <div
      style={{
        textAlign: 'center',
      }}
    >
      <Link className="contact-button" to="/contact">
        Contact ➜
      </Link>
    </div>
  </section>
)
