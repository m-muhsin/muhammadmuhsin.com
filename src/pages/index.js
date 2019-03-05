import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import WorkSection from '../components/work-section'

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
    <Intro />
    <Testimonials />
    <WorkSection />
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
      Hi!{' '}
      <span role="img" aria-label="hi">
        👋
      </span>{' '}
      I'm a freelance developer currently focusing on front-end technologies. I
      work with React, WordPress, Gatsby, Next.js and React Native.
      <br />
      Find out more about <Link to="/work">my work</Link> or{' '}
      <Link to="/contact">get in touch with me!</Link>
    </p>
  </>
)

const Testimonials = () => (
  <div className="testimonials">
    <h2 style={{ marginTop: 20 }}>
      Folks have said good things about my work!
    </h2>
    <blockquote className="testimonial-box">
      <p className="testimonial-text">
        Muhammad is a creative and dedicated problem solver.{' '}
        <strong>
          He has experience with many different web technologies and is able to
          address any problem with the appropriate technology
        </strong>
        . He's able to pick up new technologies very quick, such as GraphQL and
        Gatsby, and produce great work with them quickly. He's a great
        communicator and while he's great at solving problems on his own, he's
        also great at collaborating. I enjoy working with Muhammad!
      </p>
      <cite className="testimonial-author">
        <h3 style={{ marginBottom: 5 }}>Jason Bahl</h3>
        <p>Creator, WPGraphQL</p>
      </cite>
      <img
        style={{
          width: 100,
        }}
        className="testimonial-logo"
        src={require('../images/wpgraphql.png')}
        alt="WPGraphQL"
      />
    </blockquote>
    <blockquote className="testimonial-box">
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
    <blockquote className="testimonial-box">
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

const Contact = () => (
  <section>
    <h2 className="section-title">Talk to me!</h2>
    <p>I hope you are now interested in hiring me for your next project.</p>
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
