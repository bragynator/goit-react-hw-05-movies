import PropTypes from 'prop-types';

export function CastItem({ data }) {
  const { name, character, profile_path } = data;

  return (
    <li>
      <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt={name} />
      <h4>{name}</h4>
      {character && <p>Character: {character}</p>}
    </li>
  );
}

CastItem.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    character: PropTypes.string,
    profile_path: PropTypes.string.isRequired,
  }),
};
