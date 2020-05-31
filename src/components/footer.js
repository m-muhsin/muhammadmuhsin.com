import React from 'react'

const Footer = () => (
  <footer className="site-footer">
    <a
      href="https://twitter.com/muhsinlk?ref_src=twsrc%5Etfw"
      data-size="large"
      className="twitter-follow-button"
    >
      Follow @muhsinlk
    </a>
    <hr style={{ borderStyle: 'dashed' }} />
    On the shoulders of{' '}
    <a href="https://www.gatsbyjs.org/" style={{ color: '#8a4baf' }}>
      Gatsby
    </a>
    ,{' '}
    <a href="https://www.wordpress.org/" style={{ color: '#21759b' }}>
      WordPress
    </a>
    ,{' '}
    <a href="https://wpgraphql.com/" style={{ color: '#f88f1e' }}>
      WPGraphQL
    </a>
    ,{' '}
    <a href="https://www.apollographql.com/" style={{ color: '#311c87' }}>
      Apollo
    </a>{' '}
    and more.
    <hr style={{ borderStyle: 'dashed' }} />
    <div>© Muhammad Muhsin, {new Date().getFullYear()}</div>
  </footer>
)

export default Footer
