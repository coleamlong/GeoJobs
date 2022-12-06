import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ProgressBar } from "react-bootstrap";
import { Highlight } from "react-highlight-regex";

import city_placeholder from "../../assets/placeholder/city.png";

const CityCard = (props) => {
  const { img_url, name, state, population, avg_rating, budget, safety, id } =
    props.city;

  function highlightText(input) {
    if (props.regex != null) {
      return <Highlight match={props.regex} text={input} />;
    }
    return input;
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
          {highlightText(name)}
          {state == "Washington, D.C." ? "" : highlightText(", " + state)}
        </Card.Title>
        <Card.Text>
          Population: {highlightText(String(population))}
          <br />
          <br />
          <div className="d-flex gap-4">
            <p>Rating </p>
            <ProgressBar
              className="w-100 m-1"
              min={0}
              max={5}
              now={avg_rating}
              variant="primary"
              label={avg_rating}
            />
          </div>
          <div className="d-flex gap-3">
            <p>Budget</p>
            <ProgressBar
              className="w-100 m-1"
              min={1}
              max={8}
              now={budget}
              variant="success"
              label={budget}
            />
          </div>
          <div className="d-flex gap-4">
            <p>Safety</p>
            <ProgressBar
              className="w-100 m-1"
              min={1}
              max={5}
              now={safety}
              variant="info"
              label={safety}
            />
          </div>
        </Card.Text>
        <Card.Footer className="mt-auto">
          <Button
            style={{ backgroundColor: "#e07a5f" }}
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
