import React, { useState, useEffect, useRef } from "react";
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

var queryRE = null;

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [activePage, setActivePage] = useState(1);

  const searchQuery = useRef("");

  const [sort, setSort] = useState("sort");
  const [ascending, setAscending] = useState(false);
  const [city, setCity] = useState("City");
  const [category, setCategory] = useState("Job Category");
  const [salary, setSalary] = useState([0, 1000000]);

  const handleSortFilter = (value) => {
    setSort(value.toLowerCase().replace(" ", "_"));
  };

  const handleOrderFilter = (value) => {
    setAscending(value == "Ascending");
  };
  const handleCityFilter = (value) => {
    setCity(value.substring(0, value.indexOf(",")));
  };
  const HandleCategoryFilter = (value) => {
    setCategory(value);
  };
  const handleSalaryFilter = (value) => {
    setSalary(value);
  };

  function handleClick(number) {
    setActivePage(number);
    setLoaded(false);
  }

  function arrayEquals(a, b) {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((val, index) => val === b[index])
    );
  }

  useEffect(() => {
    const fetchJobs = async () => {
      if (!loaded) {
        var query = `jobs?page=${activePage}&perPage=20`;
        if (searchQuery.current.value != "") {
          query = `search/job/${searchQuery.current.value}`;
          queryRE = new RegExp(`(?:${searchQuery.current.value.replaceAll(" ", "|")})`, "i");
        } else {
          queryRE = null;
          if (sort != "sort") {
            query += `&sort=${sort}`;
          }
          if (ascending && sort != "sort") {
            query += "&asc";
          }
          if (city != "City") {
            query += `&city=${city}`;
          }
          if (category != "Job Category") {
            query += `&category=${category}`;
          }
          if (!arrayEquals(salary, [0, 1000000])) {
            query += `&salary=${salary[0]}-${salary[1]}`;
          }
        }

        console.log(query);
        await client
          .get(query)
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
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          setLoaded(false);
        }}
        className="d-flex pb-5 justify-content-center"
      >
        <Form.Control
          ref={searchQuery}
          style={{ width: "20vw" }}
          type="search"
          placeholder="Search jobs"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-secondary" onClick={() => setLoaded(false)}>
          Search
        </Button>
      </Form>
      <Form className="filter-form d-flex gap-4 justify-content-center pb-5">
        <FilterDropdown
          title="Sort"
          items={[
            "Sort",
            "Salary Min",
            "Company",
            "Title",
            "Category",
            "Created",
          ]}
          onChange={handleSortFilter}
        />
        <FilterDropdown
          title="Order"
          items={["Ascending", "Descending"]}
          onChange={handleOrderFilter}
        />
        <FilterDropdown
          title="City"
          items={[
            "City",
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
          onChange={handleCityFilter}
        />
        <FilterDropdown
          title="Job Category"
          items={[
            "Job Category",
            "Travel Jobs",
            "Teaching Jobs",
            "Healthcare and Nursing Jobs",
            "Energy, Oil and Gas Jobs",
            "Accounting and Finance Jobs",
            "Logistics and Warehouse Jobs",
            "IT Jobs",
            "Customer Services Jobs",
            "Admin Jobs",
            "Sales Jobs",
          ]}
          onChange={HandleCategoryFilter}
        />
        <Form.Label>Salary</Form.Label>
        <RangeSlider min={0} max={1000000} onChange={handleSalaryFilter} />
        <Button variant="outline-secondary" onClick={() => setLoaded(false)}>
          Submit
        </Button>
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
              <Col key={job.id} className="d-flex align-self-stretch">
                <JobCard job={job} regex={queryRE} />
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
            key={1}
            onClick={() => handleClick(1)}
            active={1 === activePage}
            first={true}
          >
            1
          </Pagination.Item>
        )}
        {activePage > 4 && <Pagination.Ellipsis />}
        {items}
        {activePage < numPages - 3 && <Pagination.Ellipsis />}
        {activePage < numPages - 2 && (
          <Pagination.Item
            key={numPages}
            onClick={() => handleClick(numPages)}
            active={numPages === activePage}
            last={true}
          >
            {numPages}
          </Pagination.Item>
        )}
      </Pagination>
    </Container>
  );
};

export default Jobs;
