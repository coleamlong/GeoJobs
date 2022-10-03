import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const CityCard = () => {
  return (
    <div>
      <Row md={10} className="p-4 g-4 justify-content-center">
            <Col>
                <Card border='dark'>
                    <Card.Body>
                        <Card.Title>City Name: Austin</Card.Title>
                        <Card.Subtitle>Located in: TX</Card.Subtitle>
                        <Card.Text>
                          Family Friendly: yes
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-muted'>
                    <li>
                      <Link to='/city/1'>More Info</Link>
                    </li>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
            <Card border='dark'>
                    <Card.Body>
                        <Card.Title>City Name: New York</Card.Title>
                        <Card.Subtitle>Located in: NY</Card.Subtitle>
                        <Card.Text>
                          Family Friendly: yes
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-muted'>
                    <li>
                      <Link to='/city/2'>More Info</Link>
                    </li>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
            <Card border='dark'>
                    <Card.Body>
                        <Card.Title>City Name: Los Angeles</Card.Title>
                        <Card.Subtitle>Located in: CA</Card.Subtitle>
                        <Card.Text>
                          Family Friendly: yes
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-muted'>
                    <li>
                      <Link to='/city/3'>More Info</Link>
                    </li>
                    </Card.Footer>
                </Card>
                </Col>
        </Row>
    </div>

  )
}

export default CityCard