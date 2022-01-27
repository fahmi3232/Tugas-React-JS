import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className="ft py-5">
            <Container className="mt-3">
                <Row>
                    <Col md={4} className="mb-3">
                        <h3>BIODATA SINGKAT</h3>
                        <p>Nama saya Fahmi Oktafian, asal dari madiun Jawa Timur. Harapan saya setelah belajar di Eduwork, saya bisa menguasai bahasa pemrograman website dan menjadi seorang Web Developer.</p>
                    </Col>
                    <Col>
                        <h3>TENTANG</h3>
                        <ul>
                            <li><a href="#">Social Media</a></li>
                            <li><a href="#">Address</a></li>
                            <li><a href="#">Email</a></li>
                            <li><a href="#">No. Telp</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Info Bisnis</h3>
                        <ul>
                            <li><a href="#">Sewa Hosting</a></li>
                            <li><a href="#">Jasa Website</a></li>
                            <li><a href="#">Produk Digital</a></li>
                        </ul>
                    </Col>
                    <Col>
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">Google Maps</a></li>
                            <li><a href="#">Address</a></li>
                            <li><a href="#">City</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
            {/* <p>Copyright @2020, Portfolio All Right Reserved.</p> */}
        </div>
    )
}

export default Footer
