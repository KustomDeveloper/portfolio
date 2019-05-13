import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
    <h1 className="logo">My Portfolio</h1>
      <nav>
        <Link to="/about-me/">About Me</Link> |
        <Link to="/news/">News</Link> | 
        <Link to="/contact/">Contact Me</Link>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `portfolio`,
}

export default Header
