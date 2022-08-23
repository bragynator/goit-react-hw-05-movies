import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'services/moviesApi';
import { CastItem } from '../Castitem/CastItem';
import styles from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    getMovieCast(movieId).then(({ cast }) => setMovieCast(cast));
  }, [movieId]);

  return (
    <>
      <h3>Cast</h3>
      {movieCast.length !== 0 ? (
        <ul className={styles.castList}>
          {movieCast
            .filter(({ popularity, profile_path }, idx, arr) =>
              arr.length > 15 ? popularity > 5 : profile_path
            )
            .map(movieCastItem => (
              <CastItem key={movieCastItem.credit_id} data={movieCastItem} />
            ))}
        </ul>
      ) : (
        <p>We don't have any info about its cast, sorry!</p>
      )}
    </>
  );
}
