import React, { useContext } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Card } from 'components/common';
import { Wrapper, Section, Item, Content, Stats } from './styles';
import Img from "gatsby-image"

export const Works = () => {
  const { theme } = useContext(ThemeContext);


  return (
    <StaticQuery
    query={graphql`
    {
      allMarkdownRemark(limit: 6) {
        edges {
          node {
            frontmatter {
              title
              image {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
    
    `}
    render={data => ( 
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Section>
        {data.allMarkdownRemark.edges.map(({node}) => {
          return (
            <Item>
              <Img fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.title} className="image" />
              <div className="middle"><div className="text" style={{color: theme === 'dark' ? '#212121' : '#fff'}}>{node.frontmatter.title}</div></div>
            </Item>)
        })}
      </Section>
    </Wrapper>)
    } />);
}
