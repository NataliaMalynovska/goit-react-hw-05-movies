import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieTrailer } from 'services/api';
import { Box } from '../Box';
import { Container } from './Trailer.styled';

// const URL = `https://www.themoviedb.org/`;
export const Trailer = () => {
  const [video, setVideos] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchTrailer() {
      try {
        const Videos = await fetchMovieTrailer(movieId);
        setVideos(Videos);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTrailer();
  }, [movieId]);

  return (
    <Box mt="16px" mb="26px">
      <Container>
        {video.length > 0 ? (
          video.slice(0, 1).map(({ id, site, name, key }) => {
            return (
              <li key={id}>
                <p> Watch trailer</p>
                {/* https://www.youtube.com/watch?v=_8WFzt_tKAA */}
                <a
                  href="https://www.youtube.com/watch?v?key={key}"
                  // data-site={site}
                  // data-id={key}
                  // data-title={name}
                >
                  {/*  */}
                  {/* <div class="play_background">
                  <span class="glyphicons_v2 play invert svg"></span>
                </div> */}
                </a>
              </li>
            );
          })
        ) : (
          <p>There are no cast at this movie</p>
        )}
      </Container>
    </Box>
  );
};
