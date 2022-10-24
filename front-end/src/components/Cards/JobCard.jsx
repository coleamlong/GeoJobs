import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Title: {props.title}</Card.Title>
        <Card.Text>City: {props.city}</Card.Text>
        <Card.Text>State: {props.state}</Card.Text>
        <Card.Text>Salary: {props.salary}</Card.Text>
        <Card.Text>ContractType: {props.contractType}</Card.Text>
        <Button Link={"/jobs/id=" + props.key}>more info on {props.title}</Button>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
