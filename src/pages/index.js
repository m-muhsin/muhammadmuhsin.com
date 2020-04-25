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
import SpeakingWCAsia from '../components/images/speaking-wcasia'
import SpeakingWCUS from '../components/images/speaking-wcus'

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
      Full Stack Engineer, Writer, Speaker and Open Source Contributor{' '}
      <span role="img" aria-label="programmer with laptop">
        👨‍💻
      </span>
    </h1>
    <h3>
      Hello there{' '}
      <span role="img" aria-label="hi">
        👋
      </span>{' '}
    </h3>
    <p>
      I'm a software engineer focusing on front-end technologies. I primarily
      work with WordPress and React (Gatsby | Next.js). I currently work
      remotely as Senior React Developer at rtCamp - a WordPress VIP Gold
      Parnter Agency.
    </p>
    <p>
      Feel free to check out my <Link to="/blog">blog posts</Link> or{' '}
      <Link to="/contact">get in touch with me!</Link>
    </p>
    <div className="speaking-box-container">
      <a
        href="https://2020.asia.wordcamp.org/speaker/muhammad-muhsin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SpeakingWCAsia />
      </a>
      <a
        href="https://2019.us.wordcamp.org/speaker/muhammad-muhsin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SpeakingWCUS />
      </a>
    </div>
  </>
)

const Contact = () => (
  <section>
    <h2 className="section-title">Talk to me!</h2>
    <p>
      I hope you are now interested in hiring me for your next project. You can
      also contact me for writing, speaking, and training opportunities.
    </p>
    <div className="text-center">
      <Link className="contact-button" to="/contact">
        Contact ➜
      </Link>
    </div>
  </section>
)
