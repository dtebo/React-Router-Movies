import React, { useState, useEffect } from 'react';
import {Route} from 'react-router-dom';

import axios from 'axios';

import MovieList from './Movies/MovieList';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <Route exact path="/" component={MovieList} />
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes</div>
    </div>
  );
};

export default App;
