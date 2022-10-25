import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { ExternalLink } from "react-external-link";


const Apartment = () => {
  const { id } = useParams();
  let [apartments, setApartment] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setApartment(null);
      await axios.get(
        `https://api.geojobs.me/apartments/${id}` 
      );
      let data = response.data["data"];
      setApartment(data["apartments"]);
    };
    fetchData();
  }, [apartments]);

  return (
    <Container
      className="page-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: (apartments ?? []).length === 0 ? "100%" : "none",
      }}
    >
      <Typography
        gutterBottom
        className="modelTitle"
        variant="h2"
        sx={{ textAlign: "center" }}
      >
      Apartment Info
      </Typography>
      {apartments !== null && (
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
          <Grid item xs={100} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  {apartments.name}
                </Typography>
                <Typography variant="body">
                  <img
                    alt=""
                    style={{ width: 200, height: 200 }}
                    src={apartments.img}
                  />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Address: {apartments.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Type: {apartments.propertyType}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {apartments.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Square Footage: {apartments.squareFootage}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Build Year: {apartments.yearBuilt}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Number of Bathrooms: {apartments.bathrooms}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Number of Bedrooms: {apartments.bedrooms}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <div><iframe
                    width="600"
                    height="450"
                    style="border:0"
                    loading="lazy"
                    allowfullscreen
                    referrerpolicy="no-referrer-when-downgrade"
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${apartments.address}`}>
                  </iframe></div>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <li>
                    <ExternalLink href={apartments.yelp}>
                      <span>Yelp Review</span>
                    </ExternalLink>
                  </li>
                </Typography>
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
      )}
    </Container>
  );
};

export default Apartment;
