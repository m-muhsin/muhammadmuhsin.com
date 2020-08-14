import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const DecoupledBlogLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "decoupled-blog.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <div className="speaking-box">
      <Img className="speaking-img" fluid={data.placeholderImage.childImageSharp.fluid} alt="Decoupled.Blog" />
    </div>
  )
}

export default DecoupledBlogLogo
