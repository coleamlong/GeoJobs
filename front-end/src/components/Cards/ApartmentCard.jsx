import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const ApartmentCard = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Apartment: {props.name}</Card.Title>
        <Card.Text>Location: {props.city}</Card.Text>
        <Card.Text>Price: {props.price}</Card.Text>
        <Card.Text>Type: {props.type}</Card.Text>
        <Card.Text>BuldYear: {props.buildYear}</Card.Text>
        <Button Link={"/cities/id=" + props.key}>more info on {props.name}</Button>
      </Card.Body>
    </Card>
  );
};

export default ApartmentCard;
