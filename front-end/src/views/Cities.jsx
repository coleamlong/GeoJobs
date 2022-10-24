import React, { useState, useEffect } from "react";
import CityCard from "../components/Cards/CityCard";
import Stack from "react-bootstrap/Stack";
import { cityInfo } from "../static/CityInfo";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Typography from "@mui/material/Typography";
import axios from "axios";

const Cities = () => {
  let [cities, setCity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setCity(null);
      await axios.get(
        `https://api.geojobs.me/cities/`
      );
      let data = response.data["data"];
      setCity(data["cities"]);
    };
    fetchData();
  }, [cities]);

  return (
    <Container
      className="page-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        height: (cities ?? []).length === 0 ? "100%" : "none",
      }}
    >
      <Typography
        gutterBottom
        className="modelTitle"
        variant="h2"
        sx={{ textAlign: "center" }}
      >
      Cities
      </Typography>
      {cities === null}
      {cities !== null && (
        <Stack direction="row" flexWrap="wrap">
          {cities.map((c) => (
            <CityCard
              key={c.id}
              name={c.name}
              state={c.state}
              population={c.population}
              rating={c.rating}
              budget={c.budget}
            />
          ))}  
        </Stack>
      )}
    </Container>
  );
};

export default Cities;
