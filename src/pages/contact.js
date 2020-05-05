import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Headshot from '../components/images/headshot'

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
          </ul>
        </div>
      </section>
      <section className="social-container width-60">
        <div className="muhammad-photo">
          <Headshot className="muhammad-photo" />
        </div>
        <div className="social-links-container">
          <SocialLink link="https://github.com/m-muhsin/" image="github" />
          <SocialLink link="https://twitter.com/muhsinlk/" image="twitter" />
          <SocialLink
            link="https://www.linkedin.com/in/mmuhsin/"
            image="linkedin"
          />
          <SocialLink
            link="https://www.instagram.com/m_muhsin/"
            image="instagram"
          />
          <SocialLink link="https://www.youtube.com/user/muhammadmuhseen/" image="youtube" />
          <SocialLink link="http://mtwoblog.com/" image="m2blog" />
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
    className="social-link"
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
