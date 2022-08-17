import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = 'fadee9dfff8cb6b1bff36771479589d6';

export function Reviews() {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
    )
      .then(r => r.json())
      .then(({ results }) => setMovieReviews(results));
  }, [movieId]);

  return (
    <div>
      <h4>Reviews</h4>
      <ul>
        {movieReviews.length !== 0 ? (
          movieReviews.map(({ author, content }) => (
            <li>
              <h4>{author}</h4>
              <p>{content}</p>
            </li>
          ))
        ) : (
          <p>There are no reviews!</p>
        )}
      </ul>
    </div>
  );
}
