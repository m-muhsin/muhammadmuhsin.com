import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ExplorerDevCommunityImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "Explorer-Dev-Community.png" }) {
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
      <Img className="gatsby-image-logo" fluid={data.placeholderImage.childImageSharp.fluid} alt="Explorer Dev Community" />
    </div>
  )
}

export default ExplorerDevCommunityImage
