import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: '0 auto 1.45rem',
      maxWidth: 1200,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        padding: `0.5rem 1.0875rem`,
      }}
    >
      <Link
        to="/"
        style={{
          textTransform: 'uppercase',
          textDecoration: `none`,
        }}
      >
        <img
          src={require('../images/muhammad-muhsin-logo.svg')}
          alt="muhammad muhsin logo"
          style={{
            width: 180,
            marginBottom: 0,
          }}
        />
      </Link>
      <ul className="nav-menu" id="menu">
        <li className="nav-item">
          <Link to="/work/" activeClassName="nav-active">Work</Link>
        </li>

        <li className="nav-item">
          <Link to="/contact/" activeClassName="nav-active">Contact</Link>
        </li>

        <li className="nav-item">
          <a href="http://mtwoblog.com/">Blog</a>
        </li>

        <li style={{ display: 'none' }} className="nav-item dark-switch">
          switch
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
