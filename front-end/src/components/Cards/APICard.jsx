import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const APICard = (props) => {
  const { title, image, description, link } = props.apiInfo;

  return (
    <Card>
      <Card.Img className="p-4" variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button href={link} class="btn btn-primary stretched-link">
          More Info
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default APICard;
