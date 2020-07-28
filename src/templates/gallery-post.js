import React from  "react"
import {Link, graphql} from "gatsby"

import {Layout, SEO} from "../components/common"

const GalleryPostTemplate = ({data}) => {
    const siteTitle = data.site.siteMetadata.title
    return (
        <Layout>
            <SEO />

        </Layout>
    )
}

export default GalleryPostTemplate

export const pageQuery = graphql`
  query GalleryPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
