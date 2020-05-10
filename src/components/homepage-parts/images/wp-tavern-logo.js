import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const WPTavernLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "wp-tavern.png" }) {
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
      <Img className="gatsby-image-logo" fluid={data.placeholderImage.childImageSharp.fluid} alt="WP Tavern" />
    </div>
  )
}

export default WPTavernLogo
