import React from 'react'
import { Link } from 'gatsby'
import Img from "gatsby-image";
import PropTypes from 'prop-types'
import {
    Button,
    Card,
    CardText,
    Row,
    Col
  } from "reactstrap";
  

  const NewsPreviews = ({ article }) => (
      <Row>
          <Col>
            <Card className="m-2 p-1">
            <div className="card-img">
                    <Img
                      title={article.title}
                      alt={article.title}
                      fixed={article.imageSizes}
                      className="card-img_src center-block"
                    />
                  </div>
                  <CardText>{article.description}</CardText>
                  <Link to={article.link}><Button>Read More</Button></Link>
            </Card>
        </Col>
    </Row>
)

NewsPreviews.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        description: PropTypes.string,
      })
    ),
  }

export default NewsPreviews