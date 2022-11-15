import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Highlight} from "react-highlight-regex"

import city_placeholder from "../../assets/placeholder/city.png";

const CityCard = (props) => {
  const { img_url, name, state, population, avg_rating, budget, safety, id } =
    props.city;

  function highlightText (input) {
    if (props.regex != null) {
      return <Highlight match={props.regex} text={input} />
    }
    return input
  }

  return (
    <Card style={{ height: "18rem", width: "100%" }}>
      <Card.Img
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          filter: "brightness(20%)",
        }}
        src={img_url ? img_url : city_placeholder}
      />
      <Card.ImgOverlay className="text-light d-flex flex-column">
        <Card.Title>
          {highlightText(name)}, {highlightText(state)}
        </Card.Title>
        <Card.Text>
          Population: {highlightText(String(population))}
          <br />
          Rating: {highlightText(String(avg_rating !== undefined ? avg_rating : "N/A"))}
          <br />
          Budget: {highlightText(String(budget !== undefined ? budget : "N/A"))}
          <br />
          Safety: {highlightText(String(safety !== undefined ? safety : "N/A"))}
        </Card.Text>
        <Card.Footer className="mt-auto">
          <Button
            style={{ backgroundColor: "lightsalmon" }}
            className="btn btn-primary stretched-link"
            variant="light"
            href={`/cities/${id}`}
          >
            More Info
          </Button>
        </Card.Footer>
      </Card.ImgOverlay>
    </Card>
  );
};

export default CityCard;
