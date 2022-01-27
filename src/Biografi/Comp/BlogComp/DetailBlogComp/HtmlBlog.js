import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


const HtmlBlog = () => {
    const {id} = useParams()

    useEffect(() => {
        
    }, [id])
  return (

      <div>
          <Container style={{margin: '200px auto'}}>
              <Row>
                  <Col>
                    <h4>Pengertian</h4>
                  </Col>
              </Row>
          </Container>
      </div>
  ) 
};

export default HtmlBlog;
