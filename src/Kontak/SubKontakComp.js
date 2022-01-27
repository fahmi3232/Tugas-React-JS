import React from "react";
import { Card, Col, Container, Row, Button } from "react-bootstrap";
import '../Biografi/Comp/style.css'

const SubKontakComp = ({ laptop, onDelete, nama, onHapus }) => {
  return (
    <div>
      <Container className="text-center mt-3">
        <Row>
          {laptop.map((lapt) => (
            <Col md={4} xs={6} key={lapt.id} className="py-3 d-flex align-items-center justify-content-center">
              <Card style={{ width: "15rem" }}>
                <Card.Img
                  variant="top"
                  src={lapt.image}
                  width={180}
                  height={210}
                />
                <Card.Body>
                  <Card.Title>{lapt.nama}</Card.Title>
                  <Card.Text>
                    <Row>
                      <Col md={5}>{lapt.spek}</Col>
                      <Col md={7}>{lapt.harga}</Col>
                    </Row>
                  </Card.Text>
                  <Button variant="primary">Buy Now</Button>
                  <Button variant="primary" onClick={() => onDelete(lapt.id)}>
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="text-center">
        <div className="sk">
          <ul>
            {nama.map((nam) => (
              <Row className="rw" key={nam.id}>
                <Col>{nam.nama}</Col>
                <Col>{nam.umur}</Col>
                <Col>{nam.alamat}</Col>
                <Col>
                    <button onClick={() => onHapus(nam.id)}>delet</button>
                </Col>
              </Row>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default SubKontakComp;
