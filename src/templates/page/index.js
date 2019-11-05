import React from 'react'
import Layout from "../../components/layout"
import SEO from "../../components/seo"
// import PostEntry from "../../components/post-entry"
// import Section from '../../components/Interface/Section'

const SinglePage = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <Layout>
      <SEO title={pageContext.title} description="Welcome to Rocky Mountain Sewing" />
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Layout>
  )
}

export default SinglePage
