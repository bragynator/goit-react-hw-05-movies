import PropTypes from 'prop-types';

export function MovieCard({ movie }) {
  const { title, poster_path, overview, tagline, vote_average, release_date } =
    movie;
  const userScore = Math.round(vote_average * 10);
  const releaseYear = new Date(release_date).getFullYear();

  return (
    <>
      <h2>{title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w400/${poster_path}`}
        alt={tagline && title}
      />
      <p>Year: {releaseYear}</p>
      <p>User score: {userScore}%</p>
      <p>OVERVIEW</p>
      {overview && <p>{overview}</p>}
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
