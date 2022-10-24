import React, { useState, useEffect } from "react";
import ApartmentCard from "../components/Cards/ApartmentCard";
import Stack from "react-bootstrap/Stack";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Typography from "@mui/material/Typography";
import axios from "axios";

const Apartments = () => {
  let [apartments, setApartment] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setApartment(null);
      await axios.get(
        `https://api.geojobs.me/apartments/`
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
      Apartments
      </Typography>
      {apartments === null}
      {apartments !== null && (
        <Stack direction="row" flexWrap="wrap">
          {apartments.map((a) => (
            <ApartmentCard
              key={a.id}
              name={a.name}
              location={a.city}
              price={a.price}
              type={a.type}
              buildYear={a.buildYear}
            />
          ))}  
        </Stack>
      )}
    </Container>
  );
};

export default Apartments;
