import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import axios from "axios";
import ApartmentCard from "../components/Cards/ApartmentCard";

const client = axios.create({
  baseURL: "https://api.geojobs.me/",
});

const Apartments = () => {
  const [apartments, setApartments] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchApartments = async () => {
      if (apartments === undefined || apartments.length === 0) {
        await client
          .get("apartments")
          .then((response) => {
            setApartments(response.data);
          })
          .catch((err) => console.log(err));
        setLoaded(true);
      }
    };
    fetchApartments();
  }, [apartments]);

  return (
    <Container>
      <h1>Apartments</h1>
      <Row md={3} className="d-flex g-4 p-4 justify-content-center">
        {loaded ? (
          apartments["data"].map((apartment) => {
            return (
              <Col>
                <ApartmentCard apartment={apartment} />
              </Col>
            );
          })
        ) : (
          <Spinner animation="grow" />
        )}
      </Row>
    </Container>
  );
};

export default Apartments;
