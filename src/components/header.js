import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header className="main-header">
    <div className="title-nav-container">
      <Link to="/">
        <img
          src={require('../images/muhammad-muhsin-logo.svg')}
          alt="muhammad muhsin logo"
          className="title-logo"
        />
      </Link>
      <ul className="nav-menu" id="menu">
        <li className="nav-item">
          <Link to="/contact/" activeClassName="nav-active">
            Contact
          </Link>
        </li>

        <li className="nav-item">
          <a
            href="http://mtwoblog.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Blog ❯
          </a>
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
