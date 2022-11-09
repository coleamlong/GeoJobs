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
    <Card
      style= {{marginRight:30, backgroundColor: 'lightgrey'}} >
      <Card.Img variant="top" src={pageImage} />
      <Card.Body>
        <Card.Title>{pageName}</Card.Title>
        <Card.Text>{pageDescription}</Card.Text>
        <Button
          className="btn btn-primary stretched-link"
          style= {{marginRight:30, backgroundColor: 'burlywood'}}
          href={`${pageLink}`}
        >
          <span style={{fontSize: '16px', color: 'black', font: 'Courier-Oblique' }}>More Info</span>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default PageCard;
