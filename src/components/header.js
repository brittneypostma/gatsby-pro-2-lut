import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import gatsbyLogo from '../images/gatsby-icon.png'

const HeaderContainer = styled.header`
  background: #444;
  box-shadow: 0 4px 8px 0px rgba(1, 1, 1, 0.5);

  & a {
    color: white;
    border: 1px solid transparent;
  }

  a:hover {
    border-bottom: 1px solid transparent;
  }
`

const HeaderWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderWrapper>
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={gatsbyLogo} alt="Gatsby Logo" style={{ width: '75px' }} />
        <h1 style={{ marginLeft: `20px` }}>{siteTitle}</h1>
      </Link>
    </HeaderWrapper>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
