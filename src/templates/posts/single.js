import React from 'react'
import { graphql, Link } from 'gatsby'
import he from 'he'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import stripHtml from '../../utils/strip-html'
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
    <Layout classNames="blog">
      <SEO title={title} description={stripHtml(excerptText)} />
      <article
        data-id={id}
        id={`post-${databaseId}`}
        className={`post-${databaseId} post type-post status-publish format-standard hentry category-react tag-accessibility tag-gatsby entry`}
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
          />
          {data?.wpPost?.featuredImage?.sourceUrl ? (
            <img
              style={{ margin: 'auto' }}
              src={data.wpPost.featuredImage.sourceUrl}
              alt={
                data?.wpPost?.featuredImage?.altText
                  ? data.wpPost.featuredImage.altText
                  : he.decode(title)
              }
            />
          ) : (
            ''
          )}
        </header>

        <div
          className="entry-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        {/* .entry-content */}

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
        sourceUrl
        altText
      }
    }
  }
`

export default SinglePost
