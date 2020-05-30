import React from 'react'
import { Link } from 'gatsby'
import SpeakingWCAsia from './images/speaking-wcasia'
import SpeakingWCUS from './images/speaking-wcus'
import DecoupledBlogLogo from './images/decoupled-blog-logo'
import Headshot from '../../components/images/headshot'

const Intro = () => (
  <>
    <section class="intro">
      <div className="muhammad-photo muhammad-photo--home">
        <Headshot className="muhammad-photo muhammad-photo--home" />
      </div>
      <div>
        <h1 className="main-title">Hi, I'm Muhammad Muhsin.</h1>
        <h3>
          Full Stack Engineer, Writer, Speaker, and Open Source Contributor.
        </h3>
      </div>
    </section>
    <p className="bigger-text">
      I mostly work with React and WordPress. I love the{' '}
      <a href="https://jamstack.org/" target="_blank" rel="noopener noreferrer">
        <strong>Jamstack</strong>
      </a>{' '}
      and advocating for it!
    </p>
    <p className="bigger-text">
      I am an{' '}
      <a href="https://rtcamp.com/" target="_blank" rel="noopener noreferrer">
        rtCamper
      </a>{' '}
      and a Senior React Developer.
    </p>
    <p className="bigger-text">
      Feel free to check out my{' '}
      <Link className="text-link" to="/blog">
        blog posts
      </Link>{' '}
      or{' '}
      <Link className="text-link" to="/contact">
        get in touch with me!
      </Link>
    </p>
    <div className="speaking-box-container">
      <a
        href="https://decoupled.blog"
        aria-label="Decoubled Blog"
        title="Visit Decoubled Blog"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DecoupledBlogLogo />
      </a>
      <a
        href="https://2020.asia.wordcamp.org/speaker/muhammad-muhsin"
        aria-label="WordCamp Asia 2020 Speaker Muhammad Muhsin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SpeakingWCAsia />
      </a>
      <a
        href="https://2019.us.wordcamp.org/speaker/muhammad-muhsin"
        aria-label="WordCamp US 2019 Speaker Muhammad Muhsin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SpeakingWCUS />
      </a>
    </div>
  </>
)

export { Intro }
