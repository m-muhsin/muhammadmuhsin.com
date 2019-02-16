import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          textTransform: 'uppercase',
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
      <ul class="nav-menu" id="menu">
        <li class="nav-item">
          <a href="/work/">Work</a>
        </li>

        <li class="nav-item">
          <a href="/blog/">Blog</a>
        </li>

        <li class="nav-item">
          <a href="/contact/">Contact</a>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
