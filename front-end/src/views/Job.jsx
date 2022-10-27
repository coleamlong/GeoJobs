import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ExternalLink } from "react-external-link";
import Spinner from "react-bootstrap/Spinner";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

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

  return (
    <Container>
      <Typography
        gutterBottom
        className="modelTitle"
        variant="h2"
        sx={{ textAlign: "center" }}
      >
        Job Info
      </Typography>
      {loaded ? (
        <Paper
          sx={{
            p: 13,
            margin: "auto",
            maxWidth: 1000,
            flexGrow: 4,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item></Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    {job.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Desciption: {job.description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Category: {job.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Salary Minimum: {job.salary_min}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Salary Maximum: {job.salary_max}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Company:{job.company}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Created:{job.created}
                  </Typography>
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
                    <li>
                      <ExternalLink href={job.url}>
                        <span>Job URL</span>
                      </ExternalLink>
                    </li>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    <li>
                      <Link to={`/apartment/${city.apartment}`}>
                        Find Apartment In City
                      </Link>
                    </li>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    <li>
                      <Link to={`/cities/${job.city}`}>
                        Find Out More About City
                      </Link>
                    </li>
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
