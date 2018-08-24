import React from 'react'
import Layout from "../components/Layout"
import { Link, StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import { Button, Card, CardTitle, CardText, Container, Row, Col} from 'reactstrap'

library.add(faClipboard)
library.add(faFire)


export default ({data}) => (
    <StaticQuery
      query={graphql`query indexQuery {
        bannerImage: file(relativePath: { eq: "2500x700.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth:2400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        responsibilitiesText: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/.*\/responsibilities\/.*/"}}) {
          edges {
            node {
              excerpt(pruneLength:500)
            }
          }
        }
      }`}
      render={data => (<Layout>
        <section className="section">
          <Container fluid>
            <div className="content" style={{position:'relative', marginTop:'-50px'}}>
              <Img className="full-width-image-container  margin-top-0" fluid={data.bannerImage.childImageSharp.fluid} />
              <h1 className="centered-on-image has-text-weight-bold is-size-1 text-white margin-top-0">
                <span style={{textShadow: '2px 2px 4px #000000'}}>Fire Doors Save Lives</span>
              </h1>
            </div>

            <div className="floating-wrapper">
              <div className="floating-box">
                Pro-Tect Ltd provide a full and comprehensive fire door surveying service for all new and existing fire door installations.<br/>
                Our aim is to provide customers with the knowledge that the environment in which they work, is as safe from the spread of fire.
              </div>
            </div>

            <Row style={{position:"relative", top:-100}}>
              <Col>
                <Card body>
                  <CardTitle className="text-center">
                    <FontAwesomeIcon className="display-1" icon="fire"/>
                    <br/><br/>
                    What are your responsiblities?
                  </CardTitle>
                  <CardText>
                    {data.responsibilitiesText.edges[0].node.excerpt}
                  </CardText>
                  <Link to="/responsibilities" className='text-center'>
                    <Button color="danger">Read more</Button>
                  </Link>
                </Card>
              </Col>
              <Col>
                <Card body>
                  <CardTitle className="text-center">
                    <FontAwesomeIcon className="display-1" icon={['far', 'clipboard']}/>
                    <br/><br/>
                    What does the law say?
                  </CardTitle>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
      )}
    />
)
