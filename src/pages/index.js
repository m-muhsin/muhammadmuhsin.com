import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `muhammad muhsin`,
        `full stack developer`,
        `wordpress`,
        `react`,
      ]}
    />
    <h1 style={{ fontSize: '2em' }}>
      Full Stack Engineer, Writer, Speaker and Open Source Contributor
    </h1>
    <p>
      I'm a freelance developer focusing on front-end technologies. I work with
      React, React Native, Gatsby, WordPress and Next.js.
      <br />
      Find out more about <Link to="/work">my work</Link> or{' '}
      <Link to="/contact">get in touch with me!</Link>
    </p>
    <Testimonials />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

const Testimonials = () => (
  <div className="testimonials">
    <blockquote className="quote">
      <p className="testimonial-text">
        Muhammad is an excellent, reliable author. He has a keen passion for all
        things tech and is extremely knowledgeable about the web industry. A
        pleasure to work with!
      </p>
      <h3>Iris Lješnjanin</h3>
      <p>Senior Editor, Smashing Magazine</p>
      <img
        className="testimonial-logo"
        src={require('../images/smashing-magazine.svg')}
        alt="Smashing Magazine"
      />
    </blockquote>
    <blockquote className="quote">
      <p className="testimonial-text">
        Muhammad is an excellent, reliable author. He has a keen passion for all
        things tech and is extremely knowledgeable about the web industry. A
        pleasure to work with!
      </p>
      <h3>Javier Llinás</h3>
      <p>CEO, Jatstudio</p>
      <img
        className="testimonial-logo"
        src={require('../images/jatstudio.svg')}
        alt="Jatstudio"
      />
    </blockquote>
  </div>
)
