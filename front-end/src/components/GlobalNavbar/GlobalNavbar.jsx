import React from 'react'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const GlobalNavbar = () => {
  return (
    <Navbar bg='primary' variant='dark' expand='lg'>
      <Container>
        
        <Navbar.Brand href='/'>GeoJobs</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link href='/about'>About</Nav.Link>
            <Nav.Link href='/jobs'>Jobs</Nav.Link>
            <Nav.Link href='/cities'>Cities</Nav.Link>
            <Nav.Link href='/apartments'>Apartments</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default GlobalNavbar