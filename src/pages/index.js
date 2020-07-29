import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, About, Contact, Works } from 'components/landing';
import {graphql} from "gatsby"

export default ({data}) => (
  <Layout home>
    <SEO />
    <Intro />
    <About img={data.file.childImageSharp.fixed}/>
    <Works />
    <Contact />
  </Layout>
);

export const query = graphql`
  {
    file(name: {eq: "omar"}) {
      childImageSharp {
        fixed(width: 250, height: 250) {
          base64
          width
          height
          src
          srcSet
        }
      }
    }
  }
  
`