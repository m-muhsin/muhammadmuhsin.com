import React from 'react'

const Testimonials = () => (
    <div className="testimonials">
      <h2 style={{ marginTop: 20 }}>
        Folks have said good things about my work!
      </h2>
      <blockquote className="testimonial-box">
        <p className="testimonial-text">
          I am so glad I connected with Muhammad! <strong>His experience with cutting edge technology in 
          JavaScript and WordPress</strong> has been such an asset to our project porting WordPress themes 
          over to Gatsby themes. His communication skills on top of that have helped him share with 
          everyone HOW he does what he does through in depth tutorials. If you have a chance to work 
          with Muhammad on development or educational work, I suggest you go for it!
        </p>
        <cite className="testimonial-author">
          <h3 style={{ marginBottom: 5 }}>Zac Gordon</h3>
          <p>Educator, JS for WP</p>
        </cite>
        <img
          style={{
            minWidth: 100,
            maxHeight: 100
          }}
          className="testimonial-logo"
          src={require('../images/jsforwp.png')}
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
          src={require('../images/wpgraphql.png')}
          alt="WPGraphQL"
        />
      </blockquote>
      <blockquote className="testimonial-box">
        <p className="testimonial-text">
          Muhammad is a real pleasure to work with. He is really kind, patient,
          and aspiring to find the best solution. I really appreciate his honest
          desire to keep learning new skills.{' '}
          <strong>
            He is doing a great job taking us, at Jatstudio, to the next level
            with React and GatsbyJS.
          </strong>{' '}
          I would not hesitate to recommend working with Muhammad to anybody.
        </p>
        <cite className="testimonial-author">
          <h3 style={{ marginBottom: 5 }}>Javier Llinás</h3>
          <p>CEO, Jatstudio</p>
        </cite>
        <img
          className="testimonial-logo"
          src={require('../images/jatstudio.svg')}
          alt="Jatstudio"
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
          src={require('../images/smashing-magazine.svg')}
          alt="Smashing Magazine"
        />
      </blockquote>
    </div>
  )

  export default Testimonials