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
    <h1 className="main-title">
      Full Stack Engineer, Writer, Speaker and Open Source Contributor
    </h1>
    <p>
      Hi!{' '}
      <span role="img" aria-label="hi">
        👋
      </span>{' '}
      I'm a freelance developer focusing on front-end technologies. I work with
      React, React Native, WordPress, Gatsby, GraphQL and Next.js.
      <br />
      Find out more about <Link to="/work">my work</Link> or{' '}
      <Link to="/contact">get in touch with me!</Link>
    </p>
    <Testimonials />
  </Layout>
)

export default IndexPage

const Testimonials = () => (
  <div className="testimonials">
    <h2 style={{ marginTop: 20 }}>
      Folks have said good things about my work!
    </h2>
    <blockquote className="quote">
      <p className="testimonial-text">
        Muhammad is a real pleasure to work with. He is really kind, patient,
        and aspiring to find the best solution. I really appreciate his honest
        desire to keep learning new skills.{' '}
        <strong>
          He is doing a great job taking us, at Jatstudio, to the next level
          with React and GatsbyJS.
        </strong>{' '}
        I would not hesitate to recommend working with Muhammad to anybody.
      </p>
      <cite className="testimonial-author">
        <h3 style={{ marginBottom: 5 }}>Javier Llinás</h3>
        <p>CEO, Jatstudio</p>
      </cite>
      <img
        className="testimonial-logo"
        src={require('../images/jatstudio.svg')}
        alt="Jatstudio"
      />
    </blockquote>
    <blockquote className="quote">
      <p className="testimonial-text">
        Muhammad is an excellent, reliable author. He has a keen passion for all
        things tech and is{' '}
        <strong>extremely knowledgeable about the web industry.</strong> A
        pleasure to work with!
      </p>
      <cite className="testimonial-author">
        <h3 style={{ marginBottom: 5 }}>Iris Lješnjanin</h3>
        <p>Senior Editor, Smashing Magazine</p>
      </cite>
      <img
        className="testimonial-logo"
        src={require('../images/smashing-magazine.svg')}
        alt="Smashing Magazine"
      />
    </blockquote>
  </div>
)
