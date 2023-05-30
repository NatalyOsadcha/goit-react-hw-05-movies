import React, { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMovieByKeyWord } from 'api/getMovies';
import { Container, Input } from 'components/Movies/Movies.styled';

export default function Movies() {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (query === null || query === '') {
      return;
    }
    getMovieByKeyWord(query)
      .then(({ results }) => {
        if (results) {
          setMovies(results);
        }
      })
      .catch(error => {
        setError(error);
      });
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    form.elements.searchMovie.value.trim()
      ? setSearchParams({ query: form.elements.searchMovie.value.trim() })
      : setSearchParams({});

    form.reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="searchMovie" />
        <button type="submit">Search</button>
      </form>
      {movies && movies.length === 0 && <p>Nothing found for your request</p>}
      <ul>
        {movies &&
          movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
      {error && <p>Oops, something goes wrong</p>}
    </Container>
  );
}
