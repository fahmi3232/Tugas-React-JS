import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardComp from "./CardComp";

const PortComp = () => {
  return (
    <div>
      <Container fluid className=" bgb" style={{ textAlign: "center" }}>
        <Container>
          <Row className="d-flex align-items-center justify-content-center">
            <Col className="px-4 neww" style={{ textAlign: "left" }}>
              <h3 className="pb-4 head">This Page is Portfolio</h3>
              <p className="pr">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                animi quae odit nesciunt quasi impedit ea pariatur
              </p>
            </Col>
            <Col>
              <img
                className="img mt-3"
                src="https://www.roberthalf.com/sites/default/files/styles/full_width_content_image_1x_small_480/public/Media_Root/images/blog-tcg/digital_portfolio_test.jpg?itok=UcwC5jkl"
                alt=""
                width={420}
                height={370}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <CardComp />
    </div>
  );
};

export default PortComp;
