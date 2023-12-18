import {  useState } from 'react';
import MovieList from './MovieList';
import { v4 as uuidv4 } from 'uuid';
import AddMovie from './AddMovie';
import Filter from './Filter';
import './App.css';
import {Routes, Route, Link, useNavigate } from "react-router-dom";
import Description from './Description';
function App() {
  const [movies, setMovies] = useState([{
        id:uuidv4(),
        title: "mission impossible 1",
        description:"action movie",
        rating:5,
        posteUrl:"https://cdn.lesnumeriques.com/optim/product/73/73651/c7b8c45c-mission-impossible-dead-reckoning-partie-1__1200_675__2-0-1085-610.jpg",
        Trailers: "https://www.youtube.com/embed/Ohws8y572KE?si=3u3BB18-bLiMJXoH"
            }, {
        id:uuidv4(),
        title: "mission impossible 2",
        description:"action movie",
        rating:2.3,
        posteUrl:"https://cdn.lesnumeriques.com/optim/product/73/73651/c7b8c45c-mission-impossible-dead-reckoning-partie-1__1200_675__2-0-1085-610.jpg",
        Trailers:"https://www.youtube.com/embed/HwXbmwTvoT4?si=hm9HkEUwAmXnw9PT" 
      }]);
    const [rate,setRate]=useState(0);
    const [title,setTitle]=useState("");
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={
      <div>
      <AddMovie setMovies={setMovies} movies={movies} />
      <Filter rate={rate} setRate={setRate} setTitle={setTitle} />
      <MovieList  movies={movies.filter((movie)=>movie.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())&& movie.rating>=rate)}/> 
      </div>}/>
      <Route path="/Movies/:description" element={<Description  movies={movies}/>}/>
      
      </Routes>
 

      
    </div>
  );
}

export default App;