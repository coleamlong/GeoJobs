import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const JobCard = (props) => {
  const { title, city, state, salary, contractType, key } = props.job;
  return (
    <Card style={{ height: "25rem" }}>
      <Card.Body>
        <Card.Title>Title: {title}</Card.Title>
        <Card.Text>City: {city}</Card.Text>
        <Card.Text>State: {state}</Card.Text>
        <Card.Text>Salary: {salary}</Card.Text>
        <Card.Text>ContractType: {contractType}</Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-center">
        <Button variant="dark" href={`/job/${key}`}>
          more info on {props.title}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default JobCard;
