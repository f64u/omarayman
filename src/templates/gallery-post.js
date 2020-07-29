import React, {useContext} from "react"
import styled from 'styled-components';
import Img from "gatsby-image"
import { ThemeContext } from 'providers/ThemeProvider';
import { Link, graphql } from "gatsby"

import { Layout, SEO, Container } from "../components/common"


const Wrapper = styled.div`
  padding: 2rem 0;
  a {
    text-decoration: underline; 
    color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
  }
`;

const Description = styled.blockquote`
  margin: 1.3rem 0 3rem .9rem;

  font-style: italic;
  font-size: 1rem;
  display: flex;

`

const GalleryPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext
  const { theme } = useContext(ThemeContext);


  return (
    <Layout location={location}>
      <SEO
        title={`${post.frontmatter.title} - ${siteTitle}`}
        description={post.frontmatter.description}
      />
      <Wrapper as={Container} theme={theme}>
      <article>
        <header>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <Img fluid={post.frontmatter.image.childImageSharp.fluid} alt={post.frontmatter.title} />
        <Description><span>--</span><span>{post.frontmatter.description}</span>{" "}</Description>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li style={{marginLeft: "-1.5em"}}>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
      </Wrapper>
    </Layout>
  )
}

export default GalleryPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            description
            title
            image {
                childImageSharp {
                    fluid {
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
`
