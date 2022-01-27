import React from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const BlogCoba = ({ blogCoba }) => {
  return (
    <div>
      <Fade delay={500}>
        <Container style={{ margin: "100px" }}>
          <Row>
            {blogCoba.map((blogss) => (
              <Col
                md={4}
                xs={6}
                className="d-flex align-items-center justify-content-center"
                key={blogss.id}
              >
                <Card className="mt-4" style={{ width: "18rem" }}>
                  <Card.Body>
                    <h4>{blogss.title}</h4>
                    <Card.Text>{blogss.body}</Card.Text>
                    <Link to={"/detail/" + blogss.id}>
                      <Button variant="primary">Selengkapnya</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Fade>
    </div>
  );
};

export default BlogCoba;
