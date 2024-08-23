import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavGrid() {
  return (
    <Navbar expand="lg" className="grid" sticky="top" data-bs-theme="light">
        <Container>
          <Navbar.Brand className='logo' href="#home">Hospitality Career Coaching</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <NavDropdown title="About Us" id="basic-nav-dropdown">
          <NavDropdown.Item href="#about">Who we are</NavDropdown.Item>
          <NavDropdown.Item href="#team">Our Team</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#services">Your Journey</Nav.Link>
          <Nav.Link href="#bookNow">Book Now</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavGrid;