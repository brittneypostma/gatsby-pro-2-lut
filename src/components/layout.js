/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
import Archive from './archive'
import './layout.css'

const Wrapper = styled.div`
  max-width: 90%;
  margin: 1rem auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`

const LayoutWrapper = styled.div`
  min-height: 100%;
  margin-bottom: -25px;
`

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <LayoutWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper>
          <main>{children}</main>
          <Archive />
        </Wrapper>
      </LayoutWrapper>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
