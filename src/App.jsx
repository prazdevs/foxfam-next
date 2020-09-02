import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/header/Header';
import Routes from './Routes';
import Container from './components/ui/Container';
import UserProvider from './providers/UserProvider';
import ThemeProvider from './providers/ThemeProvider';

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Header />
          <Container>
            <Routes />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
