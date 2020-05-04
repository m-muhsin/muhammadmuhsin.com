import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import stripHtml from '../../utils/strip-html'
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

  const maxLength = 240 // maximum number of characters to extract

  // getting the excerpt to a variable
  let excerptText = excerpt

  // if excerpt does not exist
  if (!excerptText) {
    // getting the first 240 characters off content
    excerptText = content.substr(0, maxLength)

    // so that a word is not chopped off halfway
    excerptText = content
      .substr(0, Math.min(excerptText.length, excerptText.lastIndexOf(' ')))
      .concat('...')
  }

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
          <PostHeaderMeta date={date} categories={categories} tags={tags} />
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
  query RelatedPosts($relatedPosts: [Int]) {
    allWpPost(filter: { databaseId: { in: $relatedPosts } }) {
      nodes {
        databaseId
        title
        slug
        excerpt
      }
    }
  }
`

export default SinglePost
