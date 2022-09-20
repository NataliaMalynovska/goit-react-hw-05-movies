import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieTrailer } from 'services/api';
import { Box } from '../Box';
import { Container,TrailertName, TrailerdWrapper,TrailerData } from './Trailer.styled';

// const URL = `https://www.themoviedb.org/`;
const Trailer = () => {
  const [videos, setVideos] = useState([]);
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
  console.log(videos);

  return (
    <Box mt="16px" mb="26px">
      <Container>
        {videos.length > 0 ? (
          videos.slice(0, 3).map(({ id, published_at, name, key }) => {
            return (
              <li key={id}>
                <TrailertName> {name}</TrailertName>
                <TrailerData>published at: {published_at.slice(0, 10)}</TrailerData>

                <TrailerdWrapper
                  width="560"
                  height="315"
                  src={'https://www.youtube.com/embed/' + key}
                  title="YouTube video player"
                  allowfullscreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox
                ></TrailerdWrapper>

                {/* https://www.youtube.com/watch?v=_8WFzt_tKAA
                <a
                  href="https://www.youtube.com/watch?v?key={key}"
                  data-site={site}
                  data-id={key}
                  data-title={name}
                >
                   <div class="play_background">
                  <span class="glyphicons_v2 play invert svg"></span>
                </div>
                </a> */}
              </li>
            );
          })
        ) : (
          <p>There are no videos at this movie</p>
        )}
      </Container>
    </Box>
  );
};
export default Trailer;
