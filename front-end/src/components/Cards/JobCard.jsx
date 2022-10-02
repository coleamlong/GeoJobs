import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <div>
      <Row md={10} className="p-4 g-4 justify-content-center">
            <Col>
                <Card border='dark'>
                    <Card.Body>
                        <Card.Title>Job: Software Engineer</Card.Title>
                        <Card.Subtitle>Location: Austin,TX</Card.Subtitle>
                    </Card.Body>
                    <Card.Footer className='text-muted'>
                    <li>
                    <Link to={`/job/1`}>More info</Link>
                    </li>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
            <Card border='dark'>
                    <Card.Body>
                        <Card.Title>Job: IT Engineer</Card.Title>
                        <Card.Subtitle>Location: New York, NY</Card.Subtitle>
                    </Card.Body>
                    <Card.Footer className='text-muted'>
                    <li>
                      <Link to='/job/2'>More Info</Link>
                    </li>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card border='dark'>
                    <Card.Body>
                        <Card.Title>Job: Software Engineer</Card.Title>
                        <Card.Subtitle>Location: Los Angelese, CA</Card.Subtitle>
                    </Card.Body>
                    <Card.Footer className='text-muted'>
                    <li>
                      <Link to='/job/3'>More Info</Link>
                    </li>
                    </Card.Footer>
                </Card>
                </Col>
        </Row>
    </div>

  )
}

export default JobCard