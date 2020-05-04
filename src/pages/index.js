import React from 'react'

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

const IndexPage = () => (
  <Layout location="home">
    <SEO
      title="Muhammad.dev"
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

export default IndexPage
