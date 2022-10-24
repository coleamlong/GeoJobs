import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ApartmentCard = (props) => {
  const { name, city, price, type, buildYear, key } = props.apartment;
  return (
    <Card>
      <Card.Body>
        <Card.Title>Apartment: {name}</Card.Title>
        <Card.Text>Location: {city}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Card.Text>Type: {type}</Card.Text>
        <Card.Text>BuldYear: {buildYear}</Card.Text>
        <Button variant="dark" href={`/apartment/${key}`}>
          more info on {name}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ApartmentCard;
