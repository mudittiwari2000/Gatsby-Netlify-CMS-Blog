import React from 'react';

import clsx from 'clsx';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

import styles from './index.module.scss';

const BlogIndexPage = (props) => (
  <Layout>
    <section className="section">
      <div className="container">
        <div className="content">
          <BlogRoll />
        </div>
      </div>
    </section>
  </Layout>
);

export default BlogIndexPage;
