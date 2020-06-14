import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`

const Aside = styled.aside`
  text-align: right;
  height: auto;

  & h3,
  ul {
    margin: 0;
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <Aside>
        <h3>Archive</h3>
        <ul>
          {allMarkdownRemark.edges.map(({ node }) => {
            return (
              <Link to={`/posts${node.frontmatter.slug}`}>
                <li key={node.id}>{node.frontmatter.title}</li>
              </Link>
            )
          })}
        </ul>
      </Aside>
    )}
  />
)

export default Archive
