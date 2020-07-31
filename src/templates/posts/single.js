import React from 'react'
import { graphql, Link } from 'gatsby'
import striptags from 'striptags'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import getExcerpt from '../../utils/get-excerpt'
import PostHeaderMeta from '../../components/post-header-meta'
import Comments from '../../components/comments'

const SinglePost = (props) => {
  const {
    pageContext: {
      id,
      databaseId,
      title,
      content,
      excerpt,
      categories,
      tags,
      date,
    },
    data,
  } = props

  const excerptText = getExcerpt(excerpt, content)

  return (
    <Layout classNames="styled-text">
      <SEO title={title} description={striptags(excerptText)} image={data?.wpPost?.featuredImage?.node?.sourceUrl} />
      <article
        data-id={id}
        id={`post-${databaseId}`}
        className={`post-${databaseId} post type-post status-publish format-standard hentry entry`}
      >
        <header className="entry-header">
          <h1
            className="entry-title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <PostHeaderMeta
            date={date}
            categories={categories}
            tags={tags}
            excerptText={excerptText}
            featuredImage={data.wpPost.featuredImage}
          />
        </header>

        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <footer className="entry-footer" />
      </article>

      <section className="jp-relatedposts">
        <h3>Related</h3>
        <div className="jp-relatedposts-grid">
          {data?.allWpPost?.nodes?.map((post) => (
            <article key={post.databaseId}>
              <Link to={`/blog/${post.slug}`}>
                <h4 dangerouslySetInnerHTML={{ __html: post.title }} />
              </Link>
              <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
            </article>
          ))}
        </div>
      </section>

      <Comments id={id} databaseId={databaseId} />
    </Layout>
  )
}

export const query = graphql`
  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        tracedSVG
      }
    }
  }
  query RelatedPosts($relatedPosts: [Int], $databaseId: Int) {
    allWpPost(filter: { databaseId: { in: $relatedPosts } }) {
      nodes {
        databaseId
        title
        slug
        excerpt
      }
    }
    wpPost(databaseId: { eq: $databaseId }) {
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

export default SinglePost
