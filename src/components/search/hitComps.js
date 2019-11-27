import React, { Fragment } from "react"
import { Highlight, Snippet } from "react-instantsearch-dom"
import { Link } from "gatsby"
import { Calendar } from "styled-icons/octicons/Calendar"
import { Tags } from "styled-icons/fa-solid/Tags"

export const PageHit = clickHandler => ({ hit }) => (
  <div>
    <Link to={hit.slug} onClick={clickHandler}>
      <h4>
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </h4>
    </Link>
    <Snippet attribute="excerpt" hit={hit} tagName="mark" />
  </div>
)

export const PostHit = clickHandler => ({ hit }) => {

  const permalink = hit.permalink;
  const lastSlashRemoved = permalink.substring(0, permalink.length -1);
  let slug = lastSlashRemoved.substring(lastSlashRemoved.lastIndexOf('/'), lastSlashRemoved.length);

  return (
    <div>
      <Link to={`/blog` + slug} onClick={clickHandler}>
        <h4>
          <Highlight attribute="post_title" hit={hit} tagName="mark" />
        </h4>
      </Link>
      <div>
        <Calendar size="1em" />
        &nbsp;
        <span>{hit.post_date_formatted}</span>
        &emsp;
      {hit && hit.taxonomies && hit.taxonomies.post_tag ?
          <Fragment>
            <Tags size="1em" />
            &nbsp;
      {hit.taxonomies.post_tag.map((tag, index) => (
              <Fragment key={tag}>
                {index > 0 && `, `}
                {tag}
              </Fragment>
            ))}
          </Fragment>
          : ''}
      </div>
      <Snippet attribute="excerpt" hit={hit} tagName="mark" />
    </div>
  )
}
