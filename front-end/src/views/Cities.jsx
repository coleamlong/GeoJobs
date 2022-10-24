import React, { useState, useEffect } from "react";
<<<<<<< HEAD
=======
import CityCard from "../components/Cards/CityCard";
import Stack from "react-bootstrap/Stack";
>>>>>>> 53d54ac2da2209aad8749931ca81c5c862fea5cb
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import axios from "axios";
import CityCard from "../components/Cards/CityCard";

const client = axios.create({
  baseURL: "https://api.geojobs.me/",
});

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      if (cities === undefined || cities.length === 0) {
        await client
          .get("cities")
          .then((response) => {
            setCities(response.data);
          })
          .catch((err) => console.log(err));
        setLoaded(true);
      }
    };
    fetchCities();
  }, [cities]);

  return (
    <Container>
      <h1>Cities</h1>
      <Row md={3} className="d-flex g-4 p-4 justify-content-center">
        {loaded ? (
          cities.map((city) => {
            return (
              <Col>
                <CityCard city={city} />
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

export default Cities;
