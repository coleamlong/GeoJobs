import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const ApartmentCard = () => {
  return (
    <div>
      <Row md={10} className="p-4 g-4 justify-content-center">
        <Col>
          <Card border="dark">
            <Card.Body>
              <Card.Title>Chelsea On Lamar Apartments</Card.Title>
              <Card.Text>City: Austin</Card.Text>
              <Card.Text>State: Texas</Card.Text>
              <Card.Text>Number of Reviews: 15</Card.Text>
              <Card.Text>Rating: 4.5</Card.Text>
              <Card.Text>$1,445 - $2,395 per month</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <li>
                <Link to={`/apartment/1`}>More info</Link>
              </li>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="dark">
            <Card.Body>
              <Card.Title>City Wide Apartments</Card.Title>
              <Card.Text>City: New York</Card.Text>
              <Card.Text>State: New York</Card.Text>
              <Card.Text>Number of Reviews: 102</Card.Text>
              <Card.Text>Rating: 4.5</Card.Text>
              <Card.Text>$2,650 - $16,950 per month</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <li>
                <Link to="/apartment/2">More Info</Link>
              </li>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card border="dark">
            <Card.Body>
              <Card.Title>Lakewood Apartments At Lake Merced</Card.Title>
              <Card.Text>City: San Francisco</Card.Text>
              <Card.Text>State: California</Card.Text>
              <Card.Text>Number of Reviews: 62</Card.Text>
              <Card.Text>Rating: 3.0</Card.Text>
              <Card.Text>$2,199 - $3,869 per month</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">
              <li>
                <Link to="/apartment/3">More Info</Link>
              </li>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ApartmentCard;
