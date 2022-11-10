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
import Button from "react-bootstrap/Button";

const client = axios.create({
  baseURL: "https://api.geojobs.me/",
});

const Apartment = () => {
  let { id } = useParams();
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

  function BoldText({ children }) {
    return (
      <span style={{  fontSize: '18px', color: 'black', font: 'Courier-Oblique'  }}>{children}</span>
    );
  }
  function TextO({ children }) {
    return (
      <span style={{ fontWeight: 'bold', fontSize: '16px', color: 'midnightblue', font: 'Courier-Oblique' }}>{children}</span>
    );
  }

  return (
    <Container>
      <Typography
        gutterBottom
        className="modelTitle"
        variant="h2"
        sx={{ textAlign: "center" }}
        color= 'midnightblue'
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
                    <BoldText>Number of Bathrooms: {apartment.bathrooms}</BoldText>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <BoldText>Number of Bedrooms: {apartment.bedrooms}</BoldText>
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
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2"> 
                    <Button
                      style= {{marginRight:30, backgroundColor: 'midnightblue'}}
                      href={`/cities/${apartment.city}`}
                      >
                     Explore City
                     </Button >
                     <Button
                      className="btn btn-primary"
                      variant="dark"
                      style= {{marginRight:30, backgroundColor: 'midnightblue'}}
                      href={`/job/${apartment.job}`}
                      >
                     Find Job
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
