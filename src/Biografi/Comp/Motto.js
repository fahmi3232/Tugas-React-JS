import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Moto from "../Images/success1.png";

const Motto = () => {
  return (
    <div className="mt py-5">
      <Container className="text-center">
        <Row >
          <Col md={6} xs={12}>
            <h3>MOTTO</h3>
            <div className="tl">
            <p>
              Saya meyakini semua orang memiliki keistimewaan. Banyak orang
              bilang "Tidak ada yang sempurna di dunia ini", memang benar, yang
              paling sempurna adalah dzat yang maha sempurna yaitu Allah SWT.
            </p>
            <p>
              Tapi, saya juga meyakini, tidak ada yang tidak sempurna di dunia
              ini, artinya semua orang punya ciri khas kesempurnaanya
              masing-masing.
            </p>
            <p>Jadi, tetap optimis, maju terus dan raih impian.</p>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <img src={Moto} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Motto;
