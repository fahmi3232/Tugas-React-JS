import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const CardCompA = () => {
  useEffect(() => {
    return () => {
      console.log("sukses");
    };
  }, []);

  const [produk, setProduk] = useState([
    {
      id: 1,
      image:
        "https://bikin.website/wp-content/uploads/2019/07/agency-300x171.png",
      nama: "Agency",
      deskripsi: "Desain yang sesuai untuk kebutuhan website bisnis.",
      demo: "https://okdihost.com",
      pilih: "https://youtube.com",
    },
    {
      id: 2,
      image:
        "https://bikin.website/wp-content/uploads/2019/07/coffee-300x171.png",
      nama: "Coffee Shop",
      deskripsi:
        "Template yang cocok untuk website pemasaran biji kopi, coffee shop.",
      demo: "https://okdihost.com",
      pilih: "https://youtube.com",
    },
    {
      id: 3,
      image:
        "https://bikin.website/wp-content/uploads/2019/07/design_agency-768x438.png",
      nama: "Design Agency",
      deskripsi: "Layout yang cocok untuk agensi desain kreatif.",
      demo: "https://okdihost.com",
      pilih: "https://youtube.com",
    },
    {
      id: 4,
      image:
        "https://bikin.website/wp-content/uploads/2019/07/farmers_market-768x418.png",
      nama: "Farmers Market",
      deskripsi:
        "Layout website yang sesuai untuk organisasi pertanian & hasil tani.",
      demo: "https://okdihost.com",
      pilih: "https://youtube.com",
    },
    {
      id: 5,
      image:
        "https://bikin.website/wp-content/uploads/2019/07/fashion-300x171.png",
      nama: "Fashion",
      deskripsi: "Template yang cocok untuk website dengan tema fashion.",
      demo: "https://okdihost.com",
      pilih: "https://youtube.com",
    },
    {
      id: 6,
      image: "https://bikin.website/wp-content/uploads/2019/07/lms-768x420.png",
      nama: "LMS",
      deskripsi:
        "Layout yang paling sesuai untuk website kursus berbagai bidang.",
      demo: "https://okdihost.com",
      pilih: "https://youtube.com",
    },
  ]);
  

  return (
    <div>
      <Container>
        <Row className="text-center mt-4">
          {produk.map((prd) => (
            <Col className="mt-3" key={prd.id}>
              <img src={prd.image} alt="" width={350} />
              <div style={{ padding: 20 }}>
                <h3>{prd.nama}</h3>
                <p>{prd.deskripsi}</p>
                <button type="button" className="bgi">
                  Demo
                </button>
                <button type="button" className="bgu">
                  Pilih
                </button>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CardCompA;
