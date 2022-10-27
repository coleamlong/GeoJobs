import React from "react";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";

const PageCard = (props) => {
  const {
    pageName,
    pageImage,
    pageDescription,
    pageLink
  } = props.pageInfo;
  return (
    <Card>
      <Card.Img variant="top" src={pageImage} />
      <Card.Body>
        <Card.Title>{pageName}</Card.Title>
        <Card.Text>{pageDescription}</Card.Text>
        <a href={pageLink} class="btn btn-primary stretched-link">Link</a>
      </Card.Body>
    </Card>
  );
};

export default PageCard;
