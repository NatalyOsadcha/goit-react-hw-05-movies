import PropTypes from 'prop-types';
export {
  getTrendingMovie,
  getMovieByKeyWord,
  getMovieDetails,
  getMovieCast,
  getMovieReviews,
};

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'dd2eacab57962d131eb2537d52aeafc3';

function getTrendingMovie() {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${API_KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    }
  );
}

function getMovieByKeyWord(search) {
  return fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${search}&include_adult=false`
  ).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}

function getMovieDetails(id) {
  return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}`).then(response => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });
}

function getMovieCast(id) {
  return fetch(`${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    }
  );
}

function getMovieReviews(id) {
  return fetch(`${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error();
      }
      return response.json();
    }
  );
}

getMovieByKeyWord.propTypes = {
  search: PropTypes.string.isRequired,
};

getMovieDetails.propTypes = {
  id: PropTypes.number.isRequired,
};

getMovieCast.propTypes = {
  id: PropTypes.number.isRequired,
};

getMovieReviews.propTypes = {
  id: PropTypes.number.isRequired,
};
