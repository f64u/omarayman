import React, { useContext } from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Section, Item } from './styles';
import Img from "gatsby-image"

import Masonry from "react-masonry-css"

export const Works = () => {
  const { theme } = useContext(ThemeContext);

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  }

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
        <Masonry 
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
            {data.allMarkdownRemark.edges.map(({node}, i) => {
              return (
                <Item key={i}>
                  <Img fluid={node.frontmatter.image.childImageSharp.fluid} alt={node.frontmatter.title} className="image" />
                  <div className="middle"><Link to={node.fields.slug}><div className="text" style={{color: theme === 'dark' ? '#212121' : '#fff'}}>{node.frontmatter.title}</div></Link></div>
                </Item>
                )
            })}
        </Masonry>
      </Section>
    </Wrapper>)
    } />);
}
