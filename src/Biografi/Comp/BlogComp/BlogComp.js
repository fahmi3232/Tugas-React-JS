import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Fade } from "react-awesome-reveal";
import BlogCoba from "./BlogCoba";
import axios from 'axios'

const BlogComp = ({ blog }) => {
  const [blogCoba, setBlogCoba] = useState(null);

  const getBlog = async () => {
    try {
      let resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setBlogCoba(resp.data)
    } catch(e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getBlog()
  }, [])

  return (
    <div>
      {/* <Fade delay={500}> */}
        <Container style={{ margin: "100px" }}>
          <Row>
            {blog.map((blogs) => (
              <Col
                md={4}
                xs={6}
                className="d-flex align-items-center justify-content-center"
                key={blogs.id}
              >
                <Card className="mt-4" style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={blogs.image} />
                  <Card.Body>
                    <h4>{blogs.title}</h4>
                    <Card.Text>{blogs.deskripsi}</Card.Text>
                    <Link to={"/detail/" + blogs.id}>
                      <Button variant="primary">Selengkapnya</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        {blogCoba && <BlogCoba blogCoba={blogCoba} />}
      {/* </Fade> */}
    </div>
  );
};

export default BlogComp;
