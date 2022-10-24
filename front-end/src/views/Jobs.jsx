import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import axios from "axios";
import JobCard from "../components/Cards/JobCard";

const client = axios.create({
  baseURL: "https://api.geojobs.me/",
});

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchJobs = async () => {
      if (jobs === undefined || jobs.length === 0) {
        await client
          .get("jobs")
          .then((response) => {
            setJobs(response.data);
          })
          .catch((err) => console.log(err));
        setLoaded(true);
      }
    };
    fetchJobs();
  }, [jobs]);

  return (
    <Container>
      <h1>Jobs</h1>
      <Row md={3} className="d-flex g-4 p-4 justify-content-center">
        {loaded ? (
          jobs.map((job) => {
            return (
              <Col>
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
