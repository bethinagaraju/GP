import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { X, EnvelopeAt, Telephone } from 'react-bootstrap-icons'; // Import icons from react-bootstrap-icons

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#111', color: '#fff', padding: '40px 0' }}>
      <Container>
        <Row>
          <Col md={3}>
            <h4>GP</h4>
            <p>A108 Adam Street<br />New York, NY 535022</p>
            <p>
              <strong>Phone:</strong> +1 5589 55488 55 <Telephone style={{ marginBottom: '2px' }} /> <br />
              <strong>Email:</strong> info@example.com <EnvelopeAt style={{ marginBottom: '2px' }} />
            </p>
            <div style={{ fontSize: '1.5rem' }}>
              <a href="#" style={{ color: '#fff', margin: '0 10px' }}><FaTwitter /></a>
              <a href="#" style={{ color: '#fff', margin: '0 10px' }}><FaFacebook /></a>
              <a href="#" style={{ color: '#fff', margin: '0 10px' }}><FaInstagram /></a>
              <a href="#" style={{ color: '#fff', margin: '0 10px' }}><FaLinkedin /></a>
              <a href="#" style={{ color: '#fff', margin: '0 10px' }}><X /></a>
            </div>
          </Col>
          <Col md={3}>
            <h4>Useful Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>&gt; Home</a></li>
              <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>&gt; About us</a></li>
              <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>&gt; Services</a></li>
              <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>&gt; Terms of service</a></li>
              <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>&gt; Privacy policy</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h4>Our Services</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>&gt; Web Design</a></li>
              <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>&gt; Web Development</a></li>
              <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>&gt; Product Management</a></li>
              <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>&gt; Marketing</a></li>
              <li><a href="#" style={{ color: '#ccc', textDecoration: 'none' }}>&gt; Graphic Design</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h4>Our Newsletter</h4>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
            <Form>
              <Form.Group>
                <Form.Control type="email" placeholder="" style={{ backgroundColor: '#333', borderColor: '#555', color: '#fff' }} />
              </Form.Group>
              <Button variant="warning" type="submit" style={{ marginTop: '10px' }}>Subscribe</Button>
            </Form>
          </Col>
        </Row>
        <hr style={{ borderColor: '#333', marginTop: '30px' }} />
        <Row className="text-center">
          <Col>
            <p>&copy; Copyright <strong>GP</strong>. All Rights Reserved<br />Designed by <a href="#" style={{ color: '#fff' }}>BootstrapMade</a></p>
          </Col>
        </Row>
        <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
          <a href="#" style={{ backgroundColor: '#f0ad4e', color: '#fff', padding: '10px', borderRadius: '5px' }}>
            <FaArrowUp />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;