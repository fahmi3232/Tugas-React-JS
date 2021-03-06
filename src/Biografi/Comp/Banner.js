import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Foto from "../Images/foto.png";
import Biografi from "./Biografi";
// import Style from "./style.css";
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div>
      <Container fluid className="bgb">
        <Container style={{ height: 450 }}>
          <Fade delay={500}>
          <Row className="d-flex">
            <Col md={6} className="bio text-center">
              <h2>Fahmi Oktafian</h2>
              <p>Student in Eduwork</p>
              <button className="bt mb-4 bn632-hover bn26">Linkedin</button>
            </Col>
            <Col md={6} className="text-center">
              <img style={{ width: 300}} src={Foto} alt="" />
            </Col>
          </Row>
            </Fade>
        </Container>
      </Container>
      
      <Biografi />
    </div>
  );
};

export default Banner;
