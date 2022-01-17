import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SubBio from "./SubBio";

const Biografi = () => {
  return (
    <div className="mc">
      <Container className="pt-5 pb-3">
        <Row className="text-center mb">
          <Col>
            <h3>My Biografi</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              animi quae odit nesciunt quasi impedit ea pariatur, nihil
              provident nobis quis eligendi itaque reprehenderit, ipsam
              corrupti, tenetur culpa! In, autem!
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="pb-5 text-center">
        <Row>
          <Col md={4}>
            <SubBio
              title="Front End"
              deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              animi quae odit nesciunt quasi impedit ea pariatur"
            />
          </Col>
          <Col md={4}>
            <SubBio
              title="Back End"
              deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              animi quae odit nesciunt quasi impedit ea pariatur"
            />
          </Col>
          <Col md={4}>
            <SubBio
              title="Framework"
              deskripsi="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
              animi quae odit nesciunt quasi impedit ea pariatur"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Biografi;
