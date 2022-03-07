import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export default function Header() {
    return (
        <Navbar bg="dark" expand="lg">
            <Container >
                <Navbar.Brand href="/">e-SHOP</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
