import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function getMovies() {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
    </>
  );
};
export default Home;
