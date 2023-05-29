import React, { useRef, Suspense, useEffect, useState } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'api/getMovies';

export default function MovieDetails() {
  const {id} = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');
  const [title, setTitle] = useState('');
  const [poster, setPoster] = useState('');
  const [overview, setOverview] = useState('');
  const [vote, setVote] = useState(null);
  const [genres, setGenres] = useState([]);
    const [release, setRelease] = useState(null);
    
    console.log(id)

  useEffect(() => {
    getMovieDetails(id).then(data => {
      if (data) {
        setTitle(data.title);
        setPoster(data.poster_path);
        setOverview(data.overview);
        setVote(data.vote_average);
        setGenres(data.genres);
        setRelease(data.release_date);
      }
    });
  }, [id]);

  return (
    <>
      <Link to={backLinkLocation.current}>Back</Link>
      <h2>
        {title} ({release?.slice(0, 4)})
      </h2>
      <img
        src={poster && `https://image.tmdb.org/t/p/w500/${poster}`}
        width="240"
        alt={title}
      />
      <p>
        User Score: {Math.round(vote * 10)}
        %
      </p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres.map(genre => genre.name).join(' ')}</p>
<p>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
