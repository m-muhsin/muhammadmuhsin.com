import React from 'react'
import { graphql, navigate } from 'gatsby'
import ReactPaginate from 'react-paginate'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import PostEntry from '../../components/post-entry'

const BlogArchive = ({ pageContext, data }) => (
  <Layout classNames="blog">
    <SEO title="Articles" description="A collection of posts by Muhammad" />
    <header className="entry-header">
      <h1 className="entry-title">Blog</h1>
    </header>
    <div id="blog">
      {data.allWpPost.nodes &&
        data.allWpPost.nodes.map((post) => {
          return <PostEntry key={post.id} post={post} />
        })}
      {pageContext && pageContext.totalPages > 1 && (
        <nav>
          <ReactPaginate
            previousLabel={
              pageContext?.page !== 1 && <button className="pagination-nav-button">← Previous page</button>
            }
            nextLabel={
              pageContext?.totalPages !== pageContext.page && (
                <button className="pagination-nav-button">Next page →</button>
              )
            }
            onPageChange={({ selected }) => {
              const page = selected + 1
              const path = page === 1 ? `/blog/` : `/blog/${page}/`
              navigate(path)
            }}
            ariaLabelBuilder={(number) => `page ${number}`}
            disableInitialCallback
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageContext.totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
            initialPage={pageContext.page - 1}
          />
        </nav>
      )}
    </div>
  </Layout>
)

export const query = graphql`
  fragment Thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 500) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  query PostsArchive($offset: Int!, $perPage: Int!) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: { nodeType: { in: ["Post"] } }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        id
        databaseId
        uri
        title
        excerpt
        content
        slug
        date
        readingTime
      }
    }
  }
`

export default BlogArchive
