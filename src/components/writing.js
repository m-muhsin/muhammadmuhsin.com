import React from 'react';

export default () => (
    <>
        <h2 className="section-title">Writing</h2>
        <p>
        I love to write and explain with words and code. I have been fortunate to
        have been published on the following sites.
        </p>
        <section className="projects-container">
        <div className="work-project">
            <a href="https://www.smashingmagazine.com/author/muhammad-muhsin/">
            <img
                className="work-logo"
                src={require('../images/smashing-magazine.svg')}
                alt="Smashing Magazine"
            />
            </a>
            <div className="project-technologies">
            <span>React</span> <span>React Native</span> <span>WordPress</span>{' '}
            <span>Gutenberg</span>
            </div>
        </div>
        <div className="work-project">
            <a href="https://www.gatsbyjs.org/contributors/muhammad-muhsin/">
            <img
                className="work-logo"
                src={require('../images/gatsby-icon.png')}
                alt="Gatsby"
            />
            </a>
            <div className="project-technologies">
            <span>React</span> <span>Gatsby</span>
            </div>
        </div>
        <div className="work-project">
            <a href="https://javascriptforwp.com/author/muhammad-muhseen/">
            <img
                className="work-logo"
                src={require('../images/jsforwp.png')}
                alt="JS for WP"
            />
            </a>
            <div className="project-technologies">
            <span>React</span> <span>Gatsby</span> <span>WordPress</span>
            </div>
        </div>
        <div className="work-project">
            <a href="https://blog.logrocket.com/author/muhammadmuhsin/">
            <img
                className="work-logo"
                src={require('../images/logrocket.png')}
                alt="LogRocket"
            />
            </a>
            <div className="project-technologies">
            <span>React</span> <span>SSR</span>
            </div>
        </div>
        </section>
    </>
);