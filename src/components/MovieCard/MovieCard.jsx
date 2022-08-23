import PropTypes from 'prop-types';
import styles from './MovieCard.module.css';

export function MovieCard({ movie }) {
  const { title, poster_path, overview, tagline, vote_average, release_date } =
    movie;
  const userScore = Math.round(vote_average * 10);
  const releaseYear = new Date(release_date).getFullYear();

  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
          alt={tagline && title}
        />
        <div className={styles.infoWrapper}>
          <p>Year: {releaseYear}</p>
          <p>User score: {userScore}%</p>
          <p>OVERVIEW:</p>
          <p>{overview}</p>
        </div>
      </div>
    </>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    overview: PropTypes.string,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    release_date: PropTypes.string,
  }),
};
