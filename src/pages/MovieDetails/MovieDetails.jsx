import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieById } from 'services/moviesApi';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { Spinner } from 'components/Spinner/Spinner';
import styles from './MovieDetails.module.css';

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
      <Link to={backLinkHref} className={styles.backLink}>
        Back
      </Link>
      {Object.keys(movie).length !== 0 && (
        <>
          <MovieCard movie={movie} />
          <h4>Additional Information</h4>
          <ul className={styles.addInfoList}>
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
