import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';

import styles from './index-page.module.scss';

export const IndexPageTemplate = ({ title, intro }) => {
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
  };

  return (
    <div>
      <section className="section section--gradient">
        <div className="container">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <h1>Give us your email because we want it.</h1>
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <div className="field">
                    <label className="label" htmlFor={'name'}>
                      Your name
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'text'}
                        name={'name'}
                        value={name}
                        onChange={handleNameField}
                        id={'name'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'email'}>
                      Email
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type={'email'}
                        name={'email'}
                        value={email}
                        onChange={handleEmailField}
                        id={'email'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={'message'}>
                      Message
                    </label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name={'message'}
                        value={message}
                        onChange={handleMessageField}
                        id={'message'}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className={` ${styles.submitBtn}`} type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="column is-12">
                    <h3
                      className={`has-text-weight-semibold is-size-1 ${styles.titleHash}`}
                    >
                      News &amp; Blogs
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                  <h3
                    className={`has-text-weight-semibold is-size-2 ${styles.titleHash}`}
                  >
                    Business Software
                  </h3>
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/softwares">
                        See all Softwares
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate title={frontmatter.title} intro={frontmatter.intro} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        intro {
          blurbs {
            image {
              publicURL
            }
            title
            text
          }
        }
      }
    }
  }
`;
