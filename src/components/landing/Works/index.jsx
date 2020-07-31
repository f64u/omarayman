import React, { useContext } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import { Wrapper, Section, Item, Center } from './styles';
import Img from "gatsby-image"

import Masonry from "react-masonry-component"

export const Works = ({limit}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <StaticQuery
    query={graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }

            frontmatter {
              title
              image {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
          }
        }
      }
    }
    
    `}
    render={data => {
      const edges = limit ? data.allMarkdownRemark.edges.slice(0, 8) : data.allMarkdownRemark.edges;

      return (
          <Wrapper as={Container} id="#projects">
            <h2>Personal Work</h2>
            <Section>
              <Masonry 
                className="my-masonry-grid">
                  {edges.map(({node}, i) => {
                    return (
                      <Item key={i}>
                        <Img fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.title} className="image" />
                        <div className="middle"><Link to={node.fields.slug}><div className="text" style={{color: theme === 'dark' ? '#212121' : '#fff'}}>{node.frontmatter.title}</div></Link></div>
                      </Item>
                      )
                  })}
              </Masonry>
              {edges.length > 8 && limit && (
                <Center>
                  <Button as={Link} to="/gallery">
                    View All
                  </Button>
                </Center>
              )}
            </Section>
          </Wrapper>
        )}
    } />);
}
