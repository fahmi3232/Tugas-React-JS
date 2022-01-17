import React from "react";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./style.css";

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
            <Nav className="ms-5 my-2 my-lg-0 navv" navbarScroll>
              <Nav.Link style={{ color: "white" }} href="#action1">
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="#action2">
                Biografi
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="#action2">
                Contact
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="#action2">
                Motto
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="#action2">
                About
              </Nav.Link>
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
