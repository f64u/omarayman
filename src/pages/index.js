import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Contact, Works } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Works />
    <Contact />
  </Layout>
);
