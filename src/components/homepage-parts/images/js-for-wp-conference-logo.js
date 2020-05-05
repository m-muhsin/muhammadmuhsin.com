import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const JSforWPConf2019Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "2019-js-for-wp-conference-logo.png" }) {
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
      <Img className="" style={{ height: 80, width: 320 }} fluid={data.placeholderImage.childImageSharp.fluid} alt="JS for WP Conf 2019" />
    </div>
  )
}

export default JSforWPConf2019Logo
