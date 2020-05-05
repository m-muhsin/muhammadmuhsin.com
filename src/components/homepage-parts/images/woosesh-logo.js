import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const WooSeshLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "WooSesh-2018-Logo.png" }) {
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
      <Img className="" style={{ height: 80, width: 320 }} fluid={data.placeholderImage.childImageSharp.fluid} alt="WooSesh 2019" />
    </div>
  )
}

export default WooSeshLogo
