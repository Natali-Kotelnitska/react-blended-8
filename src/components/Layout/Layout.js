import { Outlet } from 'react-router-dom';
import { Container } from 'components/Container/Container';
import { Appbar } from 'components/Appbar/AppBar';

export const Layout = () => {
  return (
    <>
      <Container>
        <Appbar />
        <Outlet />
      </Container>
    </>
  );
};
