import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

import '../components/all.scss';

export const ResourcesPageTemplate = ({ title, description, courses }) => (
  <div className="content">
    <div className="is-flex is-justify-content-center">
      <h2 className={`has-text-weight-bold is-size-1 page-title`}>{title}</h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-8 is-offset-1">
            <p className="content is-size-4 has-text-weight-medium">
              {description}
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <Accordion allowZeroExpanded>
              {courses.map((course, index) => (
                <AccordionItem key={index} className="pb-4 mb-2">
                  <AccordionItemHeading>
                    <AccordionItemButton>{course.title}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>{course.description}</AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  </div>
);

ResourcesPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

const ResourcesPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <ResourcesPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        courses={frontmatter.courses}
      />
    </Layout>
  );
};

ResourcesPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default ResourcesPage;

export const resourcesPageQuery = graphql`
  query ResourcesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        courses {
          title
          description
        }
      }
    }
  }
`;
