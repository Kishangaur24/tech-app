import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import style from "./Header.module.css"
import logo from "../../assets/zeblearn_logo_new_02.png"
function BasicExample() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" >
      <Container>
        <Navbar.Brand to="/home">
            <img className={style.logo} src={logo} alt='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
          <Nav.Link as={NavLink}  to="/faq">SAP Certificate Path</Nav.Link>
          <Nav.Link as={NavLink}  to="/upcomingWebinar">Upcoming Webinar</Nav.Link>
          <Nav.Link as={NavLink}  to="/registration">Register now</Nav.Link>
          <Nav.Link as={NavLink}  to="/success">Success Stories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;