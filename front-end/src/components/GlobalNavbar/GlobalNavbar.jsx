import React from "react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Logo from "../../assets/logos/navbar_logo.png";

import { Link } from "react-router-dom";

function BoldText({ children }) {
    return (
        <span
            style={{
                fontSize: "15px",
                color: "#f4f1de",
                font: "Courier-Oblique",
                fontWeight: 400,
            }}
        >
            {children}
        </span>
    );
}

const GlobalNavbar = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        console.log(`search query: ${form.query.value}`);
        window.location.assign(`/search/${form.query.value}`);
    };

    return (
        <Navbar
            variant="dark"
            expand="lg"
            style={{ backgroundColor: "#e07a5f" }}
        >
            <Container>
                <Navbar.Brand href="/">
                    <Link to="/">
                        <div class="logo-image">
                            <img src={Logo} class="img-fluid"></img>
                        </div>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link style={{ textDecoration: "none" }} to="/">
                                <BoldText>Home</BoldText>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                style={{ textDecoration: "none" }}
                                to="/about"
                            >
                                <BoldText>About</BoldText>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link style={{ textDecoration: "none" }} to="/jobs">
                                <BoldText>Jobs</BoldText>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                style={{ textDecoration: "none" }}
                                to="/cities"
                            >
                                <BoldText>Cities</BoldText>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                style={{ textDecoration: "none" }}
                                to="/apartments"
                            >
                                <BoldText>Apartments</BoldText>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link
                                style={{ textDecoration: "none" }}
                                to="/visualizations"
                            >
                                <BoldText>Visualizations</BoldText>
                            </Link>
                        </Nav.Link>
                    </Nav>
                    <Container className="d-flex justify-content-end">
                        <Form onSubmit={handleSubmit} className="d-flex">
                            <Form.Control
                                style={{ width: "20vw" }}
                                type="search"
                                name="query"
                                placeholder="Search jobs, cities, and apartments"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Link
                                to="/search/example"
                                style={{ textDecoration: "none" }}
                            >
                                <Button
                                    type="submit"
                                    variant="outline-secondary"
                                    style={{ color: "#3d405b" }}
                                >
                                    Search
                                </Button>
                            </Link>
                        </Form>
                    </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default GlobalNavbar;
