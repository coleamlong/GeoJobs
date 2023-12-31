import React, { useState, useEffect, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import axios from "axios";
import ApartmentCard from "../components/Cards/ApartmentCard";
import Pagination from "react-bootstrap/Pagination";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FilterDropdown from "../components/FilterDropdown";
import RangeSlider from "../components/RangeSlider";

const client = axios.create({
    baseURL: "https://api.geojobs.me/",
});

var queryRE = null;

const Apartments = () => {
    const [apartments, setApartments] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [activePage, setActivePage] = useState(1);

    const searchQuery = useRef("");

    const [sort, setSort] = useState("sort");
    const [ascending, setAscending] = useState(false);
    const [city, setCity] = useState("City");
    const [pType, setPType] = useState("Property Type");
    const [bedrooms, setBedrooms] = useState([0, 10]);
    const [bathrooms, setBathrooms] = useState([0, 10]);
    const [price, setPrice] = useState([0, 10000]);
    const [sqft, setSqft] = useState([0, 20000]);

    const handleSortFilter = (value) => {
        setSort(value.toLowerCase().replace(" ", "_"));
    };

    const handleOrderFilter = (value) => {
        setAscending(value == "Ascending");
    };
    const handleCityFilter = (value) => {
        if (value == "Washington D.C.") {
            setCity("Washington, D.C.");
        } else {
            setCity(value.substring(0, value.indexOf(",")));
        }
    };

    const handlePTypeFilter = (value) => {
        setPType(value);
    };
    const handleBedroomsFilter = (value) => {
        setBedrooms(value);
        console.log(bedrooms);
    };
    const handleBathroomsFilter = (value) => {
        setBathrooms(value);
        console.log(bathrooms);
    };
    const handlePriceFilter = (value) => {
        setPrice(value);
        console.log(price);
    };
    const handleSqftFilter = (value) => {
        setSqft(value);
        console.log(sqft);
    };

    function handleClick(number) {
        setActivePage(number);
        setLoaded(false);
    }

    function arrayEquals(a, b) {
        return (
            Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index])
        );
    }

    useEffect(() => {
        const fetchApartments = async () => {
            if (false) {
                // TODO: replace with !loaded when backend is deployed
                var query = `apartments?page=${activePage}&perPage=20`;
                if (searchQuery.current.value != "") {
                    query = `search/apartment/${searchQuery.current.value}`;
                    queryRE = new RegExp(
                        `(?:${searchQuery.current.value.replaceAll(" ", "|")})`,
                        "i"
                    );
                } else {
                    queryRE = null;
                    if (sort != "sort") {
                        query += `&sort=${sort}`;
                    }
                    if (ascending && sort != "sort") {
                        query += "&asc";
                    }
                    if (city != "City") {
                        query += `&city=${city}`;
                    }
                    if (pType != "Property Type") {
                        query += `&proptype=${pType}`;
                    }
                    if (!arrayEquals(bedrooms, [0, 10])) {
                        query += `&bedrooms=${bedrooms[0]}-${bedrooms[1]}`;
                    }
                    if (!arrayEquals(bathrooms, [0, 10])) {
                        query += `&bathrooms=${bathrooms[0]}-${bathrooms[1]}`;
                    }
                    if (!arrayEquals(price, [0, 10000])) {
                        query += `&price=${price[0]}-${price[1]}`;
                    }
                    if (!arrayEquals(sqft, [0, 20000])) {
                        query += `&sqft=${sqft[0]}-${sqft[1]}`;
                    }
                }
                console.log(query);
                await client
                    .get(query)
                    .then((response) => {
                        setApartments(response.data);
                    })
                    .catch((err) => console.log(err));
                setLoaded(true);
            }
        };
        fetchApartments();
    }, [apartments, loaded]);

    let numPages = 500 / 20;
    let items = [];
    for (let number = activePage - 2; number <= activePage + 2; number++) {
        if (number > 0 && number <= numPages) {
            items.push(
                <Pagination.Item
                    key={number}
                    onClick={() => handleClick(number)}
                    active={number === activePage}
                >
                    {number}
                </Pagination.Item>
            );
        }
    }

    return (
        <Container>
            <h1 className="p-5 text-center">Apartments</h1>
            <Form
                onSubmit={(event) => {
                    event.preventDefault();
                    setLoaded(false);
                }}
                className="d-flex pb-5 justify-content-center"
            >
                <Form.Control
                    ref={searchQuery}
                    style={{ width: "20vw" }}
                    type="search"
                    placeholder="Search apartments"
                    className="me-2"
                    aria-label="Search"
                />
                <Button
                    variant="outline-secondary"
                    onClick={() => setLoaded(false)}
                >
                    Search
                </Button>
            </Form>
            <Form className="filter-form">
                <Row className="mx-auto text-center w-50 mb-4">
                    <Col>
                        {" "}
                        <FilterDropdown
                            title="Sort"
                            items={[
                                "Sort",
                                "Bedrooms",
                                "Bathrooms",
                                "Price",
                                "Sqft",
                                "Build Year",
                            ]}
                            onChange={handleSortFilter}
                        />
                    </Col>
                    <Col>
                        <FilterDropdown
                            title="Order"
                            items={["Ascending", "Descending"]}
                            onChange={handleOrderFilter}
                        />
                    </Col>
                    <Col>
                        {" "}
                        <FilterDropdown
                            title="City"
                            items={[
                                "City",
                                "New York, NY",
                                "Los Angeles, CA",
                                "Chicago, IL",
                                "Houston, TX",
                                "Phoenix, AZ",
                                "Philadelphia, PA",
                                "San Antonio, TX",
                                "San Diego, CA",
                                "Dallas, TX",
                                "San Jose, CA",
                                "Austin, TX",
                                "Jacksonville, FL",
                                "Fort Worth, TX",
                                "Columbus, OH",
                                "Indianapolis, IN",
                                "Charlotte, NC",
                                "San Francisco, CA",
                                "Seattle, WA",
                                "Denver, CO",
                                "Washington, D.C.",
                                "Nashville, TN",
                                "Oklahoma City, OK",
                                "El Paso, TX",
                                "Boston, MA",
                                "Portland, OR",
                                "Las Vegas, NV",
                                "Detroit, MI",
                                "Memphis, TN",
                                "Louisville, KY",
                                "Baltimore, MD",
                                "Milwaukee, WI",
                                "Albuquerque, NM",
                                "Tucson, AZ",
                                "Fresno, CA",
                                "Sacramento, CA",
                                "Kansas City, MO",
                                "Mesa, AZ",
                                "Atlanta, GA",
                                "Omaha, NE",
                                "Colorado Springs, CO",
                                "Raleigh, NC",
                                "Long Beach, CA",
                                "Virginia Beach, VA",
                                "Miami, FL",
                                "Oakland, CA",
                                "Minneapolis, MN",
                                "Tulsa, OK",
                                "Bakersfield, CA",
                                "Wichita, KS",
                                "Arlington, TX",
                            ]}
                            scroll
                            onChange={handleCityFilter}
                        />
                    </Col>
                    <Col>
                        {" "}
                        <FilterDropdown
                            title="Property Type"
                            items={[
                                "Property Type",
                                "Apartment",
                                "Single Family",
                                "Condo",
                                "Townhouse",
                            ]}
                            onChange={handlePTypeFilter}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Bedrooms</Form.Label>
                        <RangeSlider
                            min={0}
                            max={10}
                            onChange={handleBedroomsFilter}
                            discrete
                        />
                    </Col>
                    <Col>
                        <Form.Label>Bathrooms</Form.Label>
                        <RangeSlider
                            min={0}
                            max={10}
                            onChange={handleBathroomsFilter}
                            discrete
                        />
                    </Col>
                    <Col>
                        <Form.Label>Price</Form.Label>
                        <RangeSlider
                            min={0}
                            max={10000}
                            onChange={handlePriceFilter}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Square Footage</Form.Label>
                        <RangeSlider
                            min={0}
                            max={20000}
                            onChange={handleSqftFilter}
                        />
                    </Col>
                </Row>
                <Row className="mx-auto text-center my-4">
                    <Col>
                        <Button
                            variant="outline-secondary"
                            onClick={() => setLoaded(false)}
                        >
                            Submit
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Pagination className="justify-content-center">
                {activePage > 3 && (
                    <Pagination.Item
                        first
                        key={1}
                        onClick={() => handleClick(1)}
                        active={1 === activePage}
                    >
                        1
                    </Pagination.Item>
                )}
                {activePage > 4 && <Pagination.Ellipsis />}
                {items}
                {activePage < numPages - 3 && <Pagination.Ellipsis />}
                {activePage < numPages - 2 && (
                    <Pagination.Item
                        last
                        key={numPages}
                        onClick={() => handleClick(numPages)}
                        active={numPages === activePage}
                    >
                        {numPages}
                    </Pagination.Item>
                )}
            </Pagination>
            <Row
                xl={4}
                lg={3}
                md={2}
                sm={1}
                xs={1}
                className="d-flex g-4 p-4 justify-content-center"
            >
                {loaded ? (
                    apartments["data"].map((apartment) => {
                        return (
                            <Col
                                key={apartment.id}
                                className="d-flex align-self-stretch"
                            >
                                <ApartmentCard
                                    apartment={apartment}
                                    regex={queryRE}
                                />
                            </Col>
                        );
                    })
                ) : (
                    <Spinner animation="grow" />
                )}
            </Row>
            <Pagination className="justify-content-center">
                {activePage > 3 && (
                    <Pagination.Item
                        first
                        key={1}
                        onClick={() => handleClick(1)}
                        active={1 === activePage}
                    >
                        1
                    </Pagination.Item>
                )}
                {activePage > 4 && <Pagination.Ellipsis />}
                {items}
                {activePage < numPages - 3 && <Pagination.Ellipsis />}
                {activePage < numPages - 2 && (
                    <Pagination.Item
                        last
                        key={numPages}
                        onClick={() => handleClick(numPages)}
                        active={numPages === activePage}
                    >
                        {numPages}
                    </Pagination.Item>
                )}
            </Pagination>
        </Container>
    );
};

export default Apartments;
