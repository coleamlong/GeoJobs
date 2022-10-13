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
        <Button href={pageLink}>Link</Button>
      </Card.Body>
    </Card>
  );
};

export default PageCard;
