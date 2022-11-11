import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import job_placeholder from "../../assets/placeholder/job.png";

function OText({ children }) {
  return (
    <span style={{  fontSize: '17px', color: 'white', font: 'Courier-Oblique'  }}>{children}</span>
  );
}

const JobCard = (props) => {
  const {
    category,
    company,
    created,
    description,
    id,
    salary_max,
    salary_min,
    title,
    url,
    img_url,
  } = props.job;
  return (
    <Card
    style= {{backgroundColor: 'lavender'}}>
      <Card.Img
        className="p-2"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "contain",
        }}
        src={img_url ? img_url : job_placeholder}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{company}</Card.Title>
        <Card.Subtitle>{title}</Card.Subtitle>
        <Card.Text>
          Salary: ${salary_min} - ${salary_max}
        </Card.Text>
      </Card.Body>
      <Card.Footer
      style= {{backgroundColor: 'midnightblue'}}>
        <Button
          style= {{backgroundColor: 'lightsalmon'}}
          className="btn btn-primary stretched-link"
          variant="dark"
          href={`/job/${id}`}
        >
          <OText>More Info</OText>
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default JobCard;
