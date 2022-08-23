import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/moviesApi';
import { MovieCard } from 'components/MovieCard';
import { Spinner } from 'components/Spinner';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieById(movieId).then(setMovie);
  }, [movieId]);

  return (
    <>
      <Link to={backLinkHref}>Back</Link>
      {Object.keys(movie).length !== 0 && (
        <>
          <MovieCard movie={movie} />
          <p>Additional Information</p>
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
        </>
      )}

      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
}
