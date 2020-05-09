import React from 'react'
import { graphql } from 'gatsby'
import he from 'he'
import Layout from '../../components/layout'
import SEO from '../../components/seo'

const SinglePage = ({ pageContext, data }) => (
  <Layout classNames="styled-text">
    <SEO title={pageContext.title} description={pageContext.title} />
    <article className="post type-page status-publish format-standard hentry entry">
      <header className="entry-header">
        <h1 className="entry-title">{he.decode(pageContext.title)}</h1>
        {data?.wpPage?.featuredImage?.sourceUrl ? (
          <img
            style={{ margin: 'auto' }}
            src={data.wpPage.featuredImage.sourceUrl}
            alt={
              data?.wpPage?.featuredImage?.altText
                ? data.wpPage.featuredImage.altText
                : he.decode(pageContext.title)
            }
          />
        ) : (
          ''
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
  query PageFeaturedImage($databaseId: Int) {
    wpPage(databaseId: { eq: $databaseId }) {
      featuredImage {
        sourceUrl
        altText
      }
    }
  }
`

export default SinglePage
