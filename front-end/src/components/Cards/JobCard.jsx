import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import job_placeholder from "../../assets/placeholder/job.png";
import {Highlight} from "react-highlight-regex";

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

  function highlightText (input) {
    if (props.regex != null) {
      return <Highlight match={props.regex} text={input} />
    }
    return input
  }
  
  return (
    <Card
    style= {{backgroundColor: '#ffffff'}}>
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
        <Card.Title>{highlightText(company)}</Card.Title>
        <Card.Subtitle>{highlightText(title)}</Card.Subtitle>
        <Card.Text>
          Salary: ${highlightText(String(salary_min))} - 
            ${highlightText(String(salary_max))}
        </Card.Text>
      </Card.Body>
      <Card.Footer
      style= {{backgroundColor: '#3d405b'}}>
        <Button
          style= {{backgroundColor: '#e07a5f'}}
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
