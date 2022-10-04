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
                        <Card.Text>City: Austin</Card.Text>
                        <Card.Text>State: Texas</Card.Text>
                        <Card.Text>Company: Indeed</Card.Text>
                        <Card.Text>Salary: $196000 - $284000</Card.Text>
                        <Card.Text>Contract Time: Full-time</Card.Text> 
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
                        <Card.Text>City: New York</Card.Text>
                        <Card.Text>State: New York</Card.Text>
                        <Card.Text>Company: Obran Cooperative</Card.Text>
                        <Card.Text>Salary: $120000 - $160000</Card.Text>
                        <Card.Text>Contract Time: Full-time</Card.Text> 
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
                        <Card.Text>City: San Francisco</Card.Text>
                        <Card.Text>State: California</Card.Text>
                        <Card.Text>Company: CyberCoders</Card.Text>
                        <Card.Text>Salary: $120000 - $200000</Card.Text>
                        <Card.Text>Contract Time: Full-time</Card.Text> 
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
