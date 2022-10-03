import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


const ApartmentCard = () => {
  return (
    <div>
      <Row md={10} className="p-4 g-4 justify-content-center">
            <Col>
                <Card border='dark'>
                    <Card.Body>
                        <Card.Title>Apartment Name: The Vaughan</Card.Title>
                        <Card.Subtitle>Location: Austin, TX</Card.Subtitle>
                        <Card.Text>
                          Pet Friendly: Yes
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-muted'>
                    <li>
                    <Link to={`/apartment/1`}>More info</Link>
                    </li>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card border='dark'>
                    <Card.Body>
                        <Card.Title>Apartment name: EOS</Card.Title>
                        <Card.Subtitle>Location: New York, NY</Card.Subtitle>
                        <Card.Text>
                          Pet Friendly: Yes
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-muted'>
                    <li>
                      <Link to='/apartment/2'>More Info</Link>
                    </li>
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card border='dark'>
                    <Card.Body>
                        <Card.Title>Apartment Name: ZEN Hollywood</Card.Title>
                        <Card.Subtitle>Location: Los Angeles, CA</Card.Subtitle>
                        <Card.Text>
                          Pet Friendly: Yes
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-muted'>
                    <li>
                      <Link to='/apartment/3'>More Info</Link>
                    </li>
                    </Card.Footer>
                </Card>
                </Col>
        </Row>
    </div>

  )
}

export default ApartmentCard