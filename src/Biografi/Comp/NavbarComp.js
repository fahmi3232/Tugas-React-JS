import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import './style.css'

const NavbarComp = () => {
  const lg = {
    color: "white",
    fontSize: 35,
  };
  return (
    <div>
      <Navbar className="bg" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand className="faa" href="#" style={lg}>
            MY BIOGRAFI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-5 mt-3 my-lg-0 navv" navbarScroll>
              <LinkContainer to="/">
                <Nav.Link>
                  <h5 style={{color: "white", paddingTop: 15}}>Home</h5>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/portfolio">
                <Nav.Link>
                <h5 style={{color: "white", paddingTop: 15}}>Portfolio</h5>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/blog">
                <Nav.Link>
                <h5 style={{color: "white", paddingTop: 15}}>Blog</h5>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/form">
                <Nav.Link>
                <h5 style={{color: "white", paddingTop: 15}}>Form</h5>
                </Nav.Link>
              </LinkContainer>
            </Nav>
            <Form className="d-flex ms-auto">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComp;
