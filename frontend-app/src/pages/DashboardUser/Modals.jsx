import Button from 'react-bootstrap/Button';
import { useState } from "react";
//import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { CreateMovie } from './CreateMovie';
import Card from 'react-bootstrap/Card';
const Modals = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            {/*Models */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className=''>Agregra pelicula</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateMovie />

                </Modal.Body>
                <Modal.Footer>
                    <h3>Gracias</h3>
                </Modal.Footer>
            </Modal>
            <div className='container mt-2'>
                <Card.Title className='text-center mt-4'>AGREGAR PELICULAS</Card.Title>
                <hr />
                <div className='text-end'>
                    <Button className='' variant="primary" onClick={handleShow}>
                        Agregar
                    </Button>
                </div>

            </div>
        </>

    );
}

export { Modals }
