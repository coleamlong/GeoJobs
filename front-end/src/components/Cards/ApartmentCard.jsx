import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import apartment_placeholder from "../../assets/placeholder/apartment.png";

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
    image,
  } = props.apartment;
  return (
    <Card>
      <Card.Img
        style={{
          height: "50%",
          width: "100%",
          objectFit: "cover",
        }}
        src={image !== null ? image : apartment_placeholder}
      ></Card.Img>
      <Card.Text className="text-center">{property_type}</Card.Text>
      <Card.Title className="text-center text-uppercase ">{address}</Card.Title>
      <Card.Body>
        <Card.Subtitle className="text-center">{`${
          bedrooms !== null ? bedrooms : 1
        } bedroom(s), 
                     ${
                       bathrooms !== null ? bathrooms : 1
                     } bathroom(s)`}</Card.Subtitle>
        <Card.Text className="text-center">
          {sqft !== null ? `${sqft} sqft -- ` : ""}
          {price !== null ? `$${price} / month` : ""}
        </Card.Text>
        {build_year !== null && (
          <Card.Text className="text-center align-text-bottom">
            Build Year: {build_year}
          </Card.Text>
        )}
      </Card.Body>
      <Card.Footer>
        <Button
          className="btn btn-primary stretched-link"
          variant="dark"
          href={`/apartment/${id}`}
        >
          More Info
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default ApartmentCard;
