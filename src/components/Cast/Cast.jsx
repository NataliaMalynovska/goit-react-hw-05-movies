import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'services/api';
import { Box } from '../Box';
import { IMG_PATH, CAST_IMG } from '../Constant/Constant.jsx';
import { Container, CastWrapper, CastImg, CastName } from './Cast.styled';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchCast() {
      try {
        const castInfo = await fetchMovieCast(movieId);
        setCast(castInfo);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCast();
  }, [movieId]);

  return (
    <>
      <Box mt="16px" mb="26px">
        <Container>
          {cast.length > 0 ? (
            cast.slice(0, 10).map(({ id, name, character, profile_path }) => {
              return (
                <li key={id}>
                  <CastWrapper>
                    <CastImg
                      src={profile_path ? IMG_PATH + profile_path : CAST_IMG}
                      alt={name}
                    />
                    <CastName>{name}</CastName>
                    <span>
                      Character: {character ? character : 'No information'}
                    </span>
                  </CastWrapper>
                </li>
              );
            })
          ) : (
            <p>There are no cast at this movie</p>
          )}
        </Container>
      </Box>{' '}
    </>
  );
};
export default Cast;
