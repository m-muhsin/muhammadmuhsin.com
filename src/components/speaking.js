import React from 'react'

export default () => (
    <>
        <h2 className="section-title">Speaking</h2>
        <p>
        I also speak at conferences and meetups.
        </p>
        <section className="projects-container">
        <div className="work-project">
            <a href="https://javascriptforwp.com/conference/">
            <img
                className="work-logo"
                src={require('../images/2019-js-for-wp-conference-logo.png')}
                alt="JS for WP Conf 2019"
            />
            </a>
            <h4 style={{ marginTop:10, marginBottom: 10 }}>JS for WP Conf 2019</h4>
            <h5  style={{ marginBottom: 10 }}>Server Side React for WordPress</h5>
            <div className="project-technologies">
                <span>July 12, 2019</span> <span><a style={{ color: 'black', fontWeight: 'bold' }} href="https://www.slideshare.net/rtcamp/server-side-react-for-wordpress-by-muhammad-muhsin-the-javascript-for-wordpress-conference-jsforwpconf-12-jul-2019">Slides</a></span>
            </div>
        </div>
        <div className="work-project">
            <a href="https://www.meetup.com/GatsbyJS-Montreal-Meetup/events/261575408/">
            <img
                className="work-logo"
                src={require('../images/gatsby-icon.png')}
                alt="Gatsby"
            />
            </a>
            <h4 style={{ marginTop:10, marginBottom: 10 }}>GatsbyJS Montréal Meetup #1</h4>
            <h5  style={{ marginBottom: 10 }}>Building with Gatsby and WordPress</h5>
            <div className="project-technologies">
                <span>July 12, 2019</span> <span><a style={{ color: 'black', fontWeight: 'bold' }} href="https://gatsbyjs-montreal-meetup.muhammad.dev">Slides</a></span>
            </div>
        </div>
        <div className="work-project">
            <a href="https://woosesh.com/">
            <img
                className="work-logo"
                src={require('../images/WooSesh-2018-Logo.png')}
                alt="Gatsby"
            />
            </a>
            <h4 style={{ marginTop:10, marginBottom: 10 }}>WooSesh 2018</h4>
            <h5  style={{ marginBottom: 10 }}>Creating a WooCommerce Mobile App with React Native</h5>
            <div className="project-technologies">
                <span>October 18, 2018</span> <span><a style={{ color: 'black', fontWeight: 'bold' }} href="https://docs.google.com/presentation/d/1TKkt9M8RViageCS7whYPafjVdmLtgNQ2Bd9taCLjrLU/present">Slides</a></span>
            </div>
        </div>
        </section>
    </>
);