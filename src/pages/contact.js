import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `muhammad muhsin`,
        `full stack developer`,
        `wordpress`,
        `react`,
      ]}
    />
    <div style={{ display: 'flex' }}>
      <section className="contact half-width" id="contact">
        <div className="container">
          <h2 className="text-uppercase">Got a question?</h2>
          <p>Feel free to reach out to me via the form below!</p>
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="bot-field" />
            <div className="form-field">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="form-field">
              <input type="email" name="email" placeholder="Email" />
            </div>
            <div className="form-field">
              <textarea name="message" placeholder="Message" />
            </div>
            <div className="form-field">
              <button type="submit" className="submit-form">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="muhammad-photo half-width">
        <img src={require('../images/muhammad-muhsin.jpg')} alt="Muhammad" />
      </section>
    </div>
  </Layout>
)

export default ContactPage
