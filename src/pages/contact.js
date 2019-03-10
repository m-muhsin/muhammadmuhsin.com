import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const ContactPage = () => (
  <Layout location="contact">
    <SEO
      title="Contact"
      keywords={[
        `muhammad muhsin`,
        `full stack developer`,
        `wordpress`,
        `react`,
      ]}
    />
    <div style={{ display: 'block', clear: 'both' }}>
      <section className="contact width-40" id="contact">
        <div className="container">
          <h1 className="text-uppercase">Contact Me</h1>
          <p>
            Thanks for your interest in talking to me! You can use the following
            ways to get in touch:
          </p>
          <ul>
            <li>
              <strong>Email</strong> - Send me an email to{' '}
              <a href="mailto:muhammad.muhseen@gmail.com">
                muhammad.muhseen@gmail.com
              </a>
            </li>
            <li>
              <strong>Twitter</strong> - Feel free to send me a direct message{' '}
              <a href="https://twitter.com/muhsinlk/">@muhsinlk</a>
            </li>
            <li>
              <strong>Phone</strong> - You can call/text me if you need
              something urgently at{' '}
              <a href="tel:+94779044988" className="btn text-uppercase blue-bg">
                +94 779 044 988
              </a>
            </li>
          </ul>
          {/* <form
            className="contact-form"
            name="contact"
            method="POST"
            data-netlify="true"
          >
            <input type="hidden" name="contact" />
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
          </form> */}
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
          <SocialLink
            link="https://www.linkedin.com/in/mmuhsin/"
            image="linkedin"
          />
          <SocialLink link="https://wa.me/94779044988" image="whatsapp" />
          <SocialLink link="http://mtwoblog.com/" image="m2blog" />
          <SocialLink
            link="https://www.smashingmagazine.com/author/muhammad-muhsin/"
            image="smashing"
          />
          <SocialLink
            link="https://www.instagram.com/m_muhsin/"
            image="instagram"
          />
          <SocialLink
            link="https://profiles.wordpress.org/mmuhsin/"
            image="wordpress"
          />
          <SocialLink link="https://noti.st/m-muhsin" image="notist" />
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
