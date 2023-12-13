import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';
const MovieCard = ({movie}) => {
  return (
    <div className='info' style={{  display:"flex",flexDirection:"row", width:"100%" } }>
      <Card style={{ width: '18rem', borderRadius:"4px",border:"black solid 4px" } }>
      <Card.Img variant="top" src={movie.posteUrl} />
      <Card.Body>
          <Card.Title>{movie.title }</Card.Title>
        <Card.Text>
            {movie.description}
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rating}
            
        />
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MovieCard