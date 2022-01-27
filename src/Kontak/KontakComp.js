import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SubKontakComp from './SubKontakComp';

function KontakComp() {
    const [laptop, setLaptop] = useState([
        {id: 1, image: "https://www.pngitem.com/pimgs/m/247-2475863_acer-laptop-png-transparent-png.png", nama: "Acer", spek: "Core i3", harga: "Rp. 2.500.000"},
        {id: 2, image: "https://www.seekpng.com/png/detail/45-453265_laptop-png-transparent-asus-ux303la.png", nama: "Asus", spek: "Dual core", harga: "Rp. 2.000.000"},
        {id: 3, image: "https://www.pngitem.com/pimgs/m/45-452509_hp-laptop-png-transparent-image-hp-spectre-x360.png", nama: "HP", spek: "Core i5", harga: "Rp. 3.500.000"},
        {id: 4, image: "https://m.media-amazon.com/images/I/814PRurUfIS._AC_SY450_.jpg", nama: "Lenovo", spek: "Core i5", harga: "Rp. 3.000.000"},
        {id: 5, image: "https://i.expansys.net/img/p/321529/acer-notebook-aspire-7.jpg", nama: "Acer", spek: "Core i7", harga: "Rp. 4.500.000"},
        {id: 6, image: "https://i.expansys.net/img/p/321529/acer-notebook-aspire-7.jpg", nama: "Acer", spek: "Core i7", harga: "Rp. 4.500.000"}
    ])

    const [nama, setNama] = useState([
        {id: 1, nama: "Fahmi", umur: 25, alamat: "Madiun"},
        {id: 2, nama: "Agus", umur: 35, alamat: "Nganjuk"},
        {id: 3, nama: "Doni", umur: 21, alamat: "Lampung"}
    ])

    const handleDelete = (id) => {
        const filteredLaptop = laptop.filter((lapt) => lapt.id !== id)
        setLaptop(filteredLaptop)
    }

    const handleHapus = (id) => {
        const filterNama = nama.filter((nam) => nam.id !== id)
        setNama(filterNama)
    }
  return (

      <div>
          <Container className="mt-5 pt-5">
              <Row>
                  <Col>
                    <h3>Ini adalah list harga laptop</h3>
                  </Col>
              </Row>
          </Container>
          <SubKontakComp laptop={laptop} onDelete={handleDelete} nama={nama} onHapus={handleHapus}/>
      </div>
  ) 
}

export default KontakComp;
