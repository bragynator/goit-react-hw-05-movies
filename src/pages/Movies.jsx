import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const API_KEY = 'fadee9dfff8cb6b1bff36771479589d6';

export function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    searchParams.get('query') && setQuery(searchParams.get('query'));
  }, [searchParams]);

  useEffect(() => {
    if (query) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      )
        .then(r => r.json())
        .then(({ results }) => setMovies(results));
    }
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setQuery(e.currentTarget.elements.query.value);
    setSearchParams({ query: e.currentTarget.elements.query.value });
    e.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Enter the movie's title"
          autoComplete="off"
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {movies.length !== 0 &&
          movies.map(({ id, title }) => {
            return (
              <li key={id}>
                <Link to={`/movies/${id}`} state={{ from: location }}>
                  {title}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
