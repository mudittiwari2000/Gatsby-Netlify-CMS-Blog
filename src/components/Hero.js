import React, { useState } from 'react';

import Typed from 'react-typed';

import logo from '../img/hero.svg';
import '../components/all.scss';

const Hero = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameField = (e) => {
    setName(e.target.value);
  };

  const handleEmailField = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="container mt-4 hero-container">
      <div className="hero-container__main">
        <img src={logo} alt="Hero Illustration" width={300} />
        <Typed
          strings={['Trendlance', 'Blog', 'Lorem']}
          typeSpeed={25}
          loop={true}
          className="has-text-primary title is-size-1 has-text-weight-bold has-text-centered "
          style={{ fontSize: '4rem' }}
        />
      </div>
      <div className="columns mt-4">
        <div className="column is-10 is-offset-1">
          <div className="content">
            <h2 className="is-size-1 has-text-weight-semibold hero-container__title">
              Learn How to Scale Your Influence at Startup Speed.
            </h2>
            <p className="is-size-4 has-text-weight-light hero-container__subtitle">
              Join me and 500,000 monthly readers to shift from blogger to
              business owner, scale your blog like a startup, and make
              life-changing money in months, not years.
            </p>
            <form
              name="contact"
              method="post"
              action="/contact/thanks/"
              onSubmit={handleSubmit}
            >
              <div className="field is-horizontal">
                <div className="field-body">
                  <div className="field">
                    <p className="control is-expanded">
                      <input
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameField}
                        required
                      />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded">
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleEmailField}
                        required
                      />
                    </p>
                  </div>
                  <div className="field ml-2">
                    <button className="button is-primary" type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
