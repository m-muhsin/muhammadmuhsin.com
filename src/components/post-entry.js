import React from 'react'
import { Link } from 'gatsby'
import PostHeaderMeta from './post-header-meta'
import getExcerpt from '../utils/get-excerpt'

const PostEntry = ({
  post: { databaseId, id, title, excerpt, content, slug, date, readingTime },
}) => {
  const excerptText = getExcerpt(excerpt, content)

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
          excerptText={excerptText}
          showTwitterShare={false}
        />
      </header>
      <div className="entry-content">
        <p>{excerptText}</p>
      </div>
    </article>
  )
}

export default PostEntry
