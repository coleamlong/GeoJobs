import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import axios from "axios";
import JobCard from "../components/Cards/JobCard";
import Pagination from "react-bootstrap/Pagination";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FilterDropdown from "../components/FilterDropdown";
import RangeSlider from "../components/RangeSlider";

const client = axios.create({
  baseURL: "https://api.geojobs.me/",
});

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [activePage, setActivePage] = useState(1);

  function handleClick(number) {
    console.log("Clicked page ", number);
    setActivePage(number);
    setLoaded(false);
  }

  useEffect(() => {
    const fetchJobs = async () => {
      if (!loaded) {
        await client
          .get(`jobs?page=${activePage}&perPage=20`)
          .then((response) => {
            setJobs(response.data);
          })
          .catch((err) => console.log(err));
        setLoaded(true);
      }
    };
    fetchJobs();
  }, [jobs, loaded]);

  let numPages = 1000 / 20;
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
      <h1 className="p-5 text-center">Jobs</h1>
      <Form className="d-flex pb-5 justify-content-center">
        <Form.Control
          style={{ width: "20vw" }}
          type="search"
          placeholder="Search jobs"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Form className="filter-form d-flex gap-4 justify-content-center pb-5">
        <FilterDropdown
          title="Sort"
          items={[
            "Salary (lowest -> highest)",
            "Salary (highest -> lowest)",
            "Company Name",
            "Position Name",
            "Category Name",
            "Date Created",
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
          title="Category"
          items={[
            "Travel Jobs",
            "Teaching Jobs",
            "Healthcare & Nursing Jobs",
            "Energy, Oil & Gas Jobs",
            "Accounting & Finance Jobs",
            "Logistics & Warehouse Jobs",
            "IT Jobs",
            "Customer Services Jobs",
            "Admin Jobs",
            "Sales Jobs",
          ]}
        />
        <Form.Label>Salary</Form.Label>
        <RangeSlider min={0} max={1000000} />
        <Form.Label>Post Age (days)</Form.Label>
        <RangeSlider min={0} max={365} />
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
          jobs["data"].map((job) => {
            return (
              <Col className="d-flex align-self-stretch">
                <JobCard job={job} />
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

export default Jobs;
