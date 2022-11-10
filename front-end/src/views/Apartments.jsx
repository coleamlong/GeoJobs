import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import axios from "axios";
import ApartmentCard from "../components/Cards/ApartmentCard";
import Pagination from "react-bootstrap/Pagination";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FilterDropdown from "../components/FilterDropdown";
import RangeSlider from "../components/RangeSlider";

const client = axios.create({
  baseURL: "https://api.geojobs.me/",
});

const Apartments = () => {
  const [apartments, setApartments] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [activePage, setActivePage] = useState(1);

  function handleClick(number) {
    console.log("Clicked page ", number);
    setActivePage(number);
    setLoaded(false);
  }

  useEffect(() => {
    const fetchApartments = async () => {
      if (!loaded) {
        await client
          .get(`apartments?page=${activePage}&perPage=20`)
          .then((response) => {
            setApartments(response.data);
            console.log(response.data);
          })
          .catch((err) => console.log(err));
        setLoaded(true);
      }
    };
    fetchApartments();
  }, [apartments, loaded]);

  let numPages = 500 / 20;
  let items = [];
  for (let number = activePage - 2; number <= activePage + 2; number++) {
    if (number > 0 && number <= numPages) {
      items.push(
        <Pagination.Item
          key={number}
          onClick={() => handleClick(number)}
          active={number === activePage}
        >
          {number}
        </Pagination.Item>
      );
    }
  }

  return (
    <Container>
      <h1 className="p-5 text-center">Apartments</h1>
      <Form className="d-flex pb-5 justify-content-center">
        <Form.Control
          style={{ width: "20vw" }}
          type="search"
          placeholder="Search apartments"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-secondary">Search</Button>
      </Form>
      <Form className="filter-form d-flex gap-4 justify-content-center pb-5">
        <FilterDropdown
          title="Sort"
          items={[
            "# Bedrooms",
            "# Bathrooms",
            "Price (lowest -> highest)",
            "Price (highest -> lowest)",
            "Square Footage",
            "Build Year",
          ]}
        />
        <FilterDropdown
          title="City"
          items={[
            "New York, NY",
            "Los Angeles, CA",
            "Chicago, IL",
            "Houston, TX",
            "Phoenix, AZ",
            "Philadelphia, PA",
            "San Antonio, TX",
            "San Diego, CA",
            "Dallas, TX",
            "San Jose, CA",
            "Austin, TX",
            "Jacksonville, FL",
            "Fort Worth, TX",
            "Columbus, OH",
            "Indianapolis, IN",
            "Charlotte, NC",
            "San Francisco, CA",
            "Seattle, WA",
            "Denver, CO",
            "Washington D.C.",
            "Nashville, TN",
            "Oklahoma City, OK",
            "El Paso, TX",
            "Boston, MA",
            "Portland, OR",
            "Las Vegas, NV",
            "Detroit, MI",
            "Memphis, TN",
            "Louisville, KY",
            "Baltimore, MD",
            "Milwaukee, WI",
            "Albuquerque, NM",
            "Tucson, AZ",
            "Fresno, CA",
            "Sacramento, CA",
            "Kansas City, MO",
            "Mesa, AZ",
            "Atlanta, GA",
            "Omaha, NE",
            "Colorado Springs, CO",
            "Raleigh, NC",
            "Long Beach, CA",
            "Virginia Beach, VA",
            "Miami, FL",
            "Oakland, CA",
            "Minneapolis, MN",
            "Tulsa, OK",
            "Bakersfield, CA",
            "Wichita, KS",
            "Arlington, TX",
          ]}
          scroll
        />
        <FilterDropdown
          title="Property Type"
          items={["Apartment", "Single Family", "Condo", "Townhouse"]}
        />
        <Form.Label>Bedrooms</Form.Label>
        <RangeSlider min={0} max={10} discrete />
        <Form.Label>Bathrooms</Form.Label>
        <RangeSlider min={0} max={10} discrete />
        <Form.Label>Price</Form.Label>
        <RangeSlider min={0} max={10000} />
        <Form.Label>Square Footage</Form.Label>
        <RangeSlider min={0} max={20000} />
      </Form>
      <Pagination className="justify-content-center">
        {activePage > 3 && (
          <Pagination.Item
            first
            key={1}
            onClick={() => handleClick(1)}
            active={1 === activePage}
          >
            1
          </Pagination.Item>
        )}
        {activePage > 4 && <Pagination.Ellipsis />}
        {items}
        {activePage < numPages - 3 && <Pagination.Ellipsis />}
        {activePage < numPages - 2 && (
          <Pagination.Item
            last
            key={numPages}
            onClick={() => handleClick(numPages)}
            active={numPages === activePage}
          >
            {numPages}
          </Pagination.Item>
        )}
      </Pagination>
      <Row
        xl={4}
        lg={3}
        md={2}
        sm={1}
        xs={1}
        className="d-flex g-4 p-4 justify-content-center"
      >
        {loaded ? (
          apartments["data"].map((apartment) => {
            return (
              <Col className="d-flex align-self-stretch">
                <ApartmentCard apartment={apartment} />
              </Col>
            );
          })
        ) : (
          <Spinner animation="grow" />
        )}
      </Row>
      <Pagination className="justify-content-center">
        {activePage > 3 && (
          <Pagination.Item
            first
            key={1}
            onClick={() => handleClick(1)}
            active={1 === activePage}
          >
            1
          </Pagination.Item>
        )}
        {activePage > 4 && <Pagination.Ellipsis />}
        {items}
        {activePage < numPages - 3 && <Pagination.Ellipsis />}
        {activePage < numPages - 2 && (
          <Pagination.Item
            last
            key={numPages}
            onClick={() => handleClick(numPages)}
            active={numPages === activePage}
          >
            {numPages}
          </Pagination.Item>
        )}
      </Pagination>
    </Container>
  );
};

export default Apartments;
