/* eslint react/no-did-mount-set-state: 0 */
import React, { Component } from 'react';


// Pulls from Movie.js
import Movie from './Movie';

class MoviesList extends Component {
  // Sets state for movies prop
  state = {
    movies: [],
  }

  // Async await Life cycle method for fetching API post component mount
  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=092ce31322e8209f8d97d06a1dedf7d5&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  // JSX render method
  render() {
    return (
      <div className="App">
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default MoviesList;

