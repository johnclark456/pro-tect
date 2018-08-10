import React from 'react'
import Layout from "../components/Layout"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'

library.add(faClipboard)
library.add(faFire)

export default ({data}) => (
    <StaticQuery
      query={graphql`query banner {
        bannerImage: file(relativePath: { eq: "2500x700.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth:2400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }`}
      render={data => (<Layout>
        <section className="section">
          <div className="fluid-container">
            <div className="content" style={{position:'relative'}}>
              <Img className="full-width-image-container  margin-top-0" fluid={data.bannerImage.childImageSharp.fluid} />
              <h1 className="centered-on-image has-text-weight-bold is-size-1 text-white margin-top-0">Fire Doors Save Lives</h1>
            </div>

            <div className="floating-wrapper">
              <div className="floating-box">
                Pro-Tect Ltd provide a full and comprehensive fire door surveying service for all new and existing fire door installations.<br/>
                Our aim is to provide customers with the knowledge that the environment in which they work, is as safe from the spread of fire.
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <h1 className="text-center display-1"><FontAwesomeIcon icon="fire"/></h1>
              </div>
              <div className="col-md-6">
                <h1 className="text-center display-1"><FontAwesomeIcon icon={['far', 'clipboard']}/></h1>
              </div>
            </div>
          </div>
        </section>
      </Layout>
      )}
    />
)
