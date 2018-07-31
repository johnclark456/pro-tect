import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'

library.add(faFire)

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="fluid-container">
          <div className="content">
            <Img className="full-width-image-container" sizes={this.props.data.imageOne.sizes} />
            <h1 className="centered-on-image has-text-weight-bold is-size-1 text-white">Fire Doors Save Lives</h1>
          </div>
          <div className="row">
            <div className="col">
              <h1 className="text-center"><FontAwesomeIcon icon="fire"/></h1>
            </div>
            <div className="col">
              <h1 className="text-center"><FontAwesomeIcon icon="fire"/></h1>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    imageOne: imageSharp(id: { regex: "/2500x700.png/" }) {
      sizes(maxWidth: 2500) {
        ...GatsbyImageSharpSizes
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
