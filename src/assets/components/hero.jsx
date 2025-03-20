import React from "react";
import "./hero.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap-icons/font/bootstrap-icons.css'

const Hero = () => {
  return (


    <div className="hero-container">
      
      <Container id="home-section" className="my-auto">
        <h1 style={{ textAlign: "center", fontSize: "5vw" }}>
        Powerful Digital
      </h1>
      <h1 style={{ textAlign: "center", fontSize: "5vw" }}>
      Solutions With GP<span style={{color: 'orange'}}>.</span>
      </h1>
       
        <h4 style={{ textAlign: "center" }}>We are team of talented digital marketers</h4>
        <br></br>
        <Row xs={2} md={3} lg={5} className="g-4"> 
          <Col>
            <Card style={{ width: '156px', height: '166px', backgroundColor: 'black', color: 'white' }}>
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <i className="bi bi-binoculars" style={{ fontSize: '2rem', color: 'orange', display: 'block', margin: '0 auto', width: '100%', textAlign: 'center' }}></i>
                <Card.Title style={{ textAlign: 'center', margin: '10px 0 0 0' }}>Lorem Ipsum</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '156px', height: '166px', backgroundColor: 'black', color: 'white' }}>
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <i className="bi bi-bullseye" style={{ fontSize: '2rem', color: 'orange', display: 'block', margin: '0 auto', width: '100%', textAlign: 'center' }}></i>
                <Card.Title style={{ textAlign: 'center', margin: '10px 0 0 0' }}>Dolor Sitema</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '156px', height: '166px', backgroundColor: 'black', color: 'white' }}>
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <i className="bi bi-fullscreen-exit" style={{ fontSize: '2rem', color: 'orange', display: 'block', margin: '0 auto', width: '100%', textAlign: 'center' }}></i>
                <Card.Title style={{ textAlign: 'center', margin: '10px 0 0 0' }}>Sedare Perspiciatis</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '156px', height: '166px', backgroundColor: 'black', color: 'white' }}>
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <i className="bi bi-card-list" style={{ fontSize: '2rem', color: 'orange', display: 'block', margin: '0 auto', width: '100%', textAlign: 'center' }}></i>
                <Card.Title style={{ textAlign: 'center', margin: '10px 0 0 0' }}>Magni Dolores</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '156px', height: '166px', backgroundColor: 'black', color: 'white' }}>
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <i className="bi bi-gem" style={{ fontSize: '2rem', color: 'orange', display: 'block', margin: '0 auto', width: '100%', textAlign: 'center' }}></i>
                <Card.Title style={{ textAlign: 'center', margin: '10px 0 0 0' }}>Nemos</Card.Title>
                <Card.Text style={{ textAlign: 'center', margin: '0' }}>Enimade</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;

