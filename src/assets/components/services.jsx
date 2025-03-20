import React from 'react'
import './Services.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Services = () => {
  return (
    <div className='service' id='services' >
      <p>Services</p><hr style={{ border: 'none', height: '2px', backgroundColor: 'orange', margin: '0px 0' }} />

      <h1 style={{paddingBottom: '60px'}}>CHECK OUR SERVICES</h1>

      {/* ///////////////// */}



      <Row xs={1} md={2} lg={3} className="g-4"> 
          <Col>
            <Card style={{ width: '420px', height: '360px', backgroundColor: 'black', color: 'white' }}>
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              
              <div className="icon icono">
      <i className="bi bi-activity" style={{ fontSize: '30px' }}></i>
    </div>

                <Card.Title style={{ textAlign: 'center', margin: '10px 0 0 0' }}>
                Nesciunt Mete</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '420px', height: '360px', backgroundColor: 'black', color: 'white' }}>
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

              <div className="icon icono">
      <i className="bi bi-broadcast" style={{ fontSize: '30px' }}></i>
    </div>

           
                <Card.Title style={{ textAlign: 'center', margin: '10px 0 0 0' }}>Eosle Commodi</Card.Title>

                <Card.Text style={{ textAlign: 'center' }}>
                Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: '420px', height: '360px', backgroundColor: 'black', color: 'white' }}>
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className='icon icono'>
              <i className="bi bi-easel" style={{ fontSize: '30px' }}></i>
              </div>
                <Card.Title style={{ textAlign: 'center', margin: '10px 0 0 0' }}>Ledo Markt</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '420px', height: '360px', backgroundColor: 'black', color: 'white' }}>
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div className='icon icono'>
                <i className="bi bi-bounding-box-circles" style={{ fontSize: '30px' }}></i>
                </div>
             
                
                <Card.Title style={{ textAlign: 'center', margin: '10px 0 0 0' }}>Asperiores Commodit</Card.Title>
                <Card.Text style={{ textAlign: 'center' }}>
                Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '420px', height: '360px', backgroundColor: 'black', color: 'white' }}>
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div className='icon icono'>

              <i className="bi bi-calendar4-week" style={{ fontSize: '30px' }}></i>
            
              </div>
                <Card.Title style={{ textAlign: 'center', margin: '10px 0 0 0' }}>Velit Doloremque</Card.Title>
                <Card.Text style={{ textAlign: 'center', margin: '0' }}>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          
          <Col>
            <Card style={{ width: '420px', height: '360px', backgroundColor: 'black', color: 'white' }}>
              <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <div className='icon icono'>
              <i className="bi bi-chat-square-text" style={{ fontSize: '30px' }}></i>
              </div>
                <Card.Title style={{ textAlign: 'center', margin: '10px 0 0 0' }}>Nemos</Card.Title>
                <Card.Text style={{ textAlign: 'center', margin: '0' }}>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>






    </div>
  )
}


export default Services
