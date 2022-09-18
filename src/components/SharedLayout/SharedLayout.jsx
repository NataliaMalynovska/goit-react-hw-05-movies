import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { Container, Header, Link } from './SharedLayout.styled';

export const SharedLayout = () => {
  const location = useLocation();
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" state={{ from: location }}>
            Home
          </Link>
          <Link to="/movies" state={{ from: location }}>
            Movies
          </Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

// import { Header, Navigation, Link } from './SharedLayout.styled';
