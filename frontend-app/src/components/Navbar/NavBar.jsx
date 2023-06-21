import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import './navbar.css'


export const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link ><Link to='/'>Home</Link></Nav.Link>
            <Nav.Link ><Link to='/Peliculas'>Peliculas</Link></Nav.Link>
            <Nav.Link ><Link to='/Team'>Nosotros</Link></Nav.Link>
          </Nav>
          <Nav>
            <Button variant="btn btn-danger navbar-button"><Link to="/Login">Iniciar Sesion</Link></Button>
            <Button variant="btn btn-danger navbar-button">Register</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
