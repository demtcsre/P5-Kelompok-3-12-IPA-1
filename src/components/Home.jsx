import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Welcome to QuitNic - Your Path to Quit Smoking and Vaping</title>
      </Helmet>

      <section className="hero-section">
        <div className="container hero-container">
          <h1 className="hero-title">Take the First Step Towards a Nicotine-Free Life</h1>
          <p className="hero-subtitle">Discover resources, alternatives, and support to help you quit nicotine.</p>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="features-title">Why QuitNic?</h2>
          <p className="features-description">
            QuitNic is designed to guide you through every step of your quitting journey. From providing helpful information
            on alternative products to offering educational content and connecting you with local support, we are here to help.
          </p>
          <div className="features-list">
            <div className="feature-item">
              <h3>Alternatives to Nicotine</h3>
              <p>Explore products like nicotine patches and non-nicotine vapes that can help ease the transition.</p>
            </div>
            <div className="feature-item">
              <h3>Educational Content</h3>
              <p>Learn about the dangers of nicotine and vaping, and discover effective quitting strategies backed by research.</p>
            </div>
            <div className="feature-item">
              <h3>Local Support</h3>
              <p>Connect with local organizations and support networks to stay motivated and get help when needed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2 className="testimonials-title">Success Stories</h2>
          <div className="testimonials">
            <div className="testimonial">
              <p>"QuitNic gave me the resources I needed to quit vaping. The support and educational tools really made a difference!"</p>
              <span>- Evan V.</span>
            </div>
            <div className="testimonial">
              <p>"I never thought I could quit smoking, but with the help of QuitNic, I was able to break free from my addiction and became a better person."</p>
              <span>- Michael D.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-container">
          <h2 className="cta-heading">Ready to Quit?</h2>
          <p className="cta-text">Take control of your health today by using QuitNic. Explore our resources and start your journey to a nicotine-free life.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;