import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'

// Static Query
// Used anywhere, doesn't accept variable, can't use context

// Page Query
// Must be used on pages

const Post = styled.div`
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    font-size: 1.2rem;
    padding-bottom: 2px;
    border-bottom: 1px solid rebeccapurple;
  }
  h1 {
    margin: 1rem auto 0;
  }

  h2 {
  }
  span {
    font-size: 0.8rem;
  }
`

const HTML = styled.div`
  margin-top: 1rem;
`

const PostLayout = ({ data, location }) => {
  const { markdownRemark } = data
  return (
    <Layout location={location}>
      <Post>
        <Link to="/">go back</Link>
        <h1>{markdownRemark.frontmatter.title}</h1>
        <span>{markdownRemark.frontmatter.date}</span>
        <HTML
          dangerouslySetInnerHTML={{
            __html: markdownRemark.html,
          }}
        ></HTML>
      </Post>
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
