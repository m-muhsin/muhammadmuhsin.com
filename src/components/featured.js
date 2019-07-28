import React from 'react'

export default () => (
    <>
        <h2 className="section-title">Featured On</h2>
        <p>
        I was fortunate to be featured on these publications for my work.
        </p>
        <section className="projects-container">
        <div className="work-project">
            <a href="https://wptavern.com/gatsby-wordpress-themes-project-partners-with-theme-shops-to-port-popular-themes-to-gatsby">
            <img
                className="work-logo"
                src={require('../images/wp-tavern.png')}
                alt="WP Tavern"
            />
            </a>
        </div>
        <div className="work-project">
            <a href="https://poststatus.com/footnotes/muhammad-muhsin-wrote-a-tutorial-about/">
            <img
                className="work-logo"
                src={require('../images/post-status.png')}
                alt="Post Status"
            />
            </a>
        </div>
        </section>
    </>
)