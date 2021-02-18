import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Features from '../components/Features';
import BlogRoll from '../components/BlogRoll';

import '../components/all.scss';
import styles from './index-page.module.scss';

export const IndexPageTemplate = ({ intro }) => {
  return (
    <div>
      <Hero />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="column is-12">
                    <h3
                      className={`has-text-weight-semibold is-size-1 ${styles.titleHash}`}
                    >
                      LATEST NEWS &amp; <br /> BLOGS
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
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout title="Home">
      <IndexPageTemplate intro={frontmatter.intro} />
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
