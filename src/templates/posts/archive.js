import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import PostEntry from '../../components/post-entry'

const BlogArchive = ({ pageContext: { nodes } }) => (
  <Layout classNames="blog">
    <SEO title="Blog" description="A collection of posts by Muhammad" />
    <header className="entry-header">
      <h1 className="entry-title">Blog</h1>
    </header>
    <div id="blog">
      {nodes &&
        nodes.map((post) => {
          return <PostEntry key={post.id} post={post} />
        })}
    </div>
  </Layout>
)

export default BlogArchive
