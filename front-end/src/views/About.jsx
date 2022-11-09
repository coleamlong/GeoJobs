import React, { useState, useEffect } from "react";
import axios from "axios";

import DeveloperCard from "../components/Cards/DeveloperCard";
import { teamInfo } from "../static/TeamInfo";
import { toolInfo, apiInfo } from "../static/ProjectInfo";

import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import ToolCard from "../components/Cards/ToolCard";
import APICard from "../components/Cards/APICard";

const client = axios.create({
  baseURL: "https://gitlab.com/api/v4/",
  headers: { Authorization: "Bearer glpat-MweTEhPuWf9NugsqWnQy" },
});

const fetchGitLabData = async () => {
  let totalCommits = 0,
    totalIssues = 0,
    totalUnitTests = 0;

  teamInfo.forEach((member) => {
    member.commits = 0;
    member.issues = 0;
    totalUnitTests += member.unit_tests;
  });

  await client
    .get("projects/39707042/repository/contributors")
    .then((response) => {
      response.data.forEach((element) => {
        const { name, email, commits } = element;

        teamInfo.forEach((member) => {
          if (
            member.name === name ||
            member.gitlab_username === name ||
            member.email === email
          ) {
            console.log(commits);
            member.commits = commits;
          }
        });
        totalCommits += commits;
      });
    });

  await client.get("projects/39707042/issues").then((response) => {
    response.data.forEach((element) => {
      const { assignees } = element;
      assignees.forEach((assignee) => {
        const { name, email } = assignee;
        teamInfo.forEach((member) => {
          if (
            member.name === name ||
            member.gitlab_username === name ||
            member.email === email
          )
            member.issues += 1;
        });
      });
      totalIssues += 1;
    });
  });

  console.log("Members");
  teamInfo.forEach((member) => {
    console.log(member.issues);
  });

  return {
    totalCommits: totalCommits,
    totalIssues: totalIssues,
    totalTests: totalUnitTests,
    teamInfo: teamInfo,
  };
};

function BoldText({ children }) {
  return (
    <span style={{  fontSize: '37px', color: 'lightsalmon', font: 'Courier-Oblique'  }}>{children}</span>
  );
}

const About = () => {
  const [teamList, setTeamList] = useState([]);
  const [totalCommits, setTotalCommits] = useState(0);
  const [totalIssues, setTotalIssues] = useState(0);
  const [totalTests, setTotalTests] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (teamList === undefined || teamList.length === 0) {
        const gitlabInfo = await fetchGitLabData();
        setTotalCommits(gitlabInfo.totalCommits);
        setTotalIssues(gitlabInfo.totalIssues);
        setTotalTests(gitlabInfo.totalTests);
        setTeamList(gitlabInfo.teamInfo);
        setLoaded(true);
      }
    };
    fetchData();
  }, [teamList]);

  return (
    <Stack>
      <Container className="p-4">
        <h1 className="d-flex justify-content-center p-4 ">What is GeoJobs?</h1>
        <p className="mx-auto">
          GeoJobs is a one-stop shop for all of you career needs! Browse open
          job listings, hunt for a nearby apartment, and explore interesting
          cities all over the country. <br />
          <br /> To get started, simply navigate to one of the three categories
          and start browsing!
        </p>
      </Container>
      <Container className="p-4"
      style= {{backgroundColor: 'whitesmoke'}}>
        <h1 className="d-flex justify-content-center p-4 ">
          Putting The Pieces Together
        </h1>
        <p className="mx-auto">
          GeoJobs integrates data from many sources, including job boards, human
          geography data, and apartment listings, to present you with useful
          connections which help you plan a big move in your career or a have a
          quick look around the city you are already in.
        </p>
      </Container>
      <Container className="p-4">
        <h1 className="d-flex justify-content-center p-4 ">Meet the Team!</h1>
        {loaded ? (
          <Row
            xs={1}
            sm={2}
            md={3}
            xl={5}
            className="g-4 p-4 justify-content-center"
          >
            {teamList.map((member) => {
              return (
                <Col className="d-flex align-self-stretch">
                  <DeveloperCard devInfo={member} />
                </Col>
              );
            })}
          </Row>
        ) : (
          <Row>
            <Col className="d-flex justify-content-center">
              <Spinner animation="grow" />
            </Col>
          </Row>
        )}
      </Container>
      <Container className="p-4"
      style= {{backgroundColor: 'whitesmoke'}}>
        <h1 className="d-flex justify-content-center p-4">
          Total Repsitory Stats
        </h1>
        <Row className="p-4">
          <Col className="d-flex justify-content-center">
            <h2>Total Commits: {totalCommits}</h2>
          </Col>
          <Col className="d-flex justify-content-center">
            <h2>Total Issues: {totalIssues}</h2>
          </Col>
          <Col className="d-flex justify-content-center">
            <h2>Total Tests: {totalTests}</h2>
          </Col>
        </Row>
        <h1 className="d-flex justify-content-center p-4">
          <a
            href={"https://documenter.getpostman.com/view/23607622/2s83tFHBCK"}
          >
            <BoldText>API Documentation</BoldText>
          </a>
        </h1>
      </Container>
      <Container className="p-4">
        <h1 className="d-flex justify-content-center p-4 ">Tools</h1>
        <Row xs={2} md={4} className="g-4 justify-content-center">
          {toolInfo.map((tool) => {
            return (
              <Col className="d-flex align-self-stretch">
                <ToolCard toolInfo={tool} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container className="p-4">
        <h1 className="d-flex justify-content-center p-4 ">APIs</h1>
        <Row xs={1} sm={2} md={4} className="g-4 justify-content-center">
          {apiInfo.map((api) => {
            return (
              <Col className="d-flex align-self-stretch">
                <APICard apiInfo={api} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </Stack>
  );
};

export default About;
