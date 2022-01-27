import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FormContactComp from '../Comp/FormRegisComp/FormRegisComp';

const FormRegister = () => {
  return (
      <div>
          <Container>
              <Row>
                  <Col>
                    <h4>Form Registrasi</h4>
                  </Col>
              </Row>
          </Container>
          <FormContactComp />
      </div>
  ) 
};

export default FormRegister;
