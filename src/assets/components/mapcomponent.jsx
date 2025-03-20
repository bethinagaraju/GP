import React from 'react'
import './mapcomponent.css'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

const MapComponent = () => {
    return (
        <div id='contact' className='map-div'>
            <div className='portfolio-top'>
        <p style={{ textAlign: 'left' }}>Contact</p>
        <hr style={{ border: 'none', height: '2px', backgroundColor: 'orange', margin: '0', width: '100%' }} />
        <h1 style={{paddingBottom: '60px'}}>Contact Us</h1>
        </div>
        <div style={{width: '80vw', height: '300px'}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5101903143145!2d78.45467345500964!3d17.4352784397254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9749b0000001%3A0x153f997154e24b5e!2sPranathi%20Software%20Services!5e0!3m2!1sen!2sin!4v1742449482799!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{border: 0}} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" />
        </div>

        {/* //FORM */}

        <Container style={{paddingTop: '20px', display: 'flex',justifyContent: 'center',  alignItems: 'center'}}>
  <Row className="g-0" style={{ width: '100%', paddingLeft: '25px' }}>
    {/* First Div with Card */}
    <Col xs={12} md={6}>
      <Card className="mb-3" style={{ maxWidth: '300px', border: 'none'}}>
        <Row className="g-0" style={{ maxWidth: '300px' }}>
          <Col md={1} style={{ marginRight: '20px' }}>
            <i className="bi bi-geo-alt flex-shrink-0" style={{ fontSize: '40px', color: 'orange' }}></i>
          </Col>
          <Col md={6} >
            <Card.Body>
              <Card.Title>Address</Card.Title>
              <Card.Text style={{ fontSize: '0.875rem' }}>
                A108 Adam Street, New York, NY 535022
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row className="g-0" style={{ maxWidth: '300px' }}>
          <Col md={1} style={{ marginRight: '20px' }}>
            <i className="bi bi-telephone flex-shrink-0" style={{ fontSize: '40px', color: 'orange' }}></i>
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title>Call Us</Card.Title>
              <Card.Text style={{ fontSize: '0.875rem' }}>
                A108 Adam Street, New York, NY 535022
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
        <Row className="g-0" style={{ maxWidth: '300px' }}>
          <Col md={1} style={{ marginRight: '20px' }}>
            <i className="bi bi-envelope flex-shrink-0" style={{ fontSize: '40px', color: 'orange' }}></i>
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>Email Us</Card.Title>
              <Card.Text style={{ fontSize: '0.875rem' }}>
                A108 Adam Street, New York, NY 535022
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
       
      </Card>
    </Col>

    {/* Second Div with Form */}
    <Col xs={12} md={6} style={{ paddingRight: '30px' }}>
      <Form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',  padding: '5px', borderRadius: '5px', width: '100%', height:'100%' }}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail" style={{width: '50%'}}>
            <Form.Control style={{width: '100%'}} type="text" placeholder="Your Name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword" style={{ width: '50%' }}>
       
            <Form.Control type="email" placeholder="Your Email" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Control placeholder="subject" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
        
          <Form.Control style={{height: '200px'}} placeholder="Message" />
        </Form.Group>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" style={{ backgroundColor: 'orange', border: 'none' }}>
            Submit
          </Button>
        </div>
      </Form>
    </Col>
  </Row>
</Container>


        </div>
    )
}

export default MapComponent


