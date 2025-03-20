import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css'

const NavbarComponent = () => {
  return (
    <>  
   
    <Navbar expand="lg" style={{ position: 'sticky', top: 0, zIndex: 2500, width: "100vw", backgroundColor: "rgba(0, 0, 0, 0.5)", height: "10vh" }}>
      <Container>
        <Navbar.Brand href="#home" style={{ marginRight: 'max(10px, 20vw)', color: "white" }}>
          <h1>GP<span style={{color: "orange"}}>.</span></h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <NavDropdown title={<span style={{color: "white"}}>Dropdown</span>} id="basic-nav-dropdown" style={{ marginRight: 'max(10px, 20vw)' }}>
              
              <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" >
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" >Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" >
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
           
            <button onClick={() => {window.location.href = "#about"}} style={{border: "2px solid orange", borderRadius: "10px", backgroundColor: "transparent", color: "white", width: "150px"}}>Get Started</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
};

export default NavbarComponent;

