import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByKeyWord } from 'api/getMovies';

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  useEffect(() => {
    if (query === '') {
      return;
    }
    getMovieByKeyWord(query).then(({ results }) => {
      if (results) {
        setMovies(results);
      }
    });
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    // if (form.elements.searchMovie.value = '') {
    //   return setSearchParams({});
    // } 
    setSearchParams({ query: form.elements.searchMovie.value });
    
    form.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="searchMovie" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
