import React, { useEffect, useState } from 'react';
import { getTrendingMovie } from 'api/getMovies';
import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const location = useLocation();

  useEffect(() => {
    getTrendingMovie()
      .then(({ results }) => {
        if (results) {
          setMovies(results);
        }
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      {error && <p>Oops, something goes wrong</p>}
    </>
  );
}
