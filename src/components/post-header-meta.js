import React from "react"
// import { Link } from "gatsby"
import moment from "moment/moment"
import DateIcon from "./icons/date"
import CategoryIcon from "./icons/category"
import TagIcon from "./icons/tag"

const PostHeadererMeta = ({ date, categories, tags }) => (
  <header className="entry-header">
    <span className="posted-on">
      <DateIcon />
        <time
          className="entry-date published updated"
          dateTime="2019-02-25T17:37:06+00:00"
        >
          {moment(date).format(`MMMM D, YYYY`)}
        </time>
    </span>
    <span className="cat-links">
      <CategoryIcon />
      <span className="screen-reader-text">Posted in: </span>
      {categories.nodes
        .map(category => (
        //   <Link
        //     key={category.name}
        //     to={`/blog/category/${category.slug}`}
        //     rel="category"
        //   >
            <span>{category.name}</span>
        //   </Link>
        ))
        .reduce((accu, elem) => {
          return accu === null ? [elem] : [...accu, ", ", elem]
        }, null)}
    </span>
    <span className="tags-links">
      <TagIcon />
      <span className="screen-reader-text">Tags: </span>
      {tags.nodes
        .map(tag => (
        //   <Link key={tag.name} to={`/blog/tag/${tag.slug}`} rel="tag">
            <span>{tag.name}</span>
        //   </Link>
        ))
        .reduce((accu, elem) => {
          return accu === null ? [elem] : [...accu, ", ", elem]
        }, null)}
    </span>
  </header>
)

export default PostHeadererMeta