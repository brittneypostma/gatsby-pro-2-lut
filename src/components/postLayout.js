import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const PostLayout = ({ data }) => {
  const { markdownRemark } = data
  return (
    <Layout>
      <h1>{markdownRemark.frontmatter.title}</h1>
      <span>{markdownRemark.frontmatter.date}</span>
      <div
        dangerouslySetInnerHTML={{
          __html: markdownRemark.html,
        }}
      ></div>
    </Layout>
  )
}

export default PostLayout

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
