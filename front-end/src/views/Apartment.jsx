import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Spinner from "react-bootstrap/Spinner";
import ListGroup from "react-bootstrap/ListGroup";
import { useParams } from "react-router-dom";
import { Item } from "semantic-ui-react";
import { Divider } from "semantic-ui-react";

const client = axios.create({
  baseURL: "https://api.geojobs.me/",
});

const Apartment = () => {
  let { id } = useParams();
  const [city, setCity] = useState();
  const [apartment, setApartment] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchApartment = async () => {
      if (apartment === undefined) {
        await client
          .get(`apartments/${id}`)
          .then((response) => {
            setApartment(response.data["data"]);
          })
          .catch((err) => console.log(err));
      }
      setLoaded(true);
    };
    fetchApartment();
  }, [apartment]);

  useEffect(() => {
    const getCityName = async () => {
      if (city === undefined) {
        await client
          .get(`cities/${apartment.city}`)
          .then((response) => {
            setCity(response.data["data"]["name"]);
          })
          .catch((err) => console.log(err));
      }
    };
    getCityName();
  }, [apartment]);

  function BoldText({ children }) {
    return (
      <span
        style={{ fontSize: "18px", color: "black", font: "Courier-Oblique" }}
      >
        {children}
      </span>
    );
  }
  function TextO({ children }) {
    return (
      <span
        style={{
          fontWeight: "bold",
          fontSize: "16px",
          color: "midnightblue",
          font: "Courier-Oblique",
        }}
      >
        {children}
      </span>
    );
  }

  return (
    <Container>
      <Typography
        gutterBottom
        className="modelTitle"
        variant="h2"
        sx={{ textAlign: "center" }}
        color="midnightblue"
      >
        Apartment Info
      </Typography>
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
            <Grid item>
              <Carousel>
                {apartment.images.map((image) => {
                  return (
                    <Carousel.Item>
                      <Image
                        className="d-block w-100"
                        src={image.img_url}
                        alt="First slide"
                      />
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Grid>
            <Grid item xs={100} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography variant="body2" color="text.secondary">
                    <BoldText>Address: {apartment.address}</BoldText>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <BoldText>Type: {apartment.property_type}</BoldText>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <BoldText>Price: ${apartment.price} / per month</BoldText>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <BoldText>Square Footage: {apartment.sqft} sq.ft</BoldText>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <BoldText>Build Year: {apartment.build_year}</BoldText>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <BoldText>
                      Number of Bathrooms: {apartment.bathrooms}
                    </BoldText>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <BoldText>
                      Number of Bedrooms: {apartment.bedrooms}
                    </BoldText>
                  </Typography>
                  <div className="justify-content-center d-flex">
                    <iframe
                      width="600"
                      height="450"
                      loading="lazy"
                      allowFullScreen
                      referrerPolicy="no-referrer-when-downgrade"
                      src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${apartment.address}`}
                    />
                  </div>
                </Grid>
                <Divider horizontal style={{ background: "peachpuff" }}>
                      <Item>
                        {" "}<BoldText>Job Listings in {city}:</BoldText>{" "}
                      </Item>
                    </Divider>
                <ListGroup
                  style={{
                    maxHeight: "300px",
                    overflowY: "auto",
                  }}
                >
                  {loaded ? (
                    apartment.jobs.map((job) => (
                      <ListGroup.Item action href={`/job/${job.id}`}
                      style={{
                        backgroundColor: "lavender"
                      }}>
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
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    <Button
                      style={{
                        marginRight: 30,
                        backgroundColor: "midnightblue",
                      }}
                      href={`/cities/${apartment.city}`}
                    >
                      Explore {city}
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

export default Apartment;
