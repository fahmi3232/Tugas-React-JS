import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button } from "react-bootstrap";
import "../Comp/style.css";

const Info = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    try {
      let resp = await axios.get(
        "https://newsapi.org/v2/everything?q=Apple&from=2021-12-29&sortBy=popularity&apiKey=0a6a63c9b36a45bc9e6cbc41a2e2bd99"
      );
      setData(resp.data.articles);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <div>
      <Container className="mt-5" style={{ marginTop: 300 }}>
        <input
          className="mt-5 mb-5"
          placeholder="search Information ..."
          onChange={(e) => setSearch(e.target.value)}
        />
          <Row>
            {data
              .filter((dat) => {
                if (search === "") {
                  return dat;
                } else if (
                  dat.title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return dat;
                }
              })
              .map((dat, index) => (
                <Col key={index} className="d-flex justify-content-center">
                  <Card style={{ width: "18rem", marginBottom: 20 }}>
                    <Card.Img variant="top" src={dat.urlToImage} />
                    <Card.Body>
                      <Card.Title>{dat.title}</Card.Title>
                      <Card.Title className="pt-4">
                        {dat.publishedAt}
                      </Card.Title>
                      <Card.Text className="py-4">{dat.content}</Card.Text>
                      <a href={dat.url} target="_blank" className="tbl">
                        Klik Disini
                      </a>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
      </Container>
    </div>
  );
};

export default Info;
