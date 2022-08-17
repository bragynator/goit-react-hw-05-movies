import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = 'fadee9dfff8cb6b1bff36771479589d6';

export function Cast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
    )
      .then(r => r.json())
      .then(({ cast }) => setMovieCast(cast));
  }, [movieId]);

  return (
    <div>
      <h4>Cast</h4>
      <ul>
        {movieCast.map(({ name }) => (
          <li>{name}</li>
        ))}
      </ul>
    </div>
  );
}
