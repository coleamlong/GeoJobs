import React from "react";

import Card from "react-bootstrap/Card";

function BoldText({ children }) {
  return (
    <span style={{  fontSize: '17px', color: '#264653', font: 'Courier-Oblique'  }}>{children}</span>
  );
}

function OText({ children }) {
  return (
    <span style={{  fontSize: '17px', color: 'whitesmoke', font: 'Courier-Oblique'  }}>{children}</span>
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
    <Card
    style= {{backgroundColor: '#3d405b'}}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title><OText>{name}</OText></Card.Title>

        <Card.Subtitle><OText>@{gitlab_username}</OText></Card.Subtitle>
        <Card.Text><OText>Role: {role}</OText></Card.Text>
        <Card.Text><OText>{bio}</OText></Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted" style= {{backgroundColor: 'lavender'}}>
        <BoldText>Commits: {commits} </BoldText><br />
        <BoldText>Issues: {issues} </BoldText><br />
        <BoldText>Unit Tests: {unit_tests}</BoldText>
      </Card.Footer>
    </Card>
  );
};

export default DeveloperCard;
