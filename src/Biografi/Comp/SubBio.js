import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Media from "../Images/media-sosial.png";
import BioModal from "./BioModal";
import "./style.css";

const SubBio = ({ title, deskripsi }) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Container>
        <Row className="sb mt-3 mb-4">
          <Col>
            <img src={Media} alt="" />
            <h3>{title}</h3>
            <p>{deskripsi}</p>
            <Button className="bto" variant="primary" onClick={() => setModalShow(true)}>
              Selengkapnya
            </Button>
            <BioModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SubBio;
