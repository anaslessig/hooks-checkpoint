import MovieCard from './MovieCard';
import MovieList from './MovieList';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Filter from './Filter';
import { useState } from 'react';
import AddMovie from './AddMovie';

function App() {
  const [movies, setMovies] = useState([{
        id:uuidv4(),
        title: "mission impossible 1",
        description:"action movie",
        rating:5,
        posteUrl:"https://cdn.lesnumeriques.com/optim/product/73/73651/c7b8c45c-mission-impossible-dead-reckoning-partie-1__1200_675__2-0-1085-610.jpg"
  }, {
        id:uuidv4(),
        title: "mission impossible 2",
        description:"action movie",
        rating:2.3,
        posteUrl:"https://cdn.lesnumeriques.com/optim/product/73/73651/c7b8c45c-mission-impossible-dead-reckoning-partie-1__1200_675__2-0-1085-610.jpg"
    }]);
  const [rateFilter, setRateFilter] = useState(0);
  const [titleFilter, setTitleFilter] = useState("");
  return (
    <div className="App">
      <AddMovie setMovies={setMovies} movies={movies} />
      <Filter rateFilter={rateFilter } setRateFilter={setRateFilter} setTitleFilter={setTitleFilter} />
      <MovieList movies={movies.filter((movie, i)=>movie.title.toLowerCase().trim().includes(titleFilter.toLowerCase().trim())&& movie.rating>rateFilter)} /> 
      
      
    </div>
  );
}

export default App;