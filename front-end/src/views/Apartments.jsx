import React, { useState, useEffect } from "react";
<<<<<<< HEAD
=======
import ApartmentCard from "../components/Cards/ApartmentCard";
import Stack from "react-bootstrap/Stack";
>>>>>>> 53d54ac2da2209aad8749931ca81c5c862fea5cb
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
<<<<<<< HEAD
import axios from "axios";
import ApartmentCard from "../components/Cards/ApartmentCard";

const client = axios.create({
  baseURL: "https://api.geojobs.me/",
});
=======
import Typography from "@mui/material/Typography";
import axios from "axios";
>>>>>>> 53d54ac2da2209aad8749931ca81c5c862fea5cb

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
          apartments.map((apartment) => {
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
