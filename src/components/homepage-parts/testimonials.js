import React from 'react'

const Testimonials = () => (
  <div className="testimonials">
    <h2 style={{ marginTop: 20 }}>
      Folks have said good things about my work!
    </h2>

    <blockquote className="testimonial-box">
      <p className="testimonial-text">
        Muhammad is not only a talented React developer, he is a great person.
        He communicates well, isn't afraid to ask questions, and is reliable.
        Despite working in a different timezone he always attends
        business-critical meetings and works very well with his colleagues.
        &nbsp;
        <strong>
          Muhammad has my highest endorsement for any React-based development
          work.
        </strong>
      </p>
      <cite className="testimonial-author">
        <h3 style={{ marginBottom: 5 }}>Justin Ferriman</h3>
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
        Muhammad is an excellent, reliable author. He has a keen passion for all
        things tech and is{' '}
        <strong>extremely knowledgeable about the web industry.</strong> A
        pleasure to work with!
      </p>
      <cite className="testimonial-author">
        <h3 style={{ marginBottom: 5 }}>Iris Lješnjanin</h3>
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
        has been such an asset to our project porting WordPress themes over to
        Gatsby themes. His communication skills on top of that have helped him
        share with everyone HOW he does what he does through in depth tutorials.
        If you have a chance to work with Muhammad on development or educational
        work, I suggest you go for it!
      </p>
      <cite className="testimonial-author">
        <h3 style={{ marginBottom: 5 }}>Zac Gordon</h3>
        <p>Educator, JS for WP</p>
      </cite>
      <img
        style={{
          minWidth: 100,
          maxHeight: 100,
        }}
        className="testimonial-logo"
        src={require('../../images/jsforwp.png')}
        alt="JS for WP"
      />
    </blockquote>

    <blockquote className="testimonial-box">
      <p className="testimonial-text">
        Muhammad is a creative and dedicated problem solver.{' '}
        <strong>
          He has experience with many different web technologies and is able to
          address any problem with the appropriate technology
        </strong>
        . He's able to pick up new technologies very quick, such as GraphQL and
        Gatsby, and produce great work with them quickly. He's a great
        communicator and while he's great at solving problems on his own, he's
        also great at collaborating. I enjoy working with Muhammad!
      </p>
      <cite className="testimonial-author">
        <h3 style={{ marginBottom: 5 }}>Jason Bahl</h3>
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
  </div>
)

export { Testimonials }
