import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//import React, { useState } from 'react'
import { useState } from 'react';
import axios from 'axios';
const CreateMovie = () => {

    //dos métodos una para inputs de tipo texto y otro para el input de tipo file
    /*Logica */
    const valorInicial = {
        movie_title: '',
        movie_genero: '',
        movie_director: '',
        movie_year: '2023',
        movie_category: '',
        movie_synopsis: '',
        imgMovie: ''
    }
    //Metodo Inputs text
    const [pelicula, setPelicula] = useState(valorInicial)
    //Metodo Inputs file
    const [file, setFile] = useState('');
    
    const setimgfile = (e) => {
        setFile(e.target.files[0])
      }
    const capturarDatos = (e) => {
        const { name, value } = e.target
        setPelicula({ ...pelicula, [name]: value })
    }

    const guardarDatos = async (e) => {
        e.preventDefault();

        //var formData = new FormData();
        //formData.append("imgMovie", file);
        //console.log(pelicula);
        //crear la peticion POT

        const formData = new FormData()
            formData.append('movie_title', pelicula.movie_title);
            formData.append('movie_genero', pelicula.movie_genero);
            formData.append('movie_director', pelicula.movie_director);
            formData.append('movie_year', pelicula.movie_year);
            formData.append('movie_category', pelicula.movie_category);
            formData.append('movie_synopsis', pelicula.movie_synopsis);
            formData.append('imgMovie', file);
        
        await axios.post('http://localhost:4000/social-movies', formData)

        setPelicula({ ...valorInicial })
        setFile({ ...valorInicial })
    }



    return (
        <div>
            {/*Formulario */}
            <Form onSubmit={guardarDatos}>
                <Form.Group className="mb-3">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Titulo de la pelicula"
                        required
                        name="movie_title"
                        value={pelicula.movie_title}
                        //Capturamos los datos
                        onChange={capturarDatos}

                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Genero</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Genero de la pelicula"
                        required
                        name="movie_genero"
                        value={pelicula.movie_genero}
                        onChange={capturarDatos}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Director</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Director de la pelicula"
                        required
                        name="movie_director"
                        value={pelicula.movie_director}
                        onChange={capturarDatos}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Año</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Año de la pelicula"
                        required
                        name="movie_year"
                        value={pelicula.movie_year}
                        onChange={capturarDatos}

                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Categoria de la pelicula"
                        required
                        name="movie_category"
                        value={pelicula.movie_category}
                        onChange={capturarDatos}

                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Sinopsis</Form.Label>
                    <Form.Control as="textarea" rows={3}
                        type="text"
                        placeholder=""
                        required
                        name="movie_synopsis"
                        value={pelicula.movie_synopsis}
                        onChange={capturarDatos}
                    />
                </Form.Group>

                <Form.Group controlId="formFileMultiple" className="mb-3">
                    <Form.Label>Subir imagen</Form.Label>
                    <Form.Control type="file"
                        required
                        name="imgMovie"
                        file={pelicula.imgMovie}
                        onChange={setimgfile}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Crear
                </Button>
            </Form>
        </div>

    )
}

export { CreateMovie }
