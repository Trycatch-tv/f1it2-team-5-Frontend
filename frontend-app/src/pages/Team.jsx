
import { NavBar } from '../components';
//import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FaGithub, FaLinkedin, FaDiscord,  FaMapMarkedAlt, FaPhoneVolume } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
//import Image from 'react-bootstrap/Image';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'


import "./team.css";
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Oswald:wght@200;500&family=Playfair+Display:ital,wght@1,600&family=Quicksand:wght@300;500;700&family=Rajdhani:wght@300&display=swap" rel="stylesheet"></link>



function Team() {


    return (
        <div >
            <NavBar />
            <Container>
                <div className='p-4'>
                    <h2 className=''>EQUIPO DE TRABAJO</h2>
                    <hr></hr>
                </div>
                <Row>
                    <Col>
                    <div className="cards" >
                            <div className="head">
                                <div className="image">
                                    <img src="https://cdn.icon-icons.com/icons2/624/PNG/512/User-80_icon-icons.com_57249.png" alt="..." />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Jorge Andres Rueda Marin</h5>
                                <p className="card-text">  Lead developer - Front end Developer </p>
                            </div>
                            {
                                /* Etiquetas */
                            }
                            <Tabs
                                defaultActiveKey="home"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="Redes">
                                    <div>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto"> <h1> <FaGithub /> </h1></Col>
                                            <Col md="auto"><h1><FaLinkedin /></h1></Col>
                                            <Col md="auto"><h1><FaDiscord /></h1></Col>
                                        </Row>
                                    </div>
                                </Tab>
                                <Tab  eventKey="contact" title="Contacto"  >
                                    <div >
                                        <Row className="justify-content-md-center">
                                            <Col md="auto"> <h6><FiMail /> 10jorgeruedamarin@gmail.com </h6> </Col>
                                        </Row>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto">  <h6><FaMapMarkedAlt /> Colombia</h6> </Col>
                                        </Row>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto">  <h6><FaPhoneVolume /> 3034534567</h6> </Col>
                                        </Row>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                    <Col>
                    <div className="cards" >
                            <div className="head">
                                <div className="image">
                                    <img src="https://cdn.icon-icons.com/icons2/624/PNG/512/User-80_icon-icons.com_57249.png" alt="..." />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Marlon Antonio Gualteros P.</h5>
                                <p className="card-text">Full-Stack</p>
                            </div>
                            {
                                /* Etiquetas */
                            }
                            <Tabs
                                defaultActiveKey="home"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="Redes">
                                    <div>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto"> <h1> <FaGithub /> </h1></Col>
                                            <Col md="auto"><h1><FaLinkedin /></h1></Col>
                                            <Col md="auto"><h1><FaDiscord /></h1></Col>
                                        </Row>
                                    </div>
                                </Tab>
                                <Tab eventKey="contact" title="Contacto">
                                    <div >
                                        <Row className="justify-content-md-center">
                                            <Col md="auto"> <h6><FiMail /> marlon.agualteros@gmail.com </h6> </Col>
                                        </Row>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto">  <h6><FaMapMarkedAlt /> Colombia</h6> </Col>
                                        </Row>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto">  <h6><FaPhoneVolume /> 3034534567</h6> </Col>
                                        </Row>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                    <Col>
                    <div className="cards" >
                            <div className="head">
                                <div className="image">
                                    <img src="https://cdn.icon-icons.com/icons2/624/PNG/512/User-80_icon-icons.com_57249.png" alt="..." />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Sebastian Muñoz </h5>
                                <p className="card-text">Front end Developer</p>
                            </div>
                            {
                                /* Etiquetas */
                            }
                            <Tabs
                                defaultActiveKey="home"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="Redes">
                                    <div>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto"> <h1> <FaGithub /> </h1></Col>
                                            <Col md="auto"><h1><FaLinkedin /></h1></Col>
                                            <Col md="auto"><h1><FaDiscord /></h1></Col>
                                        </Row>
                                    </div>
                                </Tab>
                                <Tab eventKey="contact" title="Contacto">
                                    <div >
                                        <Row className="justify-content-md-center">
                                            <Col md="auto"> <h6><FiMail /> munozfajardosebastian@gmail.com </h6> </Col>
                                        </Row>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto">  <h6><FaMapMarkedAlt /> Colombia</h6> </Col>
                                        </Row>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto">  <h6><FaPhoneVolume /> 3034534567</h6> </Col>
                                        </Row>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                    <Col>
                    <div className="cards" >
                            <div className="head">
                                <div className="image">
                                    <img src="https://cdn.icon-icons.com/icons2/624/PNG/512/User-80_icon-icons.com_57249.png" alt="..." />
                                </div>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Luis Andres Quesada Rodriguez </h5>
                                <p className="card-text">Full-Stack</p>
                            </div>
                            {
                                /* Etiquetas */
                            }
                            <Tabs
                                defaultActiveKey="home"
                                transition={false}
                                id="noanim-tab-example"
                                className="mb-3"
                            >
                                <Tab eventKey="home" title="Redes">
                                    <div>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto"> <h1> <FaGithub /> </h1></Col>
                                            <Col md="auto"><h1><FaLinkedin /></h1></Col>
                                            <Col md="auto"><h1><FaDiscord /></h1></Col>
                                        </Row>
                                    </div>
                                </Tab>
                                <Tab eventKey="contact" title="Contacto">
                                    <div >
                                        <Row className="justify-content-md-center">
                                            <Col md="auto"> <h6><FiMail /> luisdevcol@gmail.com </h6> </Col>
                                        </Row>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto">  <h6><FaMapMarkedAlt /> Colombia</h6> </Col>
                                        </Row>
                                        <Row className="justify-content-md-center">
                                            <Col md="auto">  <h6><FaPhoneVolume /> 3034534567</h6> </Col>
                                        </Row>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                </Row>
            </Container>

  
        </div>

    );
}

export { Team };