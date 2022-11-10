import React, { useEffect, useState } from "react";

const ApiWithFetch = ()=> {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=ef1d1c7c&s=Avatar")
      .then(res => res.json())
      .then(res => setMovies(res.Search))
      .catch(err => console.log(err));
  }, []);

  // console.log(movies[0]);

  return (
    <>
      <h3>Here are some movies!</h3>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>
            {movie.Title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ApiWithFetch