import React, { useState, useEffect, useRef } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FilterDropdown from "../components/FilterDropdown";
import axios from "axios";
import CityCard from "../components/Cards/CityCard";
import RangeSlider from "../components/RangeSlider";

const client = axios.create({
    baseURL: "https://api.geojobs.me/",
});

var queryRE = null;

const Cities = () => {
    const [cities, setCities] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const searchQuery = useRef("");

    const [sort, setSort] = useState("sort");
    const [ascending, setAscending] = useState(false);
    const [state, setState] = useState("State");
    const [tag, setTag] = useState("Tag");
    const [population, setPopulation] = useState([0, 1000000]);
    const [rating, setRating] = useState([0, 5]);
    const [budget, setBudget] = useState([0, 10]);
    const [safety, setSafety] = useState([0, 5]);

    const handleSortFilter = (value) => {
        setSort(value.toLowerCase().replace(" ", "_"));
    };
    const handleOrderFilter = (value) => {
        setAscending(value == "Ascending");
    };
    const handleStateFilter = (value) => {
        setState(value);
    };
    const handleTagFilter = (value) => {
        setTag(value);
    };
    const handlePopulationFilter = (value) => {
        setPopulation(value);
    };
    const handleRatingFilter = (value) => {
        setRating(value);
    };
    const handleBudgetFilter = (value) => {
        setBudget(value);
    };
    const handleSafetyFilter = (value) => {
        setSafety(value);
    };

    function arrayEquals(a, b) {
        return (
            Array.isArray(a) &&
            Array.isArray(b) &&
            a.length === b.length &&
            a.every((val, index) => val === b[index])
        );
    }

    useEffect(() => {
        const fetchCities = async () => {
            if (false) {
                // TODO: replace with !loaded when backend is deployed
                var query = "cities";
                if (searchQuery.current.value != "") {
                    query = `search/city/${searchQuery.current.value}`;
                    queryRE = new RegExp(
                        `(?:${searchQuery.current.value.replaceAll(" ", "|")})`,
                        "i"
                    );
                } else {
                    queryRE = null;
                    var filterCount = 0;
                    if (!arrayEquals(population, [0, 1000000])) {
                        filterCount++;
                        query += "?";
                        query += `population=${population[0]}-${population[1]}`;
                    }
                    if (!arrayEquals(rating, [0, 5])) {
                        filterCount++;
                        query += filterCount === 1 ? "?" : "&";
                        query += `avg_rating=${rating[0]}-${rating[1]}`;
                    }
                    if (!arrayEquals(budget, [0, 10])) {
                        filterCount++;
                        query += filterCount === 1 ? "?" : "&";
                        query += `budget=${budget[0]}-${budget[1]}`;
                    }
                    if (!arrayEquals(safety, [0, 5])) {
                        filterCount++;
                        query += filterCount === 1 ? "?" : "&";
                        query += `safety=${safety[0]}-${safety[1]}`;
                    }
                    if (sort != "sort") {
                        filterCount++;
                        query += filterCount === 1 ? "?" : "&";
                        query += `sort=${sort}`;
                    }
                    if (ascending && sort != "sort") {
                        filterCount++;
                        query += filterCount === 1 ? "?" : "&";
                        query += "asc";
                    }
                    if (state != "State") {
                        filterCount++;
                        query += filterCount === 1 ? "?" : "&";
                        query += `state=${state}`;
                    }
                    if (tag != "Tag") {
                        filterCount++;
                        query += filterCount === 1 ? "?" : "&";
                        query += `tags=${tag}`;
                    }
                }
                console.log(query);
                await client
                    .get(query)
                    .then((response) => {
                        setCities(response.data);
                    })
                    .catch((err) => console.log(err));
                setLoaded(true);
            }
        };
        fetchCities();
    }, [cities, loaded]);

    return (
        <Container>
            <h1 className="p-5 text-center">Cities</h1>
            <Form
                onSubmit={(event) => {
                    event.preventDefault();
                    setLoaded(false);
                }}
                className="d-flex pb-2 justify-content-center"
            >
                <Form.Control
                    ref={searchQuery}
                    style={{ width: "20vw" }}
                    type="search"
                    placeholder="Search cities"
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
                <Row className="mx-auto text-center w-50 my-4">
                    <Col>
                        <FilterDropdown
                            title="Sort"
                            items={[
                                "Sort",
                                "Population",
                                "Avg Rating",
                                "Budget",
                                "Safety",
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
                        <FilterDropdown
                            title="Tag"
                            items={[
                                "Tag",
                                "Charming",
                                "Foodie",
                                "Nightlife",
                                "Architecture",
                                "History",
                                "Museums",
                                "Performing Arts",
                                "Music",
                                "Hipster",
                                "Hippie",
                                "Posh",
                                "Family Friendly",
                                "LGBT Friendly",
                                "Diversity",
                                "Beach Town",
                                "College Town",
                                "Ski Town",
                                "Outdoorsy",
                                "Wineries",
                                "Shopping",
                            ]}
                            scroll
                            onChange={handleTagFilter}
                        />
                    </Col>
                    <Col>
                        <FilterDropdown
                            title="State"
                            items={[
                                "State",
                                "Alabama",
                                "Alaska",
                                "Arizona",
                                "Arkansas",
                                "California",
                                "Colorado",
                                "Connecticut",
                                "Delaware",
                                "Florida",
                                "Georgia",
                                "Hawaii",
                                "Idaho",
                                "Illinois",
                                "Indiana",
                                "Iowa",
                                "Kansas",
                                "Kentucky",
                                "Louisiana",
                                "Maine",
                                "Maryland",
                                "Massachusetts",
                                "Michigan",
                                "Minnesota",
                                "Mississippi",
                                "Missouri",
                                "Montana",
                                "Nebraska",
                                "Nevada",
                                "New Hampshire",
                                "New Jersey",
                                "New Mexico",
                                "New York",
                                "North Carolina",
                                "North Dakota",
                                "Ohio",
                                "Oklahoma",
                                "Oregon",
                                "Pennsylvania",
                                "Rhode Island",
                                "South Carolina",
                                "South Dakota",
                                "Tennessee",
                                "Texas",
                                "Utah",
                                "Vermont",
                                "Virginia",
                                "Washington",
                                "West Virginia",
                                "Wisconsin",
                                "Wyoming",
                            ]}
                            scroll
                            onChange={handleStateFilter}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Label>Population:</Form.Label>
                        <RangeSlider
                            min={0}
                            max={10000000}
                            onChange={handlePopulationFilter}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Rating:</Form.Label>
                        <RangeSlider
                            min={0}
                            max={5}
                            discrete
                            onChange={handleRatingFilter}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Budget:</Form.Label>
                        <RangeSlider
                            min={0}
                            max={10}
                            discrete
                            onChange={handleBudgetFilter}
                        />
                    </Col>
                    <Col>
                        <Form.Label>Safety:</Form.Label>
                        <RangeSlider
                            min={0}
                            max={5}
                            discrete
                            onChange={handleSafetyFilter}
                        />
                    </Col>
                </Row>
                <Row className="mx-auto text-center mt-4">
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
            <Row
                xl={4}
                lg={3}
                md={2}
                sm={1}
                xs={1}
                className="d-flex g-4 p-4 justify-content-center"
            >
                {loaded ? (
                    cities["data"].map((city) => {
                        return (
                            <Col
                                key={city.id}
                                className="d-flex align-self-stretch"
                            >
                                <CityCard city={city} regex={queryRE} />
                            </Col>
                        );
                    })
                ) : (
                    <Spinner animation="grow" />
                )}
            </Row>
        </Container>
    );
};

export default Cities;
