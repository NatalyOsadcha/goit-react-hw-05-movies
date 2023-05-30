import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StyledLink, Header, Container, Nav } from './Layout.styled';

export default function Layout() {
  return (
    <Container>
      <Header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </Nav>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}
