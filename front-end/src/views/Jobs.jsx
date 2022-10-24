import React, { useState, useEffect } from "react";
<<<<<<< HEAD
=======
import JobCard from "../components/Cards/JobCard";
import Stack from "react-bootstrap/Stack";
>>>>>>> 53d54ac2da2209aad8749931ca81c5c862fea5cb
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
<<<<<<< HEAD
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
=======
    const fetchData = async () => {
      setJob(null);
      await axios.get(
        `https://api.geojobs.me/jobs/` 
      );
      let data = response.data["data"];
      setJob(data["jobs"]);
>>>>>>> 53d54ac2da2209aad8749931ca81c5c862fea5cb
    };
    fetchJobs();
  }, [jobs]);

  return (
<<<<<<< HEAD
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
=======
    <Container
      className="page-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: (jobs ?? []).length === 0 ? "100%" : "none",
      }}
    >
      <Typography
        gutterBottom
        className="modelTitle"
        variant="h2"
        sx={{ textAlign: "center" }}
      >
      Jobs
      </Typography>
      {jobs !== null && (
        <Stack direction="row" flexWrap="wrap">
          {jobs.map((j) => (
            <JobCard
              key={j.id}
              job={j.name}
              title={j.title}
              state={j.state}
              salary={j.salary}
              contractType={j.contractType}
              pagelink={j.pagelink}
            />
          ))}
        </Stack>
      )}
>>>>>>> 53d54ac2da2209aad8749931ca81c5c862fea5cb
    </Container>
  );
};

export default Jobs;
