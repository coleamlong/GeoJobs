import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import { Item } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";

const client = axios.create({
  baseURL: "https://api.geojobs.me/",
});

const Job = () => {
  let { id } = useParams();
  const [job, setJob] = useState();
  const [city, setCity] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      if (job === undefined) {
        await client
          .get(`jobs/${id}`)
          .then((response) => {
            setJob(response.data["data"]);
          })
          .catch((err) => console.log(err));
      }
      if (city === undefined) {
        await client
          .get(`cities/${job.city}`)
          .then((response) => {
            setCity(response.data["data"]);
          })
          .catch((err) => console.log(err));
      }
      setLoaded(true);
    };
    fetchJob();
  }, [job, city]);

  function BoldText({ children }) {
    return (
      <span
        style={{ fontSize: "18px", color: "black", font: "Courier-Oblique" }}
      >
        {children}
      </span>
    );
  }

  return (
    <Container>
      {loaded ? (
        <Typography
          gutterBottom
          className="modelTitle"
          variant="h2"
          color="midnightblue"
          fontSize="45px"
          sx={{ textAlign: "center" }}
        >
          {job.title}
        </Typography>
      ) : (
        <Spinner animation="none" />
      )}

      {loaded ? (
        <Paper
          sx={{
            p: 13,
            margin: "auto",
            maxWidth: 1000,
            flexGrow: 4,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#f5f5f5",
          }}
        >
          <Grid container spacing={2}>
            <Grid item></Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Item.Group divided>
                    <Divider horizontal style={{ background: "peachpuff" }}>
                      <Item>
                        {" "}
                        <BoldText>Company:</BoldText>{" "}
                      </Item>
                    </Divider>
                    {job.company}
                    <Divider horizontal style={{ background: "peachpuff" }}>
                      <Item>
                        {" "}
                        <BoldText>Description:</BoldText>{" "}
                      </Item>
                    </Divider>
                    {job.description}
                    <Divider horizontal style={{ background: "peachpuff" }}>
                      <Item>
                        {" "}
                        <BoldText>Category:</BoldText>{" "}
                      </Item>
                    </Divider>
                    {job.category}
                    <Divider horizontal style={{ background: "peachpuff" }}>
                      <Item>
                        {" "}
                        <BoldText>Salary Minimum:</BoldText>{" "}
                      </Item>
                    </Divider>
                    ${job.salary_min}
                    <Divider horizontal style={{ background: "peachpuff" }}>
                      <Item>
                        {" "}
                        <BoldText>Salary Maximum:</BoldText>{" "}
                      </Item>
                    </Divider>
                    ${job.salary_max}
                    <Divider horizontal style={{ background: "peachpuff" }}>
                      <Item>
                        {" "}
                        <BoldText>Date Created:</BoldText>{" "}
                      </Item>
                    </Divider>
                    {job.created}
                  </Item.Group>
                  <Typography variant="body2" color="text.secondary">
                    <img
                      style={{ width: 400, height: 200 }}
                      src={job.img_url}
                    />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <div>
                      <iframe
                        width="600"
                        height="450"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${job.latitude} ${job.longitude}`}
                      ></iframe>
                    </div>
                  </Typography>
                  <Typography variant="body">
                    <Button
                      className="btn btn-primary"
                      variant="dark"
                      style={{
                        marginRight: 30,
                        backgroundColor: "midnightblue",
                      }}
                      href={job.url}
                    >
                      Job URL
                    </Button>
                    <Button
                      style={{
                        marginRight: 30,
                        backgroundColor: "midnightblue",
                      }}
                      href={`/apartment/${job.apartment}`}
                    >
                      Find Apartment In {city.name}
                    </Button>
                    <Button
                      className="btn btn-primary"
                      variant="dark"
                      style={{
                        marginRight: 30,
                        backgroundColor: "midnightblue",
                      }}
                      href={`/cities/${job.city}`}
                    >
                      Find Out More About {city.name}
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ) : (
        <Spinner animation="grow" />
      )}
    </Container>
  );
};

export default Job;
