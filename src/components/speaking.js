import React from 'react'

export default () => (
    <>
        <h2 className="section-title">Speaking</h2>
        <p>
            I also speak at conferences and meetups.
        </p>
        <section className="projects-container">
            <div className="work-project">
                <a href="https://2019.mumbai.wordcamp.org/speaker/muhammad-muhsin/">
                    <img
                        className="work-logo"
                        src={require('../images/wc-mumbai.png')}
                        alt="WCUS 2019"
                    />
                    <h4 style={{ marginTop: 10, marginBottom: 10 }}>WordCamp Mumbai 2019</h4>
                </a>
                <h5 className="talk-title">Build Your Blazing Fast Site With Gatsby and WordPress</h5>
                <div className="project-technologies">
                    <span>Nov 8, 2019</span> 
                    <span><a style={{ color: 'black', fontWeight: 'bold' }} href="https://2019.mumbai.wordcamp.org/register/">Tickets</a></span>
                </div>
            </div>
            <div className="work-project">
                <a href="https://2019.us.wordcamp.org/speaker/muhammad-muhsin/">
                    <img
                        className="work-logo"
                        src={require('../images/wcus-2019-logo.png')}
                        alt="WCUS 2019"
                    />
                    <h4 style={{ marginTop: 10, marginBottom: 10 }}>WordCamp US 2019</h4>
                </a>
                <h5 className="talk-title">Using WordPress With Static Site Generators</h5>
                <div className="project-technologies">
                    <span>Nov 1, 2019</span> <span><a style={{ color: 'black', fontWeight: 'bold' }} href="https://www.slideshare.net/rtcamp/using-wordpress-with-static-site-generators-by-muhammad-muhsin-and-jason-bahl-wordcamp-us-2019">Slides</a></span>
                </div>
            </div>
            <div className="work-project">
                <a href="https://wordsesh.com/">
                    <img
                        className="work-logo"
                        src={require('../images/wordsesh.png')}
                        alt="WordSesh EMEA 2019"
                    />
                    <h4 style={{ marginTop: 10, marginBottom: 10 }}>WordSesh EMEA 2019</h4>
                </a>
                <h5 className="talk-title">Build Your Blazing Fast Site With Gatsby and WordPress</h5>
                <div className="project-technologies">
                    <span>Sep 25, 2019</span>
                    {/* <span><a style={{ color: 'black', fontWeight: 'bold' }} href="https://www.slideshare.net/rtcamp/server-side-react-for-wordpress-by-muhammad-muhsin-the-javascript-for-wordpress-conference-jsforwpconf-12-jul-2019">Slides</a></span> */}
                </div>
            </div>

            <div className="work-project">
                <a href="https://javascriptforwp.com/conference/">
                    <img
                        className="work-logo"
                        src={require('../images/2019-js-for-wp-conference-logo.png')}
                        alt="JS for WP Conf 2019"
                    />
                    <h4 style={{ marginTop: 10, marginBottom: 10 }}>JS for WP Conf 2019</h4>
                </a>
                <h5 className="talk-title">Server Side React for WordPress</h5>
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
                    <h4 style={{ marginTop: 10, marginBottom: 10 }}>GatsbyJS Montréal Meetup #1</h4>
                </a>
                <h5 className="talk-title">Building with Gatsby and WordPress</h5>
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
                    <h4 style={{ marginTop: 10, marginBottom: 10 }}>WooSesh 2018</h4>
                </a>
                <h5 className="talk-title">Creating a WooCommerce Mobile App with React Native</h5>
                <div className="project-technologies">
                    <span>October 18, 2018</span> <span><a style={{ color: 'black', fontWeight: 'bold' }} href="https://docs.google.com/presentation/d/1TKkt9M8RViageCS7whYPafjVdmLtgNQ2Bd9taCLjrLU/present">Slides</a></span>
                </div>
            </div>
        </section>
    </>
);