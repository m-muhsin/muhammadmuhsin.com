import React from 'react'
import { Link } from 'gatsby'
import SpeakingWCAsia from './images/speaking-wcasia'
import SpeakingWCUS from './images/speaking-wcus'
import DecoupledBlogLogo from './images/decoupled-blog-logo'

const Intro = () => (
  <>
    <h1 className="main-title">
      Full Stack Engineer, Writer, Speaker, and Open Source Contributor{' '}
      <span role="img" aria-label="programmer with laptop">
        👨‍💻
      </span>
    </h1>
    <h4>
      Hi, my name is Muhammad Muhsin{' '}
      <span role="img" aria-label="hi">
        👋
      </span>
    </h4>
    <p className="bigger-text">
      I am a software engineer focusing on front-end technologies. I primarily
      work with WordPress and React (Gatsby | Next.js).
    </p>
    <p className="bigger-text">
      I currently work remotely as Senior React Developer at rtCamp - a
      WordPress VIP Gold Partner Agency.
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
