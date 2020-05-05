import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const WcAsia2020Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "wcasia-2020-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div className="" >
      <Img className="" style={{ height: 80, width: 320 }} fluid={data.placeholderImage.childImageSharp.fluid} alt="WordCamp Asia 2020" />
    </div>
  )
}

export default WcAsia2020Logo
