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
import Button from "react-bootstrap/Button";

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

  function BoldText({ children }) {
    return (
      <span style={{  fontSize: '18px', color: 'black', font: 'Courier-Oblique'  }}>{children}</span>
    );
  }

  return (
    <Container>
      {loaded ? (
      <Typography
        gutterBottom
        className="modelTitle"
        variant="h2"
        color= 'midnightblue'
        sx={{ textAlign: "center" }}
      >
      {city.name}
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
                  <Typography gutterBottom variant="subtitle1" component="div">
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                  <Typography variant="body2" color="text.secondary">
                    <BoldText>Average Rating: {city.avg_rating}</BoldText>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <BoldText>Safety Score: {city.safety}</BoldText>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <BoldText>Budget Score: {city.budget}</BoldText>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <BoldText>Population: {city.population}</BoldText>
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                  <Typography variant="body2" color="text.secondary">
                    <Button
                      style= {{marginBottom: 30, marginLeft:350, backgroundColor: 'midnightblue'}}
                      href={city.walkscore_url}
                      >
                      Walk Score
                    </Button >
                    <Button
                      style= {{marginBottom: 30, marginLeft:30, backgroundColor: 'midnightblue'}}
                      href={`/apartment/${city.apartment}`}
                      >
                      Find Apartment
                    </Button >
                    <Button
                      style= {{marginBottom: 30, marginLeft:30, backgroundColor: 'midnightblue'}}
                      href={`/job/${city.job}`}
                      >
                      Find Job
                    </Button >
                  </Typography>
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
