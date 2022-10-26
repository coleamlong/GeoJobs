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

  return (
    <Container>
      <Typography
        gutterBottom
        className="modelTitle"
        variant="h2"
        sx={{ textAlign: "center" }}
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
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
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
                    Address: {apartment.address}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Type: {apartment.property_type}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {apartment.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Square Footage: {apartment.sqft}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Build Year: {apartment.build_year}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Number of Bathrooms: {apartment.bathrooms}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Number of Bedrooms: {apartment.bedrooms}
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
                    <li>
                      <Link to={`/city/${id}`}>Explore City</Link>
                    </li>
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography sx={{ cursor: "pointer" }} variant="body2">
                    <li>
                      <Link to={`/job/${id}`}>Find Job</Link>
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

export default Apartment;
