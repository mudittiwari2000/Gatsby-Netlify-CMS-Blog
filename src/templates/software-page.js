import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Features from '../components/Features';

import '../components/all.scss';

export const SoftwaresPageTemplate = ({ title, description, intro }) => (
  <div className="content">
    <div className="is-flex is-justify-content-center">
      <h2 className={`has-text-weight-bold is-size-1 page-title`}>{title}</h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-1">
            <p className="content is-size-5 has-text-weight-medium">
              {description}
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Features gridItems={intro.blurbs} />
          </div>
        </div>
      </div>
    </section>
  </div>
);

SoftwaresPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
};

const SoftwarePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout title="Software">
      <SoftwaresPageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

SoftwarePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default SoftwarePage;

export const softwarePageQuery = graphql`
  query SoftwarePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        intro {
          blurbs {
            image {
              publicURL
            }
            title
            text
          }
          description
        }
      }
    }
  }
`;
