import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FilterDropdown from "../components/FilterDropdown";
import axios from "axios";
import CityCard from "../components/Cards/CityCard";
import RangeSlider from "../components/RangeSlider";

const client = axios.create({
  baseURL: "https://api.geojobs.me/",
});

const Cities = () => {
  const [cities, setCities] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const [population, setPopulation] = useState([0, 1000000]);
  const [rating, setRating] = useState([0, 5]);
  const [budget, setBudget] = useState([0, 10]);
  const [safety, setSafety] = useState([0, 10]);

  const handlePopulationFilter = (value) => {
    setPopulation(value);
    console.log(population);
  };
  const handleRatingFilter = (value) => {
    setRating(value);
    console.log(rating);
  };
  const handleBudgetFilter = (value) => {
    setBudget(value);
    console.log(budget);
  };
  const handleSafetyFilter = (value) => {
    setSafety(value);
    console.log(safety);
  };

  function arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }

  useEffect(() => {
    const fetchCities = async () => {
      if (!loaded) {
        var query = "cities";
        var filterCount = 0;
        if (!arrayEquals(population, [0, 1000000])) {
          filterCount++;
          query += "?";
          query += `population=${population[0]}-${population[1]}`;
        }
        if (!arrayEquals(rating, [0, 5])) {
          filterCount++;
          query += filterCount === 1 ? "?" : "&";
          query += `rating=${rating[0]}-${rating[1]}`;
        }
        if (!arrayEquals(budget, [0, 10])) {
          filterCount++;
          query += filterCount === 1 ? "?" : "&";
          query += `budget=${budget[0]}-${budget[1]}`;
        }
        if (!arrayEquals(safety, [0, 10])) {
          filterCount++;
          query += filterCount === 1 ? "?" : "&";
          query += `safety=${safety[0]}-${safety[1]}`;
        }
        console.log(query);
        await client
          .get(query)
          .then((response) => {
            setCities(response.data);
          })
          .catch((err) => console.log(err));
        setLoaded(true);
      }
    };
    fetchCities();
  }, [cities, loaded]);

  function BoldText({ children }) {
    return (
      <span style={{  fontSize: '18px', color: 'whitesmoke', font: 'Courier-Oblique'  }}>{children}</span>
    );
  }

  return (
    <Container>
      <h1 className="p-5 text-center">Cities</h1>
      <Form className="d-flex pb-5 justify-content-center">
        <Form.Control
          style={{ width: "20vw" }}
          type="search"
          placeholder="Search cities"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-secondary">Search</Button>
      </Form>
      <Form className="filter-form d-flex gap-4 justify-content-center">
        <FilterDropdown
          title="Sort By"
          items={[
            "Population",
            "Average Rating (Lowest First)",
            "Average Rating (Highest First)",
            "Budget Score (Lowest First)",
            "Budget Score (Highest First)",
            "Safety Score (Lowest First)",
            "Safety Score (Highest First)",
          ]}
        />
        <FilterDropdown
          title="Tags"
          items={[
            "Charming",
            "Foodie",
            "Nightlife",
            "Architecture",
            "History",
            "Museums",
            "Performing Arts",
            "Music",
            "Hipster",
            "Hippie",
            "Posh",
            "Family Friendly",
            "LGBT Friendly",
            "Diversity",
            "Beach Town",
            "College Town",
            "Ski Town",
            "Outdoorsy",
            "Wineries",
            "Shopping",
          ]}
          scroll
        />
        <FilterDropdown
          title="State"
          items={[
            "Alabama",
            "Alaska",
            "Arizona",
            "Arkansas",
            "California",
            "Colorado",
            "Connecticut",
            "Delaware",
            "Florida",
            "Georgia",
            "Hawaii",
            "Idaho",
            "Illinois",
            "Indiana",
            "Iowa",
            "Kansas",
            "Kentucky",
            "Louisiana",
            "Maine",
            "Maryland",
            "Massachusetts",
            "Michigan",
            "Minnesota",
            "Mississippi",
            "Missouri",
            "Montana",
            "Nebraska",
            "Nevada",
            "New Hampshire",
            "New Jersey",
            "New Mexico",
            "New York",
            "North Carolina",
            "North Dakota",
            "Ohio",
            "Oklahoma",
            "Oregon",
            "Pennsylvania",
            "Rhode Island",
            "South Carolina",
            "South Dakota",
            "Tennessee",
            "Texas",
            "Utah",
            "Vermont",
            "Virginia",
            "Washington",
            "West Virginia",
            "Wisconsin",
            "Wyoming",
          ]}
          scroll
        />
        <Form.Label>Population:</Form.Label>
        <RangeSlider
          min={0}
          max={1000000}
          onChange={handlePopulationFilter}
          value={population}
        />
        <Form.Label>Rating:</Form.Label>
        <RangeSlider
          min={0}
          max={5}
          discrete
          onChange={handleRatingFilter}
          value={rating}
        />
        <Form.Label>Budget:</Form.Label>
        <RangeSlider
          min={0}
          max={10}
          discrete
          onChange={handleBudgetFilter}
          value={budget}
        />
        <Form.Label>Safety:</Form.Label>
        <RangeSlider
          min={0}
          max={10}
          discrete
          onChange={handleSafetyFilter}
          value={safety}
        />
        <Button onClick={() => setLoaded(false)}>Filter</Button>
      </Form>
      <Row
        xl={4}
        lg={3}
        md={2}
        sm={1}
        xs={1}
        className="d-flex g-4 p-4 justify-content-center"
      >
        {loaded ? (
          cities["data"].map((city) => {
            return (
              <Col className="d-flex align-self-stretch">
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
