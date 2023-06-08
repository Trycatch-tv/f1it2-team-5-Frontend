import {movies} from '../../content/getMovies';
import Carousel from 'react-bootstrap/Carousel';
export const Carrousel = () => {
  const path = 'https://image.tmdb.org/t/p/original';
  const numberOfMoviesToShow = 4;
  return (
    <Carousel>
      {movies.results.slice(0, numberOfMoviesToShow).map((movie, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={`${path}${movie.backdrop_path}`}
            alt={movie.title}
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
            <button type="button" className="btn btn-danger btn__info">More Info</button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
