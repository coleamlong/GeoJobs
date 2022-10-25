import React from "react";

import Card from "react-bootstrap/Card";

const ToolCard = (props) => {
  const { title, image, description, link } = props.toolInfo;
  return (
    <Card>
      <Card.Img className="p-4" variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>

        <Card.Text>{description}</Card.Text>
        <a href={link} class="btn btn-primary stretched-link">Link</a>
      </Card.Body>
    </Card>
  );
};

export default ToolCard;
