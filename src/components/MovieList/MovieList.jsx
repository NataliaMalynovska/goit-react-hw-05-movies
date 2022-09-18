import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box } from '../Box';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { List, Item } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <Box>
      <List>
        {movies.map(movie => {
          return (
            <Item key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                <MovieCard movie={movie} />
              </Link>
            </Item>
          );
        })}
      </List>
    </Box>
  );
};
MovieList.protoTypes = {
  movies: PropTypes.array.isRequired,
};
