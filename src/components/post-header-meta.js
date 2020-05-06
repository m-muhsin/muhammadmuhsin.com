import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment/moment'
import CategoryIcon from './icons/category'
import TagIcon from './icons/tag'
import stripHtml from '../utils/strip-html'

const PostHeaderMeta = ({
  date,
  categories = {},
  tags = {},
  readingTime,
  excerptText,
  showTwitterShare = true,
}) => {
  let cookies = []
  if (parseInt(readingTime)) {
    let numOfCookies = readingTime / 2
    for (let i = 0; i < numOfCookies; i++) {
      cookies.push('🍪')
    }
  } else {
    cookies = ['🍪']
  }

  let twitterText = excerptText
  twitterText = stripHtml(excerptText)
  twitterText = `"${twitterText}" —`

  return (
    <header className="entry-meta">
      <span className="posted-on">
        {/* <DateIcon /> */}
        <time
          className="entry-date published updated"
          dateTime="2019-02-25T17:37:06+00:00"
        >
          {moment(date).format(`MMMM D, YYYY`)}
        </time>
      </span>
      {categories?.nodes?.length ? (
        <span className="cat-links">
          <CategoryIcon />
          <span className="screen-reader-text">Posted in: </span>
          {categories.nodes
            .map((category) => (
              <Link
                key={category.name}
                to={`/blog/category/${category.slug}`}
                rel="category"
              >
                <span>{category.name}</span>
              </Link>
            ))
            .reduce((accu, elem) => {
              return accu === null ? [elem] : [...accu, ', ', elem]
            }, null)}
        </span>
      ) : (
        ''
      )}
      {tags?.nodes?.length ? (
        <span className="tags-links">
          <TagIcon />
          <span className="screen-reader-text">Tags: </span>
          {tags.nodes
            .map((tag) => (
              <Link key={tag.name} to={`/blog/tag/${tag.slug}`} rel="tag">
                <span>{tag.name}</span>
              </Link>
            ))
            .reduce((accu, elem) => {
              return accu === null ? [elem] : [...accu, ', ', elem]
            }, null)}
        </span>
      ) : (
        ''
      )}
      {readingTime && `• ${cookies.join('')} ${readingTime} min read`}
      {showTwitterShare ? (
        <a
          href="https://twitter.com/share?ref_src=twsrc%5Etfw"
          class="twitter-share-button"
          data-text={twitterText}
          data-via="muhsinlk"
          style={{ marginLeft: 16, marginBottom: -2 }}
        >
          Share on Twitter
        </a>
      ) : (
        ''
      )}
    </header>
  )
}

export default PostHeaderMeta
