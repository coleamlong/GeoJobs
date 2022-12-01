import React from "react";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ToolCard = (props) => {
  const { title, image, description, link } = props.toolInfo;
  return (
    <Card
    style= {{backgroundColor: '#f4f1de'}}>
      <Card.Img className="p-4" variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer
      style= {{backgroundColor: 'whitesmoke'}}>
        <Button href={link} class="btn btn-primary stretched-link"
        style= {{backgroundColor: '#3d405b'}}>
          More Info
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ToolCard;
