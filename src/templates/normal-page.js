import React from 'react'
import { graphql } from 'gatsby'

import ContentContainer from 'theme/containers/ContentContainer'

import Layout from 'components/Layout'
import Header from 'components/Header'
import Comment from 'components/Comment'
import SEO from 'components/SEO'


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Header title={post.frontmatter.title} subtitle={''} />
      <ContentContainer dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <Comment />
    </Layout>
  )
}


// eslint-disable-next-line
export const blogpageQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        author
        homeCity
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        title
        tags
        description
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`