import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import Search from './search'

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: 'nav-active' } : null

const Header = ({ siteTitle }) => (
  <header className="main-header">
    <div className="title-nav-container">
      <Link to="/">
        <img
          src={require('../images/muhammad_full.svg')}
          alt="muhammad muhsin logo"
          className="title-logo full"
        />
      </Link>
      <ul className="nav-menu" id="menu">
        <li className="nav-item">
          <Search />
        </li>
        <li className="nav-item">
          <Link
            to="/blog/"
            activeClassName="nav-active"
            getProps={isPartiallyActive}
          >
            Articles
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/about/"
            activeClassName="nav-active"
            getProps={isPartiallyActive}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/contact/"
            activeClassName="nav-active"
            getProps={isPartiallyActive}
          >
            Contact
          </Link>
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
