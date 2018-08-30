import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";
import { Button, Card, CardBody, CardText, Row, Col } from "reactstrap";

const NewsPreviews = ({ article }) => (
  <Row>
    <Col>
      <Card className="m-2 p-1">
      <Row noGutters>
        <Col md="auto">
          <Img
            title={article.title}
            alt={article.title}
            fixed={article.imageSizes}
            className="card-img_src center-block"
            style={{maxWidth:'100%', overflow:'hidden'}}
          />
        </Col>
        <Col>
          <CardBody>
            <CardText>{article.description}</CardText>
            <Link to={article.link}>
              <Button>Read More</Button>
            </Link>
          </CardBody>
        </Col>
        </Row>
      </Card>
    </Col>
  </Row>
);

NewsPreviews.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      thumbnail: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default NewsPreviews;
