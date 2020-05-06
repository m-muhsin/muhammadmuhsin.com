import React from 'react'
import ExplorerDevCommunityLogo from './images/explorer-dev-community-logo';
import WcAsia2020Logo from './images/wcasia-2020-logo';
import WCUS2019Logo from './images/wcus-2019-logo';
import WordSeshLogo from './images/wordsesh-logo';
import JSforWPConf2019Logo from './images/js-for-wp-conference-logo';
import GatsbyLogo from './images/gatsby-logo';
import WooSeshLogo from './images/woosesh-logo';

const Speaking = () => (
  <>
    <h2 className="section-title">Speaking</h2>
    <p>I also speak at conferences and meetups.</p>
    <section className="projects-container">
      <div className="work">
        <a href="https://www.facebook.com/events/d41d8cd9/nextjs-solving-your-react-problems-webinar/220330915878953/">
          <ExplorerDevCommunityLogo className="work-logo" />
          <h4 className="conf-title">Explorer Dev Community Meetup</h4>
        </a>
        <h5 className="talk-title">Build Your Blazing Fast Site With Gatsby</h5>
        <div className="speaking-tags">
          <span>March 23, 2020</span>
          &nbsp;
          <span>
            <a
              className="black-bold"
              href="https://docs.google.com/presentation/d/1vVOBYAVewrT4ezIh4GkQoo218ec-ckIeYMd8rQUIqaY/present"
            >
              Slides
            </a>
          </span>
          &nbsp;
          <span>
            <a
              className="black-bold"
              href="https://youtu.be/MmMMMIvuPU8?t=2607"
            >
              Video
            </a>
          </span>
        </div>
      </div>
      <div className="work">
        <a href="https://2020.asia.wordcamp.org/speaker/muhammad-muhsin/">
          <WcAsia2020Logo />
          <h4 className="conf-title">
            WordCamp Asia 2020
            <br />
            <small>[Pop-Up Livestream]</small>
          </h4>
        </a>
        <h5 className="talk-title">Using WordPress With GraphQL</h5>
        <div className="speaking-tags">
          <span>February 22, 2020</span>
          &nbsp;
          <span>
            <a
              className="black-bold"
              href="https://docs.google.com/presentation/d/1AQRQWVUX5NjnIJczgHRZIUDAVtQt7x45pBAFnHlk7rk/present"
            >
              Slides
            </a>
          </span>
          &nbsp;
          <span>
            <a
              className="black-bold"
              href="https://www.crowdcast.io/e/22feb20WPstream/8"
            >
              Video
            </a>
          </span>
        </div>
      </div>
      <div className="work">
        <a href="https://2019.us.wordcamp.org/speaker/muhammad-muhsin/">
          <WCUS2019Logo />
          <h4 className="conf-title">WordCamp US 2019</h4>
        </a>
        <h5 className="talk-title">
          Using WordPress With Static Site Generators
        </h5>
        <div className="speaking-tags">
          <span>Nov 1, 2019</span>
          &nbsp;
          <span>
            <a
              className="black-bold"
              href="https://www.slideshare.net/rtcamp/using-wordpress-with-static-site-generators-by-muhammad-muhsin-and-jason-bahl-wordcamp-us-2019"
            >
              Slides
            </a>
          </span>
          &nbsp;
          <span>
            <a
              className="black-bold"
              href="https://wordpress.tv/2019/11/14/jason-bahl-muhammad-muhsin-using-wordpress-with-static-site-generators/"
            >
              Video
            </a>
          </span>
        </div>
      </div>
      <div className="work">
        <a href="https://wordsesh.com/">
          <WordSeshLogo />
          <h4 className="conf-title">WordSesh EMEA 2019</h4>
        </a>
        <h5 className="talk-title">
          Build Your Blazing Fast Site With Gatsby and WordPress
        </h5>
        <div className="speaking-tags">
          <span>Sep 25, 2019</span>
          <span>
            <a
              className="black-bold"
              href="https://wpsessions.com/wp-content/uploads/2019/09/Muhammad-Muhsin-Build-Your-Blazing-Fast-Site-With-Gatsby-and-WordPress.pdf"
            >
              Slides
            </a>
          </span>
        </div>
      </div>

      <div className="work">
        <a href="https://javascriptforwp.com/conference/">
          <JSforWPConf2019Logo />
          <h4 className="conf-title">JS for WP Conf 2019</h4>
        </a>
        <h5 className="talk-title">Server Side React for WordPress</h5>
        <div className="speaking-tags">
          <span>July 12, 2019</span>
          &nbsp;
          <span>
            <a
              className="black-bold"
              href="https://www.slideshare.net/rtcamp/server-side-react-for-wordpress-by-muhammad-muhsin-the-javascript-for-wordpress-conference-jsforwpconf-12-jul-2019"
            >
              Slides
            </a>
          </span>
          &nbsp;
          <span>
            <a className="black-bold" href="https://youtu.be/TkNH2QB5oDA">
              Video
            </a>
          </span>
        </div>
      </div>
      <div className="work">
        <a href="https://www.meetup.com/GatsbyJS-Montreal-Meetup/events/261575408/">
          <GatsbyLogo />
          <h4 className="conf-title">GatsbyJS Montréal Meetup #1</h4>
        </a>
        <h5 className="talk-title">Building with Gatsby and WordPress</h5>
        <div className="speaking-tags">
          <span>June 1, 2019</span>
          &nbsp;
          <span>
            <a
              className="black-bold"
              href="https://gatsbyjs-montreal-meetup.muhammad.dev"
            >
              Slides
            </a>
          </span>
          &nbsp;
          <span>
            <a className="black-bold" href="https://youtu.be/t7KwexCFW9o">
              Video
            </a>
          </span>
        </div>
      </div>
      <div className="work">
        <a href="https://woosesh.com/">
          <WooSeshLogo />
          <h4 className="conf-title">WooSesh 2018</h4>
        </a>
        <h5 className="talk-title">
          Creating a WooCommerce Mobile App with React Native
        </h5>
        <div className="speaking-tags">
          <span>October 18, 2018</span>{' '}
          <span>
            <a
              className="black-bold"
              href="https://docs.google.com/presentation/d/1TKkt9M8RViageCS7whYPafjVdmLtgNQ2Bd9taCLjrLU/present"
            >
              Slides
            </a>
          </span>
        </div>
      </div>
    </section>
  </>
)

export { Speaking }
