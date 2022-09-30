import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const GlobalNavbar = () => {
  return (
    <Navbar bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>GeoJobs</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/about'>About</Nav.Link>
          <Nav.Link href='/jobs'>Jobs</Nav.Link>
          <Nav.Link href='/cities'>Cities</Nav.Link>
          <Nav.Link href='/apartments'>Apartments</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default GlobalNavbar