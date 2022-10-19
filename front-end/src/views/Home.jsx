import React from "react";
import Image from "react-bootstrap/Image";
import Background from "../assets/splash-background.png";
import GeoJobsLogo from "../assets/logos/GeoJobs.png";
import Container from "react-bootstrap/esm/Container";
import { pageInfo } from "../static/PageInfo";
import PageCard from "../components/Cards/PageCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div className="main-home">
      <div
        className="bg d-flex justify-content-center"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          width: "100vw",
          height: "100vh",
        }}
      >
        <h1
          className="bg-text"
          style={{
            color: "burlywood",
            justifyContent: "center",
            alignItems: "center",
            backgroundPositionY: "1500",
            marginTop: "300px",
          }}
        >
          An easy place to find your dream job, city, and home.
        </h1>
      </div>
      <Container className="p-4">
        <h1 className="d-flex justify-content-center p-4">Where to next?</h1>
        <Row>
        {pageInfo.map((page) => {
            return (
                <Col>
                <PageCard pageInfo={page} />
                </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
