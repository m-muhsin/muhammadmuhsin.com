import React from 'react'
// import { Link } from "gatsby"
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import PostEntry from '../../components/post-entry'

const CategoryArchive = ({ pageContext: { name, posts } }) => {
  return (
    <Layout classNames="blog archive">
      <SEO
        title={`Category - ${name}`}
        description={`A collection of posts from the ${name} category.`}
      />
      <h1>
        Category Archives: <span>{name}</span>
      </h1>
      <section id="blog">
        {posts &&
          posts.nodes &&
          posts.nodes.map((post) => <PostEntry key={post.id} post={post} />)}
      </section>
    </Layout>
  )
}

export default CategoryArchive
