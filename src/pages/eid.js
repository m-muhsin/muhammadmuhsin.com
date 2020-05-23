import React from 'react'
import SEO from '../components/seo'

import '../styles/eid.scss'

const EidPage = () => (
  <div className="eid">
    <SEO
      title="Eid Mubarak"
      keywords={[`Eid Mubarak`, `Muhammad Muhsin`]}
      description="Eid Mubarak to you and your loved ones!"
    />
    <div className="moon" />

    <div id="stars-group-1"></div>
    <div id="stars-group-2"></div>
    <div id="stars-group-3"></div>
    <div id="stars-group-4"></div>
    <div id="stars-group-5"></div>
    <div id="stars-group-6"></div>

    <div className="greeting">
      <h1>Eid Mubarak</h1>
    </div>
  </div>
)

export default EidPage
