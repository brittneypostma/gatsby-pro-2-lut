import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

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
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <aside>
        <h3>Archive</h3>
        <ul>
          {allMarkdownRemark.edges.map(({ node }) => {
            const fm = node.frontmatter
            return (
              <Link to={`/posts${node.frontmatter.slug}`}>
                <li key={node.id}>
                  <article>
                    <h3>{fm.title}</h3> <span>{fm.date}</span>
                    <p>{node.excerpt}</p>
                  </article>
                </li>
              </Link>
            )
          })}
        </ul>
      </aside>
    )}
  />
)

export default Archive
