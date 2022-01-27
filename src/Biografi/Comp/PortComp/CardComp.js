import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardCompA from "./CardCompA";

class CardComp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tampil: true,
    };
  }

  render() {
    const { tampil } = this.state;

    return (
      <div className="bgl py-5">
        <Container className=" text-center">
          <Row>
            <Col>
              <h3>Portfolio</h3>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="text-center mt-4">
            <Col className="mt-3">
              <img
                src="https://bikin.website/wp-content/uploads/2019/07/business_consultant-768x420.png"
                alt=""
                width={350}
              />
              <div style={{ padding: 20 }}>
                <h3>Business Consultant</h3>
                <p>Desain yang paling sesuai untuk situs website konsultan bisnis.</p>
                <button type="button" className="bgi">
                  Demo
                </button>
                <button type="button" className="bgu">
                  Pilih
                </button>
              </div>
            </Col>
            <Col className="mt-3">
              <img
                src="https://bikin.website/wp-content/uploads/2019/07/software_marketing-1-300x164.png"
                alt=""
                width={350}
              />
              <div style={{ padding: 20 }}>
                <h3>Software Marketing</h3>
                <p>Layout yang cocok untuk pemasaran software secara profesional.</p>
                <button type="button" className="bgi">
                  Demo
                </button>
                <button type="button" className="bgu">
                  Pilih
                </button>
              </div>
            </Col>
            <Col className="mt-3">
              <img
                src="https://bikin.website/wp-content/uploads/2019/07/babysitter-300x164.jpg"
                alt=""
                width={350}
              />
              <div style={{ padding: 20 }}>
                <h3>Babysitter</h3>
                <p>Template yang cocok untuk website penyedia jasa pengasuh anak.</p>
                <button type="button" className="bgi">
                  Demo
                </button>
                <button type="button" className="bgu">
                  Pilih
                </button>
              </div>
            </Col>
          </Row>
          <Row className="text-center mt-4">
            <Col className="mt-3">
              <img
                src="https://bikin.website/wp-content/uploads/2019/07/design_conference-1-300x165.png"
                alt=""
                width={350}
              />
              <div style={{ padding: 20 }}>
                <h3>Design Conference</h3>
                <p>Tampilan website yang sangat cocok untuk menampilkan informasi konferensi.</p>
                <button type="button" className="bgi">
                  Demo
                </button>
                <button type="button" className="bgu">
                  Pilih
                </button>
              </div>
            </Col>
            <Col className="mt-3">
              <img
                src="https://bikin.website/wp-content/uploads/2019/07/food_recipes-1-768x422.png"
                alt=""
                width={350}
              />
              <div style={{ padding: 20 }}>
                <h3>Food Recipes</h3>
                <p>Desain yang sesuai untuk kebutuhan website resep masakan.</p>
                <button type="button" className="bgi">
                  Demo
                </button>
                <button type="button" className="bgu">
                  Pilih
                </button>
              </div>
            </Col>
            <Col className="mt-3">
              <img
                src="https://bikin.website/wp-content/uploads/2019/07/tea_shop-1-768x424.png"
                alt=""
                width={350}
              />
              <div style={{ padding: 20 }}>
                <h3>Tea Shop</h3>
                <p>Layout yang cocok untuk toko pemasaran aneka teh.</p>
                <button type="button" className="bgi">
                  Demo
                </button>
                <button type="button" className="bgu">
                  Pilih
                </button>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="py-4">
          <Row className="text-center">
            <Col>
            <button className="bto" onClick={() => this.setState({ tampil: !tampil })}>
              {tampil ? "Lihat Lebih Banyak" : "Lihat Lebih Sedikit"}
            </button>
            </Col>
          </Row>
        </Container>
        {!tampil && <CardCompA />}
      </div>
    );
  }
}

export default CardComp;
