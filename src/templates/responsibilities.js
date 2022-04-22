import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import ResponsibilitiesPageTemplate from '../components/ResponsibilitiesPageTemplate'
import { HTMLContent } from '../components/Content'

const ResponsibilitiesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ResponsibilitiesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

ResponsibilitiesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ResponsibilitiesPage

export const ResponsibilitiesPageQuery = graphql`
  query ResponsibilitiesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
