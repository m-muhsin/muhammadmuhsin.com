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
    © Muhammad Muhsin, {new Date().getFullYear()}
  </footer>
)

export default Footer
