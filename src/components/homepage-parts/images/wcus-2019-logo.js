import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const WCUS2019Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "wcus-2019-logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div className="">
      <Img className="" style={{ height: 80, width: 320 }} fluid={data.placeholderImage.childImageSharp.fluid} alt="WCUS 2019" />
    </div>
  )
}

export default WCUS2019Logo
