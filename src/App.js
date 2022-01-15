import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";
import MovieForm from "./components/MovieForm";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  // const fetchMovieHandler = () => {
  //   fetch("https://swapi.dev/api/films")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const movie = data.results.map((movieData) => {
  //         return {
  //           id: movieData.episode_id,
  //           title: movieData.title,
  //           openingText: movieData.opening_crawl,
  //           releaseDate: movieData.releaseDate,
  //         };
  //       });
  //       setMovies(movie);
  //     });
  // };
  async function fetchMovieHandler() {
    setisLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/film", {
        //method: "POST",
        // body: JSON.stringify(movie),
        // headers: {
        //   "Content-Type": "application/json",
        // },
      });
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      const data = await response.json();
      const Movie = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.releaseDate,
        };
      });
      setMovies(Movie);
    } catch (error) {
      setError(error.message);
    }
    setisLoading(false);
  }

  const postMovie = (movie) => {
    console.log(movie);
  };

  return (
    <React.Fragment>
      <section>
        <MovieForm addMovieHandler={postMovie} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {isLoading && <p>Loading...</p>}
        {!isLoading && movies.length === 0 && !error && <p>No Movies Found</p>}
        {!isLoading && movies.length === 0 && error && <p>{error}</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
