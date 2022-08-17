import { useState, useEffect } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';

const API_KEY = 'fadee9dfff8cb6b1bff36771479589d6';

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`)
      .then(r => r.json())
      .then(setMovie);
  }, [movieId]);

  const { title, poster_path, overview, tagline } = movie;

  return (
    <div>
      <Link to={backLinkHref}>Back</Link>
      <h2>MovieDetails</h2>
      {title && <h3>{title}</h3>}
      {poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
          alt={tagline}
        />
      )}
      {overview && <p>{overview}</p>}
      <ul>
        <li>
          <Link to="cast" state={{ from: backLinkHref }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: backLinkHref }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
