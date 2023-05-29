import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/getMovies';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(id).then(data => {
      if (!data) {
        return
      }
      setReviews(data.results);
    });
  }, [id]);

  return (
    <ul>
      {reviews.length=0 && (<p>We don't have any reviews for this movie</p>)}
      {reviews.map(review => (
        <li key={review.author}>
          Author: {review.author}
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
