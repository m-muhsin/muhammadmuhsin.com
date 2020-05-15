import React from 'react'

const Work = () => (
  <>
    <h2>Trusted By</h2>
    <p>
      I have been working with big and small companies doing WordPress and
      React. Here are some of them.
    </p>
    <section className="projects-container">
      <div className="work">
        <a href="https://www.rtcamp.com/">
          <img
            className="work-logo"
            src={require('../../images/rtcamp-logo-black.svg')}
            alt="rtCamp"
          />
        </a>
        <div className="project-technologies">
          <span>Publishing</span> <span>Media</span> <span>eCommerce</span>
        </div>
      </div>
      <div className="work">
        <a href="https://www.capbase.com/">
          <img
            className="work-logo"
            src={require('../../images/capbase.png')}
            alt="Capbase"
          />
        </a>
        <div className="project-technologies">
          <span>Startups</span> <span>Finance</span>
        </div>
      </div>
      <div className="work">
        <a href="https://www.learndash.com/">
          <img
            className="work-logo"
            src={require('../../images/LearnDash.png')}
            alt="LearnDash"
          />
        </a>
        <div className="project-technologies">
          <span>eLearning</span>
        </div>
      </div>
      <div className="work">
        <a href="https://javascriptforwp.com/">
          <img
            className="work-logo"
            src={require('../../images/jsforwp.png')}
            alt="JS for WP"
          />
        </a>
        <div className="project-technologies">
          <span>Education</span> <span>Tooling</span>
        </div>
      </div>
      <div className="work">
        <a href="https://www.simplur.com/">
          <img
            className="work-logo"
            src={require('../../images/simplur.svg')}
            alt="Simplur"
          />
        </a>
        <div className="project-technologies">
          <span>eCommerce</span> <span>Events</span>
        </div>
      </div>
      <div className="work">
        <a href="http://octaware.com/">
          <img
            className="work-logo"
            src={require('../../images/octaware_tech_logo_1.jpg')}
            alt="Octaware Technologies"
          />
        </a>
        <div className="project-technologies">
          <span>eCommerce</span> <span>Adventure</span>
        </div>
      </div>
      <div className="work">
        <a href="https://www.jatstudio.com/">
          <img
            className="work-logo"
            src={require('../../images/jatstudio.svg')}
            alt="Jatstudio"
          />
        </a>
        <div className="project-technologies">
          <span>Tooling</span> <span>Agency</span>
        </div>
      </div>
    </section>
  </>
)

export { Work }
