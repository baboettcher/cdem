import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = (props) => {
  const { path } = props
  console.log("path:", path)
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "cyp.jpg" }) {
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
