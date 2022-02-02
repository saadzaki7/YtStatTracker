import React, {useEffect, useState} from "react";
import { Container } from 'semantic-ui-react';
import './App.css';
import { Movies } from './components/MovieForm';

function App() {
  const [movies, setMovies]=useState([]);

  useEffect (()=>{
    fetch('/movies').then(response => response.json().then(data => {
      setMovies(data.movies);
    }));
  }, [])

  console.log(movies)
  return (
    <div className="App">
      <Movies movies={movies}/>
    </div>
  );
}

export default App;
