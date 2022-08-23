const API_KEY = 'fadee9dfff8cb6b1bff36771479589d6';

export const getTrendingMovies = () =>
  fetch(`
https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`).then(r =>
    r.json()
  );

export const getMoviesBySearchQuery = query =>
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  ).then(r => r.json());

export const getMovieById = movieId =>
  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  ).then(r => r.json());

export const getMovieCast = movieId =>
  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  ).then(r => r.json());

export const getMovieReviews = movieId =>
  fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  ).then(r => r.json());
