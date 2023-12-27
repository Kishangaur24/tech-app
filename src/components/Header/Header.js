import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import style from "./Header.module.css"
function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" >
      <Container>
        <Navbar.Brand to="/home">
            <img className={style.logo} src='https://zeblearn.com/best-sap-training-in-india/assets/images/zeblearn_logo_new_02.jpg' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
          <Nav.Link as={NavLink}  to="/">SAP Certificate</Nav.Link>
          <Nav.Link as={NavLink}  to="/">News-Paper Recognition</Nav.Link>
          <Nav.Link as={NavLink}  to="/">Registration</Nav.Link>
          <Nav.Link as={NavLink}  to="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;