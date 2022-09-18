import { Outlet, useParams, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import { fetchMovieById } from 'services/api';
import { BackLink } from 'components/BackLink/BackLink';
import { HiArrowLeft } from 'react-icons/hi';
import Loader from 'components/Loader/Loader';
import { Box } from 'components/Box';
import { IMG_PATH, DEFAULT_IMG } from '../../components/Constant/Constant';
import {
  StyledLink,
  MovieTitle,
  Container,
  ContainerInfo,
  InfoTitle,
  InfoContent,
  MovieImg,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movie';
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async function getMovie() {
      try {
        const credits = await fetchMovieById(movieId);
        setMovie(credits);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [movieId]);

  return (
    <>
      {movie && (
        <Box as="main">
          <BackLink to={backLinkHref}>
            <HiArrowLeft size="18" /> Go back
          </BackLink>
          <Container>
            <MovieImg
              src={
                movie.poster_path ? IMG_PATH + movie.poster_path : DEFAULT_IMG
              }
              alt={movie.title}
            />
            <ContainerInfo>
              <MovieTitle>
                {movie.title}
                <span> ({movie.release_date.slice(0, 4)})</span>
              </MovieTitle>

              <InfoContent>
                User score: {((movie.vote_average * 100) / 10).toFixed(0)}
              </InfoContent>
              <InfoTitle>Overwiew</InfoTitle>
              <p>{movie.overview ? movie.overview : 'No information'}</p>
              <InfoTitle>Genres</InfoTitle>
              <p>
                {movie.genres.length > 0
                  ? movie.genres.map(({ name }) => name).join(', ')
                  : 'No information'}
              </p>
            </ContainerInfo>
          </Container>
          <Container>
            <InfoTitle>Additional information</InfoTitle>
            {/* <StyledLink to="videos" state={{ from: backLinkHref }}>
              Trailer
            </StyledLink> */}
            <StyledLink to="credit" state={{ from: backLinkHref }}>
              Cast
            </StyledLink>
            <StyledLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </StyledLink>
          </Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Box>
      )}
    </>
  );
};
export default MovieDetails;
