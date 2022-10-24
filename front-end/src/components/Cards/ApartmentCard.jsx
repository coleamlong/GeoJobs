import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const ApartmentCard = (props) => {
  const {
    name,
    city,
    price,
    type,
    buildYear,
    pagelink,
  } = props.apartmentInfo;
  return (
    <Card>
      <Card.Body>
        <Card.Title>Apartment: {name}</Card.Title>
        <Card.Text>Location: {city}</Card.Text>
        <Card.Text>Price: {price}</Card.Text>
        <Card.Text>Type: {type}</Card.Text>
        <Card.Text>BuldYear: {buildYear}</Card.Text>
        <Button href={pagelink}>more info on {name}</Button>
      </Card.Body>
    </Card>
  );
};

export default ApartmentCard;
