import React from 'react'

const Footer = () => (
  <footer className="site-footer">
    <div>
      <a
        href="https://twitter.com/muhsinlk?ref_src=twsrc%5Etfw"
        data-size="large"
        className="twitter-follow-button"
      >
        Follow @muhsinlk
      </a>
    </div>
    <a href="https://www.gatsbyjs.org/" style={{ color: '#8a4baf' }}>
      Built with <span role="img" aria-label="love">♥️</span> and Gatsby!
    </a>
    <div>© Muhammad Muhsin, {new Date().getFullYear()}</div>
  </footer>
)

export default Footer
