import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const API_KEY = 'fadee9dfff8cb6b1bff36771479589d6';

export function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetch(`
    https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
      .then(r => r.json())
      .then(({ results }) => {
        setMovies(results);
      });
  }, []);

  return (
    <div>
      <h2>Trending movies</h2>
      <ul>
        {movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
