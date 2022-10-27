import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import city_placeholder from "../../assets/placeholder/city.png";

const CityCard = (props) => {
  const { img_url, name, state, population, avg_rating, budget, id } =
    props.city;
  return (
    <Card>
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
          {name}, {state}
        </Card.Title>
        <Card.Text>
          Population: {population}
          <br />
          Rating: {avg_rating !== undefined ? avg_rating : "N/A"}
          <br />
          Budget: {budget !== undefined ? budget : "N/A"}
        </Card.Text>
        <Card.Footer className="mt-auto">
          <Button
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
