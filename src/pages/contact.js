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
    <div>
      <section className="contact width-40" id="contact">
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
      <section className="social-container width-60">
        <img
          src={require('../images/muhammad-muhsin.jpg')}
          className="muhammad-photo"
          alt="Muhammad"
        />
        <div
          style={{
            maxWidth: 700,
            textAlign: 'center',
            margin: 'auto',
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <SocialLink link="https://github.com/m-muhsin/" image="github" />
          <SocialLink link="https://twitter.com/muhsinlk/" image="twitter" />
          <SocialLink link="http://mtwoblog.com/" image="m2blog" />
          <SocialLink
            link="https://www.smashingmagazine.com/author/muhammad-muhsin/"
            image="smashing"
          />
          <SocialLink
            link="https://www.linkedin.com/in/mmuhsin/"
            image="linkedin"
          />
          <SocialLink
            link="https://www.instagram.com/m_muhsin/"
            image="instagram"
          />
        </div>
      </section>
    </div>
  </Layout>
)

export default ContactPage

const SocialLink = ({ link, image }) => (
  <a
    style={{ width: 100, display: 'inline-block' }}
    rel="noopener noreferrer"
    target="_blank"
    href={link}
  >
    <img
      style={{ width: 65, height: 65, textAlign: 'center' }}
      alt={image}
      src={require(`../images/${image}.png`)}
    />
  </a>
)
