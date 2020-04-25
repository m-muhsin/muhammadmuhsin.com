import React from "react"
import { Link } from "gatsby"
import PostHeaderMeta from "./post-header-meta";

const getExcerpt = text => {
  let excerpt = ''
  excerpt = text.substr(0, 300)

  excerpt = text
    .substr(0, Math.min(excerpt.length, excerpt.lastIndexOf(" ")))
    .concat("...")

  return excerpt
}

const PostEntry = ({
  post: {
    databaseId,
    title,
    excerpt,
    content,
    slug,
    date,
    readingTime
  },
}) => {
  let excerptText = ''

  if (!excerptText) {
    excerptText = getExcerpt(content)
  }

  excerptText = getExcerpt(excerpt)

  return (
    <article
      id={`post-${databaseId}`}
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
      <div className="entry-content" dangerouslySetInnerHTML={{ __html: excerptText }} />
    </article>
  )
}

export default PostEntry
