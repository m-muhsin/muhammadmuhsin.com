import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    customPaging: (i) => <span>{i + 1}</span>,
  }
  return (
    <div className="testimonials">
      <h2 style={{ marginTop: 20 }}>Testimonials</h2>
      <p>Folks I worked with have said some good things.</p>

      <Slider {...settings}>
        <blockquote className="testimonial-box">
          <p className="testimonial-text">
            Muhammad is not only a talented React developer, he is a great
            person. He communicates well, isn't afraid to ask questions, and is
            reliable. Despite working in a different timezone he always attends
            business-critical meetings and works very well with his colleagues.
            &nbsp;
            <strong>
              Muhammad has my highest endorsement for any React-based
              development work.
            </strong>
          </p>
          <cite className="testimonial-author">
            <h3>—Justin Ferriman</h3>
            <p>Co-founder, LearnDash</p>
          </cite>
          <img
            style={{ minWidth: 100, maxHeight: 100 }}
            className="testimonial-logo"
            src={require('../../images/LearnDash.png')}
            alt="LearnDash"
          />
        </blockquote>

        <blockquote className="testimonial-box">
          <p className="testimonial-text">
            Muhammad is an excellent, reliable author. He has a keen passion for
            all things tech and is{' '}
            <strong>extremely knowledgeable about the web industry.</strong> A
            pleasure to work with!
          </p>
          <cite className="testimonial-author">
            <h3>—Iris Lješnjanin</h3>
            <p>Senior Editor, Smashing Magazine</p>
          </cite>
          <img
            className="testimonial-logo"
            src={require('../../images/smashing-magazine.svg')}
            alt="Smashing Magazine"
          />
        </blockquote>

        <blockquote className="testimonial-box">
          <p className="testimonial-text">
            I am so glad I connected with Muhammad!{' '}
            <strong>
              His experience with cutting edge technology in JavaScript and
              WordPress
            </strong>{' '}
            has been such an asset to our project porting WordPress themes over
            to Gatsby themes. His communication skills on top of that have
            helped him share with everyone HOW he does what he does through in
            depth tutorials. If you have a chance to work with Muhammad on
            development or educational work, I suggest you go for it!
          </p>
          <cite className="testimonial-author">
            <h3>—Zac Gordon</h3>
            <p>Educator, JS for WP</p>
          </cite>
          <img
            style={{
              minWidth: 100,
              maxHeight: 100,
            }}
            className="testimonial-logo"
            src={require('../../images/js-for-wp-logo.png')}
            alt="JS for WP"
          />
        </blockquote>

        <blockquote className="testimonial-box">
          <p className="testimonial-text">
            Muhammad is a creative and dedicated problem solver.{' '}
            <strong>
              He has experience with many different web technologies and is able
              to address any problem with the appropriate technology
            </strong>
            . He's able to pick up new technologies very quick, such as GraphQL
            and Gatsby, and produce great work with them quickly. He's a great
            communicator and while he's great at solving problems on his own,
            he's also great at collaborating. I enjoy working with Muhammad!
          </p>
          <cite className="testimonial-author">
            <h3>—Jason Bahl</h3>
            <p>Creator, WPGraphQL</p>
          </cite>
          <img
            style={{
              width: 100,
            }}
            className="testimonial-logo"
            src={require('../../images/wpgraphql.png')}
            alt="WPGraphQL"
          />
        </blockquote>

        <blockquote className="testimonial-box">
          <p className="testimonial-text">
            Muhammad is a real pleasure to work with. He is really kind,
            patient, and aspiring to find the best solution. I really appreciate
            his honest desire to keep learning new skills.{' '}
            <strong>
              He is doing a great job taking us, at Jatstudio, to the next level
              with React and GatsbyJS.
            </strong>{' '}
            I would not hesitate to recommend working with Muhammad to anybody.
          </p>
          <cite className="testimonial-author">
            <h3>—Javier Llinás</h3>
            <p>CEO, Jatstudio</p>
          </cite>
          <img
            className="testimonial-logo"
            src={require('../../images/jatstudio.svg')}
            alt="Jatstudio"
          />
        </blockquote>
      </Slider>
    </div>
  )
}

export { Testimonials }
