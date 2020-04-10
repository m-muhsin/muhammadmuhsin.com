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
    uri,
    author,
    date,
    categories,
    tags,
    featuredImage,
  },
  post,
}) => {
  let excerptText = ''

  if (!excerptText) {
    excerptText = getExcerpt(content)
  }

  excerptText = getExcerpt(excerpt)
  const img = featuredImage ? featuredImage.sourceUrl : ""

  return (
    <article
      id={`post-${databaseId}`}
    >
      <header className="entry-header">
        <h3 className="entry-title">
          <Link to={`/blog/${uri}`}>
            <p dangerouslySetInnerHTML={{ __html: title }} />
          </Link>
        </h3>
        <PostHeaderMeta
          author={author}
          date={date}
          categories={categories}
          tags={tags}
        />
      </header>
      {
        featuredImage && (
          <div className="post-image">
            {" "}
            <img
              width={780}
              height={568}
              src={featuredImage.sourceUrl}
              className="attachment-blog_image size-blog_image"
              alt={featuredImage.altText || featuredImage.title}
              sizes="(max-width: 780px) 100vw, 780px"
            />
          </div>
        )
      }
      <div className="entry-content">
        <p dangerouslySetInnerHTML={{ __html: excerptText }} />
        <p>
          <Link
            className="btn btn-secondary understrap-read-more-link"
            to={`/blog/${uri}`}
          >
            Read More…
            </Link>
        </p>
      </div>
    </article>
  )
}

export default PostEntry
