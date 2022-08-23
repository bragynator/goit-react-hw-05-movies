import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Spinner } from 'components/Spinner';
import { getMoviesBySearchQuery } from 'services/moviesApi';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    searchParams.get('query') && setQuery(searchParams.get('query'));
  }, [searchParams]);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      getMoviesBySearchQuery(query)
        .then(({ results }) => {
          if (results.length === 0) {
            toast.error(`We didn't find anything! Please, check your request!`);
            return;
          }

          setSearchParams({ query });
          setMovies(results);
        })
        .finally(() => setIsLoading(false));
    }
  }, [query, setSearchParams]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.elements.query.value.trim();

    if (query === '') {
      toast.warn('Your request is empty! Enter something!');
      e.currentTarget.reset();
      return;
    }

    setQuery(query);
    e.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          placeholder="Enter the search request"
          autoComplete="off"
        />
        <button type="submit" disabled={isLoading}>
          Search
        </button>
      </form>

      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
}
