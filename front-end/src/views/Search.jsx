import { Col, Container, Row, Spinner, Tab, Tabs } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import CityCard from "../components/Cards/CityCard";
import ApartmentCard from "../components/Cards/ApartmentCard";
import JobCard from "../components/Cards/JobCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Search = () => {
  const [data, setData] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const location = useLocation();
  const userQuery = location.pathname.split("/search/").at(-1);
  const queryRE = new RegExp(`(?:${userQuery.replaceAll("%20", "|")})`, "i");
  const client = axios.create({
    baseURL: "https://api.geojobs.me/search/",
  });

  // load data from query
  // this will get results for all 3 models
  const getResults = async () => {
    await client
      .get(userQuery)
      .then((response) => {
        setData(response.data);
        setLoaded(true);
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  // this will run exactly once
  useEffect(() => {
    getResults();
  }, []);

  return (
    <Container>
      <h1>Search Results</h1>
      <Tabs defaultActiveKey="Jobs">
        <Tab eventKey="Jobs" title="Jobs">
          <Row xl={4} lg={3} md={2} sm={1} xs={1}>
            {loaded ? (
              data["jobs"].map((job) => (
                <Col key={job.id}>
                  <JobCard job={job} regex={queryRE} />
                </Col>
              ))
            ) : (
              <Spinner animation="grow" />
            )}
          </Row>
        </Tab>
        <Tab eventKey="Cities" title="Cities">
          <Row xl={4} lg={3} md={2} sm={1} xs={1}>
            {loaded ? (
              data["cities"].map((city) => (
                <Col key={city.id}>
                  <CityCard city={city} regex={queryRE} />
                </Col>
              ))
            ) : (
              <Spinner animation="grow" />
            )}
          </Row>
        </Tab>
        <Tab eventKey="Apartments" title="Apartments">
          <Row xl={4} lg={3} md={2} sm={1} xs={1}>
            {loaded ? (
              data["apartments"].map((apartment) => (
                <Col key={apartment.id}>
                  <ApartmentCard apartment={apartment} regex={queryRE} />
                </Col>
              ))
            ) : (
              <Spinner animation="grow" />
            )}
          </Row>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Search;
