import PropTypes from 'prop-types';
import { IMG_PATH, DEFAULT_IMG } from '../Constant/Constant.jsx';
import {
  CardImageMovie,
  CardInfoMovie,
  CardTitleMovie,
  CardRatingMovie,
} from './MovieCard.styled';

export const MovieCard = ({
  movie: { title, poster_path, vote_average: rating },
}) => {
  return (
    <>
      <CardImageMovie
        src={poster_path ? IMG_PATH + poster_path : DEFAULT_IMG}
        alt={title}
      />
      <CardInfoMovie>
        <CardTitleMovie>{title}</CardTitleMovie>
        <p>
          {' '}
          Rating:
          <CardRatingMovie> {rating.toFixed(2)}</CardRatingMovie>
        </p>
      </CardInfoMovie>
    </>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
    vote_average: PropTypes.number,
  }).isRequired,
};
