import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import SubBio from "./SubBio";
import { useState } from "react";
import "./style.css";
import { Fade } from "react-awesome-reveal";

const Biografi = () => {
  const [bio, setBio] = useState([
    {
      id: 1,
      image:
        "https://www.bizzmine.com/images/articles/careers/Front-end-developer.png",
      title: "Front End",
      deskripsi:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natusanimi quae odit nesciunt quasi impedit ea pariatur",
    },
    {
      id: 2,
      image:
        "https://www.bikin.co/careers/wp-content/uploads/2018/10/lowogan-kerja-backend-web-developer.png",
      title: "Back End",
      deskripsi:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natusanimi quae odit nesciunt quasi impedit ea pariatur",
    },
    {
      id: 3,
      image:
        "https://www.bikin.co/careers/wp-content/uploads/2018/10/lowogan-kerja-frontend-web-developer.png",
      title: "Framework",
      deskripsi:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natusanimi quae odit nesciunt quasi impedit ea pariatur",
    },
  ]);
  return (
    <div className="mc">
      <Container className="pt-5 pb-3">
        <Row className="text-center mb">
          <Fade delay={300}>
            <Col>
              <h3>My Biografi</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                animi quae odit nesciunt quasi impedit ea pariatur, nihil
                provident nobis quis eligendi itaque reprehenderit, ipsam
                corrupti, tenetur culpa! In, autem!
              </p>
            </Col>
          </Fade>
        </Row>
      </Container>
      <Container className="pb-5 text-center">
        <Fade delay={300}>
        <Row className="d-flex align-items-center justify-content-center">
          {bio.map((biograf) => (
            <Col
              style={{ width: 340, padding: 10, margin: 10 }}
              className="sb mx-3"
              md={4}
              key={biograf.id}
            >
              <img
                src={biograf.image}
                alt=""
                width={240}
                height={200}
                className="py-2"
              />
              <h2>{biograf.title}</h2>
              <p>{biograf.deskripsi}</p>
            </Col>
          ))}
        </Row>
        </Fade>
      </Container>
    </div>
  );
};

export default Biografi;
