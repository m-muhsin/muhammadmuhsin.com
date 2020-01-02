import React from 'react'

export default () => (
    <>
        <h2 className="section-title">Featured On</h2>
        <p>
        I was fortunate to be featured on these publications for my work a few times.
        </p>
        <section className="projects-container">
        <div className="work-project">
            <a href="https://wptavern.com/?s=Muhammad+Muhsin">
            <img
                className="work-logo"
                src={require('../images/wp-tavern.png')}
                alt="WP Tavern"
            />
            </a>
        </div>
        <div className="work-project">
            <a href="https://poststatus.com/?s=Muhammad+Muhsin">
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