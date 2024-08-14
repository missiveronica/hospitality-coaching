import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function NavGrid() {
  return (
    <>
      <Navbar sticky="top" bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Hospitality Career Coaching</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About Us</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#bookNow">Book Now</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavGrid;