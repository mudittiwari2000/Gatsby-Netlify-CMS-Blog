import React, { useState } from 'react';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

import '../components/all.scss';

const Email = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameField = (e) => {
    setName(e.target.value);
  };
  const handleEmailField = (e) => {
    setEmail(e.target.value);
  };
  const handleMessageField = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className="container mt-4 email-container">
      <div className="columns">
        <div className="column is-10 is-offset-1">
          <div className="content">
            <h2 className="is-size-1 has-text-weight-semibold email-container__title">
              Learn How to Scale Your Influence at Startup Speed.
            </h2>
            <p className="is-size-4 has-text-weight-light email-container__subtitle">
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
                      <input className="input" type="text" placeholder="Name" />
                    </p>
                  </div>
                  <div className="field">
                    <p className="control is-expanded">
                      <input
                        className="input"
                        type="email"
                        placeholder="Email"
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

export default Email;
