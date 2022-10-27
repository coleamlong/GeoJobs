import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import axios from "axios";
import JobCard from "../components/Cards/JobCard";
import Pagination from "react-bootstrap/Pagination";

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
