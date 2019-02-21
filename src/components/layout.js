import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto 1.45rem',
            paddingTop: 0,
            clear: 'right',
          }}
        >
          <main style={{ padding: '0.5rem 1.0875rem' }}>{children}</main>
          <footer style={{ padding: '0.5rem 1.0875rem', textAlign: 'center' }}>
            © Muhammad Muhsin <br /> {new Date().getFullYear()}, Built with{' '}
            <i className="fa fa-heart" /> and
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
