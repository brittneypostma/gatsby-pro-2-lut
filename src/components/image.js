import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { useSpring, animated } from 'react-spring'

const Image = () => {
  const styleProps = useSpring({
    overflow: 'hidden',
    opacity: 1,
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  })
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <animated.div style={styleProps}>
      <Img
        alt="laptop with a person typing"
        fluid={data.placeholderImage.childImageSharp.fluid}
        style={{
          height: '300px',
          boxShadow: `0 4px 8px 0px rgba(1, 1, 1, 0.5)`,
        }}
      />
    </animated.div>
  )
}

export default Image

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
