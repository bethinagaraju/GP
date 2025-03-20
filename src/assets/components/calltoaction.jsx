import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CallToAction = () => {
  return (
    <>
      <Card className="text-center d-flex flex-column justify-content-center align-items-center" style={{ height: '30vh', border: 'none', backgroundColor: 'transparent', transform: 'none' }}>
      
        <Card.Body className='d-flex flex-column justify-content-center align-items-center text-white' style={{width: '70%'}}>
          <Card.Title>Call To Action</Card.Title>
          <Card.Text>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Card.Text>
          <Button id='call-to-action-button' style={{backgroundColor: 'transparent', borderColor: 'white'}}>Call To Action</Button>
        </Card.Body>
      </Card>

    </>
  );
};

export default CallToAction;

