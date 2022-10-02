import React from 'react'

import Card from 'react-bootstrap/Card'

const APICard = (props) => {
  return (
    <Card style={{ height: '30rem'}}>
      <Card.Img className='p-4' variant='top' src={ props.apiInfo.image } />
      <Card.Body>
        <Card.Title>{ props.apiInfo.title }</Card.Title>

        <Card.Text>{ props.apiInfo.description }</Card.Text>
        <Card.Link>{ props.apiInfo.link }</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default APICard