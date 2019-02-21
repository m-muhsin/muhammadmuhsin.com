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
      <section style={{ width: '50%' }} className="contact" id="contact">
        <div className="container">
          <h2 className="text-uppercase">Got a question?</h2>
          <p>Feel free to reach out to me via the form below!</p>
          <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="contact" value="contact" />
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
      <section className="muhammad-photo" style={{ width: '50%' }}>
        <img src={require('../images/muhammad-muhsin.jpg')} alt="Muhammad" />
      </section>
    </div>
  </Layout>
)

export default ContactPage
