import React from 'react'
import Posts from '../components/posts'
import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <Posts />
  </Layout>
)

export default IndexPage
