import React from "react"
import { Link } from 'gatsby'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import PostHeaderMeta from '../../components/post-header-meta';

const BlogArchive = ({
  pageContext: { nodes, pageNumber, hasNextPage }
}) => {
  return (
    <Layout classNames="blog">
      <SEO title="Blog" description="A collection of posts by Muhammad" />
      <h1>Blog</h1>
      <div id="blog">
        {
          nodes && nodes.map(post => {
            const { id, databaseId, title, content, excerpt, slug, date, readingTime } = post
            const maxLength = 240 // maximum number of characters to extract

            // getting the excerpt to a variable
            let excerptText = excerpt

            // if excerpt does not exist
            if (!excerptText) {
              // getting the first 240 characters off content
              excerptText = content.substr(0, maxLength)

              // so that a word is not chopped off halfway
              excerptText = content
                .substr(0, Math.min(excerptText.length, excerptText.lastIndexOf(" ")))
                .concat("...")
            }
            return (
              <article
                className="post type-post status-publish format-standard hentry entry"
                data-id={id}
                id={`post-preview-${databaseId}`}
                key={databaseId}
              >
                <header className="entry-header">
                  <Link to={`/blog/${slug}`}>
                    <h2 dangerouslySetInnerHTML={{ __html: title }} />
                  </Link>
                  <PostHeaderMeta
                      date={date}
                      readingTime={readingTime}
                  /> 
                </header>
                <div
                  className="entry-content"
                  dangerouslySetInnerHTML={{
                    __html: excerptText,
                  }}
                />
              </article>
            )
          })}
      </div>
      <nav>
        {pageNumber === 2 && <Link to={`/blog`}>Newer posts</Link>}
        {pageNumber > 2 && (
          <Link to={`/blog/${pageNumber - 1}`}>Newer posts</Link>
        )}
        {'  '}
        <span>Page {pageNumber}</span>
        {'  '}
        {hasNextPage && (
          <Link to={`/blog/${pageNumber + 1}`}>Older posts</Link>
        )}
      </nav>
    </Layout>
  )
}

export default BlogArchive
