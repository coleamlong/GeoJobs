import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Stack } from "@mui/system";

const CityCard = (props) => {
  return (
    <Stack>
    <Card>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>State: {props.state}</Card.Text>
        <Card.Text>Population: {props.population}</Card.Text>
        <Card.Text>Rating: {props.rating}</Card.Text>
        <Card.Text>Budget: {props.Bodybudget}</Card.Text>
        <Button Link={"/counties/id=" + props.key}>more info on {props.name}</Button>
      </Card.Body>
    </Card>
    </Stack>
  );
};

export default CityCard;
