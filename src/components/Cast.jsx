import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/getMovies';

export default function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getMovieCast(id).then(data => {
      if (data) {
        setCast(data.cast);
      }
    });
  }, [id]);
  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => (
        <li key={id}>
          {name}
          <img
            src={
              profile_path && `https://image.tmdb.org/t/p/w500/${profile_path}`
            }
            alt={name}
            width="160"
          />
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
}
