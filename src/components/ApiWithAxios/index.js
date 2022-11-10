import React, { useState, useEffect } from "react";
import apiAxios from "./CustomInstance";

function ApiWithAxios(){
  const [films, setFilms] = useState([]);

  useEffect(()=> {
    apiAxios.get("")
    .then(res => setFilms(res.data.Search))
  },[]);

  console.log(films);

  return (
    <>
    <h3>Here are some films!</h3>
    <ul>
      {films.map(film => (
        <li key={film.imdbID}>
          {film.Title}
        </li>
      ))}
    </ul>
    </>
  )
}

export default ApiWithAxios