import axios from 'axios';
import { toast } from 'react-toastify';


// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTQzNzI2MzM5YzQyMzZmYjA4NTRhNWVmN2UyMjhjOCIsInN1YiI6IjYzMjJkMTNjMjk3MzM4MDA3YmI4NmRkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CtZ6ogsqYjNi9gRNm8OUu5kac4t9pMfORY40l8JjSXs
// https://api.themoviedb.org/3/movie/550?api_key=9a43726339c4236fb0854a5ef7e228c8

export const fetchPhotos = async (query, page) => {
  try {
    axios.defaults.baseURL = `https://api.themoviedb.org/`;
    const API_KEY = '9a43726339c4236fb0854a5ef7e228c8';
    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    });
    const response = await axios.get(`/?${searchParams}`);
    const responseTotalHits = response.data.totalHits;

    if (responseTotalHits === 0) {
      toast.error(
        'Sorry, there are no images matching your search query. Please try again.'
      );
      return;
    }
    if (responseTotalHits <= 12) {
      toast.info(
        `Sorry, there are only ${responseTotalHits} images for your search`
      );
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
