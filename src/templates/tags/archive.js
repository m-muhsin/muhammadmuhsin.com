import React from "react"
import Layout from "../../components/layout"
import PostEntry from "../../components/post-entry"
import SEO from "../../components/seo"

const TagArchive = ({
  pageContext: { name, posts }
}) => {

  return (
    <Layout>
      <SEO
        title={`Tag - ${name}`}
        description={`A collection of posts from the ${name} category.`}
      />
      <section>
        <h1>
          Tag Archive: <span>{name}</span>
        </h1>
        {
          posts.nodes &&
          posts.nodes.map(post => <PostEntry key={post.id} post={post} />)
        }
      </section>
    </Layout>
  )
}

export default TagArchive
