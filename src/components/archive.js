import React from 'react'
import { graphql } from 'gatsby'

const Archive = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <aside>
      <h3>Archive</h3>
      {posts.map(({ node }) => {
        const fm = node.frontmatter
        return <li key={node.id}>{fm.title}</li>
      })}
    </aside>
  )
}

export default Archive

export const postQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
