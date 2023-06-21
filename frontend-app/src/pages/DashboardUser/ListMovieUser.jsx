import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
const ListMovieUser = () => {
    const [lista, setLista] = useState([]);
    const [file, setFile] = useState([]);

    useEffect(() => {
        const getPelicula = async () => {
            const res = await axios.get('http://localhost:4000/social-movies')
            setLista(res.data)
            setFile(res.data)
        }
        getPelicula();
    }, [lista, file])

    const eliminarPelicula = async (id) => {
        await axios.delete('http://localhost:4000/social-movies/' + id)
    }

    return (

        <div className='row'>
            {


                lista.map(list => (

                    <div className='col-md-4 p-5' key={list.id}>
                        <Card className=''>
                            <Card.Header>
                                <Card.Title className='text-center'> {list.movie_title}</Card.Title>
                            </Card.Header>
                            <Card.Img variant="top" src={list.imgMovie} />
                            <hr />
                            <Card.Body>
                                <Card.Text>Genero: {list.movie_genero}</Card.Text>
                                <Card.Text>Director: {list.movie_director}</Card.Text>
                                <Card.Text>Año: {list.movie_year}</Card.Text>
                                <Card.Text>Categoria: {list.movie_category}</Card.Text>
                                <hr />
                                <Card.Title className='text-center'> Sinopsis:</Card.Title>
                                <Card.Text> {list.movie_synopsis}</Card.Text>

                                { /*<p>Imagen:{list.imgMovie} </p>*/}

                            </Card.Body>
                            <Card.Footer>
                                <Container >
                                    <Row>
                                        <Col><Button variant="danger" onClick={() => eliminarPelicula(list._id)}>Eliminar</Button></Col>
                                        <Col><Button variant="primary" onClick={() => eliminarPelicula(list._id)}>Editar</Button></Col>
                                    </Row>
                                </Container>
                            </Card.Footer>
                        </Card>
                    </div>
                ))
            }
        </div>
    )
}

export { ListMovieUser }
