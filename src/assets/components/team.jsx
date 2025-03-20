import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './team.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function team() {
  return (
    <section id='team'>
    <div className='team-div'>
        <div className='portfolio-top'>
        <p style={{ textAlign: 'left' }}>Team</p>
        <hr style={{ border: 'none', height: '2px', backgroundColor: 'orange', margin: '0', width: '100%' }} />
        <h1 style={{paddingBottom: '60px'}}>OUR TEAM</h1>
        </div>
    <Container style={{width: "100%"}}>
      <Row className="g-4">
        <Col xs={6} md={3}>
        <Card style={{ width: '18rem', border: 'none', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' }}>
      <Card.Img variant="top" src="https://bootstrapmade.com/content/demo/Gp/assets/img/team/team-1.jpg" />
      <Card.Body>
        <Card.Title>Walter White</Card.Title>
        <Card.Text>
          <span>Chief Executive Officer</span>
        </Card.Text>
     
      </Card.Body>
    </Card>
        </Col>


        <Col xs={6} md={3}>
        <Card style={{ width: '18rem', border: 'none', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' }}>
      <Card.Img variant="top" src="https://bootstrapmade.com/content/demo/Gp/assets/img/team/team-2.jpg" />
      <Card.Body>
        <Card.Title>Sarah Jhonson</Card.Title>
        <Card.Text>
          <span>Chief Executive Officer</span>
        </Card.Text>
     
      </Card.Body>
    </Card>
        </Col>


        <Col xs={6} md={3}>
        <Card style={{ width: '18rem', border: 'none', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' }}>
      <Card.Img variant="top" src="https://bootstrapmade.com/content/demo/Gp/assets/img/team/team-3.jpg" />
      <Card.Body>
        <Card.Title>William Anderson</Card.Title>
        <Card.Text>
          <span>CTO</span>
        </Card.Text>
     
      </Card.Body>
    </Card>
        </Col>


        <Col xs={6} md={3}>
        <Card style={{ width: '18rem', border: 'none', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)' }}>
      <Card.Img variant="top" src="https://bootstrapmade.com/content/demo/Gp/assets/img/team/team-4.jpg" />
      <Card.Body>
        <Card.Title>Amanda Jepson</Card.Title>
        <Card.Text>
          <span>Accountant</span>
        </Card.Text>
     
      </Card.Body>
    </Card>
        </Col>

      </Row>
    </Container>
    </div>
    </section>
  );
}

export default team;

