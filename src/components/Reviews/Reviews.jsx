import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'api/getMovies';
import { List, Text } from './Reviews.styled';

export default function Reviews() {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    getMovieReviews(id)
      .then(data => {
        if (!data) {
          return;
        }
        setReviews(data.results);
      })
      .catch(error => {
        setError(error);
      });
  }, [id]);

  return (
    <div>
      {reviews.length ? (
        <ul>
          {reviews.map(review => (
            <List key={review.author}>
              Author: {review.author}
              <Text>{review.content}</Text>
            </List>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
      {error && <p>Oops, something goes wrong</p>}
    </div>
  );
}
