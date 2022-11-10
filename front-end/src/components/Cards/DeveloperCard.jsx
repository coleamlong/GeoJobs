import React from "react";

import Card from "react-bootstrap/Card";

function BoldText({ children }) {
  return (
    <span style={{  fontSize: '17px', color: 'lightsalmon', font: 'Courier-Oblique'  }}>{children}</span>
  );
}

const DeveloperCard = (props) => {
  const {
    name,
    image,
    gitlab_username,
    role,
    bio,
    commits,
    issues,
    unit_tests,
  } = props.devInfo;
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>

        <Card.Subtitle>@{gitlab_username}</Card.Subtitle>
        <Card.Text>Role: {role}</Card.Text>
        <Card.Text>{bio}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted" style= {{backgroundColor: 'whitesmoke'}}>
        <BoldText>Commits: {commits} </BoldText><br />
        <BoldText>Issues: {issues} </BoldText><br />
        <BoldText>Unit Tests: {unit_tests}</BoldText>
      </Card.Footer>
    </Card>
  );
};

export default DeveloperCard;
