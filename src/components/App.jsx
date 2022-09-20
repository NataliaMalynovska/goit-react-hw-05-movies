import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { GlobalStyle } from './GlobalStyle';
import { lazy, Suspense } from 'react';

import Loader from './Loader/Loader';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));
const Trailer = lazy(() => import('components/Trailer'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense fullback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="movies" element={<Movies />}></Route>

            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="videos" element={<Trailer />}></Route>
              <Route path="credit" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
            {/* <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
