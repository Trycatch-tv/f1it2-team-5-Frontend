import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const NavbarUser = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Pelicula
                    </Navbar.Brand>

                    <Row>
                        <Col><Button variant="outline-warning" href="/Team">Team</Button></Col>
                        <Col><Button variant="outline-primary" href="/">Inicio</Button></Col>
                    </Row>
                </Container>

            </Navbar>

        </div>
    )
}

export {
    NavbarUser
}