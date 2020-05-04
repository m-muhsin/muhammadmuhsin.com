import React from 'react'
import { Link } from 'gatsby'

const Contact = () => (
  <section>
    <h2 className="section-title">Talk to me!</h2>
    <p>
      I hope you are now interested in hiring me for your next project. You can
      also contact me for writing, speaking, and training opportunities.
    </p>
    <div className="text-center">
      <Link className="contact-button" to="/contact">
        Contact ➜
      </Link>
    </div>
  </section>
)

export { Contact }
