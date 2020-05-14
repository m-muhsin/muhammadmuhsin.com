import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  Intro,
  Work,
  Writing,
  Speaking,
  OpenSource,
  Featured,
  Testimonials,
  Contact,
} from '../components/homepage-parts'

const IndexPage = ({ data }) => (
  <Layout location="home">
    <SEO
      title="muhammad.dev"
      description={
        data.site.siteMetadata.description ||
        `Muhammad Muhsin's space on the web`
      }
      image={data.site.siteMetadata.image}
      keywords={[
        `muhammad muhsin`,
        `full stack developer`,
        `wordpress`,
        `react`,
      ]}
    />
    <Intro />
    <Work />
    <Writing />
    <Speaking />
    <OpenSource />
    <Featured />
    <Testimonials />
    <Contact />
  </Layout>
)

export const query = graphql`
  query HomeSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
  }
`

export default IndexPage
