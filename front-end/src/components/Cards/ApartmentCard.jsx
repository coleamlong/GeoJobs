import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import apartment_placeholder from "../../assets/placeholder/apartment.png";
import {Highlight} from "react-highlight-regex";

const ApartmentCard = (props) => {
  const {
    address,
    bedrooms,
    bathrooms,
    build_year,
    id,
    price,
    property_type,
    sqft,
    images,
  } = props.apartment;

  function highlightText (input) {
    if (props.regex != null) {
      return <Highlight match={props.regex} text={input} />
    }
    return input
  }

  return (
    <Card
    style= {{backgroundColor: '#ffffff'}}>
      <Card.Img
        style={{
          height: "45%",
          width: "100%",
          objectFit: "cover",
        }}
        src = {images !== null ? (images[0]?.img_url ?? apartment_placeholder) : apartment_placeholder}
        // src={images !== null ? images[0]?.img_url : apartment_placeholder}
      ></Card.Img>
      <Card.Text className="text-center">{highlightText(property_type)}</Card.Text>
      <Card.Title className="text-center text-uppercase ">{highlightText(address)}</Card.Title>
      <Card.Body>
        <Card.Subtitle className="text-center">
          {highlightText(String(`${
              bedrooms !== null ? bedrooms : 1
            } bedroom(s), 
            ${
              bathrooms !== null ? bathrooms : 1
            } bathroom(s)`))}
        </Card.Subtitle>
        <Card.Text className="text-center">
          {sqft !== null ? highlightText(`${sqft} sqft -- `) : ""}
          {price !== null ? highlightText(`$${price} / month`) : ""}
        </Card.Text>
        {build_year !== null && (
          <Card.Text className="text-center align-text-bottom">
            Build Year: {highlightText(String(build_year))}
          </Card.Text>
        )}
      </Card.Body>
      <Card.Footer
        style= {{backgroundColor: 'whitesmoke'}}>
        <Button
          className="btn btn-primary stretched-link"
          variant="dark"
          href={`/apartment/${id}`}
          style= {{marginLeft:10, backgroundColor: 'midnightblue'}}
        >
          More Info
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ApartmentCard;
