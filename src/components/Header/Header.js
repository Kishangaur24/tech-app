import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" >
      <Container>
        <Navbar.Brand to="/home">
            <img src='https://zeblearn.com/best-sap-training-in-india/assets/images/zeblearn_logo_new_02.jpg' height="45px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link   to="/certificate">SAP Certificate</Nav.Link>
          <Nav.Link   to="/certificate">News-Paper Recognition</Nav.Link>
          <Nav.Link   to="/certificate">Registration</Nav.Link>
          <Nav.Link   to="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;