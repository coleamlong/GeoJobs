import React from 'react'

import Card from 'react-bootstrap/Card'

const DeveloperCard = (props) => {
  return (
    <Card>
      <Card.Img variant='top' src={ props.devInfo.image } />
      <Card.Body>
        <Card.Title>{ props.devInfo.name }</Card.Title>

        <Card.Subtitle>@{ props.devInfo.gitlab_username }</Card.Subtitle>
        <Card.Text>Role: { props.devInfo.role }</Card.Text>
        <Card.Text>{ props.devInfo.bio }</Card.Text>

        <Card.Footer className='text-muted'>
          Commits:    { props.devInfo.commits }     <br />
          Issues:     { props.devInfo.issues }      <br />
          Unit Tests: { props.devInfo.unit_tests }
        </Card.Footer>
      </Card.Body>
    </Card>
  )
}

export default DeveloperCard