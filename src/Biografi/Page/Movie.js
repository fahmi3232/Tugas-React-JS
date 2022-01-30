import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const Movie = () => {
  const [berita, setBerita] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const getBerita = async () => {
    setLoading(true);
    try {
      let respon = await axios.get(
        "https://www.omdbapi.com/?apikey=20e7f455&s=avengers"
      );
      setBerita(respon.data.Search);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getBerita();
  }, []);

  return (
    <div>
      {loading ? (
        "Loading..."
      ) : (
        <Container className="py-5">
          <input
            style={{ width: "100%", height: 40 }}
            className="my-5 text-left px-2"
            placeholder="Find Your Favorite Avengers Movie"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Row>
            {berita
              .filter((berit) => {
                if (search === "") {
                  return berit;
                } else if (
                  berit.Title.toLowerCase().includes(search.toLowerCase())
                ) {
                  return berit;
                }
              })
              .map((berit, index) => (
                <Col md={3} xs={6} key={index}>
                  <Card
                    className="my-4"
                    style={{ width: "15rem", textAlign: "left" }}
                  >
                    <Card.Img variant="top" src={berit.Poster} />
                    <Card.Body>
                      <p className="pt-4">{berit.publishedAt}</p>
                      <Card.Title>{berit.Title}</Card.Title>
                      <Card.Text
                        style={{ textAlign: "justify", marginTop: 20 }}
                      >
                        Year: {berit.Year}
                      </Card.Text>
                      <Button variant="primary" actions={berit.url}>
                        Go somewhere
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default Movie;
