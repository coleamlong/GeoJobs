import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import ListGroup from "react-bootstrap/ListGroup"

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
                  <Typography variant="body2" color="text.secondary">
                    <Button
                      style= {{marginBottom: 30, marginLeft:5, marginRight:350,marginTop: 20, backgroundColor: 'midnightblue'}}
                      href={city.walkscore_url}
                      >
                      Walk Score
                    </Button >
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
              </Grid>
              <Grid item>
                <Typography variant="h5">
                  Apartments in {city.name}
                </Typography>
                <ListGroup
                  style={{
                    maxHeight: "300px",
                    overflowY: "auto"
                  }}
                >
                  {loaded ? (
                    city.apartment.map((apartment) => (
                      <ListGroup.Item action href={`/apartment/${apartment.id}`}>
                        <h5>{apartment.address}</h5>
                        <h6>Rent: ${apartment.price}</h6>
                      </ListGroup.Item>
                    ))
                  ) : (
                    <ListGroup.Item>
                      <Spinner animation="grow" />
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Grid>
              <Grid item>
                <Typography variant="h5">
                  Jobs in {city.name}
                </Typography>
                <ListGroup
                  style={{
                    maxHeight: "300px",
                    overflowY: "auto"
                  }}
                >
                  {loaded ? (
                    city.job.map((job) => (
                      <ListGroup.Item action href={`/job/${job.id}`}>
                        <h5>{job.title}</h5>
                        <h6>Salary Range: ${job.salary_min}-${job.salary_max}</h6>
                      </ListGroup.Item>
                    ))
                  ) : (
                    <ListGroup.Item>
                      <Spinner animation="grow" />
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Grid>
              <Grid item>
                <Typography variant="h5">
                  All Cities in {city.state}
                </Typography>
                <ListGroup
                  style={{
                    maxHeight: "300px",
                    overflowY: "auto"
                  }}
                >
                  {loaded ? (
                    city.nearby_cities.map((city) => (
                      <ListGroup.Item action href={`/cities/${city.id}`}>
                        <h5>{city.name}</h5>
                      </ListGroup.Item>
                    ))
                  ) : (
                    <ListGroup.Item>
                      <Spinner animation="grow" />
                    </ListGroup.Item>
                  )}
                </ListGroup>
              </Grid>
              <Grid item>  
                <div>
                  <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName={city.police_twitter}
                    options={{ height: 400}}
                  />
                </div>
                <Typography variant="body">
                  <img
                    alt=""
                    style={{ width: 800, height: 600, marginTop: 30 }}
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
