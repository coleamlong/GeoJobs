import React from 'react'

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import avatar from '../assets/placeholder/avatar.png';

const GroupInfo = () => {
  return (
    <div>
        <h1 className='d-flex justify-content-center'>Authors</h1>
        <Row md={6} className="p-4 g-4 justify-content-center">
            <Col>
                <Card border='light'>
                    <Card.Img variant='top' src={avatar} />
                    <Card.Body>
                        <Card.Title>Cole Amlong</Card.Title>
                        <Card.Subtitle>@coleamlong</Card.Subtitle>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero tristique, ullamcorper odio eu, dapibus velit. Suspendisse sollicitudin ante sit amet auctor ullamcorper.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-muted'>
                        Commits: 000<br/>
                        Issues: 000<br/>
                        Unit Tests: 000
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card border='light'>
                    <Card.Img variant='top' src={avatar} />
                    <Card.Body>
                        <Card.Title>Faiza Rahman</Card.Title>
                        <Card.Subtitle>@faiza2002</Card.Subtitle>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero tristique, ullamcorper odio eu, dapibus velit. Suspendisse sollicitudin ante sit amet auctor ullamcorper.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-muted'>
                        Commits: 000<br/>
                        Issues: 000<br/>
                        Unit Tests: 000
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card border='light'>
                    <Card.Img variant='top' src={avatar} />
                    <Card.Body>
                        <Card.Title>Mikala Jaramillo</Card.Title>
                        <Card.Subtitle>@Mikalajj</Card.Subtitle>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero tristique, ullamcorper odio eu, dapibus velit. Suspendisse sollicitudin ante sit amet auctor ullamcorper.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-muted'>
                        Commits: 000<br/>
                        Issues: 000<br/>
                        Unit Tests: 000
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card border='light'>
                    <Card.Img variant='top' src={avatar} />
                    <Card.Body>
                        <Card.Title>Sarthak Sirotiya</Card.Title>
                        <Card.Subtitle>@sarthaksirotiya</Card.Subtitle>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero tristique, ullamcorper odio eu, dapibus velit. Suspendisse sollicitudin ante sit amet auctor ullamcorper.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-muted'>
                        Commits: 000<br/>
                        Issues: 000<br/>
                        Unit Tests: 000
                    </Card.Footer>
                </Card>
            </Col>
            <Col>
                <Card border='light'>
                    <Card.Img variant='top' src={avatar} />
                    <Card.Body>
                        <Card.Title>Thomas Langford</Card.Title>
                        <Card.Subtitle>@thomas_langford</Card.Subtitle>
                        <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet libero tristique, ullamcorper odio eu, dapibus velit. Suspendisse sollicitudin ante sit amet auctor ullamcorper.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='text-muted'>
                        Commits: 000<br/>
                        Issues: 000<br/>
                        Unit Tests: 000
                    </Card.Footer>
                </Card>
            </Col>
        </Row>
    </div>
  )
}

export default GroupInfo