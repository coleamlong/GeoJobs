import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const CityCard = (props) => {
  const { name, state, population, rating, Bodybudget, key } = props.city;
  return (
    <Card>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>State: {state}</Card.Text>
        <Card.Text>Population: {population}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
        <Card.Text>Budget: {Bodybudget}</Card.Text>
        <Button variant="dark" href={`/city/${key}`}>
          more info on {name}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CityCard;
