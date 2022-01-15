import React, { useRef } from "react";
//import "./MovieForm.css";
import classes from "./Movie.module.css";
const MovieForm = (props) => {
  const titleRef = useRef();
  const releaseDateRef = useRef();
  const openingTextRef = useRef();

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
    const releaseDate = releaseDateRef.current.value;
    const openingText = openingTextRef.current.value;
    const addMovie = {
      title: title,
      releaseDate: releaseDate,
      openingText: openingText,
    };

    props.addMovieHandler(addMovie);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes.movieForm}>
        <label>
          <h4>Title</h4>
        </label>
        <input ref={titleRef} type="text"></input>
        <label>
          <h4>Opening Text</h4>
        </label>
        <textarea ref={openingTextRef} rows="4"></textarea>
        <label>
          <h4>ReleaseDate</h4>
        </label>
        <input ref={releaseDateRef} type="date"></input>
      </div>
      <button type="submit" className={classes.movie}>
        Add Movie
      </button>
    </form>
  );
};

export default MovieForm;
