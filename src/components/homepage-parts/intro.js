import React from 'react'
import { Link } from 'gatsby'
import SpeakingWCAsia from '../../components/images/speaking-wcasia'
import SpeakingWCUS from '../../components/images/speaking-wcus'

const Intro = () => (
  <>
    <h1 className="main-title">
      Full Stack Engineer, Writer, Speaker and Open Source Contributor{' '}
      <span role="img" aria-label="programmer with laptop">
        👨‍💻
      </span>
    </h1>
    <h3>
      Hi there{' '}
      <span role="img" aria-label="hi">
        👋
      </span>{' '}
    </h3>
    <p className="bigger-text">
      I'm Muhammad, a software engineer focusing on front-end technologies. I
      primarily work with WordPress and React (Gatsby | Next.js).
    </p>
    <p className="bigger-text">
      I currently work remotely as Senior React Developer at rtCamp - a
      WordPress VIP Gold Parnter Agency.
    </p>
    <p className="bigger-text">
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

export { Intro }
