import axios from 'axios';
// import { toast } from 'react-toastify';
import { API_KEY } from '../components/Constant/Constant';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSearchMovies = async query => {
  try {
    const response = await axios.get('search/movie', {
      params: {
        api_key: API_KEY,
        query: query,
        language: 'en - US',
        page: 1,
        include_adult: false,
      },
    });

    // const total = response.data.total_results;
    // if (total === 0) {
    //     toast.error(
    //       'Sorry, there are no movies matching your search query. Please try again.'
    //     );
    //       }
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieById = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response.data.cast;
  } catch (error) {
    console.log(error);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};
export const fetchMovieTrailer = async movieId => {
  try {
    const response = await axios.get(
      `movie/${movieId}/videos?api_key=${API_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
