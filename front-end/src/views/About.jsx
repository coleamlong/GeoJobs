import React, { useState, useEffect } from 'react'
import axios from "axios";

import DeveloperCard from '../components/Cards/DeveloperCard'
import { teamInfo } from '../static/TeamInfo';
import { toolInfo, apiInfo } from '../static/ProjectInfo';
 

import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'
import ToolCard from '../components/Cards/ToolCard';
import APICard from '../components/Cards/APICard';

const client = axios.create({
  baseURL: "https://gitlab.com/api/v4/",
  headers: { Authorization: "Bearer glpat-MweTEhPuWf9NugsqWnQy" },
});

const fetchGitLabData = async () => {
  let totalCommits   = 0,
      totalIssues    = 0,
      totalUnitTests = 0

  teamInfo.forEach((member) => {
    member.commits = 0
    member.issues = 0
    totalUnitTests += member.unit_tests
  })

  await client.get("projects/39707042/repository/contributors").then((response) => {
    response.data.forEach((element) => {
      const { name, email, commits } = element
      
      teamInfo.forEach((member) => {
        if (member.name === name || member.gitlab_username === name || member.email === email) {
          console.log(commits)  
          member.commits = commits
        }
      })
      totalCommits += commits
    })
  });

  await client.get("projects/39707042/issues").then((response) => {
    response.data.forEach((element) => {
      const { assignees } = element
      assignees.forEach((assignee) => {
        const { name, email } = assignee;
        teamInfo.forEach((member) => {
          if (member.name === name || member.gitlab_username === name || member.email === email)
            member.issues += 1
        })
      })
      totalIssues += 1
    })
  });

  console.log("Members")
  teamInfo.forEach((member) => {
    console.log(member.issues)
  })

  return {
    totalCommits: totalCommits,
    totalIssues: totalIssues,
    totalTests: totalUnitTests,
    teamInfo: teamInfo
  }
}

const About = () => {
  const [teamList, setTeamList] = useState([])
  const [totalCommits, setTotalCommits] = useState(0)
  const [totalIssues, setTotalIssues] = useState(0)
  const [totalTests, setTotalTests] = useState(0)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
			if (teamList === undefined || teamList.length === 0) {
				const gitlabInfo = await fetchGitLabData()
				setTotalCommits(gitlabInfo.totalCommits)
				setTotalIssues(gitlabInfo.totalIssues)
				setTotalTests(gitlabInfo.totalTests)
				setTeamList(gitlabInfo.teamInfo)
				setLoaded(true)
			}
		}
		fetchData()
  }, [teamList])

  return (
    <Stack className='bg-light'>
      <Container className='p-4'>
        <h1 className='d-flex justify-content-center p-4 bg-primary text-light'>What is GeoJobs?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper purus interdum orci auctor, id venenatis sem congue. Morbi condimentum mi non risus bibendum, accumsan tincidunt lacus suscipit.
        </p>
      </Container>
      <Container className='p-4'>
        <h1 className='d-flex justify-content-center p-4 bg-primary text-light'>Putting The Pieces Together</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper purus interdum orci auctor, id venenatis sem congue. Morbi condimentum mi non risus bibendum, accumsan tincidunt lacus suscipit.
        </p>
      </Container>
      <Container className='p-4'>
        <h1 className='d-flex justify-content-center p-4 bg-primary text-light'>Meet the Team!</h1>
        {
          loaded ? (
            <Row className='p-4 g-4'>
              {
                teamList.map((member) => {
                  return (
                    <Col>
                      <DeveloperCard devInfo={member} />
                    </Col>
                  )
                }
              )
            }
            </Row>
          ) : (
            <Row>
              <Col className='d-flex justify-content-center'>
                <Spinner animation="grow" />
              </Col>
            </Row>
          )
        }
      </Container>
      <Container className='p-4'>
        <h1 className='d-flex justify-content-center p-4 bg-primary text-light'>Total Repsitory Stats</h1>
        <Row className='p-4'>
          <Col className='d-flex justify-content-center'><h2>Total Commits: {totalCommits}</h2></Col>
          <Col className='d-flex justify-content-center'><h2>Total Issues: {totalIssues}</h2></Col>
          <Col className='d-flex justify-content-center'><h2>Total Unit Tests: {totalTests}</h2></Col>
        </Row>
      </Container>
      <Container className='p-4'>
      <h1 className='d-flex justify-content-center p-4 bg-primary text-light'>Tools</h1>
        <Row className='g-4 p-4 justify-content-center' md={4}>
          {
            toolInfo.map((tool) => {
              return (
                <Col>
                  <ToolCard toolInfo={tool} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
      <Container className='p-4'>
        <h1 className='d-flex justify-content-center p-4 bg-primary text-light'>APIs</h1>
        <Row className='g-4 [-4 justify-content-center'>
          {
            apiInfo.map((api) => {
              return (
                <Col>
                  <APICard apiInfo={api} />
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </Stack>
  )
}

export default About