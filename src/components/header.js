import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const isPartiallyActive = ({ isPartiallyCurrent }) =>
  isPartiallyCurrent ? { className: 'nav-active' } : null

const Header = ({ siteTitle }) => (
  <header className="main-header">
    <div className="title-nav-container">
      <Link to="/">
        <img
          src={require('../images/muhammad_monogram.svg')}
          alt="muhammad muhsin logo"
          className="title-logo monogram"
        />
        <img
          src={require('../images/muhammad_type.svg')}
          alt="muhammad muhsin logo"
          className="title-logo type"
        />
      </Link>
      <ul className="nav-menu" id="menu">
        <li className="nav-item">
          <Link
            to="/blog/"
            activeClassName="nav-active"
            getProps={isPartiallyActive}
          >
            Blog
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
