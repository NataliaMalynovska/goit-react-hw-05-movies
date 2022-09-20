import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../services/api';
import { Box } from 'components/Box';
import { Item, Author, ReviewContent } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchReviews() {
      try {
        const ReviewsInfo = await fetchMovieReviews(movieId);
        setReviews(ReviewsInfo);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews();
  }, [movieId]);

  return (
    <>
      <Box mt="16px" mb="26px">
        {reviews.length > 0 ? (
          reviews.map(({ author, content, id }) => (
            <Item key={id}>
              <Author> {author}</Author>
              <ReviewContent>{content}</ReviewContent>
            </Item>
          ))
        ) : (
          <p>There are no reviews at this movie</p>
        )}
      </Box>
    </>
  );
};
export default Reviews;
