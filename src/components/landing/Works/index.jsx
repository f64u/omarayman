import React, { useContext } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Section, Item } from './styles';
import Img from "gatsby-image"

export const Works = () => {
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
    render={data => ( 
    <Wrapper as={Container} id="#projects">
      <h2>Personal Work</h2>
      <Section>
        {data.allMarkdownRemark.edges.map(({node}) => {
          return (
            <Item>
              <Img fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.title} className="image" />
              <div className="middle"><Link to={node.fields.slug}><div className="text" style={{color: theme === 'dark' ? '#212121' : '#fff'}}>{node.frontmatter.title}</div></Link></div>
            </Item>)
        })}
      </Section>
    </Wrapper>)
    } />);
}
