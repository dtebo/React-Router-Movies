import React from 'react';

import { Link, NavLink } from "react-router-dom";

const SavedList = props => (
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <NavLink to={`/movies/${movie.id}`} activeClassName="saved-active">
        <span key={movie.id} className="saved-movie">{movie.title}</span>
      </NavLink>
    ))}
    <div className="home-button">
      <Link to="/">Home</Link>
    </div>
  </div>
);

export default SavedList;
