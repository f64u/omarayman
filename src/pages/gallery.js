import React from 'react';
import { Layout, SEO } from 'components/common';
import { Works } from 'components/landing';

export default ({data}) => (
  <Layout home>
    <SEO />
    <Works />
  </Layout>
);