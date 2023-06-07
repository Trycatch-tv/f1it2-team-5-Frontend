import {movies} from '../../content/getMovies';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cards.css'

export const Cards = () => {
//TODO: ADD Spiner
let movie = movies.results
const path = 'https://image.tmdb.org/t/p/original';
const numberOfCardsView = 8;
  return (
    <div className='movie-list'>
        {
        movie.slice(0,numberOfCardsView).map((moObj,i)=>(
        <Card key={i} style={{ width: '18rem', margin:'1rem' }}>
            <Card.Img variant="top" src={`${path}${moObj.backdrop_path}`} />
            <Card.Body>
              <Card.Title>{moObj.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the cards content.
              </Card.Text>
              <Button variant="primary">Ver mas</Button>
            </Card.Body>
          </Card>)
            )
        }
    </div>
  )
}
