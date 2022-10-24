import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const JobCard = (props) => {
  const {
    title,
    city,
    state,
    salary,
    contractType,
    pagelink,
  } = props.jobs;
  return (
    <Card>
      <Card.Body>
        <Card.Title>Title: {title}</Card.Title>
        <Card.Text>City: {city}</Card.Text>
        <Card.Text>State: {state}</Card.Text>
        <Card.Text>Salary: {salary}</Card.Text>
        <Card.Text>ContractType: {contractType}</Card.Text>
        <Button href={pagelink}>more info on {title}</Button>
      </Card.Body>
    </Card>
  );
};

export default JobCard;
