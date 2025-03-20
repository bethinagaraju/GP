import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './feature.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

Aos.init({
  duration: 1000,
  easing: 'ease-in-out',
  once: true,
  mirror: false
});

const Feature = () => {
  return (
    <>
        
        <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4" style={{ flexDirection: 'row-reverse' }}>
          <div className="col-lg-6 order-1 order-lg-2">
            <img src="https://bootstrapmade.com/content/demo/Gp/assets/img/features-bg.jpg" className="img-fluid" alt="FEATURE" />
          </div>
          <div className="col-lg-6 order-2 order-lg-1 content" data-aos="zoom-in">
          <Card className="mb-3" style={{ maxWidth: '540px', border:'none' }}>
      <Row className="g-0">
        <Col md={1}>
            <i className="bi bi-archive flex-shrink-0 me-3 icon" style={{ fontSize: '48px', color:'orange' }}></i>
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title data-aos="fade-right">Aut occaecati</Card.Title>
            <Card.Text data-aos="fade-right">
            Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>

      <Row className="g-0">
        <Col md={1}>
            <i className="bi bi-basket flex-shrink-0" style={{ fontSize: '48px', color:'orange' }} data-aos="flip-left"></i>
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title data-aos="fade-right">Harum esse qui</Card.Title>
            <Card.Text data-aos="fade-right">
            Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>

      <Row className="g-0">
        <Col md={1}>
            <i className="bi bi-broadcast flex-shrink-0 me-3 icon" style={{ fontSize: '48px', color:'orange' }} data-aos="zoom-in"></i>
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title data-aos="fade-right">Est labore ad</Card.Title>
            <Card.Text data-aos="fade-right">
            Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>

      <Row className="g-0">
        <Col md={1}>
            <i className="bi bi-camera-reels flex-shrink-0" style={{ fontSize: '48px', color:'orange' }} data-aos="flip-right"></i>
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title data-aos="fade-right">Est labore ad</Card.Title>
            <Card.Text data-aos="fade-right">
            Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>

    </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feature

