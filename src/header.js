import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

export default function Header() {
  return (<>

    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <Container>
          Contacts
        </Container>
      </Navbar.Brand>
    </Navbar>

  </>);
}