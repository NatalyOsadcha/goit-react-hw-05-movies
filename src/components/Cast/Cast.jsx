import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/getMovies';
import { List } from './Cast.styled';

export default function Cast() {
  const { id } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getMovieCast(id)
      .then(data => {
        if (data) {
          setCast(data.cast);
        }
      })
      .catch(error => {
        setError(error);
      });
  }, [id]);
  return (
    <div>
      {cast.length ? (
        <ul>
          {cast.map(({ id, name, character, profile_path }) => (
            <List key={id}>
              <img
                src={
                  profile_path &&
                  `https://image.tmdb.org/t/p/w500/${profile_path}`
                }
                alt={name}
                width="160"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </List>
          ))}
        </ul>
      ) : (
        <p>There is no information about cast</p>
      )}
      {error && <p>Oops, something goes wrong</p>}
    </div>
  );
}
