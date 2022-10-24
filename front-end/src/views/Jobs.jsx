import React, { useState, useEffect } from "react";
import JobCard from "../components/Cards/JobCard";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Typography from "@mui/material/Typography";
import axios from "axios";

const Jobs = () => {
  let [jobs, setJob] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setJob(null);
      await axios.get(
        `https://api.geojobs.me/jobs/` 
      );
      let data = response.data["data"];
      setJob(data["jobs"]);
    };
    fetchData();
  }, [jobs]);

  return (
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
    </Container>
  );
};

export default Jobs;
