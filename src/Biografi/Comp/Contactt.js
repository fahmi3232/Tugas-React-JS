import React from "react";
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Contactt = () => {
  return (
    <div className="ct py-5">
      <Container className="mt-5 mb-3">
        <Row>
          <Col md={4} className="mb-4 m-auto sideleft" style={{marginRight: 30}}>
            <h2>MY SIDE JOB</h2>
            <hr />
            <Row className="d-flex align-items-center">
              <Col className="text-center" md={3} xs={2}>
                <h4>MAR</h4>
                <h3>16</h3>
              </Col>
              <Col md={6} xs={7}>
                <h5>Momentum Builder</h5>
                <p>Virtual</p>
              </Col>
              <Col md={3} xs={3}>
                <button style={{height: 35, width: 70}}>INFO</button>
              </Col>
            </Row>
            <hr />
            <Row className="d-flex align-items-center">
              <Col className="text-center" md={3} xs={2}>
                <h4>MAR</h4>
                <h3>16</h3>
              </Col>
              <Col md={6} xs={7}>
                <h5>Momentum Builder</h5>
                <p>Virtual</p>
              </Col>
              <Col md={3} xs={3}>
                <button style={{height: 35, width: 70}}>INFO</button>
              </Col>
            </Row>
            <hr />
            <Row className="d-flex align-items-center">
              <Col className="text-center" md={3} xs={2}>
                <h4>MAR</h4>
                <h3>16</h3>
              </Col>
              <Col md={6} xs={7}>
                <h5>Momentum Builder</h5>
                <p>Virtual</p>
              </Col>
              <Col md={3} xs={3}>
                <button style={{height: 35, width: 70}}>INFO</button>
              </Col>
            </Row>
            <hr />
            <Row className="d-flex align-items-center">
              <Col className="text-center" md={3} xs={2}>
                <h4>MAR</h4>
                <h3>16</h3>
              </Col>
              <Col md={6} xs={7}>
                <h5>Momentum Builder</h5>
                <p>Virtual</p>
              </Col>
              <Col md={3} xs={3}>
                <button style={{height: 45, width: 70}}>INFO</button>
              </Col>
            </Row>
            <hr />
          </Col>
          <Col md={1}>
          <p></p>
          </Col>
          <Col md={6} style={{marginLeft: 10}}>
            <Row>
              <Col className="kontak">
                <h3 className="text-left">WANT TO GET IN TOUCH WITH ME?</h3>
              </Col>
            </Row>
            <hr />
            <Row className="d-flex align-items-left justify-content-space-bertween">
              <Form style={{ width: 465, textAlign: "left", color: "white" }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name*</Form.Label>
                  <Form.Control type="text" placeholder="Your Name Here" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control type="email" placeholder="yourname@gmail.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Phone*</Form.Label>
                  <Form.Control type="number" placeholder="(555) 555 5555" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contactt;
