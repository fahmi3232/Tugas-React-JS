import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import SubBio from "./SubBio";
import { useState } from "react";
import Media from '../Images/media-sosial.png'

const Biografi = () => {
  const [bio, setBio] = useState([
    {
      title: "Front End",
      deskripsi:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natusanimi quae odit nesciunt quasi impedit ea pariatur",
    },
    {
      title: "Back End",
      deskripsi:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natusanimi quae odit nesciunt quasi impedit ea pariatur",
    },
    {
      title: "Framework",
      deskripsi:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natusanimi quae odit nesciunt quasi impedit ea pariatur",
    },
  ]);
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
          {bio.map((biograf) => (
            <Col style={{width: 345}} className="sb mx-3" md={4}>
              <img src={Media} alt="" />
              <h2>{biograf.title}</h2>
              <p>{biograf.deskripsi}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Biografi;
