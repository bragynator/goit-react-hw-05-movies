import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/moviesApi';
import styles from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) => setMovieReviews(results));
  }, [movieId]);

  return (
    <>
      <h3>Reviews</h3>
      <ul className={styles.reviewsList}>
        {movieReviews.length !== 0 ? (
          movieReviews.map(({ author, content, id }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>There are no reviews!</p>
        )}
      </ul>
    </>
  );
}
