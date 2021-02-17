import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

import '../../components/all.scss';

const BlogIndexPage = (props) => (
  <Layout>
    <div className="is-flex is-justify-content-cente mb-4r">
      <h2 className={`has-text-weight-bold is-size-1 page-title`}>
        News &amp; Blogs
      </h2>
    </div>
    <section className="section mt-2">
      <div className="container">
        <div className="content">
          <BlogRoll />
        </div>
      </div>
    </section>
  </Layout>
);

export default BlogIndexPage;
