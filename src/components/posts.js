import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

const POSTS_QUERY = graphql`
  query BlogPosts {
    allMarkdownRemark(
      limit: 10
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
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

const Post = styled.article`
  padding: 1rem;
  box-shadow: 0px 4px 8px rgba(7, 7, 7, 0.2);
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    margin: 0 auto 10px;
  }
  span {
    font-size: 0.8rem;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
  }
`

const Posts = () => (
  <StaticQuery
    query={POSTS_QUERY}
    render={({ allMarkdownRemark }) =>
      allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.frontmatter.slug}>
          <Link to={`/posts${node.frontmatter.slug}`}>
            <h2>{node.frontmatter.title}</h2>
          </Link>
          <span>{node.frontmatter.date}</span>
          <p>{node.excerpt}</p>
          <Link class="read-more" to={`posts${node.frontmatter.slug}`}>
            Read More
          </Link>
        </Post>
      ))
    }
  />
)

export default Posts
