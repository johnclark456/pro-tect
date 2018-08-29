import React from "react";
import Layout from "../components/Layout";
import { Link, StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import {
  Button,
  Card,
  CardTitle,
  CardText,
  Container,
  Row,
  Col
} from "reactstrap";
import NewsPreviews from "../components/newsPreviews";

library.add(faClipboard);
library.add(faFire);

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query indexQuery {
        bannerImage: file(relativePath: { eq: "2500x700.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(maxWidth: 2400) {
              ...GatsbyImageSharpFluid
            }
          }
        }

        responsibilitiesText: allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/.*/responsibilities/.*/" } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 500)
            }
          }
        }

        blogPages: allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}, filter: {fileAbsolutePath: {regex: "/blog/.*.md$/"}}) {
          edges {
            node {
              id
              fileAbsolutePath
              frontmatter {
                title
                thumbnail {
                  childImageSharp {
                    fixed(height:400) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                } 
                date(formatString: "Do MMMM YYYY")
                description
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <section className="section">
          <Container fluid>
            <div
              className="content"
              style={{ position: "relative", marginTop: "-55px" }}
            >
              <Img
                className="full-width-image-container  margin-top-0"
                fluid={data.bannerImage.childImageSharp.fluid}
              />
              <h1 className="centered-on-image has-text-weight-bold is-size-1 text-white margin-top-0">
                <span style={{ textShadow: "2px 2px 4px #000000" }}>
                  Fire Doors Save Lives
                </span>
              </h1>
            </div>

            <div className="floating-wrapper">
              <div className="floating-box">
                Pro-Tect Ltd provide a full and comprehensive fire door
                surveying service for all new and existing fire door
                installations.
                <br />
                Our aim is to provide customers with the knowledge that the
                environment in which they work, is as safe from the spread of
                fire.
              </div>
            </div>
          </Container>


          <Container style={{ position: "relative", top: -100 }}>
            <Row>
              <Col md="6">
                <Card body>
                  <CardTitle className="text-center">
                    <FontAwesomeIcon className="display-1" icon="fire" />
                    <br />
                    <br />
                    What are your responsiblities?
                  </CardTitle>
                  <CardText>
                    {data.responsibilitiesText.edges[0].node.excerpt}
                  </CardText>
                  <Link to="/responsibilities" className="text-center">
                    <Button color="danger">Read more</Button>
                  </Link>
                </Card>
              </Col>
              <Col>
                <Card body>
                  <CardTitle className="text-center">
                    <FontAwesomeIcon
                      className="display-1"
                      icon={["far", "clipboard"]}
                    />
                    <br />
                    <br />
                    What does the law say?
                  </CardTitle>
                </Card>
              </Col>
            </Row>
            <Row />
            <hr className="fancy-line"/>
            <h1 className="text-center">News</h1>
            {data.blogPages.edges.map(edge => {
              const fullPath = edge.node.fileAbsolutePath
              const data = {
                title: edge.node.frontmatter.title,
                imageSizes: edge.node.frontmatter.thumbnail.childImageSharp.fixed,
                description: edge.node.frontmatter.description,
                link: '/blog/' + fullPath.substr(fullPath.lastIndexOf('/') + 1).split('.md')[0]
              }
              return (
                  <NewsPreviews key={data.title} article={data} />
              )
            })}
          </Container>
        </section>
      </Layout>
    )}
  />
);
