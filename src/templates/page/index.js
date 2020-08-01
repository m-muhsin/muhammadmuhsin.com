import React from 'react'
import { graphql } from 'gatsby'
import he from 'he'
import Img from 'gatsby-image'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const SinglePage = ({ pageContext, data }) => (
  <Layout classNames="styled-text">
    <SEO title={pageContext.title} description={pageContext.title} image={data?.wpPage?.featuredImage?.node?.sourceUrl} />
    <article className="post type-page status-publish format-standard hentry entry">
      <header className="entry-header">
        <h1 className="entry-title">{he.decode(pageContext.title)}</h1>
        {data?.wpPage?.featuredImage &&
        !!data.wpPage.featuredImage.node &&
        !!data.wpPage.featuredImage.node.localFile &&
        !!data.wpPage.featuredImage.node.localFile.childImageSharp && (
          <Img fluid={data.wpPage.featuredImage.node.localFile.childImageSharp.fluid} alt={data.wpPage.featuredImage.node.altText} />
        )}
      </header>

      <div
        className="entry-content"
        dangerouslySetInnerHTML={{ __html: pageContext.content }}
      />
      {/* .entry-content */}

      <footer className="entry-footer" />
    </article>
  </Layout>
)

export const query = graphql`
fragment PageThumbnail on File {
  childImageSharp {
    fluid(maxWidth: 700) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
  query PageFeaturedImage($databaseId: Int) {
    wpPage(databaseId: { eq: $databaseId }) {
      featuredImage {
        node {
          localFile {
            ...PageThumbnail
          }
          sourceUrl
          altText
        }
      }
    }
  }
`

export default SinglePage
