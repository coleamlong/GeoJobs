import React from 'react'

import Card from 'react-bootstrap/Card'

const ToolCard = (props) => {
  return (
      <Card style={{ height: '30rem' }}>
      <Card.Img className='p-4' variant='top' src={ props.toolInfo.image } />
      <Card.Body>
        <Card.Title>{ props.toolInfo.title }</Card.Title>

        <Card.Text>{ props.toolInfo.description }</Card.Text>
        <Card.Link>{ props.toolInfo.link }</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default ToolCard