import React from "react";
import Button from "react-bootstrap/Button";

import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const PageCard = (props) => {
    const { pageName, pageImage, pageDescription, pageLink } = props.pageInfo;
    return (
        <Link style={{ textDecoration: "none", color: "black" }} to={pageLink}>
            <Card
                style={{
                    marginRight: 30,
                    backgroundColor: "#e07a5f",
                    height: "40vh",
                }}
            >
                <Card.Img
                    style={{ height: "25vh" }}
                    variant="top"
                    src={pageImage}
                />
                <Card.Body className="text-center">
                    <Card.Title>{pageName}</Card.Title>
                    <Card.Text>{pageDescription}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
};

export default PageCard;
