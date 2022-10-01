import React, { useState, useEffect } from 'react'
import axios from "axios";

import DeveloperCard from '../components/Cards/DeveloperCard'
import { teamInfo } from '../static/TeamInfo';
 

import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

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
    <Stack>
      <Container className='p-4'>
        <h1 className='d-flex justify-content-center'>What is GeoJobs?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper purus interdum orci auctor, id venenatis sem congue. Morbi condimentum mi non risus bibendum, accumsan tincidunt lacus suscipit.
        </p>
      </Container>
      <Container className='p-4'>
        <h1 className='d-flex justify-content-center'>Putting The Pieces Together</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper purus interdum orci auctor, id venenatis sem congue. Morbi condimentum mi non risus bibendum, accumsan tincidunt lacus suscipit.
        </p>
      </Container>
      <Container className='p-4'>
        <h1 className='d-flex justify-content-center'>Meet the Team!</h1>
        {
          loaded ? (
            <Row>
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
        <h4 className='d-flex justify-content-center'>Total Repsitory Stats</h4>
        <Row >
          <Col className='d-flex justify-content-center'>Total Commits: {totalCommits}</Col>
          <Col className='d-flex justify-content-center'>Total Issues: {totalIssues}</Col>
          <Col className='d-flex justify-content-center'>Total Unit Tests: {totalTests}</Col>
        </Row>
      </Container>
    </Stack>
  )
}

export default About