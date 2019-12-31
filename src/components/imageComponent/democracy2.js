import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// democracy1
// https://www.freepik.com/free-vector/voting-election-concept-with-box_2954770.htm#page=1&query=democracy&position=4

const Image = (props) => {
  const { path } = props
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "demo2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
