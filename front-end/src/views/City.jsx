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
import { TwitterTimelineEmbed } from "react-twitter-embed";

const client = axios.create({
  baseURL: "https://api.geojobs.me/",
});

const City = () => {
  const { id } = useParams();
  const [city, setCity] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchCity = async () => {
      if (city === undefined) {
        await client
          .get(`cities/${id}`)
          .then((response) => {
            setCity(response.data["data"]);
          })
          .catch((err) => console.log(err));
      }
      setLoaded(true);
    };
    fetchCity();
  }, [city]);

  return (
    <Container>
      <Typography
        gutterBottom
        className="modelTitle"
        variant="h2"
        sx={{ textAlign: "center" }}
      >
        City Info
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
                    {city.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                  <Typography variant="body2" color="text.secondary">
                    Average Rating: {city.avg_rating}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Safety Score: {city.safety}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Budget Score: {city.budget}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Population: {city.population}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="body2" color="text.secondary">
                    <li>
                      <ExternalLink href={city.walkscore_url}>
                        <span>Walk Score</span>
                      </ExternalLink>
                    </li>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    <li>
                      <Link to={`/apartment/${city.apartment}`}>
                        Find Apartment
                      </Link>
                    </li>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    <li>
                      <Link to={`/job/${city.job}`}>Find Job</Link>
                    </li>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <div>
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={city.police_twitter}
                    options={{ height: 400 }}
                  />
                </div>
                <Typography variant="body">
                  <img
                    alt=""
                    style={{ width: 800, height: 600 }}
                    src={city.img_url}
                  />
                </Typography>
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

export default City;
