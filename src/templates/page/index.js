import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SinglePage = ({ pageContext }) => (
  <Layout>
    <SEO title={pageContext.title} description={pageContext.title} />
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)

export default SinglePage
