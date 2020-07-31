import React from 'react'
import { graphql } from 'gatsby'
import he from 'he'
import Img from 'gatsby-image'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

const SinglePage = ({ pageContext, data }) => (
  <Layout classNames="styled-text">
    <SEO title={pageContext.title} description={pageContext.title} image={data?.wpPage?.featuredImage?.sourceUrl} />
    <article className="post type-page status-publish format-standard hentry entry">
      <header className="entry-header">
        <h1 className="entry-title">{he.decode(pageContext.title)}</h1>
        {data?.wpPage?.featuredImage &&
        !!data.wpPage.featuredImage.remoteFile &&
        !!data.wpPage.featuredImage.remoteFile.childImageSharp && (
          <Img fluid={data.wpPage.featuredImage.remoteFile.childImageSharp.fluid} alt={data.wpPage.featuredImage.altText} />
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
  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        tracedSVG
      }
    }
  }
  query PageFeaturedImage($databaseId: Int) {
    wpPage(databaseId: { eq: $databaseId }) {
      featuredImage {
        node {
          remoteFile {
            ...Thumbnail
          }
          sourceUrl
          altText
        }
      }
    }
  }
`

export default SinglePage
