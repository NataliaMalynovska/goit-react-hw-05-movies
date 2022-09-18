import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchSearchMovies } from 'services/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Searchbar } from 'components/Searchbar/Searchbar ';
import Loader from 'components/Loader/Loader';
import { Box } from 'components/Box';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (movieName !== '') {
      async function getMovies() {
        try {
          setStatus('pending');
          const searchMovies = await fetchSearchMovies(movieName);
          setMovies(searchMovies);
          setStatus('resolved');
        } catch (error) {
          setStatus('rejected');
        }
      }
      getMovies();
    }
  }, [movieName]);

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getMovies() {
      try {
        setStatus('pending');
        const searchMovies = await fetchSearchMovies(movieName);
        setMovies(searchMovies);
        setStatus('resolved');
      } catch (error) {
        setStatus('rejected');
      }
    }
    getMovies();
  }, [movieName, query]);
  const handleFormSubmit = query => {
    setQuery(query);
    setStatus('idle');
    updateQueryString(query);
  };
  return (
    <Box as="main">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Searchbar onSubmit={handleFormSubmit} />
      {movies.length > 0 && <MovieList movies={movies} />}
      {status === 'pending' && <Loader />}
    </Box>
  );
};
export default Movies;
